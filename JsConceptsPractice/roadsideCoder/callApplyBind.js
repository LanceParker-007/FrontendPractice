// Call, Bind and Apply in Javscript (Explicit Binding)
// Question 1 - What is call?

// var obj = {
//   name: "Piyush",
// };

// function sayHello(strVal, strVal2) {
//   return "Hello " + this.name + " " + strVal + " " + strVal2;
// }

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

// Q1: Tell Output
// const person = {
//   name: "Piyush",
// };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 24)); //Piyush is 24
// console.log(sayHi.bind(person, 24)); // [Function: bound sayHi]

// Q2:

// const age = 10;
// var person = {
//   name: "Piyush",
//   age: 20,
//   getAge: function () {
//     return this.age;
//   },
// };

// var person2 = { age: 24 };
// console.log(person.getAge.call(person2)); // 24
// console.log(person.getAge.apply(person2)); // 24
// console.log(person.getAge.bind(person2)()); // 24

// Q3:
// var status = "😎";

// setTimeout(() => {
//   const status = "😍";

//   const data = {
//     status: "🥑",
//     getStatus() {
//       return this.status;
//     },
//   };

//   console.log(data.getStatus());
//   console.log(data.getStatus.call(this));
// }, 0);

// Q4: Call printAnimals such that it prints all animals in object
// const animals = [
//   { species: "Lion", name: "King" },
//   { species: "Whale", name: "Queen" },
// ];

// function printAnimals(i) {
//   this.print = function () {
//     console.log("#" + i + " " + this.species + ": " + this.name);
//   };
//   this.print();
// }

// Ans
// animals.forEach((animal, i) => {
//   printAnimals.call(animal, i);
// });

// Q8: Append array arr2 to array arr1
// You can do it by using concat, loops etc

// const arr1 = ["a", "b"];
// const arr2 = [1, 2, 3];

// Cannot use this as it returns a totally new array
// arr1.concat(arr2);

// Method spread operator
// arr1.push(...arr2);

// Using apply
// arr1.push.apply(arr1, arr2);

// console.log(arr1);

// Q9: Using apply to enhance built-in functions
// Find min/max number in an array

// const numbers = [5, 6, 2, 3, 7];

// Normal method
// const res = Math.max(...numbers);

// We can use apply method when working with arrays
// const res = Math.max.apply(null, numbers);
// console.log(res);

// Q10: Bound function
// function f() {
//   console.log(this);
// }

// f();

// let u = {
//   a: 1,
//   b: 2,
// };

// const v = f.bind(u);
// v();

// const w = f.bind(null);
// w();

// let user = {
//   g: f.bind(null),
// };

// user.g();

// Ans: null means pointing to global object,
// and when using with bind we fixed the context of g
// so when calling user.g() does not change the this

// Q11: Bind Chaining

// function f() {
//   console.log(this.name);
// }

// f = f.bind({ name: "Jhon" }).bind({ name: "Ann" });

// f();
// Ans: Jhon
// Bind chaining does not exist, once a function
// is bound to a particular object it will always
// boud to that particular object

// Fix line 247 of code
// function checkPassword(success, failed) {
//   let password = prompt("Password?", "");
//   if (password == "rc") success();
//   else failed();
// }

// let user = {
//   name: "Piyush Agarwal",

//   loginSuccessful() {
//     console.log(`${this.name} logged in`);
//   },

//   loginFailed() {
//     console.log(`${this.name} failed to log in`);
//   },
// };

// checkPassword(user.loginSuccessful, user.loginFailed);
// // Ans
// checkPassword(user.loginSuccessful.bind(user), user.loginFailed.bind(user));

// Q13: Followup of the above;
// Partial application for login function
// Note** Partial Application

// function checkPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rc") ok();
//   else fail();
// }

// let user = {
//   name: "Piyush Agarwal",

//   login(result) {
//     console.log(
//       `${this.name + (result ? " login successful" : " login failed")}`
//     );
//   },
// };

// checkPassword(?,?) // What should I pass
// Ans
// checkPassword(user.login.bind(user, true), user.login.bind(user, false));

// Q14: Explicit Binding with Arrow Function

// var age = 14;
// const age = 14

// var person = {
//   name: "Piyush",
//   age: 20,
//   getAgeArrow: () => {
//     console.log(this.age); // 14 with var, undefined with const
//   },
//   getAge: function () {
//     console.log(this.age);
//   },
// };

// var person2 = { age: 24 };
// The arrow function will behave same as it was working earlier
// because arrow functions establish this based on the scope the
// arrow function is defined within, and the this value does not
// change based on how the function is invoked.
// person.getAgeArrow.call(person2); // 24
// person.getAge.call(person2); // 24

// Pollyfill for call

var name = "Roadside";

const o = {
  name: "Piyush",
};

function sayHi(var1, var2) {
  console.log(this.name, var1, var2);
}

// Call
// Function.prototype.myCall = function (obj, ...args) {
//   // Do error handling
//   if (typeof this !== "function") {
//     throw new Error(this + "It's not callable!");
//   }

//   let fn = this;
//   obj = {
//     ...obj,
//     fn, // if I directly write this over here, that this wil point to obj
//   };
//   obj.fn(...args);
// };

// sayHi("n1");
// sayHi.call(o, "n2");
// sayHi.myCall(o, "n3");

// Apply

// Function.prototype.myApply = function (context, argsArray) {
//   if (typeof this !== "function") {
//     throw new Error(this + "It's not callable!");
//   }

//   if (!Array.isArray(argsArray)) {
//     throw new Error(this + "Passed argument is not an array!");
//   }

//   let fn = this;
//   context = {
//     ...context,
//     fn,
//   };
//   context.fn(...argsArray);
// };

// sayHi.myApply(o, ["argsArray1"]);

// Bind: Bind ek function return karta hai

// Function.prototype.myBind = function (obj, ...args1) {
//   if (typeof this !== "function") {
//     throw new Error(this + "cannot be bound as it's not callable!");
//   }

//   let fn = this;
//   return function (...args2) {
//     obj = {
//       ...obj,
//       fn,
//     };
//     obj.fn(...args1, ...args2);
//   };
// };

// const mySayHi = sayHi.myBind(o, "argbefore1");
// mySayHi("argAfter1");

// Keywords to study
// Implicit binding, Explicit binding, partial application
