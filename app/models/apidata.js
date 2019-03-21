const fetch = require("node-fetch");

function requestUsers() {
    return new Promise(resolveUsers);
}

function resolveUsers(resolve) {
    getUsers("https://randomuser.me/api/?results=10")
            .then(response => resolve(response.results))
            .catch(logError);
}

async function getUsers(url) {
    const response = await fetch(url);
    const body = await response.json();
    return body;
}

function logError(error) {
    console.error(error);
}

module.exports = requestUsers;