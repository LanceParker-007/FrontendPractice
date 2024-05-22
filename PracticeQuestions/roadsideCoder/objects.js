// JS is designed on simple object-based paradigm. An object is a collection
// of properties and a property is an association between a name (or key)
// and a value. A property's value can be a function, in which case the property
// is known as method

// Example
const user = {
  name: "Hero",
  age: 20,
  "like this video": true, // to store a key with spaces wrap it inside ""
};

// user.name = "K";
// delete user; // delete keyword is used to delete properties from objects not variables
// delete user.age;
// Accessing properties
// console.log(user.name);
// console.log(user["name"]);
// console.log(user["like this video"]);

// Add dynamic key value pairs to an object
const property = "firstName";
const name = "Piyush Agarwal";
const tempUser = {
  //   property: name, // property: {name}
  [property]: name, // to use dynamic keys
};

// console.log(tempUser);

// Loop through the obj
// The hasOwnProperty() method of Object instances returns
// a boolean indicating whether this object has the specified
// property as its own property (as opposed to inheriting it).
// can also be used to check if in an array a index exists or not
// use hasOwn (it is preferred more)
// Object.hasOwn(objName, 'keyName')
// objName.hasOwnProperty('keyName')
// const temoIbj = Object.create(null), hasOwn works for it but hasOwnProperty not
// for (const key in user) {
//   //   if (user.hasOwnProperty(key)) {
//   console.log(user[key]);
//   //   }
// }

// we also have object.entries, object.keys, object.values
// console.log(Object.entries(user));
// console.log(Object.keys(user));
// console.log(Object.values(user));

// Output based questions
// Q1:

const obj = {
  a: "one",
  b: "two",
  a: "three",
};

// console.log(obj); // {a:"three", b:'two'}

// Q2: Create a function multiplyByTwo(obj) that
// multiplies all numeric property values of nums by 2

const nums = {
  a: 100,
  b: 200,
  title: "My nums",
};

const multiplyByTwo = () => {
  for (let key in nums) {
    // for(key in nums) also works but how it is declared
    if (typeof nums[key] === "number") {
      nums[key] = nums[key] * 2;
    }
  }
};
multiplyByTwo();

// console.log(nums);

// Q3: Output, Imp
debugger;
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123; // a["[object: object]"] = 123
a[c] = 456; // a["[object: object]"] = 456

// console.log(a[b]); // 456
// Because when we did a[b] = 123, we have a = {[object: object]:123}
// amd when we did a[c] = 123, we have a = {[object: object]: 456}, so a[c]
// overwritte the a[b] because both behaving like same keys [object, object]
// therefore output is 456

// Q4: JSON.stringify and JSON.parse
// Example with objects
// let str = JSON.stringify(nums); // convert to string
// console.log(str);
// console.log(JSON.parse(str)); // convert back to

// Example with array
// const arr = [1, 2, 3];
// str = JSON.stringify(arr); // convert to string
// console.log(str); // it will print string
// console.log(JSON.parse(str)); // convert back to object

// Used when using localstorage,
// Also to make a new copy of nested objects
const nestObj1 = {
  a: 10,
  b: {
    k1: 20,
    c: {
      k2: 100,
    },
  },
};

// const nestObj2 = { ...nestObj1 }; // this is not able to deeply copy, only first level
// const nestObj2 = JSON.parse(JSON.stringify(nestObj1));
// nestObj1.b.k1 = 200;
// console.log(nestObj1);
// console.log(nestObj2);

// Q6:
// console.log([..."Lydia"]); // spreaded the string, "L","Y","D","I","A"

const o1 = { name: "Lydia", age: 21 };
const admin = { admin: true, ...o1 };

// console.log(admin);

// Q7:

const settings = {
  username: "Piyush",
  level: 19,
  health: 90,
  fullName: {
    first: "Piyush",
    last: "Agarwal",
  },
};

const data = JSON.stringify(settings, ["level", "health"]);
// console.log(data); // It only stringified these  particular properties

// Q8:
const shape = {
  radius: 10,
  diameter() {
    // iska khudk ka koi this nahi hai in case of object
    this.radius = 2;
    this.r = 3;
    return this.r;
  },
  perimeter: () => {
    // and since here this is pointing to object shape, arrow function this pointing to globalObject, because arrow functions this keyword is points to lexcial parents this keyword
    this.radius = 1;
    return this.radius;
  }, // this is pointing to window obj not to the shape obj because it is a wrrow function
};

// console.log(shape.diameter()); // 20
// console.log(shape.perimeter()); //NaN
// console.log(shape.r);
// console.log(shape);

// Q9: What is destructuring in case of objects

// Getting the values
const { level } = settings;
// console.log(level);

// renaming
const { health: renamedHealth } = settings;
const { fullName: ytFullName } = settings;
// console.log(renamedHealth);
// console.log(ytFullName);

// nested destructuring
const {
  fullName: { first },
} = settings;
// console.log(first);

// Q10
function getItems(fruitList, favouriteFruit, ...args) {
  // rest param args
  return [...fruitList, ...args, favouriteFruit];
}

// console.log(getItems(["banana", "apple"], "pear", "orange"));
// [ 'banana', 'apple', 'orange', 'pear' ]

// Q11: What's the output
let e = {
  greeting: "Hey",
};
let d;

d = e;
e.greeting = "Hello";
// console.log(d.greeting); /// Hello, both c and d are pointing to same reference

// Q12: What's the output
// console.log({ a: 1 } === { a: 1 }); // false
// console.log({ a: 1 } == { a: 1 }); // false
// since both are pointing to diff space in the memory

// Q13:
let person = { name: "Lydia" };
const members = [person];
// console.log(members);
person = null;
// console.log(members);

// Q14:
const value = { number: 10 };

const mult = (x = { ...value }) => {
  console.log((x.number *= 2));
};

// mult(); // => 20 making a shallow copy of value
// mult(); // => 20 again making a new shallow copy
// mult(value); // => 20 x will point or reference to value, pass by reference, chnages will be seen in x also
// mult(value); // => 40 the number key value got updated in the previous call

// Q15

function changeAgeAndReference(person) {
  person.age = 25;
  person = {
    name: "Jhon",
    age: 50,
  };

  return person;
}

const personObj1 = {
  name: "Alex",
  age: 30,
};

const personObj2 = changeAgeAndReference(personObj1);

// console.log(personObj1); //{name: "Alex", age:25}
// console.log(personObj2); // {name: "Jhon", age: 50}

// Q16: Shallow vs Deep Copy

// Shallow Copy
const objClone1 = Object.assign({}, user);
const objClone2 = { ...user }; // using Obejct.assign only behind the scene

// Deep copy
const objClone3 = JSON.parse(JSON.stringify(user));
