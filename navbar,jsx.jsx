import React, { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const success = await login(username, password);
    if (success) {
      navigate('/');
    } else {
      setErr('Login failed: Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="username"
               placeholder="Username"
               value={username}
               onChange={e => setUsername(e.target.value)} />
        <input name="password"
               type="password"
               placeholder="Password"
               value={password}
               onChange={e => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      {err && <p>{err}</p>}
    </div>
  );
};

export default Login;
