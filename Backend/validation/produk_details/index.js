
const { createProductDetailSchema } = require("./schema");

const productDetailValidation = {
  validateCreatePayload: (payload) => {
    const validationResult = createProductDetailSchema.validate(payload);
    if (validationResult.error) {
      return {
        errors: validationResult.error.details.map((err) => err.message),
      };
    }
    return { errors: null };
  },
};

module.exports = productDetailValidation;
