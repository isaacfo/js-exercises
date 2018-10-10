// Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.

var nums = [1, 2, 3, -4, -5, 6, 7, 8, -9, -10];
 function isPositive(num) {
   return num > 0;
 }
var result = nums.filter(isPositive);

console.log(result)