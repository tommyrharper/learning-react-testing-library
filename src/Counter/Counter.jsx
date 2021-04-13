import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const addValue = () => {
    const newValue = counterValue + parseInt(inputValue);
    setCounterValue(newValue);
  };

  const subValue = () => {
    const newValue = counterValue - parseInt(inputValue);
    setCounterValue(newValue);
  };

  let className = "";
  switch (true) {
    case counterValue >= 100:
      className = "red";
      break;
    case counterValue <= -100:
      className = "green";
      break;
    default:
      className = "";
  }

  return (
    <div>
      <h3 data-testid="header">My Counter</h3>
      <h2 data-testid="counter" className={className}>
        {counterValue}
      </h2>
      <button data-testid="subtract-btn" onClick={subValue}>
        -
      </button>
      <input
        data-testid="input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="text-center"
      />
      <button data-testid="add-btn" onClick={addValue}>
        +
      </button>
    </div>
  );
}

export default Counter;
