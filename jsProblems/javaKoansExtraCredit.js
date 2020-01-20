// Question #1
// "should find the largest prime factor of a composite number"

// Composite Number = Positive integer 'n' where 'n' is not a prime

function isPrime(num) {
  for (let i=2;i<num;i++) {
    if (num%i===0) {
      return false
    }
  }

  return num === 1 ? false : true;
}

// Checking if prime number detector works
// console.log(isPrime(10))
// console.log(isPrime(2))

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
// console.log(largestPrimeFactor(7))
// console.log(largestPrimeFactor(18))
// console.log(largestPrimeFactor(21))
// console.log(largestPrimeFactor(40))




// Question #1
// "should find the largest palindrome made from the product of two 3 digit numbers"

function findPalindrome(digitSize) {
  let maxNum = Math.pow(10, digitSize) - 1;
  let minNum = Math.pow(10, digitSize-1);
  
  function getHighestPalindrome() {
    let firstNum = maxNum;
    let secondNum = maxNum;

    let highestPalindrome = 0;

    while (firstNum>minNum) {
      for (let i=secondNum;i>minNum;i--) {
        let product = firstNum * i;
        let arrOfProduct = String(product).split('');
        // console.log({firstNum, i});

        if (arrOfProduct.join('')===arrOfProduct.reverse().join('') && product > highestPalindrome) {
          highestPalindrome = product;

        }
      }
      firstNum = firstNum - 1
    }
    return highestPalindrome
  }
  return  getHighestPalindrome
}
// let palindrom2digits = findPalindrome(2)
// console.log("Palindrome for 2 digit products : " + palindrom2digits())

// let palindrom3digits = findPalindrome(3)
// console.log("Palindrome for 3 digit products : " + palindrom3digits())

// let palindrom4digits = findPalindrome(4);
// console.log("Palindrome for 4 digit products : " + palindrom4digits())





// Question #3
// "should find the smallest number divisible by each of the numbers 1 to 20"

function smallestDivisibleBy1And20(getUptilNum=20) {
  let number = getUptilNum;

  while (true) {
    for (let i=1; i < getUptilNum + 1; i++ ) {
      if (number%i===0) {
        // console.log(i)
        if (i === getUptilNum) {
          return number
        } else {
          continue
        }
      } else {
        break;
      }
    }

    number += 1;
  }
}

console.log(smallestDivisibleBy1And20(5))
console.log(smallestDivisibleBy1And20(10))
console.log(smallestDivisibleBy1And20(20))



// Question 4
// "should find the difference between the sum of the squares and the square of the sums"

// Given numbers e.g. [1, 2, 3, 4, 5, 6, 7,  8, 9]
// sum of squares => [1, 4, 9, 16, 25, 36, 49,  64, 81]
// square of sums => [45 ** 2]

//  -> use arguments...

function diffBetweenSumAndSQ () {
  let numbers = Array.from(arguments);
  let sumOfSquares = numbers.map((val) => Math.pow(val, 2)).reduce((acc, curr) => acc + curr);
  let squareOfSums = Math.pow(numbers.reduce((acc, curr) => acc + curr), 2);

  return sumOfSquares - squareOfSums;
}

// console.log(diffBetweenSumAndSQ(1, 2, 3, 4, 5, 6, 7, 8, 9))


// Question 5
// "should find the 10001st prime"

function findNthPrime(nthNumber) {
  let counter = 0;
  let number = 2;
  while (counter<nthNumber) {
    if (isPrime(number)) {
      counter += 1;
      if (counter === nthNumber) {
        return number;
      }
    }
    number += 1;
  }
}

// console.log(findNthPrime(5))
// console.log(findNthPrime(1001))
// console.log(findNthPrime(265))