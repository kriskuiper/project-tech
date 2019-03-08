// Require dependencies from node_modules
const express = require("express");
const path = require("path");

// Couple express to app variable
const app = express();

// Set default port
const port = 8000;

// Set up some fake data
const postsdata = [
    {
        id: "6r6jaL301",
        title: "A ride around the Veluwe",
        author: "Kris Kuiper",
        contents: "Rode around the Veluwe yesterday, had a lot of fun",
        kms: 46,
        bike: "Giant TC1",
        location: "Ermelo"

    },
    {
        id: "6029Kl1s",
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

    // set ejs as templating engine
    .set("view engine", "ejs")
    .set("views", "view")
    .get("/", home)
    .get("/my-feed", feed)

    // If you can't find any of the gets defined above, render 404.
    .use(notFound)

    // Listen at port
    .listen(port, () => {
        console.log(`Listening on port ${port}...`);
    });

function home(req, res) {
    // Have to render the static/index.html here... how?
    res.sendFile(path.join(__dirname, "static/index.html"));
}

function feed(req, res) {
    res.render("feed.ejs", {postsdata: postsdata});
}

// Send this 404 page when navigated to unknown page
function notFound(req, res) {
    // Have to render the static/404.html here... how?
    res.sendFile(path.join(__dirname, "static/404.html"));
}