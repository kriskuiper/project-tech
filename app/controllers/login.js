const User = require("../models/User");

function login(req, res, next) {
    const user = User.findOne({ userName: req.body.userName });
}