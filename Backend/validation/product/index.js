const { createProductSchema, updateProductSchema } = require("./schema");

const productValidation = {
  validateCreatePayload: (payload) => {
    const validationResult = createProductSchema.validate(payload);
    if (validationResult.error) {
      return {
        errors: validationResult.error.details.map((err) => err.message),
      };
    }
    return { errors: null };
  },
  validateUpdatePayload: (payload) => {
    const validationResult = updateProductSchema.validate(payload);
    if (validationResult.error) {
      return {
        errors: validationResult.error.details.map((err) => err.message),
      };
    }
    return { errors: null };
  },
};

module.exports = productValidation;
