// Que1
// console.log("A");

// setTimeout(() => {
//   console.log("B");
// });

// ["C", "D"].forEach((val) => console.log(val));

// console.log("E");

// ?? I can ask this in the interview
// // [("C", "D")].forEach((val) => console.log(val));

// Ans 1: ACDEB

// Que2
// const obj = [
//   {
//     key: "Sample 1",
//     data: "Data1",
//   },
//   {
//     key: "Sample 1",
//     data: "Data1",
//   },
//   {
//     key: "Sample 1",
//     data: "Data1",
//   },
//   {
//     key: "Sample 1",
//     data: "Data1",
//   },
//   {
//     key: "Sample 3",
//     data: "Data1",
//   },
//   {
//     key: "Sample 4",
//     data: "Data1",
//   },
// ];
// Expectd output
// let output = {
//   "Sample 1": [
//     {
//       key: "Sample 1",
//       data: "Data1",
//     },
//     {
//       key: "Sample 1",
//       data: "Data1",
//     },
//     {
//       key: "Sample 1",
//       data: "Data1",
//     },
//   ],
//   "Sample 2": [], //Similar as Sample 1
//   "Sample 3": [], //Similar as Sample 1
//   "Sample 4": [], //Similar as Sample 1
// };

// Ans 2
// let output = {};
// obj.forEach((object) => {
//   let { key } = object;
//   if (output[key] === undefined) {
//     output[key] = [];
//   }
//   output[key].push(object);
// });
// console.log(output);
// Also try with reduce(higher order function) or hote kya hain ye higher order funciton

// Que3: Memoize, create a function which memozie another function(here add)
// const add = (a, b) => a + b;
// const sub = (a, b) => (a > b ? a - b : b - a);
// console.log(add(1, 2));

// const memozieAdd = memoizeOne(add);
// const memozieSub = memoizeOne(sub);
// So after memoizing the add when when we will
// pass the same set of arguemtns the memoizeAdd function it
// will not execute rather return it will return from cache
// console.log(memozieAdd(1, 2));
// console.log(memozieAdd(1, 2));
// console.log(memozieSub(11, 2));
// console.log(memozieSub(2, 11));

// My answer
// function memoizeOne(func) {
//   let cache = {};
//   return function (a, b) {
//     if (cache[[a, b]] || cache[[b, a]]) {
//       console.log("Result from cache");
//       return cache[[a, b]] || cache[[b, a]];
//     } else {
//       console.log("Result not from cache");
//       return (cache[[a, b]] = cache[[b, a]] = func(a, b));
//     }
//   };
// }

//  Ask questions to interviewer
//  Try this map DS also

// Que 3: Flatten array
const arr = [1, 2, 3, [4, 5, [6, 7, 8]]];

function flattenArray(arr) {
  let ans = [];
  function helper(arr, ans) {
    arr.forEach((val) => {
      if (typeof val === "number") {
        ans.push(val);
      } else {
        helper(val, ans);
      }
    });
  }
  helper(arr, ans);
  return ans;
}

console.log(flattenArray(arr));
