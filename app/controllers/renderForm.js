function renderForm(req, res) {
    res.status(200).render("add-post.ejs");
}

module.exports = renderForm;