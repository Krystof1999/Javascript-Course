class Person {
  constructor(firsName, lastName, dob) {
    this.firsName = firsName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return "Hello";
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  static addNumbers(x, y) {
    return x + y;
  }
}

const mery = new Person("Mery", "Smith", "11-12-1999");

console.log(mery.getsMarried("Smith2"));

// console.log(mery.addNumbers(1, 2)); // cant

console.log(Person.addNumbers(1, 3));
