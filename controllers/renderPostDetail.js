const find = require("array-find");

function renderPostDetail(req, res, next) {
    let url = req.params.url;
    let post = find(postsdata, getClickedPost);

    if (!post) {
        next();
        return;
    }

    res.render("detail-page.ejs", {post: post});

    function getClickedPost(post) {
        return post.url === url;
    }
}

module.exports = renderPostDetail;