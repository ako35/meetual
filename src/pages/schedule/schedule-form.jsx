import React, { useState } from 'react';
import axios from 'axios';

const ScheduleForm = ({ consultantId }) => {
    const [schedule, setSchedule] = useState({
        date: '',
        clientName: '',
        description: '',
    });

    const [scheduleCreated, setScheduleCreated] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSchedule({
            ...schedule,
            [name]: value,
        });
    };

    const handleAddSchedule = async () => {
        setScheduleCreated(false);
        try {
            const response = await axios.post(`http://localhost:3000/add-schedule/${consultantId}`, schedule);
            console.log(response.data);
            setScheduleCreated(true);
        } catch (error) {
            console.error('Error adding schedule:', error);
        }
    };

    return (
        <div>
            <h2>Add Schedule</h2>
            <label>Date:</label>
            <input type="date" name="date" value={schedule.date} onChange={handleInputChange} />
            <br />
            <label>Client Name:</label>
            <input type="text" name="clientName" value={schedule.clientName} onChange={handleInputChange} />
            <br />
            <label>Description:</label>
            <textarea name="description" value={schedule.description} onChange={handleInputChange} />
            <br />
            <button onClick={handleAddSchedule}>Add Schedule</button>
            {scheduleCreated && <p>Schedule created successfully!</p>}
        </div>
    );
};

export default ScheduleForm;