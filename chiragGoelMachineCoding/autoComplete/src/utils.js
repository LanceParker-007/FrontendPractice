import { FRUITS } from "./data.js";

export const getSuggestions = (keyword) => {
  const result = FRUITS.filter(
    (val) =>
      val.substr(0, keyword.length).toLowerCase() === keyword.toLowerCase()
  );
  //   My method: But we require typeAhead, we are not filtering so my method is
  //   kind of not suitable for this usecase over here
  //   const result = FRUITS.filter((val) => val.toLowerCase().includes(keyword));

  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      res(result);
    }, 1000);
  });
  return promise;
};

export const generateDebounce = (func) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log(args);
      func(...args);
    }, 800);
  };
};
