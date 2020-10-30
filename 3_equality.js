// How variables are compared?

// == loose equality
// === strict equality
// !=
// !==

var isEqual = 'hey' === 'ho'; // false // compared by value
var isEqualObject = {} === {}; // false // compared by reference (pointer in memory)
var isEqualArray = [] === []; // false
var isEqualFunctions = myFunction === myFunction2; // false

var a = {};
var b = {};

b = a; // hook/link

b === a; // true
