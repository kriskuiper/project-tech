// Require dependencies from node_modules needed for the server
const express = require("express");
const bodyParser = require("body-parser");

// Require controllers
const serveHome = require("./controllers/serveHome");
const serveNotFound = require("./controllers/serveNotFound");
const renderFeed = require("./controllers/renderFeed");
const renderForm = require("./controllers/renderForm");
const addPost = require("./controllers/addPost");
const renderPostDetail = require("./controllers/renderPostDetail");

const app = express();
const port = 8000;


app
    .use("/static", express.static("static"))
    .use(bodyParser.urlencoded({extended: true}))

    .set("view engine", "ejs")
    .set("views", "view")

    .get("/", serveHome)
    .get("/my-feed", renderFeed)

    .post("/my-feed", addPost)
    .get("/add-post", renderForm)
    .get("/my-feed/:url", renderPostDetail)

    .use(serveNotFound)
    .listen(port, listening);


function listening() {
    console.log(`The app is shown at port: ${port}`);
}