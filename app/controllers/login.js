const User = require("../models/User");

async function login(req, res, next) {
    console.log(User.findOne({ username: req.body.username}));

    redirectToFeed();

    function redirectToFeed(error) {
        if (error) {
            next(error);
        } else if (user) {
            req.session.user = {
                firstName: user.firstName,
                lastName: user.lastName,
                bike: user.bike
            };
            res.redirect("/my-feed");
        }
    }
}

module.exports = login;