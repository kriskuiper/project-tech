const path = require("path");

function serveHome(req, res) {
    res.sendFile(path.join(__dirname, "../static/index.html"));
}

module.exports = serveHome;