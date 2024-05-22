// When in a function another function is passed as argument
// or a function is returned from it or we do both doing both
// , that function is called higher order function

function a(b, c) {
  console.dir(b);
  console.dir(c);
}

// a({
//   name: "anurag",
//   age: 5,
// });
// a([1, 2, 3, 4]);
function sayHi(params) {
  console.log("Hiiiii");
}

// The functions which are passed inside a higher order function are called callback functions
// humne a ko de diya hai ab vo use baad mein callback karega, isliye inhe callback function bolte,
// Here, a is higherOrderFunction and functions passed as an argument are called callback functions
a(
  function () {
    console.log("logging b");
  },
  function () {
    console.log("logging c");
  }
);
