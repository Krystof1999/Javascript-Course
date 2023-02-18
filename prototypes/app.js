// Object.prototype
// Person.prototype

// Person constructor
function Person(firstName, lastName, dateOfBirth) {
  this.firstName = firstName;
  this.lastName - lastName;
  this.birthday = new Date(dateOfBirth);
}

// Prototypes methods
// Calculate age
Person.prototype.calculateAge = () => {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// Get full name
Person.prototype.getFullName = () => {
  return `${this.firstName} ${this.lastName}`;
};

// Get Married
Person.prototype.getsMaried = (newLastName) => {
  this.lastName = newLastName;
};
merry.getsMaried("Smith");
Person.prototype;

const john = new Person("John", "Doe", "8-12-90");
const merry = new Person("Merry", "Johnson", "March 20 1978");

// hasOwnProperty
merry.hasOwnProperty("firstName"); // true
merry.hasOwnProperty("getFullName"); // false

//ghfrf
