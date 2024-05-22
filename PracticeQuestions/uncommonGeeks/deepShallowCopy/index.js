// Deep copy V/S Shallow copy

// // Deep copy: Primitve data types- Number, String, Boolean, Pass by value
// let x = 10;
// let y = x;
// y = 20;
// console.log(x, y);

// // Shallow copy: Pass by reference
// let arr1 = [1, 2, 3, 4];
// let arr2 = arr1;

// arr2.push(5);
// console.log(arr1, arr2);

// Question 1: Make this a deep copy, spreadOperator, Array.from()
function question1() {
  const arr1 = [1, 2, 3, 4];
  //   const arr2 = arr1; Given
  const arr2 = Array.from(arr1); // or [...arr1]
  arr2.push(10);
  console.log("array 2: ", arr2);
  console.log("array 1: ", arr1);
}
// question1();

// Example 2
function question2() {
  const user1 = {
    name: "Harsh",
    channel: "Great",
  };
  const user2 = Object.assign({}, user1); // Spread operator, Object.assign({},originalObject)
  user2.name = "Cool Harsh";
  console.log("User 2: ", user2);
  console.log("User 1: ", user1);
}
// question2();

// Example 2: // JSON.parse(JSON.stringify(originalObject to be deep copied))
function question3() {
  const user1 = {
    name: "Harsh",
    channel: "Great",
    location: {
      city: "Gurugram",
      state: "Haryana",
    },
  };
  const user2 = JSON.parse(JSON.stringify(user1)); // JSON.parse(JSON.stringify(originalObject to be deep copied))
  user2.location.city = "Gwalior";
  console.log("User 2: ", user2);
  console.log("User 1: ", user1);
}
// question3();

// When not to use JSON.parse(JSON.stringify(originalObject to be deep copied))
function q1() {
  const testObject1 = {
    sampleData: new Date(),
  };
  const testObject2 = JSON.parse(JSON.stringify(testObject1));
  console.log(testObject1);
  console.log(testObject2);
}
// q1();
// It will convert date object as it is to a string

function q2() {
  const testObject1 = {
    sampleFunction: console.log(),
    sampleUndefined: undefined,
  };
  const testObject2 = JSON.parse(JSON.stringify(testObject1));
  console.log(testObject1);
  console.log(testObject2);
}
// q2();
// If an object has function or undefined, the JSON-parse-stringify method will the ignore bith a function and key with value undefined

function q3() {
  const testObject1 = {
    sampleFunction: q2,
    sampleUndefined: Infinity,
    sameplNaN: NaN,
  };
  const testObject2 = JSON.parse(JSON.stringify(testObject1));
  console.log(testObject1);
  console.log(testObject2);
}
// q3();
// Function ignored and Infinity and Nan it will change these two values to null

// JSON.parese(JSON.stringify()) is not able to make deep copy in the above examples
// because JSON.stringify cannot convert these JSON unsafe values to string
// What are JSON unsafe values: undefined, function(), Date(), (ES6+) Symbol, An object with circular refernce, Infinity, NaN
// Read Freecode camp artilce on this

// How to make deep copy of JSON-unsafe values
// 1. Copying all the values one after the another
// 2. Recursive copying all the values one after another
// 3. Using libraries like lodash

// Que: Why array and objects are shallow copied and primituve types are deep copied
// Ans: To save memory used by the application which is generally used in the browsers,
// so it is default behaviour of JS
