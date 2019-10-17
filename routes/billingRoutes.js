const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    try {
      const charge = await stripe.charges.create({
        amount: 500,
        currency: 'usd',
        description: '$5 for 5 credits',
        source: req.body.id // charge autorization token received from stripe
      });

      req.user.credits += 5;
      const user = await req.user.save(); // get the updated user from the db

      res.send(user); // send the updated user to the client
    } catch (error) {
      console.error(error);
    }
  });
};
