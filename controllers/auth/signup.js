const bcrypt = require('bcrypt')
const { User } = require('../../models');
const { HttpErr } = require('../../helpers');
const {signupSchema} = require('../../schemas')

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
    
    const newUser = await User.create({ ...req.body, password: hashedPassword });

    res.status(201).json({
        user: {
            email: newUser.email,
            subscription: newUser.subscription
        }
    })
}

module.exports = signup;