// Step 1

let newArr = [];
function myConcat(...args) {
  if (args.length) {
    let arr = args[0];
    if (Array.isArray(arr)) {
      arr.forEach((val) => newArr.push(val));
    } else {
      newArr.push(arr);
    }

    myConcat(...args.slice(1));
  } else {
    return;
  }
}

Array.prototype.myConcat = function (...passedArgs) {
  if (!Array.isArray(this)) {
    throw new Error(`${this.name} is not an array!`);
  }

  let newArray = this;
  function helper(args = passedArgs) {
    console.log("-> ", args);
    if (args.length) {
      if (Array.isArray(args[0])) {
        args[0].forEach((val) => newArray.push(val));
      } else {
        newArray.push(val);
      }
      helper(...args.slice(1));
    } else {
      return;
    }
  }
  helper();
  return newArray;
};

let nums1 = [1];
let nums2 = [5, 6, 7, 8];
let val1 = 2;
let obj1 = {
  x: 10,
  y: 20,
};
let func1 = () => {
  console.log("func1");
};

// myConcat(nums1, nums2, val1, obj1, func1, null, undefined);
// console.log(newArr);

let obj2 = {
  q: 9,
  w: 2,
};

// console.log(nums1.concat(nums2, val1, obj1, func1, null, undefined));
console.log(nums1.myConcat(nums2, val1, obj1));
