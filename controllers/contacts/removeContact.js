const Contact = require('../../models/contacts.js');
const {HttpErr} = require('../../helpers')

const removeContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    await Contact.findByIdAndRemove(contactId);
    res.status(200).json({ message: "Contact deleted" })
  }
  catch (err) {
    throw HttpErr(404, "Not found");
  }
}

module.exports = removeContact;