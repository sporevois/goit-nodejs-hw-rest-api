const {Contact} = require('../../models');
const {HttpErr} = require('../../helpers');
const {contactSchema} = require('../../schemas');

const updateContact = async (req, res) => {
 
  const {error} = contactSchema.validate(req.body);
    
  if (error) {
    throw HttpErr(400, "Missing fields")
  }
  const {_id: ownerId} = req.user;
  const { contactId } = req.params;
  const { name, email, phone } = req.body;
  const result = await Contact.findOneAndUpdate({_id:contactId, owner: ownerId}, { $set: { name, email, phone } }, { new: true });
   
  if (!result) {
    throw HttpErr(404);
  }

  res.status(200).json(result);  
}

module.exports = updateContact;