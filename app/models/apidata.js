const fetch = require("node-fetch");

let users;

request("https://jsonplaceholder.typicode.com/users")
    .then(setUsers)
    .catch(logError);

async function request(url) {
    const response = await fetch(url);
    const body = await response.json();
    return body;
}

function setUsers(response) {
    users = response;
    return users;
}

function logError(error) {
    console.error(error);
}

module.exports = request;