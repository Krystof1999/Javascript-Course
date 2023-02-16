const form = document.querySelector("form");
const taskInput = document.querySelector("task");

// Clear input
taskInput.value = "";

form.addEventListener("submit", runEvent);

// KeyDown - keydown
// KeyUp - keyup
// KeyPress - keypress
// Focus - focus
// Blur - blur
// Cut - cut (ctrl x)
// Paste - paste
// Change - change

function runEvent(e) {
  e.preventDefault();

  // Get value
  taskInput.value; // value of the input of form
}
