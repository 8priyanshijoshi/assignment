//Create a React component UserCard that accepts name, age, and location as props and displays them in a card format.

import React from 'react';

const UserCard = (props) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">Name:{props.Name}</h5>
        <p className="card-text">Age: {props.Age}</p>
        <p className="card-text">Location: {props.Location}</p>
      </div>
    </div>
  );
};

export default UserCard;