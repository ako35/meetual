import React, { useState } from 'react';
import axios from 'axios';

const ConsultantRegister = () => {
    const [consultant, setConsultant] = useState({
        username: '',
        password: '',
        role: 'consultant',
        approved: false
    });

    const [registrationData, setRegistrationData] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setConsultant({
            ...consultant,
            [name]: value
        });
    };


    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:3000/register-consultant', { ...consultant });
            console.log(response.data);
            setRegistrationData(response.data);
        } catch (error) {
            console.error('Error registering consultant:', error);
        }
    };

    return (
        <div>
            <h2>Consultant Register</h2>
            <label>Username:</label>
            <input type="text" name="username" value={consultant.username} onChange={handleInputChange} />
            <br />
            <label>Password:</label>
            <input type="password" name="password" value={consultant.password} onChange={handleInputChange} />
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

export default ConsultantRegister;