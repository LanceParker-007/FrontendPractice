// Closure questions
// function example(params) {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000 * i);
//   }
// }
// example();

// function example(params) {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(
//       function (a) {
//         console.log(a, i);
//       },
//       1000 * i,
//       99
//     );
//   }
// }
// example();

function example(params) {
  for (var i = 0; i < 3; i++) {
    setTimeout(function (a) {
      console.log(a, i);
    }, 1000 * i);
  }
}
example();
