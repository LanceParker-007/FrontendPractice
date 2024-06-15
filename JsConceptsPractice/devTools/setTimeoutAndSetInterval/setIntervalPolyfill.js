// setIntervalPolyfill using setTimeout
// let counter = 0;
// let intervalId;

// function greeting() {
//   counter++;
//   console.log("Hello Puneet");
//   if (counter >= 3) {
//     clearInterval(intervalId);
//   }
// }

// intervalId = setInterval(greeting, 1000);

// We will replicate the above example with our polyfills

function createSetIntervalPolyfill() {
  let intervalId = 0;
  let intervalMap = {};

  function setIntervalPolyFill(callbackFunc, delay = 0, ...args) {
    if (typeof callbackFunc !== "function")
      throw new TypeError(`'callback' should be a function!`);

    // Unique
    let id = intervalId++;

    function repeat() {
      intervalMap[id] = setTimeout(() => {
        callbackFunc(...args);

        // Terminating
        if (intervalMap[id]) {
          repeat();
        }
      }, delay);
    }
    repeat();

    return id;
  }

  function clearIntervalPolyFill(intervalId) {
    clearTimeout(intervalMap[intervalId]);
    delete intervalMap[intervalId];
  }

  return {
    setIntervalPolyFill,
    clearIntervalPolyFill,
  };
}

const { setIntervalPolyFill, clearIntervalPolyFill } =
  createSetIntervalPolyfill();

let counter = 0;
let intervalId;

function greeting() {
  counter++;
  console.log("Hello Puneet");
  if (counter >= 3) {
    clearIntervalPolyFill(intervalId);
  }
}

intervalId = setIntervalPolyFill(greeting, 1000);
