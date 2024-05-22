// Noob approach
// let count = 0;
// function add(params) {
//   count += 1;
//   console.log(count);
// }
// add();
// add();
// add();

// Second approach, nesting function approach and closure
// debugger;
// function add() {
//   let count = 0;
//   function incrementCount() {
//     count += 1;
//     console.log(count);
//   }
//   return incrementCount;
// }
// const helper = add();
// helper();
// helper();
// helper();

// Third approach, nesting function approach and closure and selfInvoking
// A more optimized way: A self invoking functions
// const helper = (function add() {
//   let count = 0;
//   function incrementCount() {
//     count += 1;
//     console.log(count);
//   }
//   return incrementCount;
// })();
// helper();
// helper();
// helper();

// More questions on closures(It is a combination of a function bundled together(enclosed) with references to its surrounding state(the lexical environment))
// Not forming a closure(Because we are not returning displaying name and calling it in between the execution context of init)
// function init() {
//   var name = "Harsh";
//   function displayName() {
//     console.log(name);
//   }
//   displayName();
// }
// init();

// It is closure
// function makeFunc() {
//   var name = "Harsh";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }
// const myFunc = makeFunc();
// myFunc();

// Que 3
// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }
// var add5 = makeAdder(5);
// var add10 = makeAdder(10);
// console.log(add5(2));
// console.log(add10(2));

// Advance question
// Que 4. Self invoking functions are used to create closures
// debugger;
// (function testA(a) {
//   return (function testB(b) {
//     console.log(a, b);
//   })(1);
// })(0);

// Below questions explanation lies in block scope and global scope
// Revisit again
// Que 5.
// function test() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i);
//     }, 1000);
//   }
// }
// test(); // 3 3 3

// function test() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i);
//     }, 0);
//   }
// }
// test(); // 3 3 3

// debugger;
// function test() {
//   for (let i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i);
//     }, 0);
//   }
// }
// test(); // 0 1 2

// Same result uing var as let with the help of closures
// function test() {
//   for (var i = 0; i < 3; i++) {
//     function test2(j) {
//       setTimeout(function log() {
//         console.log(j);
//       }, 0);
//     }
//     test2(i);
//   }
// }
// test(); // 0 1 2
