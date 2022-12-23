const {Contact} = require('../../models');
const {HttpErr} = require('../../helpers');
const {contactSchema} = require('../../schemas')

const addContact = async (req, res) => {
  const { error } = contactSchema.validate(req.body);

  if (error) {
    throw HttpErr(400, "Missing required name field");
  }

  const {_id: ownerId} = req.user;
  const result = await Contact.create({...req.body, ownerId});
  res.status(201).json(result);
}

module.exports = addContact;