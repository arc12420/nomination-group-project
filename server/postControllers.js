module.exports = {
    getVolunteerProjects: async (req, res) => {
        const db = req.app.get('db');
        const projects = await db.get_volunteer_projects();
        
        res.status(200).send(projects);
    },
    getDonationsProjects: async (req, res) => {
        const db = req.app.get('db');
        const projects = await db.get_donations_projects();
        console.log(projects);
        res.status(200).send(projects)
    },
    nominate: (req, res) => {
        const dbInstance = req.app.get("db");
        console.log("body", req.body);
        // console.log("session", req.session.user);
        const { name, content } = req.body;
        const { user_id } = req.session.user;
        // console.log(name, content, user);
        
        dbInstance
        .post_nominate([user_id, name, content])
          .then(() => res.sendStatus(200))
          .catch((err) => {
            res.status(500).send({
              errorMessage:
                "Oops! Something went wrong. Our engineers have been informed!",
            });
            console.log(err);
          });
      },
      getDonationsTotals: async (req, res) => {
        const db = req.app.get('db');
        const getDonations = await db.get_donations();
        console.log(getDonations)
        res.status(200).send(getDonations)
      }

}