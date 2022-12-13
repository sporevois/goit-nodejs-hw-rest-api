const { isValidObjectId } = require('mongoose');
const { HttpErr } = require('../helpers')

const isValidId = (req, _, next) => {
    const { contactId } = req.params;
    const isValid = isValidObjectId(contactId);

    if (!isValid) {
        const error = HttpErr(400, `${contactId} is incorrect id format`);
        next(error)
    }
    next();
}

module.exports = isValidId;