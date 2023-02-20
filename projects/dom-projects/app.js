const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");
const deleteT = document.querySelector(".delete-item");

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
  document.addEventListener("DOMContentLoaded", getTasks);

  form.addEventListener("submit", addTask);
  clearBtn.addEventListener("click", deleteAll);
  taskList.addEventListener("click", deleteTask);
  filter.addEventListener("keyup", filterTask);
}

// Add task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  } else {
    // Create new task
    const li = document.createElement("li");
    li.className = "collection-item";
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);

    e.preventDefault();

    // Local storage
    storeTaskInLocalStorage(taskInput.value);
  }

  // clear task input
  taskInput.value = "";
}

// Get tasks from local storage

function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach((task) => {
    // Create new task
    const li = document.createElement("li");
    li.className = "collection-item";
    li.appendChild(document.createTextNode(task));
    const link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);
  });
}

function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteAll() {
  //   taskList.innerHTML = "";
  // Faster
  while (taskList.firstChild) {
    // dokud to ma nejaky child
    taskList.removeChild(taskList.firstChild); // remove first child
  }
  // Local storage
  removeAllFromLocalStorage(taskList);

  // https://jsperf.com/innerhtml-vs-removechild
}

function removeAllFromLocalStorage() {
  localStorage.clear();
}

function deleteTask(e) {
  if (e.target.className == "fa fa-remove") {
    e.target.parentElement.parentElement.remove();
  }

  // Remove from Local storage
  removeFromLocalStorage(e.target.parentElement.parentElement);
  //   // another way
  //   if (e.target.parentElement.classList.contains("delete-item")) {
  //     e.target.parentElement.parentElement.remove();
  //   }
}

function removeFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach((task, index) => {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function filterTask(e) {
  const text = e.target.value.toLowerCase();

  const tasks = document.querySelectorAll(".collection-item");

  tasks.forEach((task) => {
    const item = task.firstChild.textContent;

    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
