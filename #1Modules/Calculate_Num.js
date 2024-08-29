// # Imports functions from other modules (add, sub, multiply, divide) and uses them to perform operations.
// # Demonstrates how to import and use exported functions from other JavaScript files.
// # Usage: Shows how to import and utilize functions from different modules.

const { add } = require('./add.js');
const { sub } = require('./sub.js');
const { multiply, multiplyByFive } = require('./multiply.js');
const { divide } = require('./divide.js');

add(1, 1);
sub(2, 1);
multiply(5, 6);
divide(8, 2);

console.log("🚀 ~ multiplyByFive: ", multiplyByFive(5,6))