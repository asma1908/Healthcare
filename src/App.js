import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
import'./App.css';
const App = () => {
  const [user, setUser] = useState(null);
  const [appointments, setAppointments] = useState([]);

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };
  const deleteAppointment = (index) => {
    const newAppointments = [...appointments];
    newAppointments.splice(index, 1);
    setAppointments(newAppointments);
  };
return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/appointments" element={<AppointmentList appointments={appointments}  deleteAppointment={deleteAppointment}/>} />
          <Route path="/book-appointment" element={<AppointmentForm addAppointment={addAppointment} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

