const Joi = require("joi");

const createProductSchema = Joi.object({
  nama: Joi.string().required(),
  harga: Joi.number().precision(2).required(),
  gambar: Joi.string().required(),
});

const updateProductSchema = Joi.object({
  nama: Joi.string(),
  harga: Joi.number().precision(2),
  gambar: Joi.string(),
});

module.exports = { createProductSchema, updateProductSchema };

