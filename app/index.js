// Require dependencies from node_modules needed for the server
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

// Process environment vars and connect to database
const dbname = process.env.DB_NAME;
const dbhost = process.env.DB_HOST;
const urlToConnect = `mongodb://${dbhost}/${dbname}`;

mongoose.connect(urlToConnect);

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
    .use("/static", express.static("app/static"))
    .use(bodyParser.urlencoded({extended: true}))

    .set("view engine", "ejs")
    .set("views", "app/view")

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