const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/email-templates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
  app.get('/api/surveys/thanks', (req, res) => {
    res.send('Thanks for voting!');
  });

  // We can pass endles number of middleware functions before
  // req, res handler is executed.
  // Pass the middleware handlers in the order we want them
  // to be executed.
  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });

    // Build a mailer that has to be sent.
    const mailer = new Mailer(survey, surveyTemplate(survey));

    try {
      // Await mailer complete sending.
      await mailer.send();

      // Save survey in db.
      await survey.save();

      // Decrement user credits by one.
      req.user.credits -= 1;
      // Get updated user from db.
      const user = await req.user.save();

      res.send(user);
    } catch (error) {
      res.status(422).send(error);
    }
  });
};
