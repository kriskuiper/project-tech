function renderLogin(req, res, next) {
    res.status(200).render("login");
}

module.exports = renderLogin;