//========================================
// 003_convertArrayToObject2
//========================================

/*
Write a function 'fromListToObject' which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair. (2차원 배열을 입력으로 받고 배열안에 있는 배열의 요소 페어를 키-값 페어로 가지는 객체를 반환하는 함수 'fromListToObject' 함수를 작성하세요.)

Example input:

[['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
Function's return value (output):

{
  make : 'Ford'
  model : 'Mustang',
  year : 1964
}
Do not change the input string. Assume that all elements in the array will be of type 'string'. (입력으로 받는 문자열은 수정하지 마세요. 입력으로 받는 배열의 요소들은 모두 문자열 타입입니다.)

Note that the input may have a different number of elements than the given sample. (입력으로 받는 배열의 크기는 다양할 수 있다는 점을 유의하세요.) For instance, if the input had 6 values instead of 4, your code should flexibly accommodate that. (예를들어, 입력값에 4개 대신 6개의 요소가 있다면, 여러분의 코드는 해당 사항을 유연히 대처 할 수 있어야 합니다.)
*/

function fromListToObject(array) {
  //your code here
  let result = {};
  for (let i = 0; i < array.length; i++) {
    result[array[i][0]] = array[i][1];
  }
  return result;
}

// console.log(fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]));

function fromListToObject2(array) {
  let result = {};
  array.forEach(element => (result[element[0]] = element[1]));

  return result;
}

// console.log(fromListToObject2([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]))

function fromListToObject3(array) {
  return array.reduce(
    (acc, cur) => ({
      ...acc,
      [cur[0]]: cur[1]
    }),
    {}
  );
}

// console.log(fromListToObject3([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]))

function fromListToObject4(array) {
  return array.reduce((acc, cur) => {
    acc[cur[0]] = cur[1];
    return acc;
  }, {});
}

// console.log(fromListToObject4([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964], ['make', 'Ford'], ['he', 'she']]))

//========================================
// transformEmployeeData
//========================================
/*
사원들의 정보를 다른 형태로 변형 할 수 있는 함수 "transformEmployeeData" 함수를 작성하세요.

사원들의 정보는 아래와 같은 배열로 주어질 수 있습니다.

[
  [
    ['firstName', 'Joe'],
    ['lastName', 'Blow'],
    ['age', 42],
    ['role', 'clerk']
  ],
  [
    ['firstName', 'Mary'],
    ['lastName', 'Jenkins'],
    ['age', 36],
    ['role', 'manager']
  ]
];
위의 배열이 input으로 주어진다면, 다음과 같은 output을 리턴해야합니다.

[
  { firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' },
  { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }
];
입력값에는 예시와 다른 키값들이 있을 수도 있고 사원수가 다를 수도 있습니다. 예를 들어, 인사팀에서 "tshirtSize"를 각 사원들의 정보에 넣었다면, 여러분의 코드는 해당 사항을 유연히 대처 할 수 있어야 합니다.

*/

function transformEmployeeData(array) {
  // return array.map((val) => {
  //     val.reduce((acc, cur) => ({
  //         ...acc,
  //         cur[0] : cur[1]
  //     }), {})
  // })
  return array.map(function(val) {
    return val.reduce((acc, cur) => ({ ...acc, [cur[0]]: cur[1] }), {});
  });
}

let array = [
  [["firstName", "Joe"], ["lastName", "Blow"], ["age", 42], ["role", "clerk"]]
  // [
  //   ['firstName', 'Mary'],
  //   ['lastName', 'Jenkins'],
  //   ['age', 36],
  //   ['role', 'manager']
  // ]
];

let output = transformEmployeeData(array);
// console.log(output);

let dictA = {
  firstName: "Sloppy",
  lastName: "Joes",
  age: "54",
  role: "great"
};

let arrA = [1, 2];

let dictB = { ...dictA, [arrA[0]]: arrA[1] };

//
// console.log(dictA)
// console.log(dictB)

