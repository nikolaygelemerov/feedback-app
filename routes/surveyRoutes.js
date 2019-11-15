const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/email-templates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
  // We can pass endles number of middleware functions before
  // req, res handler is executed.
  // Pass the middleware handlers in the order we want them
  // to be executed.
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
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
  });
};
