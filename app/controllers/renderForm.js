function renderForm(req, res) {
    console.log(req.session.user);
    res.status(200).render("add-post.ejs");
}

module.exports = renderForm;