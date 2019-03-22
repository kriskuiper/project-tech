const path = require("path");

function serveHome(req, res) {
    res.status(200).sendFile(path.join(__dirname, "../static/index.html"));
}

module.exports = serveHome;