const {Contact} = require('../../models');

const listContacts = async (req, res) => {
  const {_id: ownerId} = req.user;
  const result = await Contact.find({ownerId});
  res.json(result);
}

module.exports = listContacts;