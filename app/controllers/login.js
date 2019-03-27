const User = require("../models/User");

async function login(req, res) {
    const users = await User.find();
    const { username, password } = req.body;
    // Source for this loop: Kaan Cenik
    for (let i = 0; i < users.length; i++) {
        if (username.toLowerCase() === users[i].username && password === users[i].password) {
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