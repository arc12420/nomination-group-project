require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const app = express();

const nodemailer = require('nodemailer');
const {
  CONNECTION_STRING,
  SERVER_PORT,
  SESSION_SECRET,
  NODEMAILER_USER,
  NODEMAILER_PASSWORD
} = process.env;

//CONTROLLERS
//auth
const authCtrl = require("./authControllers");
const paymentCtrl = require("./paymentController");
const postCtrl = require("./postControllers");

app.use(express.json());

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 48 },
    secret: SESSION_SECRET,
  })
);

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
}).then((db) => {
  app.set("db", db);
  app.set('transporter', transporter)
  console.log(`Database is connected.`);
});


// Contact Email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: NODEMAILER_USER,
    pass: NODEMAILER_PASSWORD
  }
});

app.post('/access', (req, res, next) => {
  const mailOptions = {
    from: req.body.contactEmail,
    to: NODEMAILER_USER,
    subject: "Support",
    text: req.body.message,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.sendStatus(500)
      return console.log(error);
    } else {
      res.status(200).send('success');
    }
    console.log("Email sent successfully!");
  });
})


//ENDPOINTS
//auth
app.post(`/auth/register`, authCtrl.register);
app.post(`/auth/login`, authCtrl.login);
app.post(`/auth/logout`, authCtrl.logout);
app.get(`/auth/user`, authCtrl.getUser);
//volunteer project
app.get("/api/volunteer", postCtrl.getVolunteerProjects);
//donations
app.get("/api/donations", postCtrl.getDonationsProjects);
app.get("/api/donations/total", postCtrl.getDonationsTotals);
//nominations
app.post(`/api/nominate`, postCtrl.nominate);
app.get('/api/nominations', postCtrl.getNominations)
app.put('/api/status', postCtrl.changeStatus)
app.post("/api/payment", paymentCtrl.chargeCustomer);
//My Account
app.get(`/api/userNominations/:user_id`, postCtrl.getUserNominations);
app.get(`/api/userDonations/:user_id`, postCtrl.getUserDonations);

app.listen(SERVER_PORT, () =>
console.log(`You are connected to port ${SERVER_PORT}.`)
);
