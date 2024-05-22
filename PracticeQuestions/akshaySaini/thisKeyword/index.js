"use strict";
// 1. this in global space

// console.log(this); //value of this inside gloabal space is globalObject -> In browsers globalObject refers to window and in node js the value of globalObject is global

// 2. this inside a function
// this keyword acts diff in strict mode and notStrict mode
// function x(params) {
//   // the value depends on strict / non strict mode
//   console.log(this);
// }
// x();

// Above behaviour is because of something - this substitution(It happens in non-strict mode)
// Acc to this substitution if the value of this keyword is undefined or null
// this keyword will be replaced with globalObject)
// So we can say the value of this keyword is undefined inside a function but
// because js has something known as this substitution so the value
// of this keyword becomes globalObject when you are not in strict mode

// 3. this value depends on how this keyword is called (window)

// x(); // this is undefined(when in strict mode, if non strict this substitution will happen)
// window.x(); // this is globalObject
// If the function is called without any reference of an object than the value is undefined
// but if you call it like window.x() this refers to window

// 4. this inside a object's method
// Diff between function and a method(Function inside an object)
const student = {
  name: "Akshay",
  printName: function (introMessage) {
    console.log(introMessage + " " + this.name); // value of this keyword is obj itself
  },
};

// student.printName();

// call apply bind methods (sharing methods)
const student2 = {
  name: "Virat",
};

// student.printName.call(student2); // value of this = student2

// learn call, apply and bind properly

// 5. this inside arrow function
// Arrow functions do not have their own this, they take the value of their lexcial enclosing context

// const obj = {
//   a: 10,
//   x: function () {
//     console.log(this);
//   },
// };
// const obj1 = {
//   a: 10,
//   x: () => {
//     console.log(this);
//   },
// };

// obj.x(); // this = obj
// obj1.x(); // this = globalObject

// this inside nested arrow function

const obj = {
  a: 10,
  x: function () {
    const y = () => {
      console.log(this);
    };
    y();
  },
};
obj.x();

// this inside DOM => refers to the HTML element
