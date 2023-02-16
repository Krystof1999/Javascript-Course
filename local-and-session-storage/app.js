// safe as string -json stringify
// get as a whatewer({}, [], ...) - json parse

// set local storage item
localStorage.setItem("name", "John");

// set session storage item - item will dissapear after browser is closed
sessionStorage.setItem("name", "John");

// remove from storage
localStorage.removeItem("name");

// Get from storage
const name = localStorage.getItem("name");

// Clear local storage
localStorage.clear();

document.querySelector("form").addEventListener("submit", function (e) {
  const task = document.getElementById("task").value;

  let tasks;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem("tasks"));

tasks.foreach((task) => {
  console.log(task);
});
