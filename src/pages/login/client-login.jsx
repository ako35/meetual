import React, { useState } from 'react';
import axios from 'axios';

const ClientLogin = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const [login, setLogin] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value
        });
    }

  const handleLogin = async () => {
    setLogin(false);
    try {
      const response = await axios.post('http://localhost:3000/login-client', credentials);
      console.log(response.data);
      setLogin(true);
    } catch (error) {
      console.error('Error logging in client:', error);
    }
  };

  return (
    <div>
      <h2>Client Login</h2>
      <label>Username:</label>
      <input type="text" name="username" value={credentials.username} onChange={handleInputChange} />
      <br />
      <label>Password:</label>
      <input type="password" name="password" value={credentials.password} onChange={handleInputChange} />
      <br />
      <button onClick={handleLogin}>Login</button>
      {
        login && (
          <div>
            <h2>Login Successful for Client</h2>
          </div>
        )
      }
    </div>
  );
};

export default ClientLogin;