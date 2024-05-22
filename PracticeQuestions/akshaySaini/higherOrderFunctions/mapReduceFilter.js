// map, reduce and filter are higher order functions in javascript

const arr = [5, 1, 3, 2, 6];
// Double - [10, 2, 6, 4, 12]
// Triple - [15, 3,9,6,18]
// Binary - ["101","1","11","10","110"]

// Map function can be used to transform an array
function double(x) {
  return x * 2;
}
function triple(x) {
  return x * 3;
}

// My binary
function binary(x) {
  if (x === 0 || x === 1) return x.toString();
  let remainder = x % 2;
  let nextX = Math.floor(x / 2);
  return binary(nextX).toString() + remainder.toString();
}
// Akshay Saini's Binary
function aBinary(x) {
  return x.toString(2);
}
// const output = arr.map(aBinary);
// console.log(output);

// Filter function is used to filter the array
function odd(x) {
  return x % 2 !== 0;
}

// const output = arr.filter(odd);
// console.log(output);

// Reduce function reduces the array to a single value
// eg: sum of vals, largest vals

function findSum(arr) {
  let ans = 0;
  arr.forEach((val) => (ans += val));
  return ans;
}
function findMax(arr) {
  let ans = 0;
  arr.forEach((val) => (ans = Math.max(ans, val)));
  return ans;
}

// const output = findMax(arr);
// console.log(output);

// Now findSum and findMax using reduce
// first param of callback is an accumulator, second is val of arr and we also provide a initial value
const res = arr.reduce((prevVal, curVal) => (prevVal += curVal), 0);
// console.log(res);

const res1 = arr.reduce(
  (accumulator, curVal) => Math.max(accumulator, curVal),
  0
);
// console.log(res1);

// More examples

const users = [
  { firstName: "akshay", lastName: "saini", age: 26 },
  { firstName: "donald", lastName: "trump", age: 75 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "virat", lastName: "kohli", age: 26 },
];

// Get list of full names
// console.log(users.map((val) => `${val.firstName} ${val.lastName}`));

// Get a object which tell how many people are there of each age

let reqMap = {};
// My noob method
users.map((val) => {
  if (!reqMap[val.age]) {
    reqMap[val.age] = 1;
  } else {
    reqMap[val.age]++;
  }
  // return reqMap;
});

// console.log(reqMap);
// Harsh noob, we can use reduce method na
// we are trying to get a single output from the array

const r1 = users.reduce((acc, cur) => {
  if (acc[cur.age]) {
    acc[cur.age]++;
  } else {
    acc[cur.age] = 1;
  }

  return acc;
}, {});
// console.log(r1);

// Get firstName of people age less tha 30
console.log(
  users.filter((user) => user.age < 30).map((user) => user.firstName)
);

// Reduce rula mat bhai
console.log(
  users.reduce((acc, cur) => {
    if (cur.age < 30) acc.push(cur.firstName);

    return acc;
  }, [])
);
