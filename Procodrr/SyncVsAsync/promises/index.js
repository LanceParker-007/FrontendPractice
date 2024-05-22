// Promises were introduced to address the issue of callback hell and improve the
// readablity of asynchronous code. A promise represents a value which may not be available
// yet but will be resolved or rejected at some point in the future.
//

const resolveBtn = document.getElementById("resolveBtn");
const rejectBtn = document.getElementById("rejectBtn");

const p = new Promise((resolve, reject) => {
  resolveBtn.addEventListener("click", () => {
    resolve("Promsise resolved");
  });

  rejectBtn.addEventListener("click", () => {
    reject("Promsise rejected");
  });
});

p.then((data) => {
  return 145;
})
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
