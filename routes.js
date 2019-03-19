const path = require("path");
const multer = require("multer");
const find = require("array-find");
const slug = require("slug");
const fetch = require("node-fetch");
const paginate = require("express-paginate");

const postsdata = require("./fakedata");

/* 
    TODO: install and work with multer to make adding images to posts possible
    2. Look for examples using multer
    3. Add input[type=file] to add-post.ejs
    4. Update addPost function
    5. Enjoy a beer
*/

// Routes
function serveHome(req, res) {
    res.sendFile(path.join("",__dirname, "static/index.html"));
}

function renderFeed(req, res) {
    res.render("feed.ejs", {postsdata: postsdata});
}

function renderForm(req, res) {
    res.render("add-post.ejs");
}

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

// Send this 404 page when navigated to unknown page
function serveNotFound(req, res) {
    res.status(404).sendFile(path.join(__dirname, "static/404.html"));
}

function paginateFeed(req, res, next) {
    // const currentPage = req.query.page;
    // const itemCount = postsdata.length;
    // const pageCount = postsdata.length / req.query.limit;

    // res.render("feed-paginated.ejs", {
    //     posts: postsdata,
    //     pageCount,
    //     itemCount,
    //     pages: paginate.getArrayPages(req)(pageCount, currentPage)
    // });
}

module.exports = { serveHome, renderFeed, paginateFeed, renderForm, renderPostDetail, addPost, serveNotFound };