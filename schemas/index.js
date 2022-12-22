const { contactSchema, updateStatusSchema } = require('./contact');
const {signupSchema, loginSchema} = require('./user')

module.exports = {
    contactSchema,
    updateStatusSchema,
    signupSchema,
    loginSchema,
}