const User = require('../models/user');
module.exports = {

    registerUser: (req, res) => {
        var user = new User(req.body);
        user.save(user, (err, newUser) => {
            if (err) {
                console.log('err', err)
                res.status(500).json({ success: false, error: err })
            } else {
                if (newUser) {
                    res.status(200).json({ success: true, user: newUser })
                }
            }
        })
    },

    loginUser: (req, res) => {

    },

}