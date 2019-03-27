const mongoose = require("mongoose");
const User = require("../models/User");

function createAccount(req, res, next) {
    const newUser = new User({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username.toLowerCase(),
        password: req.body.password,
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        bike: req.body.bike,
        posts: [],
        reactions: []
    });

    setSession();

    User.create(newUser);

    function setSession(error) {
        if (error) {
            next(error);
        } else {
            req.session.user = { 
                firstName: newUser.firstName, 
                lastName: newUser.lastName, 
                bike: newUser.bike
            };
            res.redirect("/my-feed");
        }
    }
}

module.exports = createAccount;