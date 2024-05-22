// O(nlogn)
const findSecondLargest = (array) => {
  const uniqueSortedArray = Array.from(new Set(array)).sort((a, b) => a - b);

  uniqueSortedArray.reverse();
  console.log(uniqueSortedArray);
  if (uniqueSortedArray.length > 1) return uniqueSortedArray[1];
  return -1;
};

// O(n)
const findSecondLargest2 = (array) => {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let index = 0; index < array.length; index++) {
    if (array[index] > largest) {
      secondLargest = largest;
      largest = array[index];
    } else if (array[index] != largest && array[index] > secondLargest) {
      secondLargest = array[index];
    }
  }

  return secondLargest === Number.NEGATIVE_INFINITY ? -1 : secondLargest;
};

const array1 = [1, 7, 2, 3, 2, 5, 5, 7];
const array2 = [7, 7];
// console.log(findSecondLargest(array1));
console.log(findSecondLargest2(array2));
