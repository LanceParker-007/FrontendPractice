// Article Link: https://www.geeksforgeeks.org/what-is-currying-function-in-javascript/

let multiply = function (x, y) {
  console.log(x * y);
};

// Function currying using bind method,
let multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(3);

let multiplyByThree = multiply.bind(this, 3);
// multiplyByThree(5);

//  we make a copy of multiply method to create
//  more methods out of it by prestting some values.

// Using function closures
let newMultiply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let newMultiplyByTwo = newMultiply(2);
// newMultiplyByTwo(3);

let newMultiplyByThree = newMultiply(3);
// newMultiplyByThree(5);

// Que: sum(1)(2)(3)(4)();

let sum = (a) => {
  return (b) => {
    if (!b) return a;
    else return sum(a + b);
  };
};

// console.log(sum(1)(2)(3)(4)());
console.log(sum());
