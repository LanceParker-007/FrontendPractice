// Q1: What will be logged to console?
// let count = 0;
// (function printCount() {
//   if (count === 0) {
//     let count = 1; //Shadowing, local variables shadow outer variables
//     console.log(count);
//   }
//   console.log(count);
// })();
// Ans: 1 0

// Q1: Write a function that would allow you to do this
// var addSix = createBase(6);
// console.log(addSix(10)); // returns 16
// console.log(addSix(2)); // returns 27

// Ans:
// function createBase(val) {
//   let baseValue = val;
//   console.log(this.baseValue);
//   return function (x) {
//     return baseValue + x;
//   };
// }

// var addSix = createBase(6);
// console.log(addSix(10)); // 16
// console.log(addSix(21)); // 27

// Q3: Time Optimization
// function find(index) {
//   let a = [];
//   for (let i = 0; i < 1000000; i++) {
//     a[i] = i * i;
//   }
//   console.log(a[index]);
// }

// console.time("6");
// find(6);
// console.timeEnd("6");
// console.time("12");
// find(12);
// console.timeEnd("12");

// Ans:
// function optimizedFine() {
//   let a = [];
//   for (let i = 0; i < 1000000; i++) {
//     a[i] = i * i;
//   }
//   return function (index) {
//     console.log(a[index]);
//   };
// }

// const find = optimizedFine();
// console.time("6");
// find(6);
// console.timeEnd("6");
// console.time("12");
// find(12);
// console.timeEnd("12");

// Q4: setTimeout output
// function a() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// a();
// Ans: 3 3 3 (First 3 gets printed instantly then other gets printed with 1sec interval each)z

// Q4.1: setTimeout output
// function a() {
//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// a();
// Ans: 0 1 2 (First 3 gets printed instantly then other gets printed with 1sec interval each)

// Q4.2: setTimeout output
// function a() {
//   for (var i = 0; i < 3; i++) {
//     function helper(j) {
//       setTimeout(() => {
//         console.log(j);
//       }, j * 1000);
//     }
//     helper(i);
//   }
// }
// a();
// Ans: 0 1 2 (First 3 gets printed instantly then other gets printed with 1sec interval each)z

// Q5: How would you use closure to create a private counter?
// function createCounter(params) {
//   let counter = 0; // _counter (convention to create private variables)

//   this.incrementCounter = () => {
//     counter++;
//     console.log(counter);
//   };
//   this.decrementCounter = () => {
//     counter--;
//     console.log(counter);
//   };

//   return this;
// }

// const counter = createCounter();
// counter.incrementCounter();
// counter.decrementCounter();

// without using this keyword
// function createCounter1(params) {
//   let counter = 0; // _counter (convention to create private variables)

//   function incrementCounter() {
//     counter++;
//     console.log(counter);
//   }
//   function decrementCounter() {
//     counter--;
//     console.log(counter);
//   }

//   return {
//     incrementCounter,
//     decrementCounter,
//   };
// }

// const counter1 = createCounter1();
// counter1.incrementCounter();
// counter1.decrementCounter();

// Mistakes I did:
// 1) Did not ask if the inc or decr is done by one or custom value

// Q6: What is a Module pattern?
var Module = (function () {
  function privateMethod() {
    // do something
    console.log("private");
  }

  return {
    publicMethod: function () {
      // can call privateMethod
      console.log("public");
    },
  };
})();

// Module.privateMethod();
// Module.publicMethod();

// Q7: Make this run only once
// let view;
// function likeTheVideo() {
//   let flag = false;
//   if (flag) {
//     view = "Roadside Coder";
//     console.log("Subscribe to", view);
//     flag = true;
//   }
// }

// likeTheVideo();
// likeTheVideo();
// likeTheVideo();
// likeTheVideo();

// Q8: Once Polyfill (Loadash)
function once(fn, context) {
  let ran;
}

// Q9: Memoize Polyfill
function fn(n1, n2) {
  return n1 * n2;
}

function myMemoize(fn) {
  let cache = [];
  return function clumsySquare(num1, num2) {
    if (cache[{ num1, num2 } || cache[{ num2, num1 }]])
      return cache[{ num1, num2 }];
    for (let i = 0; i < 100000000; i++) {}

    return (cache[{ num1, num2 }] = fn(num1, num2));
  };
}

console.time("First call");
const memoizedClumsySquare = myMemoize(fn);
memoizedClumsySquare(9467, 7649);
console.timeEnd("First call");
console.time("Second call");
memoizedClumsySquare(9467, 7649);
console.timeEnd("Second call");

// Q10: Diff between closure and scope
// Closure, inner function can access outer function variables at later time
// Socpe: What variables you have access to

// Docker commands
// docker build -t evueme/ev-web:latest .
// docker push evueme/ev-web -a
