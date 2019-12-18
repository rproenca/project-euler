/*

Largest palindrome product

Problem 4

A palindromic number reads the same both ways. The largest palindrome
made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

*/

const MAX = 999;
let temp;
let largestPalindrome = 0;

const isPalindromic = (n) => {
  const s1 = String(n);
  const s2 = String(n).split('').reverse().join('');
  return s1 === s2;
};

for (let i = MAX; i >= 0; i -= 1) {
  for (let j = MAX; j >= 0; j -= 1) {
    temp = i * j;

    if (isPalindromic(temp) && temp > largestPalindrome) {
      largestPalindrome = temp;
    }
  }
}

console.log(`Largest palindrome: ${largestPalindrome}`);
