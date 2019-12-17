/*

Largest prime factor
Problem 3

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

*/

const isPrime = (n) => {
  let divisible = false;

  for (let i = 2; i < n; i += 1) {
    divisible = !(n % i);
    if (divisible) break;
  }

  return !divisible;
};

const nextPrime = (prime) => {
  let n = prime + 1;

  while (!isPrime(n)) {
    n += 1;
  }

  return n;
};

let divisor = 2; // first prime
let dividend = 600851475143;
let remainder;

while (dividend !== 1) {
  if ((dividend % divisor) > 0) {
    divisor = nextPrime(divisor);
  } else {
    remainder = dividend / divisor;
    dividend = remainder;
  }
}

console.log(divisor); // largest prime factor
