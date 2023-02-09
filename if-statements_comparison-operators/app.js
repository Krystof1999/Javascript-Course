const id = 100;

// equal to
if (id == 100) {
}

// not equal to
if (id != 100) {
}

//
id = "100";
// equal to value and type
if (id === 100) {
}

// not equal to value and type
if (id !== 100) {
}

// test if undefined
if (typeof id !== undefined) {
}

// If else

const color = "red";

if (color === "red") {
  console.log("Color is red");
} else if (color === "blue") {
  console.log("Color is blue");
} else {
  console.log("No color match");
}

// AND
// &&

// OR
// ||

//* TERNARY OPERATOR

console.log(id === 100 ? "correct" : "incorrect");
