class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  static getMemershipCost() {
    // Static - musim pouzit Customer - ne john
    return 50;
  }
}

const john = new Customer("John", "Doe", "123456789", "vip");

console.log(john.greeting());
console.log(Customer.getMemershipCost());
