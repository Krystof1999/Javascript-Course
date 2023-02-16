// REPLACE ELEMENT

// Create element
const newHeading = document.createElement("h2");

// Add id
newHeading.id = "task-title";
// New text node
newHeading.appendChild(document.createTextNode("Task List"));

// Get the old heading that we wont to replace
const oldHeading = document.getElementById("task-title");
// Parent
const cardAction = document.querySelector(".card-action");

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// CLASSES AND ATTRIBUTES

const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0];

// Classes
link.className;
link.classList;
link.className[0];
link.classList.add("test");
link.classList.remove("test");

// Attributes
link.getAttribute("href");
link.setAttribute("href", "http://google.com");
link.setAttribute("title", "google");
link.hasAttribute("href");
link.removeAttribute("title");
