class Employee {
  #_salary;
  constructor(name, salary) {
    this.name = name;
    this.#_salary = salary;
  }

  get salary() {
    return "You cannot view the salary of a person Sorry!";
  }
  set salary(value) {
    this.#_salary = value;
  }
}

let Aditya = new Employee("Aditya", "50000");
Aditya.salary = 90000;
console.log(Aditya.salary);
