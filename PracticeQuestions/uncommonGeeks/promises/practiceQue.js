// Que 1
// console.log("Before promise starts");
// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Welcome to uncommon geeks!");
//   }, 2000); // If there is 0 miliseconds also or even nothing then also same output
// });

// console.log("After promise starts");
// promise.then((data) => console.log(data)).catch((err) => console.log(err));

// console.log("After promise ends");
// Answer
// Before promsie starts
// After promise starts
// After promise ends
// Welcome to uncommon geeks! after 2 secs

// Promise chaining
// Callback hell
// Async await
// Promise.all(if all success, returns array of success, if any gets rejected it directly returns the rejected promise),
// Promise.allSettled(returns an array consisted of settled state of promises whether fulfilled or rejected),
// Promise.race (returns the first settled single promise),
// Promise.any(returns first fullfilled and rejects when all reject and returns an array)

// Does async await block the main thread
const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res(1);
  }, 1000);
});
const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    res(2);
  }, 2000);
});
const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    res(3);
  }, 3000);
});

async function test() {
  console.log("Before inside");
  const o1 = await p1.then((data) => data);
  const o2 = await p2.then((data) => data);
  const o3 = await p3.then((data) => data);
  console.log(o1 + o2 + o3);
  console.log("After inside");
}

console.log("Before calling test");
test();
console.log("After calling test");
