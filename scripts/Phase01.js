`* High level object oriented, multi-paradigm programming languaje.
 * Can add dynamic effects to web pages and create web applications.`

//Variables
let year = 2024;
console.log(`The current year is ${year}.`);
console.log(typeof year);

//Constants
const pi = 3.1416;
console.log(`The value of pi is ${pi}.`);
console.log(typeof pi);

//Data types
let name = "John Doe";
console.log(`The name is ${name}.`);
console.log(typeof name);

//Conditional statements
const myAge = 52;
const adultAge = 18;
if (myAge >= adultAge) {
  console.log(`You are an adult. Since you are ${myAge} years old.`);
}
else {
  console.log(`You are not an adult. Since you are ${myAge} years old.`);
}

//Type conversion and Coercion
//Type Conversion, explicitly converting a value from one data type to another
let strNumber = "123";
let num = Number(strNumber);
console.log(`The string "${strNumber}" has been converted to the number ${num}.`);
console.log(typeof num);

//Type Coercion, implicitly converting a value from one data type to another
let str = "The number is: ";
let coercedResult = str + num;
console.log(coercedResult);
console.log(typeof coercedResult);