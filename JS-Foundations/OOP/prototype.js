const computer = { cpu: 12 };
const lenovo = {
  __proto__: computer,
  screen: "HD",
};
const hp = {};
console.log("COMPUTER", lenovo.__proto__);

let genricCar = {
  tyres: 4,
};
let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genricCar);
console.log("Tesla", Object.getPrototypeOf(tesla));
