// Memoization: An optimization technique used primarily to
// speed up computer programs by storing the results of
// expensive function calls and returning the cached result
// when the same input occurs again

// Normal memoizing example
// let cache = {};
// function add(num) {
//   if (cache[num] !== undefined) {
//     console.log("Cache result");
//     return cache[num];
//   } else {
//     console.log("Not cache result");
//     cache[num] = num + 10;
//     return cache[num];
//   }
// }

// console.log(add(10));
// console.log(add(10));
// console.log(add(10));

// Fibonacci example
// 0 1 2 3 4 5 6 7  8  9  10
// 0 1 1 2 3 5 8 13 21 34 55
// let cache = {};
// function Fibonacci(n) {
//   if (n === 0 || n === 1) return n;

//   if (cache[n]) {
//     return cache[n];
//   } else {
//     cache[n] = Fibonacci(n - 1) + Fibonacci(n - 2);
//     return cache[n];
//   }
// }

// console.log(Fibonacci(50));

// m a function with varying arguments
const add = (num1, num2) => {
  return num1 + num2;
};

const multiply = (num1, num2, num3) => {
  return num1 * num2 * num3;
};

function getUniqueId(fn, args) {
  let uniqueId = [];
  uniqueId = uniqueId.concat(fn?.name, args);
  return uniqueId.join("|"); // join using some delimiter
}

function memoize(fn) {
  let cache = {};
  return function (...args) {
    // console.log(args);
    let uniqueId = getUniqueId(fn, args);
    if (cache[uniqueId]) {
      console.log("Cached ");
      return cache[uniqueId];
    } else {
      console.log("Not Cached ");
      return (cache[uniqueId] = fn(...args));
    }
  };
}

let memoizeAdd = memoize(add);
let memoizeMul = memoize(multiply);

console.log(memoizeAdd(10, 20));
console.log(memoizeMul(1, 2, 3));
console.log(memoizeAdd(10, 20));
console.log(memoizeMul(1, 2, 3));

// Challenges
// 1. This sol cannot handle anoymous function
// 2. If the delimiter that we are using does not come in function name
