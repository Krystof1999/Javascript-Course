// SETS - Store unique values of any type

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add("string");
set1.add({ name: "Jphn" });
set1.add(true);
set1.add(100); // can not add the same again

const set2 = new Set([1, true, "string"]);

// Get count
set1.size(); // 4

// Check for values
set1.has(100); // true
set1.has(50 + 50); // true
set1.has({ name: "Jphn" }); // false

// Deleete from set
set1.delete(100);

// iterating through set

// for.. of
for (let item of set1) {
  console.log(item);
}

// forEach loop
set1.forEach((value) => {
  clg;
});

// convert set to array

const array = Array.from(set1);
