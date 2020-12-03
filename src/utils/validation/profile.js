const Joi = require("@hapi/joi");

const userFirstNameSchema = Joi.string().min(2).max(50).required();
const userLastNameSchema = Joi.string().min(2).max(50).required();
const userMobilePhoneSchema = Joi.string().min(5);
const userLocationSchema = Joi.string().min(2);
const userPreferNewsSchema = Joi.array().items(Joi.string()).min(1);
// const userSocialSchema = Joi.string().uri();

const validateProfileData = (
  firstName,
  lastName,
  mobilePhone,
  location,
  preferNews
  // youtube,
  // twitter,
  // facebook,
  // linkedin,
  // instagram,
  // vk
) => {
  const errors = {};

  const userFirstNameValidate = userFirstNameSchema.validate(firstName);
  const userLastNameValidate = userLastNameSchema.validate(lastName);
  const userMobilePhoneValidate = userMobilePhoneSchema.validate(mobilePhone);
  const userLocationValidate = userLocationSchema.validate(location);
  const userPreferNewsValidate = userPreferNewsSchema.validate(preferNews.split(","));
  // const userYoutubeValidate = userSocialSchema.validate(youtube);
  // const userTwitterValidate = userSocialSchema.validate(twitter);
  // const userFacebookValidate = userSocialSchema.validate(facebook);
  // const userLinkedinValidate = userSocialSchema.validate(linkedin);
  // const userInstagramValidate = userSocialSchema.validate(instagram);
  // const userVkValidate = userSocialSchema.validate(vk);

  if (userFirstNameValidate.error) {
    errors.firstName = userFirstNameValidate.error.details[0].message.replace('"value"', "firstName");
  }

  if (userLastNameValidate.error) {
    errors.lastName = userLastNameValidate.error.details[0].message.replace('"value"', "lastName");
  }

  if (userMobilePhoneValidate.error) {
    errors.mobilePhone = userMobilePhoneValidate.error.details[0].message.replace('"value"', "mobilePhone");
  }
  if (userLocationValidate.error) {
    errors.location = userLocationValidate.error.details[0].message.replace('"value"', "location");
  }
  if (userPreferNewsValidate.error) {
    errors.preferNews = userPreferNewsValidate.error.details[0].message.replace('"value"', "preferNews");
  }

  // if (userYoutubeValidate.error) {
  //   errors.youtube = userYoutubeValidate.error.details[0].message.replace('"value"', "preferNews");
  // }
  // if (userTwitterValidate.error) {
  //   errors.twitter = userTwitterValidate.error.details[0].message.replace('"value"', "preferNews");
  // }

  // if (userFacebookValidate.error) {
  //   errors.facebook = userFacebookValidate.error.details[0].message.replace('"value"', "preferNews");
  // }

  // if (userLinkedinValidate.error) {
  //   errors.linkedin = userLinkedinValidate.error.details[0].message.replace('"value"', "preferNews");
  // }

  // if (userInstagramValidate.error) {
  //   errors.vk = userInstagramValidate.error.details[0].message.replace('"value"', "preferNews");
  // }
  // if (userVkValidate.error) {
  //   errors.vk = userVkValidate.error.details[0].message.replace('"value"', "preferNews");
  // }

  return errors;
};

module.exports = validateProfileData;
