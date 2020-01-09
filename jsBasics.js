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
