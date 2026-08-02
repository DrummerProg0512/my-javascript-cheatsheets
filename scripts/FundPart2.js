// Strict mode
'use strict';

// Functions
// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Cesar Gallardo"));

// Function expression /////////////////////////////////////////////////////////
const add = function(a, b) {
    return a + b;
};

console.log(add(5, 3));

// Arrow function ///////////////////////////////////////////////////////////////
const multiply = (a, b) => a * b;
console.log(multiply(4, 6));

const multi2 = (a, b) => {
    const result = a * b;
    return result;
};
console.log(multi2(4, 6));

// Functions calling other functions ////////////////////////////////////////////
function square(num) {
    return num * num;
}

console.log(square(5));

function callingOtherFunction(num) {
    const squared = square(num);
    return `The square of ${num} is ${squared}.`;
}
console.log(callingOtherFunction(5));

// Function with default parameters ////////////////////////////////////////////
function greetWithDefault(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greetWithDefault());
console.log(greetWithDefault("Cesar Gallardo"));

// Function with rest parameters //////////////////////////////////////////////////
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(1, 2, 3, 4, 5));

// Introduction to Arrays
const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);
console.log(fruits[0]); // Accessing first element
console.log(fruits.length); // Length of the array

// Arrays with different data types
const mixedArray = [42, "Hello", true, null, { key: "value" }];
console.log(mixedArray);

// Arrays with nested arrays
const nestedArray = [[1, 2], [3, 4], [5, 6]];
console.log(nestedArray);
console.log(nestedArray[1][0]); // Accessing element in nested array

// Arrays with variables
const name = 'Cesar';
const arrayWithVariables = [name, 42, true];
console.log(arrayWithVariables);




