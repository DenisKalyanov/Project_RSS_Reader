const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcryptjs");

const User = require("../database/models/User");
const { AlreadyExists } = require("../utils/errors");
const { hashPassword, createToken } = require("../utils/jwt/index");

async function login(req, res, next) {}

async function register({ name, email, password }) {
  let user = await User.findOne({ email });

  if (user) {
    throw new AlreadyExists("User already exists");
  }

  user = new User({ name, email, password });

  user.password = await hashPassword(password);
  user.save();

  const payload = {
    user: {
      id: user.id
    }
  };

  const token = createToken(payload);

  return token;
}

module.exports = {
  login,
  register
};
