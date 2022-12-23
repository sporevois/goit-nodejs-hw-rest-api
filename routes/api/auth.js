const express = require('express');
const ctrl = require('../../controllers/auth');
const { ctrlWrapper } = require('../../helpers');
const {authentication} = require('../../middlewares')

const router = express.Router();

router.post('/signup', ctrlWrapper(ctrl.signup));

router.post('/login', ctrlWrapper(ctrl.login));

router.get('/logout', authentication, ctrlWrapper(ctrl.logout));

router.get('/current', authentication, ctrlWrapper(ctrl.getCurrentUser));



module.exports = router;