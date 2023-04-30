const add2cart = document.querySelector(".add2cart");
const qty = document.querySelector('.qty');
const totalPrice = document.querySelector(".total-price")
const productPrice = 24.5;

let counter = 0;
let total = 0;

add2cart.addEventListener('click', function(e) {
    e.preventDefault();
    counter++;
    qty.textContent = counter;
    total = total + productPrice;
    totalPrice.textContent = total.toFixed(2);
})


