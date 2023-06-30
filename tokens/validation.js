const { validateToken } = require("./token");

const validateUser = (req, res, next) => {
  let cookie = req.cookies.token;
  let { payload } = validateToken(cookie);

  req.user = payload;

  if (payload) return next();
  res.sendStatus(401);
};

const validateFamilyAdmin = (req, res, next) => {
  if (!req.user.familyAdmin) return res.sendStatus(401);
  next();
};

module.exports = { validateUser, validateFamilyAdmin };
