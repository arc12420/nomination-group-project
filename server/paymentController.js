const {STRIPE_SECRET} = process.env;
const stripe = require('stripe')(STRIPE_SECRET);

module.exports = {
    chargeCustomer: async (req, res) => {
        try{
            const {amount, token} = req.body;
            const charge = await stripe.charges.create({
                amount: amount,
                currency: 'usd',
                source: token.id,
                description: 'Test Donation'
            })
        const db = req.app.get('db');
        const {user_id, project_id, date, project_name} = req.body;
        if (user_id === 0) {
           const payment = await db.userless_donations([project_id, amount, date, project_name]);
           res.status(200).send(payment); 
        } else {
            const payment = await db.donations([user_id, project_id, amount, date, project_name]);
            res.status(200).send(payment);
        }
        

        if (!charge) {
            throw new Error('unsuccessful charge')
        }
    
        }catch(error){
            console.log(error)
            res.status(500).send(error)
        }
    }
}