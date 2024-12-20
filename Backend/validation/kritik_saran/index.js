
const createKritikSaranSchema = require('./schema')

const kritikSaranValidation = {
    validateCreatePayload: (payload) => {
        const validationResult = createKritikSaranSchema.validate(payload)
        if (validationResult.error) {
            return {
                errors: validationResult.error.details.map((err) => err.message)
            }
        }
        return { errors: null }
    }
}

module.exports = kritikSaranValidation
