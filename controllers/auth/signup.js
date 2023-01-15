const bcrypt = require('bcrypt')
const gravatar = require('gravatar');
const { nanoid } = require('nanoid');
const { User } = require('../../models');
const { HttpErr, sendEmail } = require('../../helpers');
const { signupSchema } = require('../../schemas');

const {BASE_URL} = process.env;

const signup = async (req, res, next) => {

    const { error } = signupSchema.validate(req.body);
    if (error) {
        throw HttpErr(400, error.message);
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
        throw HttpErr(409, 'Email in use')
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const avatarURL = gravatar.url(email);
    const verificationToken = nanoid();
        
    const newUser = await User.create({ ...req.body, password: hashedPassword, avatarURL, verificationToken });

    const verifyEmail = {
        to: email,
        subject: "Verify you email",
        html: `<a target="_blank" href="${BASE_URL}/api//users/verify/${verificationToken}">Click to verify your email</a>`
    }

    await sendEmail(verifyEmail)

    res.status(201).json({
        user: {
            email: newUser.email,
            subscription: newUser.subscription
        }
    })
}

module.exports = signup;