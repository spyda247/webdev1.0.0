const add2cart = getDOM(".add2cart");
const totalPrice = getDOM(".total-price");
const qty = getDOM(".qty");
const product = getDOM(".product");
const showCart = getDOM('.show-cart');
const cartItems = getDOM('.cart-items')
const productThumbs = getAllDOM(".product-thumb");

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

const toggleShowCart = () => {
  cartItems.classList.toggle('show')
  cartItems.classList.contains('show') 
    ? showCart.textContent = 'Hide Cart'
    : showCart.textContent = 'Show Cart';
}

showCart.addEventListener('click', () => toggleShowCart());

/* Helper functions */
function getDOM(element) {
  return document.querySelector(element)
}
function getAllDOM(element) {
  return document.querySelectorAll(element)
}
