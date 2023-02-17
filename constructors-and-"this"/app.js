// Person constructor
function Person(name, dateOfBirth) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dateOfBirth);
  this.calculateAge = () => {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

const brad = new Person("Brad", "9-19-1999");

console.log(brad.calculateAge());
