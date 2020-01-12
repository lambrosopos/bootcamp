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



  