const isEmpty = require("lodash/isEmpty");

const authService = require("../services/auth");
const { validateRegisterData, validateLoginData } = require("../utils/validation/auth");

async function login(req, res, next) {}

async function register(req, res, next) {
  const { name, email, password } = req.body;

  const errors = validateRegisterData(name, email, password);

  if (!isEmpty(errors)) {
    return res.status(400).json(errors);
  }

  res.json({'msg': 'everything is okay'});

  // validateRegisterData
  // const token = await authService.register();
  // res.json(token);
}

module.exports = {
  login,
  register
};

// express
// app.use('/api/auth/register') => express-validator => register();
