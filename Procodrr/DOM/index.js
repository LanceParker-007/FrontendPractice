// const allImages = document.getElementsByTagName('img') // HTML Collection
// const cssImage1 = document.getElementsByClassName('css-image') //HTMLCollection
// const cssImage2 = document.getElementById('#css-image') // single element
// const cssImage3 = document.querySelector(".css-image"); //can pass any query, returns first matching element
// const cssImage4 = document.querySelectorAll(".css-image"); // returns a nodelist
const cssImage = document.querySelectorAll('[alt="javascript roadmap"]');
const allLi = document.querySelector("ul li");
const ul = document.querySelector("ul");

console.log(allLi);

// copy js path example: document.querySelector("body > ul > li:nth-child(1)");
