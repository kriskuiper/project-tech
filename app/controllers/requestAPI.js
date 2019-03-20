const fetch = require("node-fetch");

const data = requestAPI("https://jsonplaceholder.typicode.com/users")
    .then(results => getName(results))
    .catch(err => logError(err));

async function requestAPI(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

function logError(err) {
    console.error(err);
}

function getName(results) {
    for (let result of results) {
        console.log(result.name);
    }
}