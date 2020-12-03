const Profile = require("../database/models/Profile");

const { configureProfile } = require("../helpers/profile");

async function createProfile(user, profileData) {
  console.log(profileData);
  let profile = await Profile.findOne({ user });

  if (profile) {
    console.log("changed");
    profile = await Profile.findOneAndUpdate({ user }, { $set: configureProfile(user, profileData) }, { new: true });

    return profile;
  }
  console.log("new profile");
  profile = new Profile(configureProfile(user, profileData));

  await profile.save();

  return profile;
}

module.exports = {
  createProfile
};
