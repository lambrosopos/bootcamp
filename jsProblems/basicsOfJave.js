// ============================================
// The difference between object
// dot notation and bracket notation
// ============================================

let dictA = {};
    dictA.key = '123'; // Using dot notation is closer to 'string'

dictA; // {key: '123'}

// If using a bracket notation, the element inside the bracket
// is considered as a variable

let key = 'key';

let dictB = {};
    dictB[key] = '456';

dictB; // {key: '456'}


// ============================================
// One-line if statements
// ============================================

// Tired of writing an if... else statement 
// just for the sake of a simple condition?
// Here is your solution

let oddOrEven;

if (5%2===1){
    oddOrEven = 'odd';
} else {
    oddOrEven = 'even';
};

oddOrEven;

// This simple example can be changed into...
// ...a single line

oddOrEven = 5%2===1 ? 'odd' : 'even';

oddOrEven;





// ============================================
// Fun with Arrays
// ============================================

// You can add/remove elements of an array
// by : push, pop, shift, unshift

let arrA = [1, 2, 3, 4];

arrA.push(5); // Insert 5 at the end of the array
arrA.pop(); // Removes array's last element

arrA.shift(); // Removes array's first element
arrA.unshift(0); // Adds an element at the beginning of array


// If you want a simple result, a unified result, you can use reduce
// Using reduce with arrays

// Trying to find the sum of arrA

let result = 0;

for (element of arrA) {
    result = result + element;
};

result;

// Instead of declaring result, then going to for loop, and then giving back result,
// you can simply use reduce method

result = arrA.reduce((acc, curr) => acc + curr);

// Which is the same as:

result = arrA.reduce(function(acc, curr){
    return acc + curr;
}, 0);

result
