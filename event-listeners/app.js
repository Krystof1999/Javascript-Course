// document.querySelector("clear-tasks").addEventListener("click", function (e) {
//     console.log('clicked')

//     e.preventDefault() // pokud mam nejaky href u buttonu
// });

document.querySelector("clear-tasks").addEventListener("click", onclick);

function onclick(e) {
  // console.log('clicked')

  // Event target element
  e.target; // actual element (html)
  e.target.id;
  e.target.className;
  e.target.classList;

  // Event type
  e.type; // click

  // Timestamp
  e.timeStamp;

  // Coords event relative to the window
  e.clientY;
  e.clientX;

  // Coords event relative to the element
  e.offsetY;
  e.offsetX;
}
