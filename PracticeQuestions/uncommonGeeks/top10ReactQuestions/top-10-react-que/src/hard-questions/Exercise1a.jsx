import React, { useEffect, useState } from "react";

//  prev ki value != count ki value
// useEffect(() => {
//   console.log("uel1");
//   setCount(count + 1);
// }, []);

// useEffect(() => {
//   console.log("uel2");
//   setCount((prev) => {
//     console.log(prev, count);
//     return (prev += count + 2);
//   });
// }, []);

const Exercise1a = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("uel1");
    setCount(count + 1);
  }, []);

  useEffect(() => {
    console.log("uel2");
    setCount(count + 2);
  }, []);

  console.log("nl");
  return <div>{count}</div>;
};

export default Exercise1a;
