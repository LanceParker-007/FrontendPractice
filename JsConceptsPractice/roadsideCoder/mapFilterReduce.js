// 1. Map: Is used to create a new array from existing one by applying a function on each of the elements from the initial araay
const nums = [1, 2, 3, 4];
const dummy = [4, 3, 2, 1];
const multiplyDummy = nums.map((val, index, dummy) => val * dummy[index]);
// console.log(multiplyDummy);

// 2. Filter: It is used to create a new array from an already existing array. It returns the elements if the elements satisfy a particular condition.

const filterEven = nums.filter((val) => !(val % 2));
// console.log(filterEven);

// 3. Reduce: It retunns a single value by performing some function on the elements of an array.
// It reduces the array of values just down to just one value
// sum of all val, return an object, etc.
// const sumNums = nums.reduce((acc, cur) => (acc += cur), 0);
const sumNums = nums.reduce((acc, cur) => {
  acc += cur;
  return acc;
}, 0);
// console.log(sumNums);

// ** Pollyfills for each map, filter and reduce

// Question 1: Map vs forEach
// 1. forEach does not return any value
// 2. You can use chaining with map
// 3. forEach can used to modify the original array
// although map can also be used, below is the example
// const modNums = nums.map((val, i, nums) => {
//   nums[i] = i + i;
//   return val * val;
// });
// console.log(nums);
// console.log(modNums);

// Question 2: Operations
const students = [
  { name: "Name 1", rollNumber: 31, marks: 80 },
  { name: "Name 2", rollNumber: 15, marks: 69 },
  { name: "Name 3", rollNumber: 16, marks: 35 },
  { name: "Name 4", rollNumber: 7, marks: 55 },
];

// Return names in upperCase
const stuNames = students.map((stu) => stu.name.toUpperCase());
// console.log(stuNames);

// Return details who scored more than 60
const stuScoreAboveSixty = students.filter((stu) => stu.marks > 60);
// console.log(stuScoreAboveSixty);

// Return details who scored more than 60 and rollNumber greater the 15
const stuScoreAboveSixtyAndRollAboveFifteen = students.filter(
  (stu) => stu.marks > 60 && stu.rollNumber > 15
);
// console.log(stuScoreAboveSixtyAndRollAboveFifteen);

// Return sum of marks of all the students
// const sumOfMarks = students.reduce((acc, stu) => (acc += stu.marks), 0);
const sumOfMarks = students.reduce((acc, stu) => acc + stu.marks, 0);
// console.log(sumOfMarks);

// Return name of students who scored more than 60
const query1 = students.filter((stu) => stu.marks > 60).map((stu) => stu.name);
// console.log(query1);

// Return total marks for students with marks greater than 60 after
// 20 marks have been added to those who scored less then 60

// This one only 2 iterations
// const query2 = students
//   .map((stu) => {
//     if (stu.marks < 60) stu.marks += 20;

//     return stu;
//   })
//   .reduce((acc, stu) => {
//     if (stu.marks > 60) {
//       acc += stu.marks;
//     }
//     return acc;
//   }, 0);

// Below one more readble but 3 iterations
// const query2 = students
//   .map((stu) => {
//     if (stu.marks < 60) stu.marks += 20;

//     return stu;
//   })
//   .filter((stu) => stu.marks > 60)
//   .reduce((acc, stu) => (acc += stu.marks), 0);

// Ony reduce with one iteration
const query2 = students.reduce((acc, stu) => {
  if (stu.marks < 60) {
    let m = stu.marks + 20;
    if (m > 60) acc += m;
  } else {
    acc += stu.marks;
  }
  return acc;
}, 0);

console.log(query2);

// Testing LOL
// const obj = {
//   a: 10,
//   b: 11,
// };

// for (const key in obj) {
//   if (obj.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }
