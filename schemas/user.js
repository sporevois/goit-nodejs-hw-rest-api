const Joi = require('joi');

const signupSchema = Joi.object({
    password: Joi.string().required(),
    email: Joi.string().email().required(),
    subscription: Joi.string().valid('starter', 'pro', 'business'),    
})

const loginSchema = Joi.object({
    password: Joi.string().required(),
    email: Joi.string().email().required()
})

const subscriptionSchema = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "business").required(),
});

module.exports = {
    signupSchema,
    loginSchema,
    subscriptionSchema,
}