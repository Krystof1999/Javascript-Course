// String

const name1 = "Jeff";
const name2 = new String("Bob");

// name2.foo = 'bar'
console.log(name1);

console.log(typeof name2); // Object - not string

// number

const num1 = 5;
const num2 = new Number(5);

// Boolean
const bol1 = true;
const bol2 = new Boolean(true);

// Function

const getSum1 = function (x, y) {
  return x + y;
};

const getSum2 = new Function("x", "y", "return 1 + 1");

// Object
const john1 = { name: "John" };
const john2 = new Object({ name: "John" });

// Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

// Regular Expressions
const rel1 = /\w+/;
const rel2 = RegExp("\\w+");
