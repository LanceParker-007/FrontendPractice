// Task 1: Create a function which can solve the below piece od code
// console.log(computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value());
// Output: 143545000

// function Calculate() {
//   let amount = 0;
//   this.crore = (val) => {
//     amount += val * 10000000;
//     return this;
//   };

//   this.lacs = (val) => {
//     amount += val * 100000;
//     return this;
//   };

//   this.thousand = (val) => {
//     amount += val * 1000;
//     return this;
//   };

//   this.value = () => {
//     return `${amount} A`;
//   };

//   this.computeAmount = () => {
//     console.log("x");
//   };

//   return function () {
//     return this;
//   };
// }

// const computeAmount = Calculate();
// console.log(
//   computeAmount()
//     .lacs(15)
//     .crore(5)
//     .crore(2)
//     .lacs(20)
//     .thousand(45)
//     .crore(7)
//     .value()
// );

// Understand new and this in JS
// What is factory function
// I did solve it with closures

// Task 2:
// var obj = {
//   helloWorld: function () {
//     return "hello world," + this.name;
//   },
//   name: "Hello",
// };

// var obj2 = {
//   helloWorld: obj.helloWorld,
//   name: "Bye",
// };

// console.log(obj2.helloWorld());
// Output is by because you are calling obj.helloWorld
// from inside obj2 so this will point to obj2 not obj
// Now to print hello world, Hello, what we can do
// I can only change line 64(only consumption not the objects)
// console.log(obj.helloWorld()); this is not to be done Lol
// console.log(obj2.helloWorld.call(obj));

// Task 3: Implement your own 2 way binding in js
// Please create a function model(state, element), to bind
// state.value to the HTMLInputElement element
// const input = document.createElement("input")
// const state = {value:"Hi"} // "Hi"
// model(state, input)
// console.log(input, value) // "Hi"
// state.value = "dev"
// console.log(input, value) // "dev"
// input.value =  'engineeringchirag'
// input.dispatchEvent(new Event('change'))
// console.log(state.value) //engineeringchirag

function model(state, input) {
  commonValue = "";
}

const input = document.createElement("input");
input.addEventListener("input", () => {
  state.value = input.value;
});
const state = {
  value: "",
  get value() {
    return this.value;
  },
  set value(newVal) {
    return (this.value = newVal);
  },
}; // "Hi"
model(state, input);
console.log(input.value); // "Hi"
state.value = "dev";
// console.log(input, value); // "dev"
// input.value =  "engineeringchirag";
// input.dispatchEvent(new Event("change"));
// console.log(state.value); //engineeringchirag

document.body.appendChild(input);
