import React, { useState, useEffect } from "react";

function Exercise3() {
  const [count, setCount] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev > 1) return prev - 1;

        if (prev <= 0) clearInterval(interval);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h1>{count <= 20 ? count : ""}</h1>;
}

export default Exercise3;
