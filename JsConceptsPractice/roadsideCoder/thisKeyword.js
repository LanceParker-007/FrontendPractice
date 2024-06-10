// Exaplin this keyword: The this keyword refers to the context
// where a piece of code, such as a function's body, is supposed to run.
// this.a = 10;
// function outer() {
//   function inner() {
//     this.a = 11;
//     console.log(this.a);
//   }
//   inner();
// }

// outer(); //window.outer(), therefore this poiting to window
// console.log(this.a);

// Q1: Output
// const user = {
//   firstName: "Piyush!",
//   getName() {
//     const firstName = "Piyush Agarwal!";
//     return this.firstName;
//   },
// };

// console.log(user.getName()); //this keyword will point to user,
// Ans: Piyush

// Q2:
// function makeUser() {
//   return {
//     name: "Jhon",
//     ref: this,
//   };
// }

// let obj = makeUser();

// console.log(obj.ref.name); // "" or undefined

// How to fix the above problem
// function makeUser1() {
//   return {
//     name: "Jhon",
//     ref() {
//       return this;
//     },
//   };
// }

// Q3:
// let obj1 = makeUser1();
// console.log(obj1.ref().name); // "" or undefined

// const u = {
//   name: "Piyush Agarwal",
//   logMessage() {
//     console.log(this.name);
//   },
// };

// setTimeout(u.logMessage, 1000); // nothing or undefined
// How to fix this
// setTimeout(() => {
//     u.logMessage();
//   }, 1000);

// Q4
// const user = {
//   name: "Piyush",
//   greet() {
//     return `Hello, ${this.name}`;
//   },
//   farewell: () => {
//     return `Goodbye, ${this.name}`;
//   },
// };

// console.log(user.greet()); // Piyush
// console.log(user.farewell()); // undefined

// Q5: Create an object calculator

// let calculator = {
//   x: 0, // we can remove these declarations of x and y
//   y: 0,
//   read: function () {
//     (this.x = prompt("Enter first value")),
//       (this.y = prompt("Enter second value"));
//   },
//   sum: function () {
//     return Number(this.x) + Number(this.y);
//   },
//   mul: function () {
//     return this.x * this.y;
//   },
// };

// calculator.read(); // will read two values from user
// console.log(calculator.sum());
// console.log(calculator.mul());

// Q6:

// var length = 4;
// function callback() {
//   console.log(this.length);
// }

// const object = {
//   length: 5,
//   method(fn) {
//     fn(); // this fn is called with respect to global
//   },
// };

// object.method(callback); // 4

// Q7:

var length = 4;
function callback() {
  console.log(this.length);
}

const object = {
  length: 5,
  method() {
    // arguments[callback, 2, 3], now this array
    // is an object in itself, so when we arguments[0],
    // we are calling the fun at 0 index with respect
    // to arguments array and .length here will
    //  mean arguments.length
    arguments[0](); // the cal
  },
};

// object.method(callback, 2, 3); // 4

// Q6: Implement the code
// function calculator(params) {
//   this.total = 0;
//   this.add = (x) => {
//     this.total += x;
//     return this;
//   };
//   this.mul = (x) => {
//     this.total *= x;
//     return this;
//   };
//   this.sub = (x) => {
//     this.total -= x;
//     return this;
//   };
//   return this;
// }

// const calc = calculator();
// const res = calc.add(10).mul(5).sub(30).add(10);
// console.log(res.total);

// Q6: Implement the code
const calc = {
  total: 0,
  add(x) {
    this.total += x;
    return this;
  },
  mul(x) {
    this.total *= x;
    return this;
  },
  sub(x) {
    this.total -= x;
    return this;
  },
};

const res = calc.add(10).mul(5).sub(30).add(10);
console.log(res.total);
