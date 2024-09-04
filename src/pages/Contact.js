import React, { useState } from 'react';
import "./Contact.css";

function Contact() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isChecked) {
      setIsSubmitted(true);
      // Reset the form fields after submission
      setEmail('');
      setPassword('');
      setMessage('');
      setIsChecked(false);
    } else {
      alert('Please confirm that the information is correct.');
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Email Address:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group checkbox">
          <input 
            type="checkbox" 
            checked={isChecked} 
            onChange={(e) => setIsChecked(e.target.checked)} 
            required 
          />
          <label>I confirm that the information provided is correct.</label>
        </div>
        <button type="submit">Submit</button>
        {isSubmitted && <p className="success-message">Submitted successfully!</p>}
      </form>
    </div>
  );
}

export default Contact;
