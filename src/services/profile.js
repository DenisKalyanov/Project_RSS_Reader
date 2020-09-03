const Profile = require("../database/models/Profile");
const { decodeToken } = require("../utils/jwt/index");

function createUserProfile(req, res) {
  const profileFields = {};
  profileFields.user = decodeToken(req, res);
  const { firstName, lastName, mobilePhone, location, preferNews } = req.body;
  if (firstName) profileFields.firstName = firstName;
  if (lastName) profileFields.lastName = lastName;
  if (mobilePhone) profileFields.mobilePhone = mobilePhone;
  if (location) profileFields.location = location;
  if (preferNews) {
    profileFields.preferNews = preferNews.split(",").map((news) => news.trim());
  }
  return profileFields;
}

module.exports = createUserProfile;
