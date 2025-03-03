import React from 'react';
import './AppointmentList.css';

const AppointmentList = ({ appointments,deleteAppointment }) => (
  <div>
    <h2>Your Appointments</h2>
    <ul>
      {appointments.map((appointment, index) => (
        <li key={index}>
            {appointment.date} {appointment.time} - {appointment.description}
          <button onClick={() => deleteAppointment(index)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

export default AppointmentList;
