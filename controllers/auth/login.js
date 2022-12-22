const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const { HttpErr } = require('../../helpers');
const { User } = require('../../models');
const { findByIdAndUpdate } = require('../../models/users');
const { loginSchema } = require('../../schemas')
const { JWT_SECRET } = process.env;

const login= async (req, res, next) => {

    const { error } = loginSchema.validate(req.body);
    if (error) {
        throw HttpErr(400, error.message);
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        throw HttpErr(401, "Email or password is wrong");
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
        throw HttpErr(401, "Email or password is wrong");
    }

    const payload = {
        id: user._id,
    }

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "23h" });
    await User.findByIdAndUpdate(user._id, { token });

    res.json({
        token,
        user: {
            email: user.email,
            subscription: user.subscription
            
        }
    })
}
 
module.exports = login;
