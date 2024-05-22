// Hoisting epi - 2

// Example: 4, Good question, different ans with diff positions of let and var
// if statement is block scope so var can go out of it but let cannot
debugger;
let ate = 10;
function getAte() {
  if (ate === undefined) {
    var ate = 6;
    return ate;
  } else {
    return 10;
  }
}
console.log("Rate is: ", getAte());
console.log(ate);

// Hositing epi - 3
// Example 1: Explain the scope of temporal dead zone
// {
//     // Because of hoisting TDZ start here
//     const func = () => console.log(letVar);
//     //   TDZ
//     let letVar = 3;
//     //   TDZ ends when value assigned
//     func();
//   }

// Example 2: output of the program

// Example 3: Output of this
// {
//   function funct() {
//     console.log(letVar);
//   }
//   let letVar = 3;
// }
// Note: Variables(var, let, const) get hoisted,
// but arrow functions do not get hoisted

// Example 4: Why var hoisting is present in JS
// My ans: It is bug published in rush, not removed don't know why

// Example 5: How hoisting works in js, if it is an interpreted language (executes line by line)
// Because how js exceutes code, execution context is created which has 2 phases,
// In first phase Memory allocation is done and all the variables are assigned some memory and
// var variables get assigned a special value called undefined
