// function declarations

function greet(firstName = "John") {
  return "Hello" + firstName;
}

console.log(greet());

// functions expressions

const square = function (x = 3) {
  // 3 by default if I do just square()
  return x * x;
};

console.log(square(8))(
  // imidiately invokable function expressions - IIFEs

  function (name) {
    console.log("hello" + name);
  }
)("Adam");

// property methods

const todo = {
  add: function () {
    console.log("add todo");
  },
  edit: function (id) {
    console.log(`edit ${id}`);
  },
};

todo.delete = function () {
  console.log("delete");
};

todo.add();
todo.edit(22);
