const isEmpty = require("lodash/isEmpty");
const mongoose = require("mongoose");

const { decodeToken } = require("../utils/jwt/index");
const validateProfileData = require("../utils/validation/profile");
const BaseResponse = require("../utils/BaseResponse");

async function createProfile(req, res) {
  const { firstName, lastName, mobilePhone, location, preferNews } = req.body;
  const errors = await validateProfileData(firstName, lastName, mobilePhone, location, preferNews);
  console.log(errors);
  decodeToken(req, res);
  console.log(req.user);
}

module.exports = createProfile;
