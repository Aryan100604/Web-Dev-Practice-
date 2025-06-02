function Person(name, gender) {
  this.name = name;
  this.gender = gender;
  this.describe = function () {
    return `The name of the person is ${this.name} and the age is ${this.gender}`;
  };
}

Person.prototype.swims = function () {
  return `${this.name} swims`;
};
const User1 = new Person("Aditya", "male");
console.log(User1.describe());
console.log(User1.swims());
