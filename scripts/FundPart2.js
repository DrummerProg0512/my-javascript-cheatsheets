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