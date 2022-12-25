const { User } = require('../../models');
const { HttpErr } = require('../../helpers');
const { subscriptionSchema } = require('../../schemas');

const updateSubscription = async (req, res) => {
    const { error } = subscriptionSchema.validate(req.body);

    if (error) {
        throw HttpErr(400, "missing field subscription");
    }

    const { subscription } = req.body;
    const { _id: userId } = req.user;

    console.log(subscription)

    const user = await User.findByIdAndUpdate({_id:userId}, { subscription }, { new: true });

    if (!user) {
        throw HttpErr(404);
    }

    res.status(200).json({
        user: {
            email: user.email,
            subscription: user.subscription            
        }
    });
}

module.exports = updateSubscription;