const add2cart = document.querySelector(".add2cart");
const totalPrice = document.querySelector(".total-price");
const qty = document.querySelector(".qty");
const product = document.querySelector(".product");
const productThumbs = document.querySelectorAll(".product-thumb");
const productPrice = 24.5;

let counter = 0;
let total = 0;

add2cart.addEventListener("click", function (e) {
  e.preventDefault();
  counter++;
  qty.textContent = counter;
  total = total + productPrice;
  totalPrice.textContent = total.toFixed(2);
});

function updateProduct(thumb) {
  const path = thumb.getAttribute("src");
  product.setAttribute("src", path);
  console.log(thumb);
}

productThumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => updateProduct(thumb));
});
