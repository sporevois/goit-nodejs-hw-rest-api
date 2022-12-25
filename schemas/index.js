const { contactSchema, updateStatusSchema } = require('./contact');
const {signupSchema, loginSchema, subscriptionSchema} = require('./user')

module.exports = {
    contactSchema,
    updateStatusSchema,
    signupSchema,
    loginSchema,
    subscriptionSchema,
}