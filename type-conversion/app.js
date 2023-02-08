let val;

//* ... to String

// Number to string
val = 5;
val = String(5);
val = String(4 + 4);

// Boolean to string
val = String(true);

// Date to a string
val = String(new Date());

// Array to a string
val = String(1, 2, 3, 4);

// toString() method
val = (5).toString();
val = true.toString();

//* ... to Number

// String to number
val = Number("5"); // 5
val = Number("hello"); // NaN - not an number

// Boolean to number
val = Number(true); //1
val = Number(false); // 0
val = Number(null); //0

// Array to number
val = Number([1, 2, 3]); // Nan

// ParseInt() method
val = parseInt("100.30"); // 100
val = parseFloat("100.30"); // 100.30
