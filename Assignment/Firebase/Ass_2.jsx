import React, { useState, useEffect } from "react";
import axios from "axios";

const Ass_2 = () => {
  const [users, setUsers] = useState([]); // State for users list
  const [newUser, setNewUser] = useState({ name: "", email: "" }); // State for new user details
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const API_URL = "http://localhost:3000/users"; // Ensure the correct URL

  // GET method: Fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true); // Show spinner while loading
      setError(null); // Reset error before fetching
      try {
        const response = await axios.get(API_URL); // Fetch data
        setUsers(response.data); // Update users list
      } catch (error) {
        setError("Failed to fetch users. Please try again."); // Handle errors
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false); // Hide spinner after fetching
      }
    };
    fetchUsers();
  }, []);

  // POST method: Add a new user
  const addUser = async () => {
    if (!newUser.name || !newUser.email) {
      setError("Name and email are required to add a user."); // Validate input
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(API_URL, newUser); // Send POST request
      setUsers([...users, response.data]); // Update users list
      setNewUser({ name: "", email: "" }); // Reset input fields
    } catch (error) {
      setError("Failed to add user. Please try again."); // Handle errors
      console.error("Error adding user:", error);
    } finally {
      setLoading(false);
    }
  };

  // PUT method: Update a user by ID
  const updateUser = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const updatedUser = { name: "Updated Name", email: "updated@example.com" }; // Example update
      const response = await axios.put(`${API_URL}/${id}`, updatedUser); // Send PUT request
      setUsers(users.map(user => (user.id === id ? response.data : user))); // Update user in state
    } catch (error) {
      setError("Failed to update user. Please try again."); // Handle errors
      console.error("Error updating user:", error);
    } finally {
      setLoading(false);
    }
  };

  // DELETE method: Delete a user by ID
  const deleteUser = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await axios.delete(`${API_URL}/${id}`); // Send DELETE request
      setUsers(users.filter(user => user.id !== id)); // Remove user from state
    } catch (error) {
      setError("Failed to delete user. Please try again."); // Handle errors
      console.error("Error deleting user:", error);
    } finally {
      setLoading(false);
    }
  };

  // PATCH method: Partially update a user by ID
  const patchUser = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const partialUpdate = { name: "Patched Name" }; // Example partial update
      const response = await axios.patch(`${API_URL}/${id}`, partialUpdate); // Send PATCH request
      setUsers(users.map(user => (user.id === id ? response.data : user))); // Update user in state
    } catch (error) {
      setError("Failed to patch user. Please try again."); // Handle errors
      console.error("Error patching user:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Users List</h1>

      {/* Display error message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Display loading spinner */}
      {loading && <p>Loading...</p>}

      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
            <button onClick={() => updateUser(user.id)}>Update</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
            <button onClick={() => patchUser(user.id)}>Patch</button>
          </li>
        ))}
      </ul>
      
      <h2>Add User</h2>
      <input
        type="text"
        placeholder="Name"
        value={newUser.name}
        onChange={e => setNewUser({ ...newUser, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={newUser.email}
        onChange={e => setNewUser({ ...newUser, email: e.target.value })}
      />
      <button onClick={addUser}>Add User</button>
    </div>
  );
};

export default Ass_2;
