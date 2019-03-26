// Require dependencies from node_modules needed for the server
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

// Process environment vars and connect to database
const dbname = process.env.DB_NAME;
const dbcluster = process.env.DB_CLUSTER;
const dbhost = process.env.DB_HOST;
const dbuser = process.env.DB_USER; 
const dbpassword = process.env.DB_PASSWORD;
const uri = `mongodb+srv://${dbuser}:${dbpassword}@${dbcluster}-${dbhost}/${dbname}`;

mongoose.set("useNewUrlParser", true);
mongoose.connect(uri);

// Process secret and define sess for using express-session
const secret = process.env.SESSION_SECRET;
const sess = {
    resave: false,
    saveUninitialized: true,
    secret: secret,
};

// Require controllers
const serveHome = require("./controllers/serveHome");
const renderCreateAccount = require("./controllers/renderCreateAccount");
const createAccount = require("./controllers/createAccount");
const renderLogin = require("./controllers/renderLogin");
const login = require("./controllers/login");
const logout = require("./controllers/logout");
const renderFeed = require("./controllers/renderFeed");
const renderForm = require("./controllers/renderForm");
const addPost = require("./controllers/addPost");
const renderPostDetail = require("./controllers/renderPostDetail");
const serveNotFound = require("./controllers/serveNotFound");

const app = express();
const port = 8000;

app
    .use("/static", express.static("app/static"))
    .use(bodyParser.urlencoded({extended: true}))
    .use(session(sess))
    .set("view engine", "ejs")
    .set("views", "app/view")
    
    .get("/", serveHome)
    .get("/create-account", renderCreateAccount)
    .post("/create-account", createAccount)
    .get("/log-in", renderLogin)
    .get("/log-out", logout)
    .post("/my-feed", addPost)
    .get("/my-feed", renderFeed)
    .get("/add-post", renderForm) 
    .get("/my-feed/:url", renderPostDetail)

    .use(serveNotFound)
    .listen(port, listening);

function listening() {
    console.log(`The app is shown at port: ${port}`); // eslint-disable-line
}