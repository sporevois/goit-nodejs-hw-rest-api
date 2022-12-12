const Contact = require('../../models/contacts.js')
const {HttpErr} = require('../../helpers')

const getContactById = async (req, res, next) => {  
  try {
    const { contactId } = req.params;
    const result = await Contact.findById(contactId).exec();
    res.json(result);
  }
  catch (err) {
    throw HttpErr(404, "Not found");
  } 
}

module.exports = getContactById;