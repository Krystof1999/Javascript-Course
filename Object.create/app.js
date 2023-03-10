// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function () {
  return `Hello ${this.firstName} ${this.lastName}`;
};

const person1 = new Person("John", "Doe");

console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName); // this, parametry co jsou v Person

  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype methods;
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer("Tom", "Smith", "123456789", "standard");

console.log(customer1);

// Customer greeting
Customer.prototype.greeting = function () {
  return `Hello ${this.firstName} ${this.lastName} welcome to our company`;
};

console.log(customer1.greeting());
