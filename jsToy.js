// ============================================
// Week 1-3 onlyEvenElements
// ============================================

function onlyEvenElements(arr) {
    // your code here
    let newArr = []
    for (element of arr) {
      if (element%2===0) {
        newArr.push(element)
      }
    }
    return newArr
}

console.log(onlyEvenElements([1, 2, 3, 4, 5, 6]))

function onlyEvenElements2(arr) {
    //using filter???

    return arr.filter(num => num%2==0);
}

console.log(onlyEvenElements2([1, 2, 3, 4, 5, 6]));


// ============================================
// Week 4-2 letterCapitalize
// ============================================

function letterCapitalize(str) {
    // Your code here
    let listA = [];
    for (i of str.split(' ')){
      listA.push(i[0].toUpperCase() + i.slice(1))
    }
    return listA.join(' ')
}

console.log(letterCapitalize('apple is not from the tree'));

// using map to create a new array applying certain function

function letterCapitalize2(str) {
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(letterCapitalize2("apple is not from the tree"));




// ============================================
// Week 2-4 flatten
// ============================================


// convert nested (2-dimensional) array to flatten array! 
// (2차원 배열을 1차원 배열로 전환하세요.)

// Examples:

// flatten([1,2,[3],[4]]); // [1,2,3,4]


function flatten (array){
    //your solution here
    let newArray = []
    for (let i=0;i<array.length;i++) {
        if (Array.isArray(array[i])) {
        for (let j=0;j<array[i].length;j++) {
        newArray.push(array[i][j])
        }
        } else {
        newArray.push(array[i])
        }
        
    }
    return newArray
}

console.log(flatten([1,2,[3],[4]]));

function flatten2(array) {
    return array.map(eachArray => Array.isArray(eachArray) ? [...eachArray]: eachArray);
}

console.log(flatten2([1,2,[3],[4]]));




// ============================================
// Week 5-1 multiplicativePersistence
// ============================================


// 양의 정수가 주어졌을때, multiplicativePersistence(num) 함수는 주어진 수의 각 자리의 숫자를 곱했을때 한 자릿수가 될때까지의 계산 횟수를 반환합니다.

// 예시: 만약 입력값이 39라면, 여러분의 함수는 3을 반환해야 합니다.

// 왜냐하면

// 3 * 9 = 27

// 그리고 2 * 7 = 14

// 그리고 마지막으로 1 * 4 = 4 이므로 한 자리가 될 때까지 총 3번의 계산을 하기 때문입니다.

function multiplyNumbers(num) {
    return String(num).split('').reduce((acc, curr) => acc * curr, 1)
}

function multiplicativePersistence(num) {
    
}

console.log(multiplicativePersistence(2312))
console.log(multiplicativePersistence(786))
console.log(multiplicativePersistence(2248))
console.log(multiplicativePersistence(516))
console.log(multiplicativePersistence(2300))

