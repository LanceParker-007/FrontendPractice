// Q1: Diff bet map and forEach
// Ans:
// 1) Both are Array methods, map returns an new array, like we
// can get new array without modifying the original array with ease
// forEach does not return us an new array, so it will be better for
// to perform functions like sum of an array or you want to modify the
// original array
// 2) We can do chaining with map but not with forEach
// Exlain with examples

// const arr = [2, 5, 3, 4, 7];

// const mapRes = arr.map((ar) => {
//   return ar * 2;
// });

// const forEachRes = arr.forEach((ar) => {
//   return ar * 2;
// });

// console.log(arr, mapRes, forEachRes);

// Q2: Diff bet null and undefined
// Ans:
// 1) undefined means a variable has been declared but has
// not yet been assigned a value, whereas null is an assignment
// value, meaning that a variable has been declared and given
// the value of null (contains no value or is empty)
// 2) typeof of null is object, typeof undefined is undefined (it is a data type)
// 3) null is converted to 0 while undefined is converted to NaN
// when doing airthmetic operations
// Follow up question:
// console.log(null, undefined);
// console.log(null == undefined); // true ?
// console.log(null === undefined); // false
// Q3:
