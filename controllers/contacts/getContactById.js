const {Contact} = require('../../models');
const { HttpErr } = require('../../helpers');

const getContactById = async (req, res, next) => {  
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);

  if(!result) {
    throw HttpErr(404, "Not found");
  } 

  res.json(result);
}

module.exports = getContactById;