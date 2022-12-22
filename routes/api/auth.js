const express = require('express');
const ctrl = require('../../controllers/auth');
const { ctrlWrapper } = require('../../helpers');

const router = express.Router();

router.post('/signup', ctrlWrapper(ctrl.signup));


module.exports = router;