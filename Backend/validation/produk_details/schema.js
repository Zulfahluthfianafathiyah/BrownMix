const Joi = require("joi");
const { put } = require("../../api/routes/productroutes");

const createProductDetailSchema = Joi.object({
  produk_id: Joi.number().required(),
  admin_id: Joi.number().required(),
  varian_rasa: Joi.string().required(),
  bentuk: Joi.string().required(),
  deskripsi: Joi.string().required(),
});

module.exports = { createProductDetailSchema, updateProductDetailSchema, };
