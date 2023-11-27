import React, { useState } from 'react';
import axios from 'axios';

const ClientRegister = () => {
  const [client, setClient] = useState({
    username: '',
    password: '',
    role: 'client',
    approved: false
  });

  const [registrationData, setRegistrationData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClient({
      ...client,
      [name]: value
    });
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:3000/register-client', { ...client });
      console.log(response.data);
      setRegistrationData(response.data);
    } catch (error) {
      console.error('Error registering client:', error);
    }
  };

  return (
    <div>
      <h2>Client Register</h2>
      <label>Username:</label>
      <input type="text" name="username" value={client.username} onChange={handleInputChange} />
      <br />
      <label>Password:</label>
      <input type="password" name="password" value={client.password} onChange={handleInputChange} />
      <br />
      <button onClick={handleRegister}>Register</button>

      {registrationData && (
        <div>
          <h3>Registration Successful!</h3>
        </div>
      )}
    </div>
  );
};

export default ClientRegister;
