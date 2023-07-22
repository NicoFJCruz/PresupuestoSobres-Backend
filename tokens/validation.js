const { validateToken } = require("./index");

const validateUser = (req, res, next) => {
  let cookie = req.cookies.token;
  if (!cookie) res.sendStatus(401);

  let { payload } = validateToken(cookie);

  req.user = payload;

  if (payload) return next();
  res.sendStatus(401);
};

const validateFamilyAdmin = (req, res, next) => {
  if (!req.user.familyAdmin) return res.sendStatus(401);
  next();
};

const validateSuperAdmin = (req, res, next) => {
  if (!req.user.superAdmin) return res.sendStatus(401);
  next();
};

module.exports = { validateUser, validateFamilyAdmin, validateSuperAdmin };
