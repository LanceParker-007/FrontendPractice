// Promises in Javascript

// Diff between synchronous and asynchronous code

// console.log("Start");

// function impAct(username) {
//   setTimeout(() => {
//     return `Subscribe to ${username}`;
//   }, 1000);
// }

// const message = impAct("Roadside Coder");

// console.log(message);

// console.log("Stop");

// Callbacks (When we pass as an argument to another function it is called a callback)
// And Callback help (Pyramid of doom)

// console.log("Start");

// function impAct(username, cb) {
//   setTimeout(() => {
//     cb(`Subscribe to ${username}`);
//   }, 1000);
// }

// function likeTheVideo(video, cb) {
//   setTimeout(() => {
//     cb(`Like the ${video} video`);
//   }, 1000);
// }

// function shareTheVideo(video, cb) {
//   setTimeout(() => {
//     cb(`Share the ${video} video`);
//   }, 1000);
// }

// // This triangle formed is called callabck hell
// const message = impAct("Roadside Coder", function (message) {
//   console.log(message);
//   likeTheVideo("JS Interview Questions", (action) => {
//     console.log(action);
//     shareTheVideo("JS Interview Questions", (action) => {
//       console.log(action);
//     });
//   });
// });

// console.log("Stop");

// To solve this we have Promise and Async & Await

// console.log("Start");

// const sub = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const res = true;
//     if (res) resolve("Subscribed to Roadside Coder");
//     else reject(new Error("Why aren't you subscribed to Roadside Codder?"));
//   }, 2000);
// });

// sub.then(console.log).catch(console.log);

// console.log("Stop");

// We can directly also resolve the promise like this Promise.resolve("your_text")

// Solving the previous callback hell problem with

// console.log("Start");

// function impAct(username) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(`Subscribe to ${username}`);
//     }, 1000);
//   });
// }

// function likeTheVideo(video) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(`Like the ${video} video`);
//     }, 1500);
//   });
// }

// function shareTheVideo(video) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       rej(`Share the ${video} video`);
//     }, 500);
//   });
// }

// But this is promise hell

// impAct("Roadside Coder")
//   .then((d) => {
//     console.log(d);
//     likeTheVideo("JS Interview Questions")
//       .then((d) => {
//         console.log(d);
//         shareTheVideo("JS Interview Questions")
//           .then((d) => console.log(d))
//           .catch(console.log);
//       })
//       .catch(console.log);
//   })
//   .catch(console.log);

// 1st way is -> We will use promises chaining

// impAct("Roadside Coder")
//   .then((d) => {
//     console.log(d);
//     return likeTheVideo("JS Interview Questions");
//   })
//   .then((d) => {
//     console.log(d);
//     return shareTheVideo("JS Interview Questions");
//   })
//   .then((d) => {
//     console.log(d);
//   })
//   .catch(console.log);

// 2nd way is promise combinators (they help use to execute multiple promises at one time)

// 2.1) Promise.all
// Returns an array if all promises are resolved
// in any promise i rejected, it returns the rejected promise

// Promise.all([
//   impAct("Roadside Coder"),
//   likeTheVideo("JS Interview Questions"),
//   shareTheVideo("JS Interview Questions"),
// ])
//   .then((d) => console.log(d))
//   .catch((err) => console.log(err));

// 2.2) Promise.allSettled
// It returns an array of settled promises whether resolved or rejected

// Promise.allSettled([
//   impAct("Roadside Coder"),
//   likeTheVideo("JS Interview Questions"),
//   shareTheVideo("JS Interview Questions"),
// ])
//   .then((d) => console.log(d))
//   .catch((err) => console.log(err));

// 2.3) Promise.any
// It returns the first fulfilled promise and if all the promises
// are rejected then it returns the array of all the rejected promises

// Promise.any([
//   impAct("Roadside Coder"),
//   likeTheVideo("JS Interview Questions"),
//   shareTheVideo("JS Interview Questions"),
// ])
//   .then((d) => console.log(d))
//   .catch((err) => console.log(err));

// 2.4) Promise.race
// It returns the first settles promise

// Promise.race([
//   impAct("Roadside Coder"),
//   likeTheVideo("JS Interview Questions"),
//   shareTheVideo("JS Interview Questions"),
// ])
//   .then((d) => console.log(d))
//   .catch((err) => console.log(err));

// 3rd is using async & await

// const res = async () => {
//   try {
//     const msg1 = await impAct("Roadside Coder");
//     const msg2 = await likeTheVideo("JS Interview Questions");
//     const msg3 = await shareTheVideo("JS Interview Questions");

//     console.log({
//       msg1,
//       msg2,
//       msg3,
//     });
//   } catch (error) {
//     console.error("Promise failed ", error);
//   }
// };

// res();
// console.log("Stop");

// Questions start:

// Q1: What is the output

// console.log("Start");

// // This promise creation is part
// const p1 = new Promise((res, rej) => {
//   console.log(1); // this is synchronous
//   res(2);
// });

// p1.then((res) => {
//   console.log(res);
// });

// console.log("end");

// Ans: start, 1, end, 2

// // Q2: What is the output

// console.log("Start");

