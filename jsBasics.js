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

for (element of newArr){
    console.log(element)
}