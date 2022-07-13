import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count+1)
  }

  function decrease() {
    setCount(count-1)
  }
  const rgb = [9, 132, 227];
  console.log(rgb[2]);

  const {red,green,blue} = [9, 132, 227];
  console.log(rgb[2]);

  return (
    <>
      <div className="container">
        <h1>{count}</h1>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
    </>
  );
}

export default App;
