// Functional Programming: Think in respective of small small functions
// Higher Order Functions: Functions which take function as an argument
// or return a function are called Higher Order Components

const radius = [3, 1, 2, 4];

// Calcualte area, circumference and diameter

// Noob approach
// Calculating area
const calculateArea = function (radius) {
  const output = [];
  radius.forEach((val) => output.push(Math.PI * val ** 2));
  return output;
};
// Calculating circumference
const calculateCircumference = function (radius) {
  const output = [];
  radius.forEach((val) => output.push(2 * Math.PI * val));
  return output;
};
// Calculating area
const calculateDiameter = function (radius) {
  const output = [];
  radius.forEach((val) => output.push(2 * val));
  return output;
};

// console.log(calculateArea(radius));
// console.log(calculateCircumference(radius));
// console.log(calculateDiameter(radius));

// So much repetitive code

const area = function (val) {
  return Math.PI * val ** 2;
};
const circumference = function (val) {
  return 2 * Math.PI * val;
};
const diameter = function (val) {
  return 2 * val;
};

// My method
const calculate = function (func) {
  return function (radiusArray = []) {
    const output = [];
    radiusArray.forEach((val) => output.push(func(val)));
    return output;
  };
};

// const calAreaInBulk = calculate(area);
// const calCircumferenceInBulk = calculate(circumference);
// const calDiameterInBulk = calculate(diameter);

// console.log(calAreaInBulk(radius));
// console.log(calCircumferenceInBulk(radius));
// console.log(calDiameterInBulk(radius));

// Akshay Saini's method
const cal = function (arr, logic) {
  const output = [];
  arr.forEach((val) => output.push(logic(val)));
  return output;
};

// console.log("Method 2");
// console.log(cal(radius, area));
// console.log(cal(radius, circumference));
// console.log(cal(radius, diameter));

// We can improve it further
Array.prototype.cal = function (logic) {
  const output = [];
  this.forEach((val) => output.push(logic(val)));
  return output;
};
console.log("Method 3, We created our own map method");
console.log(radius.cal(area));
console.log(radius.cal(circumference));
console.log(radius.cal(diameter));
