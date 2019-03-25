const mongoose = require("mongoose");
const session = require("express-session");
const User = require("../models/User");

function renderLogin(req, res) {
    res.status(200).render("login");
}

module.exports = renderLogin;