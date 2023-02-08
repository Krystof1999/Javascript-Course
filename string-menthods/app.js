const firstName = "Petr";
const lastname = "Big";
const str = "Hello there my name is Brad";

// apppend
val = "Adam ";
val += "Novotny"; //Adam Novotny

// length
val = firstName.length;

// concat
val = firstName.concat(" ", lastname); // Petr Big

// change case
val = firstName.toUpperCase();
val = firstName.toLower();

// indexOf()
val = firstName.indexOf("l"); // 2
val = firstName.lastIndexOf("l"); //3    -> it goes backwards from the string(firstName)

// charAt()
val = firstName.charAt("2"); // l
val = firstName.charAt(firstName.length - 1); // get the last character of the string

// substring()
val = firstname.substring(0, 4); //Will

val = firstName.slice(-3, 4); // it will start from the back

// split()
val = str.split(" "); // ["Hello", "there", "my" ...] split string in to the array based on the space

// replace()
val = str.replace("Brad", "Jack"); // replace Brad with Jack

// includes() - return true or false
val = str.includes("Hello"); //true
val = str.includes("xxxx"); //false
