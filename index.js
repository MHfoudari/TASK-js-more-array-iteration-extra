// Q1)
const numbers = [1, 2, 3, 4, 5];
// Given the array numbers = [1, 2, 3, 4, 5],
// write code to create a new array where each
// number is multiplied by 2 using the map method.
// ============== Your answer here:
let newNumber = numbers.map((rando) => 2 * rando);
console.log(newNumber);
// ==============

// Q2)
const names = ["Alice", "Bob", "Charlie"];
// Given the array names = ["Alice", "Bob", "Charlie"],
// write code to create a new array where each name is
// converted to uppercase using the map method.
// ============== Your answer here:
let newNames = names.map((rando) => rando.toUpperCase());
console.log(newNames);
// ==============

// Q3)
const numbers2 = [1, 4, 9, 16, 25];
// Given the array numbers = [1, 4, 9, 16, 25],
// write code to create a new array where each
//  number is squared using the map method.
// ============== Your answer here:
let newNumber2 = numbers2.map((rando) => rando * rando);
console.log(newNumber2);
// ==============

// Q4)
const names2 = ["John", "Jane", "Tom"];
// Given the array names = ["John", "Jane", "Tom"],
// write code to create a new array where each name
// is appended with " Smith" using the map method.
// ============== Your answer here:
let newNames2 = names2.map((rando) => rando + " Smith");
console.log(newNames2);
// ==============

// Q5)
const numbers3 = [2, 4, 6, 8, 10];
// Given the array numbers = [2, 4, 6, 8, 10],
//  write code to create a new array where each
// number is divided by 2 using the map method.
// ============== Your answer here:
let newNumbers3 = numbers3.map((rando) => rando / 2);
console.log(newNumbers3);
// ==============

// Q6)
const fruits = ["apple", "banana", "orange"];
// Given the array fruits = ["apple", "banana", "orange"],
//  write code to create a new array where each fruit
//  name is capitalized using the map method. Ex, Apple ...
// ============== Your answer here:
let newFruits = fruits.map((rando) => rando.charAt(0).toUpperCase() + rando.slice(1));
console.log(newFruits);
// ==============