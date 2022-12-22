const Joi = require('joi');

const signupSchema = Joi.object({
    password: Joi.string().required(),
    email: Joi.string().required(),
    subscription: Joi.string().valid('starter', 'pro', 'business'),    
})

module.exports = {
    signupSchema,
}