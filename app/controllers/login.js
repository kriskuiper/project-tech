const User = require("../models/User");

async function login(req, res) {
    const users = await User.find();
    // Source for this loop: Kaan Cenik
    for (let i = 0; i < users.length; i++) {
        if (req.body.username.toLowerCase() === users[i].username) {
            req.session.user = {
                firstName: users[i].firstName,
                lastName: users[i].lastName,
                bike: users[i].bike
            };
        }
    }
    res.redirect("/my-feed");
}

module.exports = login;