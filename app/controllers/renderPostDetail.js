const find = require("array-find");
const postsdata = require("../models/fakedata");

function renderPostDetail(req, res, next) {
    let url = req.params.url;
    let post = find(postsdata, getClickedPost);

    if (!post) {
        next();
        return;
    }

    function getClickedPost(post) {
        return post.url === url;
    }

    res.render("detail-page.ejs", {post: post});
}

module.exports = renderPostDetail;