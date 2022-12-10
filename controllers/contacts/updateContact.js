const Contact = require('../../models/contacts.js');
const {HttpErr} = require('../../helpers');
const schemas = require('../../schemas/contact')

const updateContact = async (req, res, next) => {
  const {error} = schemas.contactSchema.validate(req.body);
    
  if (error) {
    throw HttpErr(400, "Missing fields")
  }

  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });

  if (!result) {
    throw HttpErr(404, "Not found");
  }

  res.status(200).json(result);
}

module.exports = updateContact;