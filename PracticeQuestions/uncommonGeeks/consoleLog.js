// Example 1:
// Notes: 1) Equal to and ** are right associative (right to left), other airthemtic operations are left to right
// console.log(1 + "2" + "2"); // "12" + "2" = "122"
// console.log(1 + +"2" + "2"); // 1 + 2 + "2" = 3 + "2" = "32"
// console.log(1 + -"1" + "2"); // 1 + -1 + "2" = 0 + "2" = "02"
// console.log(+"1" + "1" + "2"); // 1 + "1" + "2" = "11" + "2" = "112"
// console.log("A" - "B" + "2"); // "Nan" + "2" = "NaN2"
// console.log("A" - "B" + 2); // "Nan" + 2 = NaN

// Example 2
// console.log("AB" + "C"); // ABC
// console.log("AB" - "B"); // NaN
// console.log(1 + 2 * 4); // 9
// console.log(1 + 2 + 4); // 7
// console.log(+"A"); //Nan, string ko number mein convert nahi kar sakte ese, Nan ban jata

// Example 3
// const x = 1;
// const y = -1;

// console.log(+x); // 1
// console.log(+y); // -1
// console.log(+""); // 0
// console.log(+true); // 1
// console.log(+false); // 0
// console.log(+"hello"); // NaN

// Example 4:
// const x = 4;
// const y = -x;
// console.log(y); // -4

// const a = "-4";
// const b = -a;

// console.log(b); // 4

// Diff between parseInt and Number
console.log(parseInt("32px")); // 32
console.log(Number("32px")); // Nan
