//Create react app to avoid re-renders in react application by useRef? 
import React, { useRef, useState } from 'react';

function UseRef() {
  const inputRef = useRef(null); 
  const [count, setCount] = useState(0);

  const handleFocus = () => {
    inputRef.current.focus(); 
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus Input</button>
      <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
    </div>
  );
}

export default UseRef;
