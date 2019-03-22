const fetch = require("node-fetch");

function getUsers() {
    return request("https://randomuser.me/api/?results=10");
}

async function request(url) {
    try {
        const response = await fetch(url);
        const body = await response.json();
        return body.results;
    } catch(error) {
        logError(error);
    }
}

function logError(error) {
    console.error(error);
}

module.exports = getUsers;