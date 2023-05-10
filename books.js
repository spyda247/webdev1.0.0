import Books from './data.js'

const temperatures = [28, 35, 34, 29, 32];

let average = sum(temperatures) / temperatures.length;

console.log(average);

/* Helper function */
/* function sum(arr) {
    let total = 0;
    for(let i=0; i<arr.length; i++) {
        total = total + arr[i]
    }
    return total;
} */


function sum(arr) {
  let total = 0;
  total = arr.reduce((acc, num) => acc + num, 0);
  return total;
}














