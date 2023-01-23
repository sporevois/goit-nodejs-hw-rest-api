const express = require('express');
const ctrl = require('../../controllers/auth');
const { ctrlWrapper } = require('../../helpers');
const {authentication, upload, resizeImage} = require('../../middlewares')

const router = express.Router();

router.post('/signup', ctrlWrapper(ctrl.signup));

router.get('/verify/:verificationToken', ctrlWrapper(ctrl.verify));

router.post('/verify', ctrlWrapper(ctrl.resendVerifyEmail));

router.post('/login', ctrlWrapper(ctrl.login));

router.get('/logout', authentication, ctrlWrapper(ctrl.logout));

router.get('/current', authentication, ctrlWrapper(ctrl.getCurrentUser));

router.patch('/', authentication, ctrlWrapper(ctrl.updateSubscription));

router.patch('/avatars', authentication, upload.single("avatar"), resizeImage, ctrlWrapper(ctrl.updateAvatar));


module.exports = router;