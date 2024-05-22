const printFullName = function (hometown, state, country, param4) {
  console.log(
    this.firstname +
      " " +
      this.lastname +
      " form " +
      hometown +
      " , " +
      state +
      " , " +
      country +
      " , " +
      param4
  );
};

let name = {
  firstname: "Akshay",
  lastname: "Saini",
};

// printFullName.call(name, "Dehradun", "UK", "India"); // first para is the this ref, then function param

let name2 = {
  firstname: "Sachin",
  lastname: "Tendulkar",
};

// Function borrowing: Every function in javascript has access to these call, apply and bind
// printFullName.call(name2, "Dehradun", "UK", "India");

// printFullName.apply(name2, ["Dehradun", "UK", "India"]);

// In the above two methods we directly called the function but we have one more with the help of which we can
// store bind the function with the object

// let printMyFullName = printFullName.bind(name, "p1", "p2", "p3");
// printMyFullName();
// printMyFullName("p4"); // When bind we can also pass argiments in the binded method

// Polyfills: These are sort of a browser fallback which can help us when for example the browser does not
// support some kind of function

// Here we are creating a polyfill for bind that is our custom bind method

Function.prototype.myBind = function (...args) {
  const func = this;
  const bindArgs = args.slice(1);
  return function (...args2) {
    // func.call(args[0], ...bindArgs);
    // func.apply(args[0], bindArgs);
    // func.call(args[0], ...bindArgs, ...args2);
    func.apply(args[0], [...bindArgs, ...args2]);
  };
};

const print2 = printFullName.myBind(name, "Dehradun", "UK", "India");
print2("p4");

const print3 = printFullName.myBind(name2, "Dehradun", "UK");
print3("India", "p4");
