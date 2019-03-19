# Contributing to my `project-tech` repo
I'm glad you're interested in working on my repo! Here are some contributing and code standards to help you on your way with contributing to this project.

## Pull requests
When you want to actively contribute to this repository, please first discuss the change you want to make by opening an [issue]() or emailing me. Please be brief yet descriptive when submitting a pull request. 

## Commit messages
When you're doing commits it would be nice if others would be able to read what you've done, so always be brief but descriptive in your commit messages, like so:

```
git commit -m "Add upload functionality to form"
```

Or, if you need multiple lines:

```
git commit -m "Refactor index.js
> 1. Use ES6 arrow-functions instead of ES5 functions
> 2. Add consistent spacing everywhere"
```

## Code standards
Most of the code styling standards are configured in the .eslintrc file. Here are some simple standards you can adhere to when contributing to this project:



### Make functions say what they do:
This improves the readability of your code and makes your code more predictable without having to read what all the functions do.

```js
// Bad:
function add(number) {
    return number + 2;
}

// Good:
function addTwo(number) {
    return number + 2;
}
```

### Set DOM-elements in variables:
It not only improves readability of your code, the script also has to do less lookups to the document to find out which element you're talking which improves the performance of your code slightly.

```js
// Bad:
document.querySelector("p").textContent = "Hello world";
document.querySelector("button").addEventListener("click", handleClick);

// Good:
const paragraph = document.querySelector("p");
const button = document.querySelector("button");

paragraph.textContent = "Hello world";
button.addEventListener("click", handleClick);
```

### Make use of hoisting to structure your code:
This implies that you have to use ES5 functions globally since these are the only functions that get hoisted. Also it's easier for other developers to know what's actually going on and where to look when there's a bug.
```js
// Bad:
const paragraph = document.querySelector("p");

function changeText() {
    paragraph.textContent = "Hello world";
}

paragraph.addEventListener("click", changeText);

const button = document.querySelector("button");

function handleClick() {
    // do something
}

button.addEventListener("click", handleClick);

// Good:
const paragraph = document.querySelector("p");
const button = document.querySelector("button");

paragraph.addEventListener("click", changeText);
button.addEventListener("click", handleClick);

function changeText() {
    paragraph.textContent = "Hello world";
}

function handleClick() {
    // do something
}

// If you really wnat to use ES6 arrow (named) functions, I suggest you do it this way (only if it fits on one line):
const changeText = () => paragraph.textContent = "Hello ES6";
const handleClick = () => /* do something */;

const paragraph = document.querySelector("p");
const button = document.querySelector("button");

paragraph.addEventListener("click", changeText);
button.addEventListener("click", handleClick);
```

### Specific argument data-types
When arguments of a function need a specific data type, then comment out what that should be above the function or name the parameter after the data type:
```js
// Bad:
function addOne(data) {
    return data.map(item => item + 1);
}

// Good:
// addOne arg: arr (array of numbers)
function addOne(arr) {
    return data.map(item => item + 1);
}
```