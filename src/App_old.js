import React from "react";
import { useState, useEffect } from "react";

const Person = (props) => {
  return (
    <>
      <h1>This is a person</h1>
      <h2>Name: {props.name}</h2>
      <h2>Age: {props.age}</h2>
    </>
  );
};

const App = () => {
  const [count, setCount] = useState(0);

  const handleClickIncrease = () => {
    setCount(count + 1);
  };

  const handleClickDecrease = () => {
    setCount((prev) => prev - 1);
  };

  useEffect(() => {
    console.log(`You changed the value to ${count}`);
  });

  return (
    <div className="App">
      {/* <Person name="Hoang" age={22} />
      <Person name="Lam" age={22} />
      <Person name="Vo" age={21} /> */}

      <button onClick={handleClickDecrease}>-</button>
      <h1>{count}</h1>
      <button onClick={handleClickIncrease}>+</button>
    </div>
  );
};

export default App;
