// Destructuring Assignment

let a, b;
[a, b] = [100, 200](
  // Rest pattern
  ([a, b, c, ...rest] = [100, 200, 300, 400, 500](
    ({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 })

    //
  ))
)(({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 }));

// Array destructuring

const people = ["John", "Beth", "Mike"];
const [person1, perso2, person3] = people;

// Parse array returned form function
function getPeople() {
  return ["John", "Beth", "Mike"];
}

let person4, person5, person6;
[person4, person5, person6] = getPeople();

// Object destructuring
const person = {
  name: "John",
  age: 30,
  city: "LBC",
};

// Old ES5
// const name = person.name,
//   age = person.age,
//   city = person.city;

// New ES6
const { name, age, city } = person;
