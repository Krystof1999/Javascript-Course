// Create a symbol
const sym1 = Symbol();
const sym2 = Symbol("sym2");

// Unique Object keys
const KEY1 = Symbol();
const KEY2 = Symbol("sym2");

const myObj = {};

myObj[KEY1] = "prop1";
myObj[KEY2] = "prop2";

// Symbols are not enumerable in for..in loop
// Symbols are ingnored by JSON.stringify()
