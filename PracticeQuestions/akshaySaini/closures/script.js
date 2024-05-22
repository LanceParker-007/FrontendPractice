// Code 1: This will also form closure
function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}

// outer()();

// Code 2: This will also form closure
function outer() {
  function inner() {
    console.log(a);
  }
  var a = 10;
  return inner;
}

// var close = outer();
// close();

// Both above code will form closure and will generate same output
// Code 3: This is also forming the closure

function outer() {
  function inner() {
    console.log(a);
  }
  let a = 10;
  return inner;
}

// var close = outer();
// close();

// Code 4: What will happen if we introduce b
function outer(b) {
  function inner() {
    console.log(a, b);
  }
  let a = 10;
  return inner;
}

// outer(11)();
// The inner fucntion forms closure with outer and b is also a part of outer

// Code 5: Lets nest outer also
// The above code will also give the same result
function outest(c) {
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    let a = 10;
    return inner;
  }
  return outer;
}

// outest(12)(11)(10);
// Result: 10 11 12

// Code 6: Lets have a variable with conflicting name in global
// The above code will also give the same result
function outest(c) {
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    let a = 10;
    return inner;
  }
  return outer;
}
let a = 100;
// outest(12)(11)(10);
// Result: 10 11 12, because inner variables kind of have higher priority
// If we had removed the let from outer, the inner function will try to find
// the a in its scope chain a more until it comes to gloabal execution context
// and if it had not found a in the global also the inner function will throw an error
// a is not defined

// Advantages of closures
// 1. Module pattern
// 2. Used in function currying
// 3. Used in higher  order functions like memoize and once
// 4. It helps in data hiding and encapsulation

// Example  for 4th point
// var counter = 0;
// function incrementCounter(params) {
//   return counter++;
// }
// console.log(incrementCounter());
// console.log(incrementCounter());

// In the abocve, anyone else the change the counter variable from
// some other place and we do not want the so we can solve this problem with the help of closures

// ** If function is redeclared the the latest will come in use
// It behaves like va

// Now our counter is hidden
function counter(params) {
  var count = 0;
  return function incrementCounter() {
    count++;
    return count;
  };
}

// The below code is not behaving as I thought
// console.log(counter()());
// console.log(counter()());
// console.log(counter()());
// Like in the above lines each time I do ()(), new instance is being created

const counter1 = counter();
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

const counter2 = counter();
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());

// Note **
// If we declare a function and variable with var keyord, both having same name
// the variable will be a var keyword variabel not a function
// function x(params) {
//   console.log(11);
// }
// var x = 10;

// console.log(x());

// Is the above counter code scalable
// What if we want to add decrement counter also

// This keyword scalabel code
// Disadvantages of closures
// Garbage collection in js
