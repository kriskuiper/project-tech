const User = require("../models/User");

async function login(req, res, next) {
    const user = User.findOne({ username: req.body.username});
}

module.exports = login;