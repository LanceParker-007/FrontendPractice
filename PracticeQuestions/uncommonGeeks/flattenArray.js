Array.prototype.infiniteFlat = function () {
  function flattenArray(arr) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        ans = [...ans, ...flattenArray(arr[i])];
      } else {
        ans = [...ans, arr[i]];
      }
    }
    return ans;
  }
  const result = flattenArray(this);
  return result;
};

const input = [0, 1, 2, 3, 4, [5, 6, [7, 8]]];
console.log(input.infiniteFlat());
