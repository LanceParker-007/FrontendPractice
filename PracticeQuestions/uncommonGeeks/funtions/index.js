// Epi-1
// named function: are hoisted
// function welcome1(params) {
//   console.log("Welcomr named function");
// }
// welcome1();

// anonymous function: not hoisted
// const welcome2 = function () {
//   console.log("Welcome anonymous function");
// };
// welcome2();

// Self invoking function
// (function () {
//   console.log("Self invoking function");
// })();

// You can pass functions as an arguemnt to another function
// function add(num1, num2) {
//   return num1 + num2;
// }

// function test(f, num1, num2) {
//   const sum = f(num1, num2);
//   return sum;
// }

// const output = test(add, 10, 20);
// console.log(output);

// ----------------------------------------------

// Episode 2: Function nesting and closure

// Function nesting
// function one() {
//   console.log("function 1");
//   function two() {
//     console.log("function 2");
//     function three() {
//       console.log("function 3");
//       return "Chain ended";
//     }
//     return three;
//   }
//   return two;
// }

// const output = one();
// console.log(output()());

// Closure function: A function with along with its lexcial scope
// function one() {
//   const count = 10;

//   function two() {
//     console.log("function 2: ", count);
//   }
//   return two;
// }
// const output = one();
// output();
// Here output has function two stored in it, but along with the function it also has the value
// of const which is in the lexcial scope

// Episode 3:

// Que 1
// console.log(square); // Square var is hoisted but it is in temporal dead zone therefore we can not access the squate variable
// console.log(square(5)); // Square function is not hoisted and is also not initialized therefore we cannot invoke it
// const square = function (n) {
//   return n * n;
// };

// Ans: Reference error: Runtime error: cannot excess the "square" before initializtion

// Que 2
// console.log(square); // Square var is hoisted and since it is var type, we will get undefiend
// console.log(square(5)); // TypeError: Square is not a function, square function is still not hoisted but square variable is hoisted, therefore we are getting this error that square is not a function
// var square = function (n) {
//   return n * n;
// };

// Que 3
// function test(theObject) {
//   theObject.make = "Toyota";
// }

// const car_details = {
//   make: "Honda",
//   model: "Accord",
//   year: 1998,
// };

// console.log("Before", car_details.make); // Honda
// test(car_details);
// console.log("After", car_details.make); // Toyota

// Que 4
// var num1 = 20,
//   num2 = 3,
//   name = "Chamakh";

// function getScore() {
//   var num1 = 2,
//     num2 = 3;
//   function add() {
//     return name + " scored " + (num1 + num2);
//   }
//   return add();
// }

// console.log(getScore());

// Global
// MA phase: num1 = num2 = undefined, name = undefined, getScore() full function got scored
// ME: num1 = 20, num2 =3, name = "Chamakh"
// we got to log(getScore())
// getScore function is pushed in call stack and a new execution context is created
// now this excecution context a new memory allocation is done: num1 = num2 = undefined, add full function store
// this newly creted execution contexts starts executing and we get num1=2, num2=3 and then add function is called and which
// returns 5, then this getScore function returns 5 to log

// Que 4
// function addSquare(a, b) {
//   function square(x) {
//     return x * x;
//   }
//   return square(a) + square(b);
// }

// a = addSquare(2, 3); // 10
// b = addSquare(3, 4); // 25
// c = addSquare(4, 5); // 41
// console.log(a, b, c);

// Que 5
// function A(x) {
//   function B(y) {
//     function C(z) {
//       console.log(x + y + z);
//     }
//     C(3);
//   }
//   B(2);
// }
// A(1);
