const bcrypt = require('bcrypt');

//authorization fixed. register, login, logout working

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db');
        const {first_name, last_name, email, password, profile_pic} = req.body;

        let foundUser = await db.user.check_user([email]);

        if(foundUser[0]){
            res.status(400).send('user already exists');
        } else {
            const salt = bcrypt.genSaltSync(10);
            const hash =  bcrypt.hashSync(password, salt);

            const registerUser = await  db.user.register(first_name, last_name, email, hash, profile_pic);
            req.session.user = registerUser[0];
            res.status(200).send(registerUser[0]);
        }
    },

    login: async (req, res) => {
        const db = req.app.get('db');
        const {email, password} = req.body 

        let user = await db.user.check_user(email);
        user = user[0];
        if(!user){
            return res.status(400).send(`user object undefined`)
        } else {
            const authenticated = bcrypt.compareSync(password, user.password);
            if(!authenticated){
                return res.status(401).send(`not authenticated`)
            }
            delete user.password;
            req.session.user = user
            console.log(req.session.user)
            res.status(202).send(req.session.user);
        }
    },

    logout: async (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    },

    getUser: async (req, res) => {
        if ( req.session.user ) {
            res.status(200).send(req.session.user)
        } else {
            res.sendStatus(400)
        }
    }
}