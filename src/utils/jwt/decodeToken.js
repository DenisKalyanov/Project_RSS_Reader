const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
  const token = req.headers.cookie;

  if (!token) {
    return res.status(401).json({ msg: "No token, authrolizatoin denied" });
  }
  try {
    const decoded = jwt.verify(token.slice(6), config.get("jwtSecret"));

    req.user = decoded.user;
    return req.user.id;
    // next() нужно ли использовать и для чего?
  } catch (err) {
    return res.status(401).json({ msg: "Token is not valid" });
  }
};
