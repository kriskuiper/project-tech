const paginate = require("express-paginate");

function paginateFeed(req, res, next) {
    // const currentPage = req.query.page;
    // const itemCount = postsdata.length;
    // const pageCount = postsdata.length / req.query.limit;

    // res.render("feed-paginated.ejs", {
    //     posts: postsdata,
    //     pageCount,
    //     itemCount,
    //     pages: paginate.getArrayPages(req)(pageCount, currentPage)
    // });
}

module.exports = paginateFeed;