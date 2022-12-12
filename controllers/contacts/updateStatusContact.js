const Contact = require('../../models/contacts.js');
const schemas = require('../../schemas/contact');
const { HttpErr } = require('../../helpers');


const updateStatusContact = async (req, res, next) => {
    
    const { error } = schemas.updateStatusSchema.validate(req.body);

    if (error) {
        throw HttpErr(400, "missing field favorite");
    }

    try {
        const { contactId } = req.params;
        const { favorite } = req.body;
        const result = await Contact.findByIdAndUpdate(contactId, { favorite }, { new: true });
        res.status(200).json(result);
    }
    catch (err) {
        throw HttpErr(404, "Not found");
    }
}

module.exports = updateStatusContact;