//========================================
// 006_convertObjectToArray3.js
//========================================
/*
초기화
테스트 실행

Write a function called "convertObjectToList" which converts an object literal into an array of arrays, like this: (객체를 입력으로 받고 해당 객체를 다음과 같이 2차원 배열로 변형 할 수 있는 함수 "convertObjectToList"를 작성하세요.)

Argument:

{
name: 'Holly',
age: 35,
role: 'producer'
}
Return value:

[['name', 'Holly'], ['age', 35], ['role', 'producer']];
Note that your function should be able to handle ANY object like this, not just the exact sample provided above. (여러분이 작성하신 함수는 위에 제시된 예시 뿐만 아니라 어떠한 객체도 다룰 수 있어야 합니다.)
*/
let objA = {
  name: "Holly",
  age: 35,
  role: "producer"
};

function convertObjectToList(obj) {
  // your code here
  let result = [];
  for (key in obj) {
    result.push([key, obj[key]]);
  }
  return result;
}

// console.log(convertObjectToList(objA));

function convertObjectToList2(obj) {
  return Object.keys(obj).map((val, idx) => {
    return [val, Object.values(obj)[idx]];
  });
}

// console.log(convertObjectToList2(objA))

//========================================
// 007_greetCustomers.js
//========================================
/*
모델 솔루션
제출 취소하기

Write a function called "greetCustomer". ("greetCustomer" 함수를 작성하세요.)

Given a name, "greetCustomer" returns a greeting based on how many times that customer has visited the restaurant. Please refer to the customerData object. (고객들의 방문 횟수를 가지고 있는 객체와 이름이 주어졌을때, "greetCustomer" 함수는 손님이 몇번 방문했는지에 따라 다른 인삿말을 반환합니다. customerData 객체를 참고해 주세요.)

customerData의 형식은 아래와 같습니다.
*/

/*
The greeting should be different, depending on the name on their reservation. (손님들의 예약에 나타나 있는 이름에 따라 인삿말이 달라야 합니다.)

Case 1 - Unknown customer ( Name is not present in customerData ): (상황 1 - 처음 방문한 손님 (customerData에 이름이 없을경우):)

let output = greetCustomer(customerData, 'Terrance');
console.log(output); // --> 'Welcome! Is this your first time?'
Case 2 - Customer who has visited only once ( 'visits' value is 1 ): (상황 2 - 한번 방문했던적이 있는 손님 ('visits'의 값이 1인 경우):)

let output = greetCustomer(customerData, 'Joe');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
Case 3 - Repeat customer: ( 'visits' value is greater than 1 ): (상황 3 - 여러번 방문한 손님 ('visits'의 값이 1보다 큰 경우):)

let output = greetCustomer(customerData, 'Carol');
console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'
Notes:

Your function should not alter the customerData object to update the number of visits. (- 여러분의 함수는 방문수를 업데이트 하기위해 customerData 객체를 수정하여서는 안됩니다.)
Do not hardcode to the exact sample data. This is a BAD IDEA: (샘플 데이터를 하드코딩 하지 마세요. 좋지 않은 생각입니다.)
if (firstName === 'Joe') {
  // do something
}

*/
let customerData = {
  Joe: {
    visits: 1
  },
  Carol: {
    visits: 2
  },
  Howard: {
    visits: 3
  },
  Carrie: {
    visits: 4
  }
};

function greetCustomer(customerData, firstName) {
  let greeting = {
    unknown: "Welcome! Is this your first time?",
    second: "Welcome back, $name! We're glad you liked us the first time!",
    otherwise: "Welcome back, $name! So glad to see you again!"
  };
  // your code here
  if (!(firstName in customerData)) {
    return greeting["unknown"];
  }

  let customer = customerData[firstName];
  let numVisits = customer["visits"];

  if (numVisits > 1) {
    let result = greeting["otherwise"];
    return result.replace("$name", firstName);
    // return String(greeting['otherwise']).replace($name, customer);
  } else {
    let result = greeting["second"];
    return result.replace("$name", firstName);
    // return String(greeting['second']).replace($name, customer);
  }
}

// console.log(greetCustomer(customerData, 'Joe'))
// console.log(greetCustomer(customerData, 'Margaret'))
// console.log(greetCustomer(customerData, 'Carrie'))

