// Require dependencies from node_modules
const express = require('express');
const path = require('path');

// Couple express to app variable
const app = express();

// Set default port
const port = 8000;

// Set up some fake data
const postsdata = [
    {
        id: "6r6jaL301",
        title: "A ride around the Veluwe",
        author: "Kris Kuiper",
        contents: "Rode around the Veluwe yesterday, had a lot of fun",
        kms: 46,
        bike: "Giant TC1",
        location: "Ermelo"

    },
    {
        id: "6029Kl1s",
        title: "To Amerongen",
        author: "Niels Kuiper",
        contents: "Hopped on my bike this afternoon for a ride to Amerongen",
        kms: 25,
        bike: "Cervélo 45J",
    }
];

// All server thingies
app
    // serve static files that are in the static directory
    .use('/static', express.static('static'))

    // set ejs as templating engine
    .set('view engine', 'ejs')
    .set('views', 'view')
    .get('/', home)
    .get('/about', about)
    .use(notFound)
    .listen(port, () => {
        console.log(`Listening on port ${port}...`);
    });

function home(req, res) {
    res.render('partials/feed.ejs', {postsdata: postsdata});
}

function about(req, res) {
    res.render('partials/about.ejs');
}

// Send this 404 page when navigated to unknown page
function notFound(req, res) {
    res.render('partials/not-found.ejs');
}