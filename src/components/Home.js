// import React from 'react';

// const Home = () => {
//   return (
//     <div>
//       <h2>Home Page</h2>
//       <p>Welcome to the home page!</p>
//     </div>
//   );
// };

//  export default Home;
// import React from 'react';
import React, { useState } from 'react';
 import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
 
  
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Healthcare Hospital</h1>
        <p>Your health is our priority. Book an appointment with our expert doctors today.</p>
        <Link to="/book-appointment" className="btn-primary">Book Appointment</Link>
      </header>
      
      <section className="home-services">
        <h2>Our Services</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>General Consultation</h3>
            <p>Get expert advice from our experienced doctors.</p>
          </div>
          <div className="service-item">
            <h3>Emergency Care</h3>
            <p>24/7 emergency services available for critical patients.</p>
          </div>
          <div className="service-item">
            <h3>Specialist Doctors</h3>
            <p>Consult specialists across various fields of medicine.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

