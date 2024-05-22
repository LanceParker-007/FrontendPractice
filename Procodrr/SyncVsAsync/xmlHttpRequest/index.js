const image = document.querySelector("img");
const button = document.querySelector("button");

// XHML HTTP REquest
button.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
  xhr.send();

  xhr.responseType = "json";
  xhr.addEventListener("load", () => {
    console.log(xhr.response);
    image.src = xhr.response.message;
  });

  console.log(xhr);
});
