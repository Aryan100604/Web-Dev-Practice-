const beverage = ["Black Coffee", "Redbul", "Chai", "Pepsi"];
const selectedBeverage = [];
for (let i = 0; i < beverage.length; i++) {
  if (beverage[i] === "Chai") {
    continue;
  }
  selectedBeverage.push(beverage[i]);
}

console.log(selectedBeverage);

let numbers = [1, 2, 4, 5, 6];
let smallnumbers = [];
for (const element of numbers) {
  if (element === 4) {
    break;
  }

  smallnumbers.push(element);
}
console.log(smallnumbers);
console.log(numbers);

let worldCities = {
  Delhi: 900000,
  Sydney: 560000,
  Kolkata: 800000,
  Dimapur: 200000,
  London: 400000,
};
const largeCities = {};

for (const city in worldCities) {
  if (worldCities[city] < 300000) {
    continue;
  }
  largeCities[city] = worldCities[city];
}

console.log(largeCities);
function OrderTea(teaType) {
  function ConfirmOrder(TeaType) {
    return `Ordeer Confirmed for ${TeaType}`;
  }
  return ConfirmOrder(teaType);
}

const tea = OrderTea("Pepsi");
console.log(tea);

const calcuclateTotal = (price, quantity) => {
  return price * quantity;
};

const totalCost = calcuclateTotal(4, 5);
console.log(totalCost);
