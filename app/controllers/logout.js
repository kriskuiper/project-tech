function logout(req, res, next) {
    req.session.destroy(redirectLogout);

    function redirectLogout(error) {
        if (error) {
            next(error);
        } else {
            res.redirect("/");
        }
    }
}

module.exports = logout;