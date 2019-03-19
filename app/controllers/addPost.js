const slug = require("slug");
const postsdata = require("../models/fakedata");

function addPost(req, res) {
    const id = slug(req.body.title).toLowerCase();

    postsdata.push({
        id: id,
        title: req.body.title,
        author: req.body.author,
        contents: req.body.contents,
        kms: req.body.kms,
        bike: req.body.bike,
        location: req.body.location
    });

    // When the form is posted, redirect to the users' feed
    res.redirect("/my-feed");
}

module.exports = addPost;