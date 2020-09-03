const Joi = require("@hapi/joi");

const userFirstNameSchema = Joi.string().min(2).max(50).required();
const userLastNameSchema = Joi.string().min(2).max(50).required();
const userMobilePhoneSchema = Joi.string().min(5);
const userLocationSchema = Joi.string().min(2);
const userPreferNewsSchema = Joi.array().items(Joi.string()).min(1);

const validateProfileData = (firstName, lastName, mobilePhone, location, preferNews) => {
  const errors = {};

  const userFirstNameValidate = userFirstNameSchema.validate(firstName);
  const userLastNameValidate = userLastNameSchema.validate(lastName);
  const userMobilePhoneValidate = userMobilePhoneSchema.validate(mobilePhone);
  const userLocationValidate = userLocationSchema.validate(location);
  const userPreferNewsValidate = userPreferNewsSchema.validate(preferNews.trim().split(","));

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

  return errors;
};

module.exports = validateProfileData;
