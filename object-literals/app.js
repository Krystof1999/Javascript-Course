const person = {
  firstName: "Steve",
  lastName: "Smith",
  age: 30,
  email: "email@e.com",
  hobbies: ["music", "sports"],
  adress: {
    city: "Miamy",
    state: "FL",
  },
  getBirtYar: function () {
    return 1988 - this.age;
  },
};

let val;

val = person;

// get specific value
val = person.firstName; // Steve
val = person["firstName"]; // Steve
val = person.hobbies; // ["music", "sports"]
val = person.hobbies[1]; // ["sports"]
val = person.adress.state; // FL
val = person.adress["state"]; // FL
val = person.getBirtYar();

//* array of objects

const people = [
  { name: "John", age: 30 },
  { name: "Mike", age: 20 },
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name); // John, Mike
}