function greetCustomer2(customerData, firstName) {
  switch (
    customerData[firstName] ? customerData[firstName].visits : undefined
  ) {
    case undefined:
      return "Welcome! Is this your first time?";
    case 1:
      return `Welcome back, ${firstName}! We\'re glad you liked us the first time!`;
    default:
      return `Welcome back, ${firstName}! So glad to see you again!`;
  }
}

// console.log(greetCustomer2(customerData, 'Joe'))
// console.log(greetCustomer2(customerData, 'Margaret'))
// console.log(greetCustomer2(customerData, 'Carrie'))

//========================================
// a002_getIndexOf.js
//========================================

/*
초기화
테스트 실행

Write a function called "getIndexOf". ("getIndexOf" 함수를 작성하세요.)

Given a character and a string, "getIndexOf" returns the first position of the given character in the given string. (문자와 문자열이 주어졌을때, "getIndexOf" 함수는 주어진 문자열에서 주어진 문자가 나타나는 첫번째 위치를 반환합니다.)

Notes:

Strings are zero indexed, meaning the first character in a string is at position 0. (- 문자열의 첫번째 문자는 인덱스 값 0 을 가집니다.)
When a string contains more than one occurrence of a character, it should return the index of its first occurrence. (- 만약 문자열에 해당 문자가 여러번 나타나면, 첫번째로 나타나는 위치를 반환해야 합니다.)
If the character does not exist in the string, it should return -1. (- 만약 문자가 문자열에 존재하지 않는다면, -1 을 반환해야 합니다.)
Do not use the native indexOf function in your implementation. (- indexOf 함수를 사용하지 마세요.)
let output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2
*/

function getIndexOf(char, str) {
  // your code here
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return i;
    }
  }
  return -1;
}

// console.log(getIndexOf('a', 'I\'m an apple'))

function getIndexOf2(char, str) {
  // your code here
  return str
    .split("")
    .reduce(
      (acc, curr, curIdx) => (curr === char ? (acc.push(curIdx), acc) : acc),
      []
    )[0];
}

// console.log(typeof getIndexOf2('a', 'I\'m an apple'))
// console.log(getIndexOf2('a', 'Crisis comes at an early price'))

//========================================
// a005_sumDigits.js
//========================================
/*
초기화
테스트 실행

Write a function called "sumDigits". ("sumDigits" 함수를 작성하세요.)

Given a number, "sumDigits" returns the sum of all its digits. (숫자가 주어졌을때, "sumDigits" 함수는 숫자의 각 자리수를 모두 더한 값을 반환합니다.)

let output = sumDigits(1148);
console.log(output); // --> 14
If the number is negative, the first digit should count as negative. (만약 숫자가 음수라면, 첫번째 자릿수는 음수로 고려되어야 합니다.)

let output = sumDigits(-316);
console.log(output); // --> 4
Notes:

In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa. (- 여러분에게 도움이 될 메소드를 사용하기위해서는 아마도 문자열을 숫자로 바꾸거나 숫자를 문자로 바꾸는게 수월하실 겁니다.)
Be sure to familiarize yourself with the "toString" method, as well as the "Number" function. ("Number" 함수와 "toString" 메소드에 꼭 익숙해지세요.)
*/

function summation(stringy) {
  return stringy.split("").reduce(function(acc, curr) {
    return acc + Number(curr);
  }, 0);
}

function sumDigits(num) {
  // your code here
  if (String(num)[0] === "-") {
    return (
      Number(summation(String(num).slice(2))) +
      Number(String(num).substring(0, 2))
    );
  } else {
    return Number(summation(String(num)));
  }
  ㅋ;
}

// console.log(sumDigits(1423))
// console.log(sumDigits(-423))

function sumDigits2(num) {
  // your code here
  if (num < 0) {
    return Number(
      String(num)
        .split("")
        .slice(1)
        .reduce((acc, curr, currIdx) => {
          return currIdx === 0 ? acc - curr : acc + parseInt(curr);
        }, 0)
    );
  } else {
    return Number(
      String(num)
        .split("")
        .reduce((acc, curr) => {
          return acc + parseInt(curr);
        }, 0)
    );
  }
}

