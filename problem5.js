/*

Smallest multiple

Problem 5

2520 is the smallest number that can be divided by each of the numbers
from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

*/

const MAX = 20;
let n = 1;
let evenlyDivisible = false;

while (!evenlyDivisible) {
  for (let i = 1; i <= MAX; i += 1) {
    if (n % i) {
      n += 1;
      evenlyDivisible = false;
      break;
    }

    evenlyDivisible = true;
  }
}

console.log(n);
