// DOM Elements
const feedPosts = document.querySelectorAll(".feed__post");

// New IntersectionObserver
const postObserver = new IntersectionObserver(showPosts);

// Cutting the mustard technique
if ("querySelector" in document) {
    document.body.classList.add("js-enabled");

    const now = new Date();
    now.setTime(now.getTime() + 1 * 3600 * 75);
    document.cookie = `js_enabled=true; expires=${now.toUTCString()}; path=/`;
}

// Handle feed posts
if ("IntersectionObserver" in window) {
    // Observe the feed posts
    feedPosts.forEach(observeFeedPost);
} else {
    feedPosts.forEach(feedPost, makeVisible);
}

function observeFeedPost(feedPost) {
  postObserver.observe(feedPost);
}

// Callback for the intersection observer, add the is--visible class to an entry if it is intersecting with the IU
function showPosts(entries) {
  entries.forEach(showPost);
}

function showPost(entry) {
  const entryClass = entry.target.classList;

  if (entry.isIntersecting) {
    entryClass.add("is--visible");
  }
}

function makeVisible(feedPost) {
  feedPost.classList.add("is--visible");
}