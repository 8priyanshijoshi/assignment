import React, { useState } from 'react';

const Counter = () => {
  // Declare a state variable named 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  // Function to handle the button click and increment the count
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Current Count: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Counter;
