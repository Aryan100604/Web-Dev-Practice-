let getName = function (hobby1, hobby2) {
  console.log(
    `The name of the person is ${this.name} and it has two hobies one ${hobby1} and second ${hobby2}`
  );
};

let person = {
  name: "Sandy",
  address: "Chawri Bazar Old Delhi",
};
let hobbies = ["swiming", "Reading"];
let FindName = getName.bind(person, hobbies[0], hobbies[1]);
FindName();
