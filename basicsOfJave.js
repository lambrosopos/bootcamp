// The difference between object
// dot notation and bracket notation

let dictA = {};
    dictA.key = '123'; // Using dot notation is closer to 'string'

dictA; // {key: '123'}

// If using a bracket notation, the element inside the bracket
// is considered as a variable

let key = 'key';

let dictB = {};
    dictB[key] = '456';

dictB; // {key: '456'}
