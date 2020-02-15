// ============================================
// [3. 반복문] 02_repeatString
// ============================================

function repeatString(string, num) {
    let repeat = ''
    for (i=0;i<num;i++){
      repeat = repeat + string
    }
    return repeat
}

// using reduce to simplify this function

function repeatString(string, num) {
    return Array(num).fill(string).reduce((acc, curr) => acc + curr)
}

console.log(repeatString('apple', 3));



let newArr = [1, 2, 3, 6];

let newArr2 = [5, 6, 7, 8];

let newArr3 = [...newArr, ...newArr2];

console.log(newArr3);

let dictA = {1:'1', 2:'2', 3:'3', say:'4'}

for (let key in dictA){
    console.log(key);
}

for (let idx in newArr) {
    console.log(idx)
}




// ============================================
// [6. 배열 메소드] 20_findSmallestElement
// ============================================

/*
초기화
테스트 실행

Write a function called "findSmallestElement". ("findSmallestElement" 함수를 작성하세요.)

Given an array of numbers, "findSmallestElement" returns the smallest number within the given array. (숫자의 배열이 주어졌을때, "findSmallestElement" 함수는 주어진 배열에서 가장 작은 수를 반환합니다.)

Notes:

If the given array is empty, it should return 0. (만약 빈 배열이 주어졌다면, 0을 반환해야 합니다.)
let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1
*/


function findSmallestElement(arr) {
    // your code here
    if (arr.length === 0) {
      return 0;
    }

    let smallest = arr.reduce(function(acc, curr){
        console.log({acc, curr})
      if (curr < acc) {
        return curr
      } else {
        return acc
      }
    }, Math.max(...arr))

    console.log(smallest)
    return smallest;
}

console.log(findSmallestElement([43, 5, 2, 79, 54]))




// ============================================
// [7. 객체, 배열] 02_select
// ============================================

/*
초기화
테스트 실행

Write a function called "select". ("select" 함수를 작성하세요.)

Given an array and an object, "select" returns a new object whose properties are those in the given object AND whose keys are present in the given array. (배열과 객체가 주어졌을때, "select" 함수는 주어진 객체의 키값 중 주어진 배열에 포함된 키값만을 속성으로 가지는 새로운 객체를 반환합니다.)

Notes:

If keys are present in the given array, but are not in the given object, it should ignore them. (만약 배열에는 있지만 객체에는 없는 키값이라면, 무시해야 합니다.)
It does not modify the passed in object. (주어진 객체가 변형되어서는 안됩니다.)
let arr = ['a', 'c', 'e'];
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
let output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }
*/
let arr = ['a', 'c', 'e'];
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};


function select(arr, obj) {
    let result = {};

    arr.forEach(element => {
        Object.keys(obj).includes(element) ? result[element]=obj[element] : null;
    });

    return result
}

console.log(typeof select(arr, obj))





// ============================================
// [6. 배열 메소드] 23_getLengthOfLongestElement
// ============================================


/*
초기화
테스트 실행

Write a function called "getLengthOfLongestElement". ("getLengthOfLongestElement" 함수를 작성하세요.)

Given an array, "getLengthOfLongestElement" returns the length of the longest string in the given array. (배열이 주어졌을때, "getLengthOfLongestElement" 함수는 주어진 배열에서 가장 긴 문자열의 길이를 반환합니다.)

Notes:

It should return 0 if the array is empty. (만약 배열이 비어있다면, 0을 반환해야 합니다.)
let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
*/

function getLengthOfLongestElement(arr) {
    return arr.reduce((a, c) => c.length > a ? c.length : a, 0);
    return arr.sort((a, b) => b.length - a.length)[0].length;

    let result = arr.sort((a, b) => b.length - a.length)

    console.log(result)
    return result[0].length
}

console.log(getLengthOfLongestElement(['one', 'two', 'three']))

// Don't mix up strings and numbers
