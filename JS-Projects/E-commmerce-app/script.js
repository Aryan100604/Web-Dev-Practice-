document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { name: "Shampoo", price: 50.0, id: 1 },
    { name: "Harpic", price: 80.2, id: 2 },
    { name: "Face Wash", price: 120.75, id: 3 },
  ];
  const CartEmpty = document.getElementById("cart-empty");
  const productList = document.getElementById("product-list");
  const CartCheckout = document.getElementById("cart-checkout");
  const CheckoutItems = document.getElementById("checkout-items");
  const displayBill = document.getElementById("total-bill");
  const CheckOutBtn = document.getElementById("Checkout-btn");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let totalBill = JSON.parse(localStorage.getItem("totalBill")) || 0;
  let CartId = JSON.parse(localStorage.getItem("CartId")) || 0;

  products.forEach((product) => {
    const productInfo = document.createElement("li");
    productInfo.innerHTML = `<span>${product.name} :$${product.price}</span>
    <button data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(productInfo);
  });
  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      CheckoutItems.innerHTML = "";
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((item) => item.id === productId);
      addToCart(product);
      displayCart();
    }
  });
  function addToCart(product) {
    const cartItem = { ...product, cartid: CartId };
    cart.push(cartItem);
    CartId++;
    totalBill += product.price;
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("totalBill", JSON.stringify(totalBill));
    localStorage.setItem("CartId", JSON.stringify(CartId));
  }
  function displayCart() {
    CartEmpty.classList.add("hidden");
    CartCheckout.classList.remove("hidden");
    cart.forEach((product, index) => {
      const productInfo = document.createElement("li");
      productInfo.innerHTML = `<span>
        ${product.name} : $${product.price} 
        </span>
        <button data-id="${product.cartid}">Remove</button>`;
      CheckoutItems.appendChild(productInfo);
    });
    displayBill.innerText = `Total Bill : ${totalBill}`;
  }
  CheckoutItems.addEventListener("click", async (e) => {
    if (e.target.tagName === "BUTTON") {
      const cartProductId = parseInt(e.target.getAttribute("data-id"));
      const product = cart.find((item) => item.cartid === cartProductId);
      totalBill -= product.price;
      cart = cart.filter((item) => item.cartid !== cartProductId);
      if (cart.length === 0) {
        CartCheckout.classList.add("hidden");
        CartEmpty.classList.remove("hidden");
        totalBill = 0;
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("totalBill", JSON.stringify(totalBill));
        localStorage.setItem("CartId", JSON.stringify(CartId));

        return;
      }
      CheckoutItems.innerHTML = "";
      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.setItem("totalBill", JSON.stringify(totalBill));
      localStorage.setItem("CartId", JSON.stringify(CartId));

      displayCart();
    }
  });
  CheckOutBtn.addEventListener("click", () => {
    alert(`Your Total Bill is ${totalBill}`);
    cart.length = 0;
    CartCheckout.classList.add("hidden");
    CartEmpty.classList.remove("hidden");
    totalBill = 0;
    CartId = 0;
    CheckoutItems.innerHTML = "";
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("totalBill", JSON.stringify(totalBill));
    localStorage.setItem("cartId", JSON.stringify(CartId));
  });
});
