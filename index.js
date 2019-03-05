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

app
    // serve static files that are in the static directory
    .use('/static', express.static('static'))
    .get('/', onhome)
    .listen(8000)

function onhome(req, res) {
    let doc = '<!doctype.html>';
    let length = postsdata.length;
    let index = -1;
    let routepost;

    doc += '<h1>Hello World</h1>';
    doc += '<p>Welcome to my dating app</p>';

    while (++index < length) {
        routepost = postsdata[index];

        doc += `<h2>${routepost.title}</h2>`;
        doc += `<p>${routepost.contents}</p>`;
    }

    res.send(doc);
}