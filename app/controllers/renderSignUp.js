const mongoose = require("mongoose");
const User = require("../models/User");

function renderSignUp(req, res) {
    res.status(200).render("sign-up");
}

module.exports = renderSignUp;