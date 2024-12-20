
const Joi = require("joi");

const createKritikSaranSchema = Joi.object({
  id: Joi.number().required(),
  admin_id: Joi.number().required(),
  username: Joi.string().max(150).required(),
  email: Joi.string().email().max(30).required(),
  pesan: Joi.string().required(),
});

module.exports = createKritikSaranSchema;
