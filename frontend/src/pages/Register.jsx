
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Register() {
  const [username, setUsername] = useState('');
  
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); 

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (username.trim() === '') {
      alert('Please enter a username');
      return;
    }
    if (email.trim() === '') {
      alert('Please enter an email address');
      return;
    } else if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }
  
    if (password.trim() === '') {
      alert('Please enter a password');
      return;
    } else if (password.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, email }),
      });
      const data = await response.json();
      alert(data.message);
      if (response.ok) navigate('/Login');
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };
  
  
  return (
    <div>
      <div className="bgg">
        <form className="containeer" onSubmit={handleSubmit} >
          <h1 className="ltitle">User Login</h1>
          <section className="inputboox">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} />
            <i className="bx bxs-user"></i>
          </section>
          <section className="inputboox">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className="bx bxs-lock-alt"></i>
          </section>
          <section className="inputboox">
            <input
              type="email"
              name="email"
              placeholder="G-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </section>
          <button className="regbut" type="submit">
            Register
          </button>

          <h5 className="alracc">
            Already have an account? <a href="Login">Login</a>
          </h5>
        </form>
      </div>
    </div>
  );
}

export default Register;
