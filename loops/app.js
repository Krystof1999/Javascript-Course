// for loop
for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log("2");
    continue;
  }

  if (i === 3) {
    break;
  }
}

// while loop
let i = 0;

while (i < 10) {
  console.log("hi");
  i++;
}

// do while loop - always going to run at least once
let i = 0;

do {
  console.log("hi");
  i++;
} while (i < 10);

// loop through array
const cars = ["Ford", "Skoda", "VW"];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// for each
cars.forEach(function (car, index, array) {
  console.log(`${index} : ${car}`);
  console.log(array);
});

// map
const users = [
  { id: 1, name: "Adam" },
  { id: 2, name: "Petr" },
  { id: 3, name: "Tod" },
];
const idss = users.map(function (user) {
  return user.id;
});

// for in
const user = {
  firstName: "John",
  age: "23",
};

for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}
