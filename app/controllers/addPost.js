const slug = require("slug");
const mongoose = require("mongoose");
const FeedPost = require("../models/FeedPost");


function addPost(req, res) {
    const url = slug(req.body.title).toLowerCase();

    const newFeedPost = new FeedPost({
        _id: new mongoose.Types.ObjectId(),
        url: url,
        title: req.body.title,
        author: req.body.author,
        contents: req.body.contents,
        kms: req.body.kms,
        bike: req.body.bike,
        location: req.body.location,
        pictures: []
    });

    FeedPost.create(newFeedPost);
    // When the form is posted, redirect to the users' feed
    res.redirect("/my-feed");
}

module.exports = addPost;