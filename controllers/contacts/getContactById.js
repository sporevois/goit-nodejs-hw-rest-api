const Contact = require('../../models/contacts.js')
const {HttpErr} = require('../../helpers')

const getContactById = async (req, res, next) => {  
  const { contactId } = req.params;
  const result = await Contact.findById(contactId).exec();
  
  // Doesn`t work
  if (!result) {
    throw HttpErr(404, "Not found");
  }

  res.json(result);
}

module.exports = getContactById;