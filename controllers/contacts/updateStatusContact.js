const Contact = require('../../models/contacts.js');
const { HttpErr } = require('../../helpers');


const updateStatusContact = async (req, res, next) => {
    const { contactId } = req.params;
    const { favorite } = req.body;
    
    // Need validation
    const result = await Contact.findByIdAndUpdate(contactId, {favorite}, { new: true });

    if (!result) {
        throw HttpErr(404, "Not found");
    }
    
    res.status(200).json(result);
}

module.exports = updateStatusContact;