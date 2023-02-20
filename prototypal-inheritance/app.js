const personPrototypes = {
  greeting: function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function (newLastName) {
    this.lastName = newLastName;
  },
};

const mery = Object.create(personPrototypes);
mery.firstName = "Mery";
mery.lastName = "Smith";
mery.age = 30;

mery.getsMarried("Smith2");

console.log(mery.greeting());

// Another way
const brad = Object.create(personPrototypes, {
  firstName: { value: "Brad" },
  lastName: { value: "Smith" },
  age: { value: 22 },
});

console.log(brad.greeting());
