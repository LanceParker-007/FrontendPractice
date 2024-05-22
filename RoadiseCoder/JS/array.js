// Declarations
let arr = [];
// or
let arr2 = new Array();

const obj = {
  name: "foo",
  email: "foo@example.com",
};
arr = ["apple", "banana", "carrot"]; // can store multiple data types
// let index = 4;
// console.log(arr[index].name ? arr[index].email : arr[index]);

// Add and remove elements from the end of an array
arr.push(obj);
arr.pop();

// Add and remove elements from the start of an array
arr.unshift("orange");
arr.shift();

// * Push and pop are more performant than unshift and shift
let i = 0;
// For loop
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// while loop
// while (i < arr.length) {
//   console.log(arr[i++]);
//   i++ or i = i + 1
// }

// ---------------------------

const numbers = [1, 2, 3, 4, 5];
// map function
// const newNumbers = numbers.map((item, index, array) => {
//   return item + 5;
// });

//  filter function
// const newNumbers = numbers.filter((item, index, array) => {
//   return item > 3;
// });

// reduce function: it takes an array and reduces it down to a single value
// const newNumbers = numbers.reduce((prevValue, item) => {
//   return prevValue + item;
// }, 2);

// some function: checks if condtion is true for any item
// const newNumbers = numbers.some((item) => {
//   return item > 30;
// });

//  every function: checks if condtion is true for all items in an array
// const newNumbers = numbers.every((item) => {
//   return item > -3;
// });

// find function: returns the first value from the array which satisfies our given condition
// const newNumbers = numbers.find((item) => {
//   return item >= 5;
// });

// findIndex: similar to find, find returns the value findIndex returns the index where the condition becomes true
// const findIndex = numbers.findIndex((item) => {
//     return item > 2;
//   });
//   console.log(findIndex);

// console.log(newNumbers);

// Spread and Rest Operators
const nums = [1, 2, 3];
const nums2 = [4, 5, 6, 7];

const finalNums = [...nums, ...nums2]; //spread operator
// console.log(finalNums);

//rest operator
function sum(...numbers) {
  console.log(numbers);
}

// sum(nums, nums2, 5, 6);

// concat: combines one or more arrays and returns a new array
// const newArr = nums.concat(nums2);

// slice: returns a section of array
const sliceArray = arr.slice(0, 2); //includes the start element, excludes the last element
// console.log(sliceArray);

// splice: it returns the deleted elements and modifies the original array and can insert new elements in space created
// const spliceArray = arr.splice(1, 2, "cake", "cake2", "cake3"); //includes the start element, excludes the last element
// console.log(arr);
// console.log(spliceArray);

// fill: modifies the origina array and returns the array too
const dummy = [2, 5, 1, 6];
// const d = dummy.fill(6, 0, 2);
// console.log(dummy);

// flat
const flatEx = [1, [2, 3], [[4, 5], 6]];
// const flattenedArray = flatEx.flat(2); // you have to give depth till how much level you want to flatten
// console.log(flattenedArray);

// reverse: modifies the original array
const reverseArray = numbers.reverse();
// console.log(numbers);
// console.log(reverseArray);

const unsorted = [30, 5, 10, 3, 5, 1, 3, 2];
unsorted.sort((a, b) => a - b);
// console.log(unsorted);
