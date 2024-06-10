import { useEffect, useRef, useState } from "react";

const useDebounce = function (cbFunc, delay) {
  let ref = useRef(null);
  return function (...args) {
    if (ref.current) clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      cbFunc(...args);
    }, delay);
  };
};

console.log("check");

const App = () => {
  console.log("check1");
  const [val, setVal] = useState("");
  // const [pVal, setPVal] = useState("");

  const onChangeHandler = (e) => {
    setVal(e.target.value);
  };

  const handleConsoleLog = (val) => {
    console.log(val);
  };

  const betterOnChangehandler = useDebounce(handleConsoleLog, 1000);

  useEffect(() => {
    // if (val) handleConsoleLog();
    betterOnChangehandler(val);
  }, [val]);

  return (
    <div>
      <input type="text" value={val} onChange={onChangeHandler} />
      {/* <p>{val}</p> */}
    </div>
  );
};

export default App;
