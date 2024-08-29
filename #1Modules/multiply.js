// # Description: Defines and exports two functions:
//     # multiply: Logs the product of two numbers.
//     # multiplyByFive: Multiplies two numbers.

// # Usage: Functions are exported using exports, which is a shorthand for
//     # module.exports. Note that exports is used directly rather than assigning to
//     # module.exports in this file.


exports.multiply = (num1, num2) => {
    console.log("🚀 ~ multiply ~ multiply:", num1 * num2)
}
exports.multiplyByFive = (a, b) => a * b;

// module.exports = { multiply };

