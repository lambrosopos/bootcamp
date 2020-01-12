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
    for (let i=0;i<array.length;i++){
      result[array[i][0]] = array[i][1]
    }
    return result
}

console.log(fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]));

function fromListToObject2(array) {
    let result = {};
    array.forEach((element) => result[element[0]] = element[1])
    
    return result
}

console.log(fromListToObject2([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]))

function fromListToObject3(array) {
    return array.reduce((acc, cur) => ({
        ...acc,
        [cur[0]]: cur[1]
    }), {});
}

console.log(fromListToObject3([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]))


function fromListToObject4(array) {
    return array.reduce((acc, cur) => {
        acc[cur[0]] = cur[1]
    return acc}, {});
}

console.log(fromListToObject4([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964], ['make', 'Ford'], ['he', 'she']]))



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
    return array.map(function (val) {
        return val.reduce((acc, cur) => ({...acc, [cur[0]] : cur[1]}), {})
    })
  }
  
  let array = [
    [
      ['firstName', 'Joe'],
      ['lastName', 'Blow'],
      ['age', 42],
      ['role', 'clerk']
    ],
    // [
    //   ['firstName', 'Mary'],
    //   ['lastName', 'Jenkins'],
    //   ['age', 36],
    //   ['role', 'manager']
    // ]
  ];
  
  let output = transformEmployeeData(array);
  console.log(output);


let dictA = {
    firstName : 'Sloppy',
    lastName : 'Joes',
    age : '54',
    role : 'great',
}

let arrA = [1, 2]

let dictB = {...dictA, [arrA[0]]:arrA[1]}


console.log(dictA)
console.log(dictB)




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
    name: 'Holly',
    age: 35,
    role: 'producer'
    }


function convertObjectToList(obj) {
    // your code here
    let result= [];
    for (key in obj){
      result.push([key, obj[key]])
    }
    return result;
  }
  
console.log(convertObjectToList(objA));

function convertObjectToList2(obj) {
    return Object.keys(obj).map((val, idx) => {
        return [val, Object.values(obj)[idx]]})
  }

console.log(convertObjectToList2(objA))





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
      unknown:'Welcome! Is this your first time?',
      second:'Welcome back, $name! We\'re glad you liked us the first time!',
      otherwise:'Welcome back, $name! So glad to see you again!',
    };
    // your code here
    if (!(firstName in customerData)) {
      return greeting['unknown'];
    };
  
    let customer = customerData[firstName];
    let numVisits = customer['visits'];
  
    if (numVisits>1){
      let result = greeting['otherwise'];
      return result.replace('$name', firstName);
      // return String(greeting['otherwise']).replace($name, customer);
    } else {
      let result = greeting['second'];
      return result.replace('$name', firstName);
      // return String(greeting['second']).replace($name, customer);
    };
  }

console.log(greetCustomer(customerData, 'Joe'))
console.log(greetCustomer(customerData, 'Margaret'))
console.log(greetCustomer(customerData, 'Carrie'))

function greetCustomer2(customerData, firstName) {
    
    switch (customerData[firstName] ? customerData[firstName].visits : undefined) {
        case (undefined) :
            return 'Welcome! Is this your first time?';
        case (1) :
            return `Welcome back, ${firstName}! We\'re glad you liked us the first time!`
        default :
            return `Welcome back, ${firstName}! So glad to see you again!`
    }
}
  


console.log(greetCustomer2(customerData, 'Joe'))
console.log(greetCustomer2(customerData, 'Margaret'))
console.log(greetCustomer2(customerData, 'Carrie'))
