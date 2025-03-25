// ForEach is a collection method in javascript, it is used to loop through all elements of an array and perform some operation. It does not return anything, instead it is used for its side effects.

// Foreach array example
const arr = ["Hello", "World", "This", "is", "a", "test"];
arr.forEach((value, index) => console.log(`Value at index, ${index}, is ${value}`))

// Other collection operations include reduce
// The sum of all values in an array
const arr2 = [10, 5, 6, 20, 8]
console.log(arr2.reduce((sum, n) => sum = sum + n));

// map
// Return a new list with the square of each value
console.log(arr2.map((value) => value * value))