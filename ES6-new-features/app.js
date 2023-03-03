// Iterator Example
// function nameIterator(names) {
//   let nextIndex = 0;

//   return {
//     next: function () {
//       return nextIndex < names.length
//         ? { value: names[nextIndex++], done: false }
//         : { done: true };
//     },
//   };
// }

// // Create an array of names
// const namesArr = ["Petr", "Lukas", "Adam"];
// // Init iterator and pass in the names array
// const names = nameIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);

// Generator Examples
function* sayNames() {
  yield "Jack";
  yield "Jill";
  yield "John";
  yield "Petr";
}

const name = sayNames();

console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);

// ID creator
function* createID() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

const gen = createID();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
