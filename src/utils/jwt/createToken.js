const jwt = require("jsonwebtoken");
const config = require("config");

const createToken = payload => {
  const token = jwt.sign(payload, config.get("jwtSecret"), { expiresIn: config.get("expiresIn") });
  return token;
};

module.exports = createToken;
