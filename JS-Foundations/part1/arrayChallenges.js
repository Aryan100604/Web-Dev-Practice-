// const cities = ["Delhi", "Mumbai"];
// const topCities = cities;
// cities.push("Tiruvantaouram");

// console.log(cities);
// console.log(topCities);
// const tea = ["Coffee", "Masala Tea", "Iced Tea"];
// const newTea = [...tea];
// newTea.push("latte");
// console.log(newTea);

// const europeanCites = ["Rome", "Barcelona"];
// const asianCities = ["Tokyo", "Seoul"];
// const worldCities = [...asianCities, ...europeanCites];
// const WorldCitites = asianCities.concat(europeanCites);
// console.log(worldCities);
// console.log(WorldCitites);

const economicCities = ["London", "NYC", "Shenghai"];
let isLondoninList = economicCities.includes("London");
console.log(isLondoninList);
// let tea;

// const TeaCollection = [];
// do {
//   tea = prompt("Enter your tea");
//   if (tea !== "stop") TeaCollection.push(tea);
// } while (tea !== "stop");

// console.log(TeaCollection);

let numbers = [2, 4, 6];
let newnumbers = [];
for (let i = 0; i < numbers.length; i++) {
  newnumbers.push(numbers[i] * 2);
}
console.log(newnumbers);
console.log(numbers);
