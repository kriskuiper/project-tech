const FeedPost = require("../models/FeedPost");
const getUsers = require("../models/apidata");

async function renderFeed(req, res, next) {
    try {
        console.log(req.session.user);
        const posts = await FeedPost.find();
        const users = await getUsers();
        const reversed = posts.reverse();
        
        res.status(200).render("feed", {
            posts: await reversed,
            users: await users,
            user: req.session.user
        });
 // eslint-disable-line
    } catch(error) {
        next(error);
    }
}

function logError(err) {
    console.log(err);
}

module.exports = renderFeed;