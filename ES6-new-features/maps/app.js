// MAPS = key-value pairs - can use any type as  a key or a value

const map1 = new Map();

// set keys
const key1 = "some string";
const key2 = {};
const key3 = function () {};

// set map values by key
map1.set(key1, "Value of key1");
map1.set(key2, "Value of key2");
map1.set(key3, "Value of key3");

// get values by keys
console.log(map1.get(key1));

// Count values
map1.size(); // 3

// Iterating maps

// loop using foor..of loop to get keys and values
for (let [key, value] of map1) {
  console.log(key, value);
}

// iterate keys only
for (let key of map1.keys()) {
  console.log(key);
}

//iterate values only
for (let value of map1.values()) {
  console.log(value);
}

// Loop with for each
map1.forEach((value, key) => {
  console.log(key, value);
});

// Convert to arrays
// create array of the key value pairs
const keyValArr = Array.from(map1);
console.log(keyValArr);
