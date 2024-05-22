const array = [1, 2, 3, 4];

for (let index = 0; index < array.length; index++) {
  (function (index) {
    setTimeout(() => {
      console.log(array[index]);
    }, 5000);
  })(index);
}
