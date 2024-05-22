const rotateArrayByK1 = (array = [], k = 0) => {
  // Optimization case
  const s = array.length;
  if (k > s) k = k % s;
  for (let i = 0; i < k; i++) {
    let temp = array[s - 1];
    for (let j = s - 1; j > 0; j--) {
      array[j] = array[j - 1];
    }
    array[0] = temp;
  }
};

const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
// Method 1: TC O(n*k), SC O(1)
// rotateArrayByK1(array1, 3);

// Method 2:
const reverseArray = (array = [], s = 0, e = 0) => {
  while (s < e) {
    let temp = array[s];
    array[s] = array[e];
    array[e] = temp;
    s++;
    e--;
  }
};

// 1 2 3 4 5 6 7 8, sol2: 0-7
// 5 4 3 2 1 8 7 6, rev: 0-4,5-7
// 6 7 8 1 2 3 4 5, rev: 0-7
const rotateArrayByK2 = (array, k) => {
  // Not only edge case optimization also
  let arrSize = array.length;
  if (k > arrSize) k = k % arrSize;

  let s = 0;
  let e = arrSize - 1;
  reverseArray(array, s, e - k);
  reverseArray(array, e - k + 1, e);
  reverseArray(array, s, e);
};

rotateArrayByK2(array1, 8);
// console.log(array1);
