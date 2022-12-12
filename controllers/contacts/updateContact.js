const Contact = require('../../models/contacts.js');
const {HttpErr} = require('../../helpers');
const schemas = require('../../schemas/contact');

const updateContact = async (req, res, next) => {
 
  const {error} = schemas.contactSchema.validate(req.body);
    
  if (error) {
    throw HttpErr(400, "Missing fields")
  }
  
  try {
    const { contactId } = req.params;
    const { name, email, phone } = req.body;
    const result = await Contact.findByIdAndUpdate(contactId, { $set: { name, email, phone } }, { new: true });
    res.status(200).json(result);
  }
  catch (err) {
    throw HttpErr(404, "Not found");
  }
}

module.exports = updateContact;