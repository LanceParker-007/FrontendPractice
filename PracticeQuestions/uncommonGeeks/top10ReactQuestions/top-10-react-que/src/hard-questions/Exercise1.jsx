import React, { useEffect, useState } from "react";

const Exercise1 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("ue");
    setCount(count + 1);
  }, []);

  console.log("ue1");
  return <div>{count}</div>;
};

export default Exercise1;
