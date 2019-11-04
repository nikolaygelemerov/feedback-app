module.exports = (req, res, next) => {
  // Passport tries to find a user that referenced inside the cookie included in the request
  if (req.user.credits < 1) {
    // Forbidden status code
    return res.status(403).send({ error: 'Not enough credits!' });
  }

  next();
};
