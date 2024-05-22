// Kadanes Algorithm

const maxSumSubarray = (array) => {
  if (array.length === 0) return "Array is empty!";

  let sum = 0;
  let maxSum = array[0];

  for (let i = 0; i < array.length; i++) {
    // if sum +ve then we add the next number because it will overall increase the sum
    sum += array[i];
    if (sum > maxSum) {
      maxSum = sum;
    } else if (sum < 0) {
      sum = 0;
    }
  }

  return maxSum;
};

console.log(maxSumSubarray([1, -2, 5, -4, 5, -6]));
