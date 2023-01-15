const { contactSchema, updateStatusSchema } = require('./contact');
const {signupSchema, loginSchema, subscriptionSchema, emailSchema} = require('./user')

module.exports = {
    contactSchema,
    updateStatusSchema,
    signupSchema,
    loginSchema,
    subscriptionSchema,
    emailSchema
}