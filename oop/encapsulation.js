// Process of wrapping property and function within a single unit is called encapsulation//
// the best function is with fewer parameter
// abstraction is process where only required property is shown while hiding others
class Employee {
  constructor(name, id, baseSalary, overtime, rate) {
    this.name = name;
    this.id = id;
    this.baseSalary = baseSalary;
    this.overtime = overtime;
    this.rate = rate;
  }

  calculateSalary() {
    return this.baseSalary + this.overtime * this.rate;
  }

  getDetails() {
    return `The id of ${this.name} is ${this.id}`;
  }
}

let employee1 = new Employee('Dominic', 665);
let employee2 = new Employee('Diaz', '72', 25000, 500, 5);

console.log(employee1.name);
console.log(employee2.calculateSalary());
