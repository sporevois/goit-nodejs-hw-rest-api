const {Contact} = require('../../models');
const {HttpErr} = require('../../helpers');
const {contactSchema} = require('../../schemas')

const addContact = async (req, res, next) => {
  const { error } = contactSchema.validate(req.body);

  if (error) {
    throw HttpErr(400, "Missing required name field");
  }

  const result = await Contact.create(req.body);
  res.status(201).json(result);
}

module.exports = addContact;