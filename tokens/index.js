const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const generateToken = (payload) => {
  const token = jwt.sign({ payload }, SECRET, {
    expiresIn: "24h",
  });

  return token;
}

const validateToken = (token) => {
  return jwt.verify(token, SECRET);
}

module.exports = { generateToken, validateToken };
