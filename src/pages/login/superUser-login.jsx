import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SuperUserLogin = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    role: ''
  });

  const [loginData, setLoginData] = useState(null);
  const [clientRegisterData, setClientRegisterData] = useState([]);
  const [consultantRegisterData, setConsultantRegisterData] = useState([]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const fetchClientRegister = async () => {
    try {
      const response = await axios.get('http://localhost:3000/register-client');
      setClientRegisterData(response.data);
    } catch (error) {
      console.error('Error fetching client register:', error);
    }
  }

  const fetchConsultantRegister = async () => {
    try {
      const response = await axios.get('http://localhost:3000/register-consultant');
      setConsultantRegisterData(response.data);
    } catch (error) {
      console.error('Error fetching client register:', error);
    }
  }

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login-superUser', credentials);
      console.log(response.data);
      setLoginData(response.data);
    } catch (error) {
      console.error('Error logging in SuperUser:', error);
    }
  };

  const toggleApprovalClient = async (id, approved) => {
    try {
      const response = await axios.put(`http://localhost:3000/register-client/${id}`, { approved: !approved });
      console.log(response.data);
      setClientRegisterData((prevData) => prevData.map((data) => {
        if (data._id === id) {
          return { ...data, approved: !approved };
        }
        return data;
      }))
    } catch (error) {
      console.error('Error toggling approval:', error);
    }
  }

  const toggleApprovalConsultant = async (id, approved) => {
    try {
      const response = await axios.put(`http://localhost:3000/register-consultant/${id}`, { approved: !approved });
      console.log(response.data);
      setConsultantRegisterData((prevData) => prevData.map((data) => {
        if (data._id === id) {
          return { ...data, approved: !approved };
        }
        return data;
      }))
    } catch (error) {
      console.error('Error toggling approval:', error);
    }
  }

  useEffect(() => {
    fetchClientRegister();
    fetchConsultantRegister();
  }, []);

  return (
    <div>
      <h1>Super User Login</h1>
      <label>Username:</label>
      <input type="text" name="username" value={credentials.username} onChange={handleInputChange} />
      <br />
      <label>Password:</label>
      <input type="password" name="password" value={credentials.password} onChange={handleInputChange} />
      <br />
      <label>Role:</label>
      <input type="text" name="role" value={credentials.role} onChange={handleInputChange} />
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
      <div>
        {
          loginData && (
            <ul>
              {clientRegisterData.map((client) => (
                <li key={client._id}>
                  {client.username} - {client.role} - {'Approved'} {" "}
                  <input
                    type="checkbox"
                    defaultChecked={client.approved}
                    onChange={() => toggleApprovalClient(client._id, client.approved)}
                  />
                </li>
              ))}
              {consultantRegisterData.map((consultant) => (
                <li key={consultant._id}>
                  {consultant.username} - {consultant.role} - {'Approved'} {" "}
                  <input
                    type="checkbox"
                    defaultChecked={consultant.approved}
                    onChange={() => toggleApprovalConsultant(consultant._id, consultant.approved)}
                  />
                </li>
              ))}
            </ul>

          )
        }
      </div>
    </div>
  );
};

export default SuperUserLogin;
