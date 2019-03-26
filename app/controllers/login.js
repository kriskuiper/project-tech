const User = require("../models/User");

async function login(req, res, next) {
    console.log(User.findOne({ username: req.body.username}));
}

module.exports = login;