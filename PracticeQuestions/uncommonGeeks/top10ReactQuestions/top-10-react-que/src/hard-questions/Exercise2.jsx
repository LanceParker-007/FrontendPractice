import React, { useState } from "react";

const Exercise2 = () => {
  const [text, setText] = useState("Hello");

  const handleClick = () => {
    setText(text + " World");
    setText("React");
  };

  // const handleClick = () => {
  //   setText((prev) => (prev += text + " World,"));
  //   setText((prev) => console.log(prev, text));
  //   setText((prev) => (prev += "React"));
  // };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <h1>{text}</h1>
    </div>
  );
};

export default Exercise2;
