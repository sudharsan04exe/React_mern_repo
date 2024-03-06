import './form.css';
import React, { useState } from 'react';

function Form() {
  // State to store the username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Handler function to update the state when input changes
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Handler function to handle button click
  const handleClick = (event) => {
    // Access the updated values from the state
    setUsername(event.target.value);
    setPassword(event.target.value);
    alert(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="form-container">
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
         onChange={handleUsernameChange}
        /><br /><br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        /><br /><br />
        <button type="button" onClick={handleClick}>Enter</button>
        <div>
          <p>Username: {username}</p>
          <p>Password: {password}</p>
        </div>
      </form>
    </div>
  );
}

export default Form;
