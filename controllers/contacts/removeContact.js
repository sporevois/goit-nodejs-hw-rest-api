const Contact = require('../../models/contacts.js');
const {HttpErr} = require('../../helpers')

const removeContact = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
     
  // Doesn`t work
  if (!result) {
    throw HttpErr(404, "Not found");
  }

  res.status(200).json({ message: "Contact deleted" })
}

module.exports = removeContact;