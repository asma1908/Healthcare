import React, { useState } from 'react';

const Login = ({ setUser }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const { email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // Simulate successful login
    setUser({ email });
    console.log('User logged in:', email);
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <form onSubmit={onSubmit}>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
          required
        /><br/>
      
<label>Password:</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
          required
        /><br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