// console.log(sumDigits2(7777))
// console.log(sumDigits2(-55024))

// Modulo is odd ???

function modulo(num1, num2) {
  let sign = num1 > 0 ? 1 : -1;

  num1 = Math.abs(num1);
  num2 = Math.abs(num2);

  let highestIterator = Math.floor(num1 / num2);

  return sign * (num1 - num2 * highestIterator);
}

function isOddWithoutModulo(num) {
  // your code here
  return Math.abs(modulo(num, 2)) === 1;
}

// console.log(modulo(5, 2))
// console.log(isOddWithoutModulo(7))

//========================================
// a007_modulo.js
//========================================

/* Explanation

Write a function called "modulo". ("modulo" 함수를 작성하세요.)
Given 2 numbers, "modulo" returns the remainder after dividing num1 by num2.
(두 숫자가 주어졌을때, "modulo" 함수는 첫번째 수를 두번째 수로 나눴을때 나머지 값을 반환합니다.)

It should behave as described in the canonical documentation (MDN)
for the JavaScript remainder operator: (아래 문서에서 설명된 자바스크립트의 나머지 연산자 처럼 동작해야 합니다.)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/ArithmeticOperators#Remainder()

Notes:

Do NOT use the actual built-in modulo (aka "remainder") operator (%) in your implementation.
(- 이미 구현되어 있는 나머지 연산자(%)를 사용하지 마세요.)
-0 % ANYNUMBER = 0. (- 0 & 아무숫자 = 0)
-ANYNUMBER % 0 = NaN. (- 아무숫자 % 0 = NaN)
-If either operand is NaN, then the result is NaN. (- 두 수중 하나라도 NaN 이라면, 결과값은 NaN 입니다.)
-Modulo always returns the sign of the first number. (modulo 함수는 항상 첫번째 숫자의 +/- 값을 반환합니다.)
*/

function modulo(num1, num2) {
  let sign = Math.sign(num1);

  num1 = Math.abs(num1);
  num2 = Math.abs(num2);

  // Check for irregularities
  if (num1 === 0) {
    return 0;
  }
  if (num2 === 0 || isNaN(num2) || isNaN(num1)) {
    return NaN;
  }

  // If difference is the same as num2 or smaller than num2
  // return 0 or difference
  if (num1 === num2) {
    return 0;
  } else if (num1 < num2) {
    return sign * num1;
  }

  return modulo(sign * (num1 - num2), num2);
}

/* Examples
  modulo(9, 2)
   - 1
  modulo(9, 5)
   - 4
  modulo(8, 4)
   - 0


*/

// ============================================
// Almost Increasing Sequence
// ============================================

// https://app.codesignal.com/arcade/intro/level-2/2mxbGwLzvkTCKAJMG

function almostIncreasingSequence(sequence) {
  const isUnique = num => {
    return sequence.lastIndexOf(num) === sequence.indexOf(num);
  };

  const isIncreasing = (num1, num2, num3) => {
    return num1 < num3 && num2 < num3;
  };

  let notMoved = true;
  let copyArr = sequence.slice(1);

  for (let i = 0; i < copyArr.length; i += 1) {
    let prevNum = sequence[i > 0 ? i - 1 : 0];
    let currNum = sequence[i];
    let nextNum = copyArr[i];

    if (isUnique(nextNum) && isIncreasing(prevNum, currNum, nextNum)) {
      continue;
    } else {
      if (notMoved) {
        notMoved = false;
      } else {
        return false;
      }
    }
  }
  return true;
}

const SEQUENCES_TEST_CASE = [[1, 3, 2], [1, 2, 1, 2], [30, 40, 50, 10, 20, 60]];

const printTests = sequence => {
  const output = almostIncreasingSequence(sequence);
  console.log(output);
};

const testCases = () => {
  for (let i = 0; i < SEQUENCES_TEST_CASE.length; i++) {
    printTests(SEQUENCES_TEST_CASE[i]);
  }
};

testCases();
