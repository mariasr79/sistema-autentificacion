import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const response = await fetch('https://potential-palm-tree-r4gjpvr6r4qq3g9v-3001.app.github.dev/api', { // Hacemos la solicitud al backend
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }), 
      });

      if (!response.ok) { 
        throw new Error('Network response was not ok');
      }

      const data = await response.json(); 
      localStorage.setItem('token', data.token); 
      navigate('/paginaprivada'); 
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error); 
      setError('Login failed. Please try again.'); 
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>} {}
    </div>
  );
};

export default Login;
