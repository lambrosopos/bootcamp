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



