const postsdata = require("./fakedata");

function renderFeed(req, res) {
    res.render("feed.ejs", {postsdata: postsdata});
}

module.exports = renderFeed;