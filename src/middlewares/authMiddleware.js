const jwt = require("jsonwebtoken");
const config = require("config");

const { Unauthorized } = require("../utils/errors");

const authMiddleware = (req, res, next) => {
  if (!req.cookies.token) {
    throw new Unauthorized();
  }

  try {
    const { user } = jwt.verify(req.cookies.token, config.get("jwtSecret"));
    req.user = user;

    next();
  } catch (err) {
    throw new Unauthorized("Token is not valid");
  }
};

module.exports = authMiddleware;