// // This promise creation is part
// const p1 = new Promise((res, rej) => {
//   console.log(1); // this is synchronous
//   res(2);
//   console.log(3);
// });

// p1.then((res) => {
//   console.log(res);
// });

// console.log("end");

// Ans: start, 1, 3, end, 2

// Q2.1: What is the output

// console.log("Start");

// // This promise creation is part
// const p1 = new Promise((res, rej) => {
//   console.log(1); // this is synchronous
//   //   res(2); -> since we did not resolve it never went into the then block
//   console.log(3);
// });

// p1.then((res) => {
//   console.log(res);
// });

// console.log("end");

// Ans: start, 1, 3, end

// Q3: What's the output

// console.log("Start");

// function fn() {
//   new Promise((res, rej) => {
//     console.log(1);
//     res("Success");
//   });
// }

// console.log("middle");

// fn()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log("end");

// Ans: Error
// If we did return promise then Ans: start, middle, 1, end, success

// Q4: What is the output

// function job() {
//   return new Promise((res, rej) => {
//     rej();
//   });
// }

// const p = job();

// p.then(function () {
//   console.log("success 1");
// })
//   .then(function () {
//     console.log("success 2");
//   })
//   .then(function () {
//     console.log("success 3");
//   })
//   .catch(function () {
//     console.log("error 1");
//   })
//   .then(function () {
//     console.log("success 4");
//   });

// Ans: error 1, success 4

// Q5: What is the output

// function job(state) {
//   return new Promise((res, rej) => {
//     if (state) res("success");
//     else rej("error");
//   });
// }

// let p = job(true);

// p.then(function (data) {
//   console.log(data);
//   return job(false);
// })
//   .catch(function (err) {
//     console.log(err);
//     return "Error caught";
//   })
//   .then(function (data) {
//     console.log(data);
//     return job(true);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// Ans: success, error, Error caught, (nothing printed because we donn't have then blocl for line 335)

// Q6: What is the output

// function job(state) {
//   return new Promise((res, rej) => {
//     if (state) res("success");
//     else rej("error");
//   });
// }

// let p = job(true);

// p.then(function (data) {
//   console.log(data);
//   return job(true);
// })
//   .then(function (data) {
//     if (data !== "victory") throw "Defeat";
//     return job(true);
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.log(err);
//     return job(false);
//   })
//   .then(function (data) {
//     console.log(data);
//     return job(true);
//   })
//   .catch(function (err) {
//     console.log(err);
//     return "Error caught"; // It is just to confuse you, it's a normal text
//   })
//   .then(function (data) {
//     console.log(data);
//     return new Error("test"); // not returning a promise && // It is just to confuse you, it's a normal text
//   })
//   .then(function (data) {
//     console.log("Success: ", data.message);
//   })
//   .catch(function (data) {
//     console.log("Error: ", data.message);
//   });

// Ans: success, Defeat, error, Error caught, Success: test

// Q7: Promise Chaining

// const firstPromise = new Promise((res, rej) => {
//   res("first");
// });

// const secPromise = new Promise((res, rej) => {
//   res(firstPromise); // the first promise will also resolve itself then sec will return that resolved value
// });

// secPromise
//   .then((res) => {
//     console.log(res); // first
//     return res;
//   })
//   .then((res) => console.log(res)); // first

// Aks your interviewer about some more explanation that what he wants you to do

// Q8: Re-write the given code in async/await instead of then/catch

// function loadJson(url) {
//   return fetch(url).then((res) => {
//     if (res.status === 200) {
//       return res.json();
//     } else {
//       throw new Error(res.status);
//     }
//   });
// }

// loadJson("https://example.com").catch((err) => console.log(err));

// Ans :
// async function loadJson(url) {
//   try {
//     let res = await fetch(url);
//     if (res.status === 200) {
//       let json = await res.json();
//       return json;
//     } else {
//       throw new Error(res.status);
//     }
//   } catch (error) {
//     console.log(err);
//   }
// }
// const output = loadJson();

// Q9: Solve Promise Recursively
// You are given an array of prmises you have to solve them recusrsively

function impAct(username) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`Subscribe to ${username}`);
    }, 1000);
  });
}

function likeTheVideo(video) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`Like the ${video} video`);
    }, 1500);
  });
}

function shareTheVideo(video) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej(`Share the ${video} video`);
    }, 500);
  });
}

function promRecurse(promisesArr) {
  if (promisesArr.length === 0) return;

  // Write Implementation Here
  if (!Array.isArray(promisesArr))
    throw TypeError("Passed object is not an array");

  //   My code
  promisesArr[0]
    .then((d) => console.log("S: ", d))
    .catch((e) => console.log("E: ", e))
    .finally(() => {
      promRecurse(promisesArr.slice(1));
    });

  // Roadside Coder's code
  //   const currentPromise = promisesArr.shift();
  //   currentPromise
  //     .then((d) => console.log("S: ", d))
  //     .catch((e) => console.log("E: ", e));

  //   promRecurse(promisesArr);
}

promRecurse([
  impAct("Roadside Coder"),
  likeTheVideo("JS Interview Questions"),
  shareTheVideo("JS Interview Questions"),
]);
