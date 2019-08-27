const passport = require('passport');

module.exports = app => {
  //"passport" handles comunication with google
  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );

  //pass controll to "passport" after google login
  //handles the code query param and sets it into the callback of new GoogleStrategy
  //in passports.js service
  app.get(
    '/auth/google/callback', //user comes back from oAuth flow from google
    passport.authenticate('google'), //handles new GoogleStrategy and flows to the next function handler to redirect
    (req, res) => {
      res.redirect('/surveys'); //tells the browser to redirect ot this route
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
