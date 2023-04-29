const add2cart = document.querySelector('.add2cart');
const cart = document.querySelector('.qty');
console.log(cart)
let counter = 0;
add2cart.addEventListener('click', function(e) {
    e.preventDefault;
    counter++;
    cart.textContent = counter;
});