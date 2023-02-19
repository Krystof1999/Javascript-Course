const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");
const deleteT = document.querySelector(".delete-item");

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
  form.addEventListener("submit", addTask);
  clearBtn.addEventListener("click", deleteAll);
  taskList.addEventListener("click", deleteTask);
}

// Add task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  }

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

  // clear task input
  taskInput.value = "";
}

function deleteAll() {
  //   taskList.innerHTML = "";
  // Faster
  while (taskList.firstChild) {
    // dokud to ma nejaky child
    taskList.removeChild(taskList.firstChild); // remove first child
  }
  // https://jsperf.com/innerhtml-vs-removechild
}

function deleteTask(e) {
  if (e.target.className == "fa fa-remove") {
    e.target.parentElement.parentElement.remove();
  }

  //   // another way
  //   if (e.target.parentElement.classList.contains("delete-item")) {
  //     e.target.parentElement.parentElement.remove();
  //   }
}
