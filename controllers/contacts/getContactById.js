const {Contact} = require('../../models');
const { HttpErr } = require('../../helpers');

const getContactById = async (req, res) => {  
  const { _id: ownerId } = req.user;
  console.log(req.user)
  const {contactId } = req.params;
  const result = await Contact.findOne({_id: contactId, owner: ownerId});

  if(!result) {
    throw HttpErr(404);
  } 

  res.json(result);
}

module.exports = getContactById;