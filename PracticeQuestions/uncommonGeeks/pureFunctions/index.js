// PURE FUNTIONS: are thsoe functions which are determinitic in nature, same input same output

function pureAreaOfRectangle(length, width) {
  return length * width;
}

console.log(pureAreaOfRectangle(10, 20));

// NOT PURE/IMPURE functions: Not deterministic in nature, same input different output
function impureAreaOfRectangle(length, width) {
  const temp = Math.ceil(Math.random() * 10);
  return length * width * temp;
}

console.log(impureAreaOfRectangle(10, 20));
// ex: network/api  calls

// ---

// console.log(); is a pure function
// function pureAreaOfRectangle(length, width) {
// console.log("something")
//   return length * width;
// } becomes impure because console.log can modify the pureArea...
// which can change our codes output
// array.map,filter,reduce are all pure in itself
// function name(){
// arrray.map()
// } becomes impure because if someone changes array.map name fubc's output will change

// Deterministic, Memoisation
