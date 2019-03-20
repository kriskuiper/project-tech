const fetch = require("node-fetch");


let users;


request("https://jsonplaceholder.typicode.com/users")
    .then(setUsers)
    .catch(logError);


async function request(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

function setUsers(response) {
    users = response;
}

function logError(error) {
    console.error(error);
}

module.exports = request;