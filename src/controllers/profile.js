const isEmpty = require("lodash/isEmpty");
const mongoose = require("mongoose");
const Profile = require("../database/models/Profile");

const { decodeToken } = require("../utils/jwt/index");
const validateProfileData = require("../utils/validation/profile");
const BaseResponse = require("../utils/BaseResponse");
const createUserProfile = require("../services/profile");

async function createProfile(req, res) {
  try {
    const { firstName, lastName, mobilePhone, location, preferNews } = req.body;
    const errors = await validateProfileData(firstName, lastName, mobilePhone, location, preferNews);

    if (!(Object.keys(errors).length === 0)) {
      return res.send(errors);
    }

    const profile = new Profile(createUserProfile(req, res));
    await profile.save();
    res.send(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
}

module.exports = createProfile;
