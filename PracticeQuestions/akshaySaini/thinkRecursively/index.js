// let arr = [];
// let obj = {};
// let str = "";
// function name(params) {}
// let arrFunc = () => {};
// let NULL = null;
// console.log(typeof arr);
// console.log(typeof obj);
// console.log(typeof str);
// console.log(typeof name);
// console.log(typeof arrFunc);
// console.log(typeof NULL);

// Array traverse methods
// 1. for each loop
// arr.forEach((val)=>console.log(val))
// 2. below method
// for(val of arr){
// console.log(val);
// }
// 3. Rest map, filter, reduce

// Object traverse methods
// 1. forIn loop
// for(let key in obj){
// if(obj.hasOwnProperty(key)){
//     console.log(key, obj[key])
// }
// }
// 2. Object.entries(obj)=>returns keys in an array,
// Object.values(obj)=>return values in an array,
// Object.entreis(obj) =>returns array of arrays which consist of [key, value]

// Given
let user = {
  name: "Akshay",
  address: {
    personal: {
      city: "Dehradun",
      state: "UK",
    },
    office: {
      area: {
        landmark: "Whitefield",
      },
      city: "Bangalore",
      state: "Karnataka",
    },
  },
};

// Required output
// let finalObj = {
//   user_name: "Akshay",
//   user_address_personal_city: "Dehradun",
//   user_address_personal_state: "UK",
//   user_address_office_area_landmark: "Whitefield",
//   user_address_office_city: "Bangalore",
//   user_address_personal_office_state: "Karnataka",
// };

function myMagic(obj, str) {
  let finalObj = {};
  function magic(obj, str) {
    if (typeof obj === "object" && obj) {
      //   const keys = Object.keys(obj);
      //   keys.forEach((key) => {
      for (let key in obj) {
        if (typeof obj[key] === "object") {
          magic(obj[key], str + "_" + key);
        } else {
          finalObj[str + "_" + key] = obj[key];
        }
      }
    } else {
      finalObj[str] = obj;
    }
  }
  magic(obj, str);
  return finalObj;
}

// console.log(myMagic(user, "user"));

let newUser = "Harsh";
// console.log(myMagic(newUser, "newUser"));

Object.keys(user).map((key) =>
  console.log(key + " : " + JSON.stringify(user[key]))
);

// let temp = Object.entries(user);
// console.log(temp);
