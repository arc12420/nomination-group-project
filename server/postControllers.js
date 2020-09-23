module.exports = {
    getVolunteerProjects: async (req, res) => {
        const db = req.app.get('db');
        const projects = await db.get_volunteer_projects();
        
        res.status(200).send(projects);
    },
    getDonationsProjects: async (req, res) => {
        const db = req.app.get('db');
        const projects = await db.get_donations_projects();
        
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
        const { id } = req.params;
        const getDonations = await db.get_donations(id);
        console.log(getDonations)
        res.status(200).send(getDonations)
      },
      getNominations: async (req, res) => {
          const db = req.app.get('db');
          const nominations = await db.get_nominations();
          
          res.status(200).send(nominations);
      },
      changeStatus: async (req, res) => {
          const db = req.app.get('db');
          const {nomination_id, status} = req.body;
          const newStatus = await db.change_status([nomination_id, status]);
          res.status(200).send(projects);
          
      },
  getDonationsProjects: async (req, res) => {
    const db = req.app.get("db");
    const projects = await db.get_donations_projects();

    res.status(200).send(projects);
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
    const db = req.app.get("db");
    const getDonations = await db.get_donations();
    console.log(getDonations);
    res.status(200).send(getDonations);
  },
  //--------------------My Account-------------------------

  getUserNominations: (req, res) => {
    const db = req.app.get("db");
    const { user_id } = req.params;

    db.get_user_nominations(user_id)
      .then((content) => res.status(200).send(content))
      .catch((err) => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!",
        });
        console.log(err);
      });
  },

  getUserDonations: (req, res) => {
    const db = req.app.get("db");
    const { user_id } = req.params;
    console.log(req.session.user);

    db.get_user_donations(user_id)
      .then((project_name, date, total) =>
        res.status(200).send(project_name, date, total)
      )
      .catch((err) => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!",
        });
        console.log(err);
      });
  },
};
