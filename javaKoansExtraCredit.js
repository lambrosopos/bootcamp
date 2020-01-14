/*
"should find the largest prime factor of a composite number"

"should find the largest palindrome made from the product of two 3 digit numbers"

"should find the smallest number divisible by each of the numbers 1 to 20"

"should find the difference between the sum of the squares and the square of the sums"

"should find the 10001st prime"
*/

// Question #1
// "should find the largest prime factor of a composite number"

// Composite Number = Positive integer 'n' where 'n' is not a prime

function isPrime(num) {
  for (let i=2;i<num;i++){
    if (num%i===0) {
      return false
    }
  }

  return num === 1 ? false : true;
}

// Checking if prime number detector works
console.log(isPrime(10))
console.log(isPrime(2))

function largestPrimeFactor(compositeNum) {
  if (compositeNum < 1 || isPrime(compositeNum)) {
    return "Not a composite number"
  }

  for (let i=Math.floor(compositeNum/2);i>1;i--) {
    if (compositeNum%i===0 && isPrime(i)) {
      return i
    }
  }
}

// Checking largest prime factor function
console.log(largestPrimeFactor(7))
console.log(largestPrimeFactor(18))
console.log(largestPrimeFactor(21))
console.log(largestPrimeFactor(40))

