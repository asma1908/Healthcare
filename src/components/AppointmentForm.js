import React, { useState } from 'react';

const AppointmentForm = ({ addAppointment }) => {
  const [formData, setFormData] = useState({ date: '', time: '', description: '' });

  const { date, time, description } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // Simulate appointment booking
    addAppointment({ Date:date, time, description });
    console.log('Appointment booked:', { date, time, description });
  };

  return (
    <div>
      <h1>Book your Appointment</h1>
      <form onSubmit={onSubmit}>
        <label>Date:</label>
        <input type="date" name="date" value={date} onChange={onChange} required /><br/>
        <label>Time:</label>
        <input type="time" name="time" value={time} onChange={onChange} required /><br/>
        <label>Description:</label>
        <textarea placeholder="Description" name="description" value={description} onChange={onChange} required></textarea><br/>
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
