// Require dependencies from node_modules
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const find = require("array-find");
const slug = require("slug");

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
        location: "Ermelo"

    },
    {
        id: "to-amerongen",
        title: "To Amerongen",
        author: "Niels Kuiper",
        contents: "Hopped on my bike this afternoon for a ride to Amerongen",
        kms: 25,
        bike: "Cervélo 45J",
        location: "Amsterdam"
    },
];

// All server thingies
app
    // serve static files that are in the static directory
    .use("/static", express.static("static"))
    
    .use(bodyParser.urlencoded({extended: true}))

    // set ejs as templating engine
    .set("view engine", "ejs")
    .set("views", "view")
    .get("/", home)
    .get("/my-feed", feed)
    .post("/my-feed", addPost)
    .get("/add-post", form)
    .get("/:id", postdetail)

    // If you can't find any of the gets defined above, render 404.
    .use(notFound)

    // Listen at port
    .listen(port, () => {
        console.log(`Listening on port ${port}...`);
    });

// Routes
function home(req, res) {
    // Have to render the static/index.html here... how?
    res.sendFile(path.join(__dirname, "static/index.html"));
}

function feed(req, res) {
    res.render("feed.ejs", {postsdata: postsdata});
}

function form(req, res) {
    res.render("add-post.ejs");
}

function postdetail(req, res) {
    const id = req.params.id;
    const post = find(postsdata, function(value) {
        return value.id === id;
    });
    
    if (!post) {
        console.log("No post");
        return;
    }

    res.render("detail-page.ejs", {post: postsdata});
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

    res.redirect(`/${id}`);
}

// Send this 404 page when navigated to unknown page
function notFound(req, res) {
    // Have to render the static/404.html here... how?
    res.status(404).sendFile(path.join(__dirname, "static/404.html"));
}