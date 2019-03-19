// Require dependencies from node_modules
const express = require("express");
const bodyParser = require("body-parser");
const { serveHome, renderFeed, renderForm, renderPostDetail, addPost, serveNotFound } = require("./routes");
/* 
TODO: install and work with multer to make adding images to posts possible

2. Look for examples using multer
3. Add input[type=file] to add-post.ejs
4. Update addPost function
5. Enjoy a beer
*/


// Couple express to app variable
const app = express();

// Set default port
const port = 8000;

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
    .get("/my-feed/:url", renderPostDetail)
    // .use(paginate.middleware(10, 50))
    // .get("/my-feed/?page&limit", paginateFeed)

    // If you can't find any of the gets defined above, serve 404 page.
    .use(serveNotFound)

    // Listen at port
    .listen(port, listening);

// Let me know which port the server is listening
function listening() {
    console.log(`The app is shown at port: ${port}`);
}