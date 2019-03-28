function renderLogin(req, res, next) {
    res.status(200).render("login", { error: false });
}

module.exports = renderLogin;