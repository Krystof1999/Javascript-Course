const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

// Click
clearBtn.addEventListener("click", runEvent);
// DoubleClick
clearBtn.addEventListener("dblclick", runEvent);
// Mousedown - mousedown
// MouseUp -mouseup
// MouseEnter - mouseenter
// MouseLeave - mouseleave
// MouseOver - mouseover
// MouseOut - mouseout
// MouseMove - mousemove

// Event Handler
function runEvent(e) {
  // for MouseMove
  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
