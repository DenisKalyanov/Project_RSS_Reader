const configureProfile = (id, profileData) => {
  console.log(profileData);
  const {
    firstName,
    lastName,
    mobilePhone,
    location,
    preferNews,
    youtube,
    twitter,
    facebook,
    linkedin,
    instagram,
    vk
  } = profileData;

  const profileFields = {};
  profileFields.user = id;
  if (firstName) profileFields.firstName = firstName;
  if (lastName) profileFields.lastName = lastName;
  if (mobilePhone) profileFields.mobilePhone = mobilePhone;
  if (location) profileFields.location = location;
  if (preferNews) {
    profileFields.preferNews = preferNews.split(",").map((prefer) => prefer.trim());
  }

  profileFields.social = {};
  if (youtube) profileFields.social.youtube = youtube.trim();
  if (twitter) profileFields.social.twitter = twitter.trim();
  if (facebook) profileFields.social.facebook = facebook.trim();
  if (linkedin) profileFields.social.linkedin = linkedin.trim();
  if (instagram) profileFields.social.instagram = instagram.trim();
  if (vk) profileFields.social.vk = vk.trim();

  return profileFields;
};

module.exports = {
  configureProfile
};
