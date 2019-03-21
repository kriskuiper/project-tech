const postsdata = require("../models/fakedata");
const requestUsers = require("../models/apidata");

function renderFeed(req, res) {
    requestUsers()
        .then(renderUsers);

    function renderUsers(users) {
        res.render("feed.ejs", {
            postsdata: postsdata,
            users: users
        });
    }
}

module.exports = renderFeed;