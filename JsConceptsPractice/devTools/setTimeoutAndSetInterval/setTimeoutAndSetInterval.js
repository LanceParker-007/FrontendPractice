// setTimeout and setInterval
// -> Timer function: Schedule function call
// -> Not available EcmaScript Specs butsupported by all browsers and Node.js

// setTimeout
// It helps us to execute a function with after some time/delay and the function run only once.

// Syntax of setTimeout
// var timeoutId = setTimeout(func|code, [delay](optional), [arg1],[arg2], ... (args passed to function))

// Ex1: Call setTimoue with string as first parameter
// This function is only available in browser console and uses eval function internally
// If you pass simple string a first param it will give a reference error
// setTimeout("console.log('You guys are awesome')", 2000);

// Ex2: Call setTimoue with function as first parameter
// Hello DevTools is printed after 1 sec
// function greeting() {
//   console.log("Hello DevTools");
// }

// setTimeout(greeting, 1000);

// // Ex3: Passing args to callback function
// function greeting(name) {
//   console.log("Hello " + name);
// }

// // This is how to pass param to the call
// setTimeout(greeting, 1000, "DevTools");

// // This below code will not work:
// setTimeout(greeting("Saloni"), 1000);
// // This will work but we didn't passed any parameter to the callback function
// setTimeout(() => {
//   greeting("Saloni");
// }, 1000);

// Asynchronous Behaviour of setTimout
// function greeting(name) {
//   console.log("Hello " + name);
// }

// setTimeout(greeting, 0, "DevTools");

// console.log("After setTimeout function");

// Console.log gets printed first even though we have 0ms delay
// this is because of event loop

// Cancel the setTimeout function
// function greeting() {
//   console.log("Hello World");
// }

// const timeoutId = setTimeout(greeting, 1000);

// clearInterval(timeoutId);
// Nothing gets printed asd we cleared the setTimeout

// SetInterval
// -> It runs a function after some regular interval of time for infinite times

// For examples Everything is same as setTimeout just replace setTimeout with setInterval

// Key Notes:
// Execution context (this)
// generally window or global, so if you want to use your own context first bind your callback function

// Delays can be longer than specified time
// context switching time or current stack busy

// Random Practice Question
function x() {
  setTimeout(() => {
    console.log(i);
  }, 0);
  var i = 1;
}

x();
