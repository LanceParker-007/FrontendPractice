`Currying is a process in functional programming in which 
we can transform a function with multiple arguments into 
a sequence of nesting functions. It returns a new function that 
expects a new function that expects the next argument inline`;

// Example:
// function add(x) {
//   return function (y) {
//     return x + y;
//   };
// }
// 1st way
// const output = add(10);
// console.log(output(20));

// 2nd waty
// const output = add(10)(20);
// console.log(output);

// Interviewers will you only this add(10)(20) and can ask to write a function

// Currying can be used to solve mathematical expressions
// const f = (x) => x + x;
// const g = (y) => y * y;
// console.log(f(g(10))); // Function currying

// Que 1: Write a function which handles both these expressions
// add(10)(20) or add(10, 20)

const sum = (a) => {
  return (b) => {
    return b ? sum(a + b) : a;
  };
};
console.log(sum(1)(2)(3)(5)(7)());
