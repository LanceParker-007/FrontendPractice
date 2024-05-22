// Call, Bind and Apply in Javscript (Explicit Binding)
// Question 1 - What is call?

var obj = {
  name: "Piyush",
};

function sayHello(strVal, strVal2) {
  return "Hello " + this.name + " " + strVal + " " + strVal2;
}

// console.log(sayHello.call(obj, "Yo", ["yo2"]));
// console.log(sayHello.apply(obj, ["Yay", "Yay2"]));
// const bindedSayHello = sayHello.bind(obj, "Yeah", "yeah2");
// console.log(bindedSayHello());

// Pollyfill of Bind
// Step 1
// function myBind(fn, obj, ...args1) {
//   return function (...args2) {
//     obj = {
//       ...obj,
//       fn,
//     };
//     return obj.fn(...args1, ...args2);
//   };
// }

// const bindedSayHello2 = myBind(sayHello, obj, "one");
// console.log(bindedSayHello2("two"));

// Step 2
// Function.prototype.myBind = function (obj, ...args1) {
//   const fn = this;
//   return function (...args2) {
//     obj = {
//       ...obj,
//       fn,
//     };
//     return obj.fn(...args1, ...args2);
//   };
// };

// const bindedSayHello3 = sayHello.myBind(obj, "one1");
// console.log(bindedSayHello3("two2"));

// PollyFill for call
// Step 1
// function myCall(fn, obj, ...args) {
//   obj = {
//     ...obj,
//     fn,
//   };
//   return obj.fn(...args);
// }

// console.log(myCall(sayHello, obj, "callStep1", "callStep2"));

// Step 2
// Function.prototype.myCall2 = function (obj, ...args) {
//   const fn = this;
//   obj = {
//     ...obj,
//     fn,
//   };
//   return obj.fn(...args);
// };

// console.log(sayHello.myCall2(obj, "callStep1+", "callStep2+"));

// Pollyfill for apply
// function myApply(fn, obj, arr) {
//   obj = {
//     ...obj,
//     fn,
//   };
//   return obj.fn(...arr);
// }

// console.log(myApply(sayHello, obj, ["apply1", "appl2"]));

// Step 2
// Function.prototype.myApply2 = function (obj, arr) {
//   const fn = this;
//   obj = {
//     ...obj,
//     fn,
//   };
//   return obj.fn(...arr);
// };

// console.log(sayHello.myApply2(obj, ["apply1+", "appl2+"]));
