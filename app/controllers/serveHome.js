const path = require("path");
const session = require("express-session");

function serveHome(req, res, next) {
    res.status(200).sendFile(path.join(__dirname, "../static/index.html"));
}

module.exports = serveHome;