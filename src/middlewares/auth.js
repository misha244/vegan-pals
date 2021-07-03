const auth = (req, res, next) => {
  if (req.session.loggedIn) {
    next();
  } else {
    res.render("/login");
  }
};

module.exports = auth;
