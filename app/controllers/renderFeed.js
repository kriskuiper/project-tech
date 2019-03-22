const FeedPost = require("../models/FeedPost");
const requestUsers = require("../models/apidata");

// function renderFeed(req, res) {
//     requestUsers()
//         .then(renderUsers);

//     function renderUsers(users) {
//         FeedPost.find()
//             .then(usePosts)
//             .catch(logError);

//         function usePosts(posts) {
//             res.render("feed.ejs", {
//                 postsdata: posts,
//                 users: users
//             });
//         }
//     }    
// }

async function renderFeed(req, res) {
    const posts = await FeedPost.find();
    const users = await requestUsers();
    
    res.render("feed", {
        posts: posts,
        users: users
    });
}

function logError(err) {
    console.log(err);
}

module.exports = renderFeed;