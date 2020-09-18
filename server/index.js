require('dotenv').config()
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const app = express();
const {
    CONNECTION_STRING,
    SERVER_PORT,
    SESSION_SECRET
} = process.env;

//CONTROLLERS
//auth
const authCtrl = require('./authControllers');
const postCtrl = require('./postControllers');

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
    console.log(`Database is connected.`);
  });

  //ENDPOINTS
  //auth
  app.post(`/auth/register`, authCtrl.register)
  app.post(`/auth/login`, authCtrl.login)
  app.post(`/auth/logout`, authCtrl.logout)
  app.get(`/auth/user`, authCtrl.getUser)
  //volunteer project
  app.get('/api/volunteer', postCtrl.getVolunteerProjects)
  //donations projects
  app.get('/api/donations', postCtrl.getDonationsProjects)
  //nominations
  app.post(`/api/nominate`, postCtrl.nominate)



  app.listen(SERVER_PORT, () =>
  console.log(`You are connected to port ${SERVER_PORT}.`)
);