const isEmpty = require("lodash/isEmpty");

const profileService = require("../services/profile");
const validateProfileData = require("../utils/validation/profile");
const BaseResponse = require("../utils/BaseResponse");
const { BadRequest } = require("../utils/errors");

async function createProfile(req, res) {
  const { firstName, lastName, mobilePhone, location, preferNews } = req.body;

  const errors = await validateProfileData(firstName, lastName, mobilePhone, location, preferNews);

  if (!isEmpty(errors)) {
    throw new BadRequest("Profile validation failed", errors);
  }

  const profile = await profileService.createProfile(req.user.id, req.body);

  const baseResponse = new BaseResponse("Profile was successfully updated", 200, profile);
  res.status(baseResponse.statusCode).json(baseResponse);
}

module.exports = {
  createProfile
};
