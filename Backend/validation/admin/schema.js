const Joi = require("joi");

exports.create = Joi.object().keys({
  username: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(20).required(),
  full_name: Joi.string().required(),
});

// schema untuk update 

exports.update = Joi.object().keys({
    username: Joi.string().min(3).max(50),
    email: Joi.string().email(),
    password: Joi.string().min(8).max(20),
    full_name: Joi.string(),
  });
