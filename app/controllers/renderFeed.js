const FeedPost = require("../models/FeedPost");
const requestUsers = require("../models/apidata");

async function renderFeed(req, res, next) {
    try {
        const posts = await FeedPost.find();
        const users = await requestUsers();
        const reversed = await posts.reverse();
        
        res.render("feed", {
            posts: await reversed,
            users: await users
        });
    } catch(error) {
        next(error);
    }
}

function logError(err) {
    console.log(err);
}

module.exports = renderFeed;