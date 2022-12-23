const express = require('express');
const ctrl = require('../../controllers/contacts');
const { ctrlWrapper } = require('../../helpers');
const { isValidId, authentication } = require('../../middlewares');

const router = express.Router();

router.get('/', authentication, ctrlWrapper(ctrl.listContacts));

router.get('/:contactId', authentication, isValidId, ctrlWrapper(ctrl.getContactById));

router.post('/', authentication, ctrlWrapper(ctrl.addContact));

router.delete('/:contactId', authentication, isValidId, ctrlWrapper(ctrl.removeContact));

router.put('/:contactId', authentication, isValidId, ctrlWrapper(ctrl.updateContact));

router.patch('/:contactId/favorite', authentication,  isValidId, ctrlWrapper(ctrl.updateStatusContact));

module.exports = router;
