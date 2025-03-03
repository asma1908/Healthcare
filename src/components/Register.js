import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const { name, email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // Simulate successful registration
    console.log('User registered:', { name, email });
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={onSubmit}>
        <label>Name:</label>
        <input type="text" placeholder="Name" name="name" value={name} onChange={onChange} required /><br/>
        <label>Email:</label>
        <input type="email" placeholder="Email" name="email" value={email} onChange={onChange} required /><br/>
        <label> Password:</label>
        <input type="password" placeholder="Password" name="password" value={password} onChange={onChange} required /><br/>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
