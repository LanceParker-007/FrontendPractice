// Functions in Javascript
// Q1: What is Function Declaration also called function definition or function statement

// function square(num) {
//   return num * num;
// }

// Q2: Function expression, an anonymous function is assigned to a variable
// const square = function (num) {
//   return num * num;
// };

// Q3: First class functions: A function which can be treated like a variable is called first class function
// function square(num) {
//   return num * num;
// }

// function displaySquare(fn) {
//   console.log("Square is " + fn(5));
// }

// displaySquare(square);

// Q4: What is IIFE (Immediately Invoked Function Expression)
// (function square(num) {
//   console.log(num * num);
// })(5);
// Example: Output based question
// (function (x) {
//   return (function (y) {
//     console.log(x);
//   })(2);
// })(1);

// Q5: Function Scope: Variables defined inside a function cannot be accessed from anywhere outside the function, because the variable is defined only in the scope of the function.
// Example: Outbput based question
// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }
// Ans: 0 1 2 3 4 (0 gets printed instantly and then others(1,2,3,4) get printed in a interval of 1 sec each)
// Its because let is block scoped, if we would have var we would have got 5 5 5 5 5 in the output as var is not blocked scoped
// and each instance of i declared with var will point to same i

// Q6: Function Hoisting: The complete function is copied in the scope

// funcName(); // We get Roadside Coder not undefined like var
// function funcName(params) {
//   console.log("Roadside Coder");
// }

// Example: Output based question
// var x = 21;

// var fun = function () {
//   console.log(x); // undefined
//   var x = 20;
// };

// fun();

// Q7: Params vs arguments
// function name(params) { // Params
//   console.log(params);
// }
// name("Nitin"); //Arguments

// Bonus: Spread vs rest
// function multiply(...nums) { // rest operator, it should be the last params
//   console.log(nums[0] * nums[1]);
// }
// var arr = [5, 6];
// multiply(...arr); //spread operator

// Example: Output based question
// const fn = (a, x, y, ...numbers) => {
//   console.log(x, y); // 6 3
//   console.log(x, y, numbers); // 6 3 [7,8,9]
//   console.log(x, y, ...numbers); // spreaded 6 3 7 8 9
// };

// fn(5, 6, 3, 7, 8, 9);

// Q8: Callback Function: A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
// setTimeout, map, filter, reduce, eventListener all take a callback functions

// Q9: Arrow Functions (They do not have their own this, their this keyword value represents the this value of their lexcial parent)

// 1st: Syntax
// const add = function (num1, num2) {
//   console.log(num1 + num2);
// };
// add(1, 2);

// const arrowAdd = (num1, num2) => console.log(num1 + num2);
// arrowAdd(1, 2);

// // 2nd: Implicit return function
// const sq = (num) => num * num;

// // 3rd: Arguments keyword
// function fn() {
//   console.log(arguments); // arguments obj
//   console.log(...arguments); // arguments value spreaded
//   console.log([...arguments]); // arguments values array
// }
// fn(1, 2, 3, 4);

// Arrow function does not have arguments keyword

// Q10: "this" keyword
let user = {
  username: "Roadside Coder",
  rc1: () => {
    console.log("Subscribe to " + this.username); //undefined
  },
  rc2() {
    console.log("Subscribe to " + this.username); // Roadside Coder
  },
};

user.rc1(); // Because this keyword inside arrow function points to the this of lexical parent
user.rc2();
