import Books from './data.js'

// let average = sum(temperatures) / temperatures.length;

// console.log(average);

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

/* Write a function that takes an array of temperature values and 

1. Multiples each value by 3 

2. Filers out the lowest temperature

3. Return the sum of the new array

*/

const temperatures = [28, 24, 35, 31, 32];

/* const result = temperatures.map((temp) => temp * 3)
 */
/* const minValue = Math.min(...result); //-> 

const filtered = result.filter(temp => temp !== minValue)

const nSum = filtered.reduce((total, temp) => total + temp) */


function processTemperatures(arr) {
  let newarr = arr.map((temp) => temp * 3);
  const minValue = Math.min(...newarr); 
  newarr = newarr.filter((temp) => temp !== minValue);
  newarr = newarr.reduce((total, temp) => total + temp);
  return newarr;
}

console.log(processTemperatures([28, 55, 102, 31, 32]));
console.log(processTemperatures([10, 10, 10, 1, 1]));
console.log(processTemperatures(temperatures))






































