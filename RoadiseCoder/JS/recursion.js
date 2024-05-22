// Multiply array elements

const multiplyArrayElements = (array, i) => {
  if (i === array.length) return 1;

  let ans = array[i] * multiplyArrayElements(array, i + 1);
  return ans;
};

console.log(multiplyArrayElements([1, 2, 3, 4], 0));
