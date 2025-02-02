//Create a functional component Greeting that accepts a name as a prop and  displays "Hello, [name]!". 

import React from 'react';

const Greeting = (props) => {
  return (
    <>
      <h2>Hello, {props.name}!</h2>
    </>
  );
}

export default Greeting;