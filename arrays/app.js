const numbers = [1, 22];
const numbers2 = new Array(2, 3, 4);
const fruits = ["ds", "s"];
const mixed = [22, false, { a: "23", b: 3 }, new Date()];

// get array length
val = numbers.length;

// check if is array
val = Array.isArray(numbers); // true
val = Array.isArray("sdf"); // false

// get single value
val = numbers[3];

// insert into array
numbers[2] = 100;

//find index of value
val = numbers.indexOf(22);

//* mutating arrays

// insert number at the end of the array
numbers.push(250);

// insert in the begining of the array
numbers.unshift(120);

// Delete the end
numbers.pop();

// delete from the front
numbers.shift();

// splice values
numbers.splice(1, 1); // start, end

// reverse array
numbers.reverse();

//* concatenate arrays

val = numbers.concat(numbers2); // it puts array1 and array2 together in to the one array

// sorting arrays
val = fruits.sort(); // alphabetical order

// sorting numbers
val = numbers.sort(function (x, y) {
  return x - y;
});

// sorting numbers in reverse
val = numbers.sort(function (x, y) {
  return y - x;
});

// find
function under50(number) {
  return number < 50;
}
val = numbers.find(under50);
