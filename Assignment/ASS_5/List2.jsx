import React from 'react';

const List2 = () => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'Daisy' },
    { id: 5, name: 'Edward' },
  ];

  return (
    <div>
      <h2>User List</h2>
        <p>{users.map(user => (
          <p key={user.id}>{user.id}<br></br>{user.name}</p>
        ))}
        </p>
      
    </div>
  );
};

export default List2;
