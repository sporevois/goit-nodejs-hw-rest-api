const {Contact} = require('../../models');

const listContacts = async (req, res) => {

  const { page = 1, limit = 10, favorite: favQuery = null } = req.query;
  const skip = (page - 1) * limit;
  const favorite = favQuery === null ? { $exists: true } : favQuery;
  const {_id: ownerId} = req.user;
  const result = await Contact.find({ owner: ownerId, favorite})
    .limit(limit)
    .skip(skip);
  
  res.json(result);
}

module.exports = listContacts;