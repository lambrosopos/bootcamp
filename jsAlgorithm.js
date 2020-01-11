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
