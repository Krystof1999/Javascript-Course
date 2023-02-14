// Global Scope
var a = 1;
let b = 2;
const c = 3;

function tes() {
  // function scope
  var a = 4;
  let b = 5;
  const c = 6;
}

// Block scope
if (true) {
  var a = 4;
  let b = 5;
  const c = 6;
}
