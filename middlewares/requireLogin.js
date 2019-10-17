module.exports = (req, res, next) => {
  // Passport tries to find a user that referenced inside the cookie included in the request
  if (!req.user) {
    return res.status(401).send({ error: 'You must log in!' });
  }

  next();
};
