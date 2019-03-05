const express = require('express');

// Couple express to app variable
const app = express();

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
    .listen(8000);

function home(req, res) {
    let doc = '<!doctype html>';
    let length = postsdata.length;
    let index = -1;
    let routepost;

    doc += '<link rel="stylesheet" href="static/index.css">';
    doc += '<title>Home - CycLove</title>';
    doc += '<h1>Hello World</h1>';
    doc += '<p>Welcome to my dating app</p>';

    // As long as you have posts, do this (inside the wile loop) 
    // with every post
    while (++index < length) {
        routepost = postsdata[index];

        // Title is post title
        doc += `<h2>${routepost.title}</h2>`;
        // Content is post content
        doc += `<p>${routepost.contents}</p>`;
    }

    // Respond with whole document
    res.send(doc);
}

function about(req, res) {
    let doc = '<!doctype html>';
    
    doc += '<link rel="stylesheet" href="static/index.css">';
    doc += '<title>About us - CycLove</title>'
    doc += '<h1>About us</h1>';
    doc += '<p>CycLove is a dating app</p>';

    res.send(doc);
}

// Send this 404 page when navigated to unknown page
function notFound(req, res) {
    let doc = '<!doctype html>';

    doc += '<link rel="stylesheet" href="static/index.css">';
    doc += '<title>404 Not found - CycLove</title>';
    doc += '<h1>Used some drug?</h1>';
    doc += '<p>You have navigated to a page we could not find</p>';

    res.send(doc);
}