// Round 1

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

// Q3: Explain Event Delegation
// Ans3: We attach event listener to the parent instead of every child
// (for example list items) and then using that to listen and trigger
// the events on the selected child

// Q4: Flatten the array
// Ans4:
// 1 level of flattening can also be done like this
// let flattened = [].concat(...arr);

// let givenArr = [
//   [1, 2],
//   [3, 4],
//   [5, [6, [7, 8], 9]],
//   [10, 11, 12],
// ];

// My code
// function myFlat(arr = [], dep = 1) {
//   if (!Array.isArray(arr)) {
//     throw new TypeError("Passed arr is not an array!");
//   }

//   let resArr = [];
//   function helper(arr, d) {
//     arr.forEach((curVal) => {
//       if (d && Array.isArray(curVal)) {
//         helper(curVal, d - 1);
//       } else {
//         resArr.push(curVal);
//       }
//     });
//   }
//   helper(arr, dep);

//   return resArr;
// }

// Roadside coders code
// function customFlat(arr, depth) {
//   let result = [];

//   arr.forEach((ar) => {
//     if (Array.isArray(ar && depth > 0)) {
//       result.push(...customFlat(ar, depth - 1));
//     } else {
//       result.push(ar);
//     }
//   });

//   return result;
// }

// let ans = myFlat(givenArr, 3);
// console.log(ans);

// Q5: Show all of my Projects
// Why did you choose this particular stack
// Why did you choose this database

// Round 2

// Q1: Diff bet var, let and const

// Ans:
// 1) var is functional scoped while let and cosnt are block scoped
// 2) var can be redclared but let and const cannot be reclared in the same scope
// 3) All the 3 are hoisted in JS but we are only able to access the variable
// decalred with var keyword before initialisation and while the variables declared
// with let and const are in temporal dead zone, that is we cannot access them
// until they are initialised
// 4)var and let can be declared first and then can be initialised later or even reinitialised
// but variable declared with const keyword has to be declared then and there only
// and you cannot reinitialise it also
// Explain with examples

// Q2: What is the output of the following code
// function a() {
//   for (var i = 0; i < 3; i++) {
//     // or replace var  with let over here
//     function helper(j) {
//       // solve way 2
//       setTimeout(function log() {
//         console.log(j);
//       }, i * 1000); // i or j does not matter
//     }
//     helper(i);
//   }
// }

// a(); // tutant 3 phir 1 sec baad 3 phir 1 sec baad 3

// Q3: Explain call, apply and, bind
// We can basically manipulate the context of a given function
// like for which object that function is called or in which context that is called
// givenFunction.call(obj, param1, param2, ...)
// givenFunction.apply(obj, [param1, param2, ...])
// const returnedFunc = givenFunction.bind(obj, param1, param2, ...)

// Q4: Infinte Currying
// add(1)(2)....(n)()

// function add(a) {
//   if (a !== null && a !== undefined) {
//     // console.log("->", a);
//     return function helper(b) {
//       //   console.log("--> ", a, b);
//       if (b) return add(a + b);
//       else return a;
//     };
//   } else {
//     return a;
//   }
// }

// console.log(add(1)(2)(3)(4)());

// Q5: composition Polyfill, There is one more function pipe
// function addFive(a) {
//   return a + 5;
// }
// function subTwo(a) {
//   return a - 2;
// }
// function mulByFour(a) {
//   return a * 4;
// }

// function compose(...args) {
//   return function (initVal) {
//     return args.reduceRight((acc, func) => func(acc), initVal);
//   };
// }

// function pipe(...args) {
//   return function (initVal) {
//     return args.reduce((acc, func) => func(acc), initVal);
//   };
// }

// const evalute = compose(addFive, subTwo, mulByFour);
// console.log(evalute(5));

// Q6: Implement Promise.all

// function showText(text, time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(text);
//     }, time);
//   });
// }

// // Provided promise.all
// Promise.all([
//   showText("hello", 1000),
//   Promise.resolve("hi"),
//   Promise.resolve("bye"),
// ])
//   .then((val) => console.log(val))
//   .catch((err) => console.log(err));

// // Custom promise.all
// Function.prototype.myAll = function (promises) {
//   let result = [];
//   return new Promise((resolve, reject) => {
//     promises.forEach((p, index) => {
//       p.then((res) => {
//         result.push(res);
//         if (index === promises.length - 1) {
//           resolve(result);
//         }
//       }).catch((err) => reject(err));
//     });
//   });
// };

// Promise.myAll([
//   showText("hello", 1000),
//   Promise.resolve("hi"),
//   Promise.resolve("bye"),
// ])
//   .then((val) => console.log(val))
//   .catch((err) => console.log(err));

// Promise.all -> retunrs an array if all the promises fulfill successfully
// and if any if them get rejected it returns the first rejected Promise

// Promise.allSettled -> returns an array when all the promises are settled

// These are promise concurrency methods
// Promise.any(iterable)
// Promise.any -> returns the first fulfilled promise.
// This returned promise fulfills when any of the input's
// promises fulfills, with this first fulfillment value. It
//  rejects when all of the input's promises reject
// (including when an empty iterable is passed), with an
// AggregateError containing an array of rejection reasons.

// Promise.race
// Promise.race -> returns first the settles value(either fulfillment or rejection)

// Round 3 (React Js)

// Q1: Explain React Lifecycle methods
// We use useEffect hook to achieve React Life-cycle methods in Functional component
// ComponentDidMount, ComponentDidUpdate, ComponentDidUnmount

// Q2: ways to center a div
// Ans2:
// 1) .parent{display: flex, justify-content: center, align-items: center}
// 2) .parent{ position: 'relative'}, .divToBeCentered{ position:'absolute', top: 50%, left: 50%, transform: translate(-50%, -50%)}
// 3) .parent{display: grid, justify-content: center, align-items: center}

// Q3: Explain CSS Box Model
// width, border, padding, margin -> all 4 combined forms
// a box model and every element in HTML has this
// Also study box-sizing property

// Q4: Implement debounce in React Js
// Ans: Go to folder implement-debounce

// Round 4: HR + Cultural Round
