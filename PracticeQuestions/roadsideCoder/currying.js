// Currying in Javscript
// What is currying?
// Ans: When we convert f(a,b) into f(a)(b)

function normalFunc(a, b) {
  console.log(a, b);
}
// normalFunc(1, 2);

function curryingFunc(a) {
  return function inner(b) {
    console.log(a, b);
  };
}
// curryingFunc(1)(2);

// Q: Why should we use currying?
// Ans: https://roadsidecoder.hashnode.dev/javascript-interview-questions-currying-output-based-questions-partial-application-and-more
// Yaad agaya: Pure functions, First Class functions, Higher Order Functions

// Q1: sum(2)(6)(1)

function sum(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}

// console.log(sum(2)(6)(1));
// Tip: First you can explain normally and then take the above
// code and then explain this also step by step

// Q2:
/* 
evaluate("add")(4)(2) => 6
evaluate("mul")(4)(2) => 8
evaluate("div")(4)(2) => 2
evaluate("sub")(4)(2) => 2
*/

function evaluate(str) {
  return function commonFunc(a) {
    return (b) => {
      if (str === "add") return a + b;
      else if (str === "mul") return a * b;
      else if (str === "div") return a / b;
      else if (str === "sub") return a - b;
    };
  };

  //   Noob
  //   if (str === "add") {
  //     return (a) => {
  //       return (b) => {
  //         return a + b;
  //       };
  //     };
  //   } else if (str === "mul") {
  //     return (a) => {
  //       return (b) => {
  //         return a * b;
  //       };
  //     };
  //   } else if (str === "div") {
  //     return (a) => {
  //       return (b) => {
  //         return a / b;
  //       };
  //     };
  //   } else if (str === "sub") {
  //     return (a) => {
  //       return (b) => {
  //         return a - b;
  //       };
  //     };
  //   }
}

// console.log(evaluate("add")(4)(2)); // 6
// console.log(evaluate("mul")(4)(2)); // 8
// console.log(evaluate("div")(4)(2)); // 2
// console.log(evaluate("sub")(4)(2)); // 2

// Also we can create our own small function and reuse it
// const mul = evaluate("mul");
// console.log(mul(3)(4));

// Q3: Infinite currying => sum(1)(2)(3)...(n)
// Implement: console.log(add(5)(2)(4)(5)())

// Ans:
// function add(a) {
//   return function helper(b) {
//     if (b) return add(a + b);
//     else return a;
//   };
// }

// console.log(add(5)(2)(4)(5)());

// Q4: Currying vd Partial Application
// In currying we generally have same number of nested functions as we have arguments
// but in case of Partial Application, we can have 2 nested funtions for 3 arguements
// We just did partial implementation and shortened the number of arguemnts being passed
// Partial application transforms a function into another function with small arity(no. of args)

// Q5: Manipulating DOM
// We can create a function which update textContent for DOM elements

// Ans 5:
// function updateTextContent(query_selector) {
//   return function (content) {
//     document.querySelector(query_selector).textContent = content;
//   };
// }

// const updateHeading = updateTextContent("#heading");
// updateHeading("Hello World");

// Q6: Implement currying function
// Write a function which converts f(a,b,c) into f(a)(b)(c)

// Tips:
// function takesFunc(fn) {
//   console.log(fn.name, fn.length); // temp, no. of args passed in fn
// }
// function temp(a, a, d, sfds, b, c, d) {}
// takesFunc(temp);
// Ans 6:
function curry(fn) {
  return function curriedFunc() {};
}

const sum1 = (...args) => {
  return a + b + c + d;
};
console.log(sum1(1, 2, 3));
// const totalSum = curry(sum1);
// console.log(totalSum(1)(6)(5)(6));
