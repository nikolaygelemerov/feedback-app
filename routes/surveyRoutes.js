const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  // We can pass endles number of middleware functions before
  // req, res handler is executed
  app.post('/api/surveys', requireLogin, (req, res) => {});
};
