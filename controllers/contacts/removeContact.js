const {Contact} = require('../../models');
const {HttpErr} = require('../../helpers')

const removeContact = async (req, res) => {
  const {_id: ownerId} = req.user;
  const { contactId } = req.params;
  const result = await Contact.findOneAndRemove({_id:contactId, owner: ownerId});
  
  if (!result) {
    throw HttpErr(404);
  }
  
  res.status(200).json({ message: "Contact deleted" })
}

module.exports = removeContact;