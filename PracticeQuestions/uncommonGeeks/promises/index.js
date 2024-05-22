// A Promise is an object represnting the eventual completion
// or failure of an asynchronous operation.
// pending: initial state, neither fulfilled nor rejected
// settled:
//        fulfilled: operation is completed successfully
//        rejected: meaning that the operation failed
//

// Why we need promises in javascript?
// It is one of the ways to perform asynchronous tasks

// 1. Normal resolve a promise

// 2.Create a prmise and resolve on click of a button
const resBtn = document.querySelector("#resBtn");
const rejBtn = document.querySelector("#rejBtn");

const promise = new Promise((res, rej) => {
  resBtn.addEventListener("click", () => {
    return res("Promise resolved");
  });
  rejBtn.addEventListener("click", () => {
    return rej("Promise rejected");
  });
});

console.log(promise);
promise
  .then((data) => data + " Yay!")
  .then((val) => console.log(val))
  .catch((err) => console.log(err));

// Resolve a promise after 2 seconds

const p = new Promise((res, rej) => {
  setTimeout(() => {
    res("SetTimeOut promise resolved");
  }, 2000);
});

p.then((data) => console.log(data));
