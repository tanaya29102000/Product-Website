import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Example credentials check
    if (email === 'abc@gmail.com' && password === 'pass@123') {
      localStorage.setItem('authToken', 'someAuthToken'); // Set token in localStorage
      alert('Login successfully');
      navigate('/shop'); // Redirect to the shop page
    } else {
      alert('Invalid credentials'); // Alert for invalid credentials
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <div className="login-form">
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
        <a href="/forgot-password" className="forgot-password-link">Forgot Password?</a>
      </div>
    </div>
  );
}

export default Login;
