let Para = document.getElementById("OldPara");
let btn = document.getElementById("changePara");
btn.addEventListener("click", function () {
  Para.textContent = "This is the new Para.";
});

let hlElement = document.getElementById("firstCity");
let hlBtn = document.getElementById("hl-first-city");

hlBtn.addEventListener("click", function () {
  hlElement.classList.add("highlight");
});

let order = document.getElementById("Order");
let changeOrderBtn = document.getElementById("changeOrder");
changeOrderBtn.addEventListener("click", function () {
  order.textContent = "Expresso";
  order.style.backgroundColor = "blue";
  order.style.padding = "10px";
  order.style.color = "white";
});

// document.getElementById("AddItem").addEventListener("click", function () {
//   let ShpList = document.getElementById("shopping-list");
//   ShpList.innerHTML = ShpList.innerHTML + "<li>5 kg Banana</li>";
// });
document.getElementById("AddItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "5kg Banana";
  let ShpList = document.getElementById("shopping-list");
  ShpList.appendChild(newItem);
});
document.getElementById("RemoveItem").addEventListener("click", function () {
  let ShpList = document.getElementById("shopping-list");
  ShpList.lastElementChild.remove();
});

document
  .getElementById("player-list")
  .addEventListener("click", function (event) {
    if (event.target && event.target.matches(".player"))
      alert(event.target.textContent);
  });

document
  .getElementById("feedbackSubmit")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackinput").value;
    let display = document.getElementById("feedbackDisplay");
    display.innerText = feedback;
  });
document.addEventListener("DOMContentLoaded", function () {
  let DomStatus = document.getElementById("DomStatus");
  DomStatus.textContent = "Dom is fully loaded";
});

// let highlight = false;
// document
//   .getElementById("toggleHighlight")
//   .addEventListener("click", function () {
//     let text = document.getElementById("toggleText");
//     if (!highlight) {
//       text.classList.add("highlight");
//       highlight = true;
//     } else {
//       text.classList.remove("highlight");
//       highlight = false;
//     }
//   });

document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let text = document.getElementById("toggleText");
    text.classList.toggle("highlight");
  });
