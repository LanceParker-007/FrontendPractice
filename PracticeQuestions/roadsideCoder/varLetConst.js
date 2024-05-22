// 1. var is from the beginning and let and const introduced in ES6
// 2. let and const are block scoped and var is funcional scoped
// 3. Shadowing,
function test() {
  let a = "Hello";

  if (true) {
    let a = "Hi";
    console.log(a);
  }

  console.log(a);
}
// test();

// You can shadow a var variable but you cannot shadow a let variable it is called illegal shadowing

// 4. Declaration
// var a = 10;
// var a = 6; // var variabeld can be redclared
// let b = 10;
// // let b = 8; //This is not allowed
// const c = 10;
// // let c = 8; //This is not allowed

// 5. Declaration without initialization
// var a;
// let b;
// const c; // Need to initialise

// 6. Initialization and Re-initialization
// var a = 10;
// a = 8;
// let b = 10;
// b = 8;
// const c = 10;
// c = 8; // Now allowed

// 7.Javascript execution context
// 8. Hoisting
// 9. Temporal Dead Zone
// let and const are hoisted but they are in temporal dead zone until they are declared
function abc(params) {
  console.log(a, b, c);

  const c = 40;
  let b = 20;
  var a = 10;
}
abc();
//
//
//
//
//
//
//
//
//
//
