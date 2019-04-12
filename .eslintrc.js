module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "quotes": [2, "double"],
        "camel-case": { "ignoreDestructuring": true },
        "no-trailing-spaces": { "ignoreComments": true },
        "no-inner-declerations": [0, "functions"],
    }
};