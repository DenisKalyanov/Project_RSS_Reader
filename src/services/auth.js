const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcryptjs");

const User = require("../database/models/User");
const { AlreadyExists } = require("../utils/errors");
const { hashPassword, createToken } = require("../utils/jwt/index");
const { isLength } = require("lodash");

async function login({ email, password }) {
  const user = await User.findOne({ email });

  if (!user) {
    throw new AlreadyExists("Invalid credentials", 409);
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new AlreadyExists("Invalid credentials", 409);
  }

  const payload = {
    user: {
      id: user.id
    }
  };

  const token = createToken(payload);
  return token;
}

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
