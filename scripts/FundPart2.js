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