const {Contact} = require('../../models');
const {updateStatusSchema} = require('../../schemas');
const { HttpErr } = require('../../helpers');


const updateStatusContact = async (req, res, next) => {
    
    const { error } = updateStatusSchema.validate(req.body);

    if (error) {
        throw HttpErr(400, "missing field favorite");
    }

    const { contactId } = req.params;
    const { favorite } = req.body;
    const result = await Contact.findByIdAndUpdate(contactId, { favorite }, { new: true });
      
    if(!result){
        throw HttpErr(404, "Not found");
    }

    res.status(200).json(result);
}

module.exports = updateStatusContact;