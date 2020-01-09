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
    let counter = 0;
    
    while (num>9) {
        num = multiplyNumbers(num)
        counter = counter + 1
    };
    
    return counter
}

console.log(multiplicativePersistence(39))
console.log(multiplicativePersistence(2312))
console.log(multiplicativePersistence(786))
console.log(multiplicativePersistence(2248))
console.log(multiplicativePersistence(516))
console.log(multiplicativePersistence(2300))

// Solved !!



// ============================================
// Week 3-3 dashInsert
// ============================================

// Have the function DashInsert insert dashes ('-') between each two odd numbers in str. 
// (문자열이 주어졌을때, 'DashInsert' 함수는 문자열에 있는 두 홀수 사이에 대시('-')를 추가하여 반환합니다.)

// For example: if str is 454793 the output should be 4547-9-3. 
// (예시: 주어진 문자열이 454793 이라면 결과값은 4547-9-3 입니다.) 
// Don't count zero as an odd number. (0 을 홀수로 간주하지 마세요.)

function DashInsert(string) {
    // Your code here
    // return string.split("").reduce(function(prev, curr, currIdx){
    //   if (parseInt(curr)%2===1 && parseInt(string[currIdx+1])%2===1){
    //     if (string.indexOf(curr)!==string.length-1){
    //       return prev + curr + '-';
    //     }
        
    //   }
    //   return prev + curr
    // }, '')
    return string.split("").reduce((prev, curr, currIdx) => (parseInt(curr)%2===1 && parseInt(string[currIdx+1])%2===1) ? prev + curr + '-' : prev + curr, '')
        
  }
  
  
console.log(DashInsert('454793'));




// ============================================
// Week 6-1 thirdGreatest
// ============================================
// 문자열로 이루어진 배열이 주어졌을때, thirdGreatest(strArr) 함수는 주어진 배열에서 세번째로 긴 단어를 반환합니다. 그 중, 동률일때는 뒤에 있는 단어를 반환해줘야 합니다.

// 예를 들어, 주어진 배열이 ["hello", "world", "before", "all"] 라면, 결과값은 world 가 될것입니다. 왜냐하면 before는 6글자이고 hello와 world 둘다 5글자 이지만 world가 더 뒤에 나온 5글자 단어이기 때문입니다.

// 만약 주어진 배열이 ["hello", "world", "after", "all"] 이라면 결과값은 after가 될것입니다. 왜냐하면 앞에 세 단어가 모두 5글자이기 때문에 마지막 단어를 반환하기 때문입니다. 배열은 항상 적어도 문자열 세개를 가지고 있으며, 각각의 문자열은 오직 글자만을 포함하고 있습니다.

function thirdGreatest(arr) {
    // save each to an object (key : word, value : word length)
    // check length of each
    // sort them
    // retrieve third longest word
    // return third longest word

    // let dictWords = arr.reduce(function(acc, curr){
    //     acc[curr] = curr.length;
    //     return acc;
    // }, {});
    // return dictWords

    arr.sort((a, b) => b.length - a.length);
    return arr[2]
  }

console.log(thirdGreatest(["hello", "after", "all", "world"]))
console.log(thirdGreatest(["hello", "world", "before", "all"]))

// Solved by using the length of word and sort
// Not changing the order of the length of words that are the same
// But only those that are higher



// ============================================
// Week 6-2 runLength
// ============================================
// 문자열이 주어졌을때, runLength(str) 함수는 Run-length 인코딩 알고리즘을 사용하여 주어진 문자열을 압축하여 반환합니다.

// 해당 알고리즘은 반복되는 글자가 있을경우 반복되는 수와 해당 글자를 조합하여 문자열을 압축시킵니다.

// 예시: wwwggopp 는 3w2g1o2p 로 압축됩니다. 주어지는 문자열은 숫자나, 구두점이나, 문자를 포함하고 있지 않습니다.


function runLength(str) {
    // Your code here
    // way to figure out what character it is
    // compare characters
    //      if character is same as next : counter ++
    //      else : counter = 1
    let result = String();
    let counter = 1;
    for (let i=0; i<str.length;i++) {
        console.log(str[i])
        if (str[i] === str[i+1]) {
            counter += 1;
        } else {
            result = result  + counter + str[i];
            counter = 1;
        }

    };
    return result
};

function runLength2(str) {
    
    let result = {
        code : '',
        counter : 1,
    };

    for (let i=0;i<str.length;i++){
        str[i]===str[i+1] ? result.counter++ : (result.code += result.counter + str[i], result.counter = 1);
    };
    return result.code;
    
}


console.log(runLength("wwwggoppwww"));
console.log(runLength2("wwwggoppwww"));


// A different solution, using object to store two values




// ============================================
// Week 6-3 threeFiveMultiples
// ============================================

// 숫자가 주어졌을때, threeFiveMultiples(num) 함수는 해당 숫자보다 작은 3 혹은 5의 배수들의 총합을 반환합니다.

// 예시: 만약 10이 주어졌다면, 10 보다 작은 3과 5의 배수들은 3, 5, 6, 9 가 있으며 해당 숫자들을 모두 더하면 23 이 나오므로 여러분이 작성하진 함수는 23 을 반환해야 합니다.

function threeFiveMultiples(num) {
    // 여기에 코드를 작성하세요
    // get multiples of 3 and 5 until bigger  than 10
    // store the possible multiples in a list
    // add the multiples
    // return the sum of multiples
    let dictMultiples = {
        three : [],
        five : [],
    };

    for (let i=0; i<num; i++) {
        i%3===0 ? dictMultiples.three.push(i) : i%5===0 ? dictMultiples.five.push(i) : null;
    };
    return [...dictMultiples.three, ...dictMultiples.five].reduce((acc, curr) => acc+curr, 0)
};

function threeFiveMultiples2(num) {
    let result = Array();
    for (let i=0; i<num; i++) {
        i%3===0 || i%5===0 ? result.push(i) : null;
    };
    return result.reduce((acc, curr) => acc+curr)
}

function threeFiveMultiples3(num) {
    let result = 0;
    for (let i=0; i<num; i++) {
        i%3===0 || i%5===0 ? result += i: null;
    };
    return result
}

console.log(threeFiveMultiples(10));
console.log(threeFiveMultiples2(10));
console.log(threeFiveMultiples3(10));




// ============================================
// Week 9-1 sumOnMultiplicationOfOrderedPairs
// ============================================

// 입력한 숫자에 대해 서로 다른 두 숫자의 모든 경우에 대해, 곱의 합을 구하세요.

// sumOnMultiplicationOfOrderedPairs(2, 3, 4) // 26
// 위 코드의 결과가 26이 나오는 이유는 다음을 참조하세요.

// 가능한 조합(Pair)은 다음과 같습니다.

// (2, 3)
// (2, 4)
// (3, 4)
// 각 조합의 곱을 전부 더합니다. 6 + 8 + 12 = 26

// Note: parameter의 갯수가 정해져 있지 않음의 유의하세요.

function sumOnMultiplicationOfPairs() {
    // code goes here
  }