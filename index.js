// Require dependencies from node_modules
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const multer = require("multer"); // HAVE TO INSTALL AS DEPENDENCY
const find = require("array-find");
const slug = require("slug");
const fetch = require("node-fetch");

/* 
TODO: install and work with multer to make adding images to posts possible
1. Install and require multer  REQUIRE = DONE
2. Look for examples using multer
3. Add input[type=file] to add-post.ejs
4. Update addPost function
5. Enjoy a beer
*/


// Couple express to app variable
const app = express();

// Set default port
const port = 8000;

// Set up some fake data
const postsdata = [
    {
        id: "a-ride-around-the-veluwe",
        title: "A ride around the Veluwe",
        author: "Kris Kuiper",
        contents: "Rode around the Veluwe yesterday, had a lot of fun",
        kms: 46,
        bike: "Giant TC1",
        location: "Ermelo",
        pictures: [],

    },
    {
        id: "to-amerongen",
        title: "To Amerongen",
        author: "Niels Kuiper",
        contents: "Hopped on my bike this afternoon for a ride to Amerongen",
        kms: 25,
        bike: "Cervélo 45J",
        location: "Amsterdam",
        pictures: [],
    },
];

// All server thingies
app
    // serve static files that are in the static directory
    .use("/static", express.static("static"))
    
    // Use body parser to parse body of the request
    .use(bodyParser.urlencoded({extended: true}))

    // set ejs as templating engine
    .set("view engine", "ejs")
    .set("views", "view")
    .get("/", serveHome)
    .get("/my-feed", renderFeed)
    .post("/my-feed", addPost)
    .get("/add-post", renderForm)
    .get("/:id", renderPostdetail)
    .get("/my-feed/?page=:page", paginateFeed)

    // If you can't find any of the gets defined above, serve 404 page.
    .use(serveNotFound)

    // Listen at port
    .listen(port, listening);

// Routes
function serveHome(req, res) {
    res.sendFile(path.join(__dirname, "static/index.html"));
}

function renderFeed(req, res) {
    res.render("feed.ejs", {postsdata: postsdata});
}

function paginateFeed(req, res) {
    let page = 1;

    // Do something to use pagination

    res.render("feed-page.ejs", {page: page});
}

function renderForm(req, res) {
    res.render("add-post.ejs");
}

function renderPostdetail(req, res, next) {
    let id = req.params.id;
    let post = find(postsdata, value => {
        return value.id === id;
    });

    if (!post) {
        next();
        return;
    }

    res.render("detail-page.ejs", {post: post});
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

// Let me know which port the server is listening
function listening() {
    console.log(`The app is shown at port: ${port}`);
}