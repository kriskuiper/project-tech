const paginate = require("express-paginate");
const FeedPost = require("../models/FeedPost");
const getUsers = require("../models/apidata");
const serveNotLoggedIn = require("./serveNotLoggedIn");

async function renderFeed(req, res, next) {
    try {
        let { limit, page } = req.query;
        const [posts, postsCount, users] = await Promise.all([
            FeedPost.find()
                .limit(limit)
                .skip((page-1) * limit)
                .lean()
                .exec(),
            FeedPost.countDocuments(),
            getUsers()
        ]);
        const reversed = posts.reverse();
        let pageCount = Math.ceil(postsCount / limit);
        if (pageCount === Infinity || pageCount === 1) pageCount = 0;
        if (req.session.user) {
            res.status(200).render("feed", {
                posts: await reversed,
                users: await users,
                user: req.session.user,
                pages: paginate.getArrayPages(req)(4, pageCount, page),
                pageCount: pageCount
            });
        } else {
            serveNotLoggedIn(req, res);
        }
    } catch(error) {
        next(error);
    }
}

module.exports = renderFeed;