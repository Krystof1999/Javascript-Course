// document.getElementById()

document.getElementById("task-title");

// get thing from the element
document.getElementById("task-title").id;
document.getElementById("task-title").className;

// change styling
document.getElementById("task-title").style.background = "red";

// change content
document.getElementById("task-title").textContent = "Task List";
document.getElementById("task-title").innerText = "My tasks";
document.getElementById("task-title").innerHTML =
  "<span style=color:red>Task List</span>";

// document querySelector()

document.querySelector("#task-title");
document.querySelector(".card-title");
document.querySelector("h5");
document.querySelector("ul li").style.color = "red";
document.querySelector("li:last-child").style.color = "red";
document.querySelector("li:nth-child(3)").style.color = "red";

// SELECTORS FOR MULTIPLE ELEMENTS

//document.getElemetnByClassName()

const items = document.getElementsByClassName("collection-item");

items[0];
items[3].style.color = "red";

let listItems = document
  .querySelector("ul")
  .getElementsByClassName("collection-item");

// getElemetnByTagName()
const lis = document.getElementsByTagName("li");

lis[0];
lis[3].style.color = "red";

// Convert HTML Collection into array
lis = Array.from(lis);

lis.forEach((li) => {
  console.log(li);
});

// querySelectorAll() - can do forEach withou convertion

const items = document.querySelectorAll("ul.collection li.collection-item");

items.forEach((item, index) => {
  item.textContent = `${index} Hello`;
});

const liOdd = document.querySelectorAll("li:nth-child(odd)");
const liEven = document.querySelectorAll("li:nth-child(even)");

liOdd.forEach((li, index) => {
  li.style.background = "red";
});
