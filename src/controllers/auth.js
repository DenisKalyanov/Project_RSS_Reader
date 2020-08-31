const isEmpty = require("lodash/isEmpty");
const config = require("config");

const authService = require("../services/auth");
const { validateRegisterData, validateLoginData } = require("../utils/validation/auth");
const { BadRequest } = require("../utils/errors");
const BaseResponse = require("../utils/BaseResponse");

async function login(req, res, next) {
  const { email, password } = req.body;
}

async function register(req, res) {
  const { name, email, password } = req.body;

  const errors = validateRegisterData(name, email, password);

  if (!isEmpty(errors)) {
    throw new BadRequest("Register validation failed", errors);
  }

  const token = await authService.register({ name, email, password });

  const baseResponse = new BaseResponse("User successfully registered", 201);

  res.cookie("token", token, { maxAge: config.get("expiresIn"), httpOnly: true });
  res.status(baseResponse.statusCode).json(baseResponse);
}

module.exports = {
  login,
  register
};

// express
// app.use('/api/auth/register') => express-validator => register();
