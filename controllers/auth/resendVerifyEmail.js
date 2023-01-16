const { HttpErr, sendEmail } = require('../../helpers');
const { User } = require('../../models');
const { emailSchema } = require('../../schemas')

const {BASE_URL} = process.env;

const resendVerifyEmail = async (req, res) => {   

    const { error } = emailSchema.validate(req.body);
    if (error) {
        throw HttpErr(400, 'missing required field email');
    }

    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        throw HttpErr(401);
    }

    if (user.verify) {
        throw HttpErr(404, 'Verification has already been passed');
    }

    const verifyEmail = {
        to: email,
        subject: "Verify you email",
        html: `<a target="_blank" href="${BASE_URL}/api//users/verify/${user.verificationToken}">Click to verify your email</a>`
    }

    await sendEmail(verifyEmail);

    res.status(200).json({ message: 'Verification email sent' });

}

module.exports = resendVerifyEmail