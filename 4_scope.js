// How does JS scope its variables?
// What is hoisting?

// var globalObject = { // fake
//   array,
//   myFunction,
//   myFunction3,
//   myFunction4,
// };

// https://dmitripavlutin.com/javascript-scope/

var array9; // undefined but attached to global object
var someString = ''; //declared, assigned and attached to global object

myFunction4(); // breaks as it's declared but not assigned

var myFunction4 = () => 'something'; //assigned after execution

myFunction3(); // works as it's hoisted to the global object

// mistake here!
function myFunction3() {
  var array8 = ['an array']; // accessible outside!!!!!!!
  array9 = '';
  // array7; // no go as it's private to the inner function
  function myInnerFunction() {
    console.log(array9); // ''

    var array7; // accessible outside!!!!!!!

    return 'innerString';
  }

  var returnValue = myInnerFunction(); // to return the inner value I have to execute my function

  return returnValue;
}
myFunction3(); // this assigns ' to array9 and mutates it!!!!!

console.log(array9); // undefined as it's declared but assignment is private to
console.log(array8); // ['an array'] as var attaches to global object!!!!
// array9[0] // breaks

var array = [1, 2, 3, 4];

for (var index = 0; index < array.length; index++) {
  var element = array[index];

  element = 0;
}

// while (condition) {
//  doSomething()
// }
