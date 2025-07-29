import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Your Login component extracted
function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
    alert(`Email: ${email}\nPassword: ${password}`);
    onLogin(true); // Example: call onLogin callback to set authenticated state
  };

  return (
    <div className="App">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

// Dummy TodoList component (replace with your real one)
function TodoList() {
  return (
    <div>
      <h2>Todo List</h2>
      {/* Your todo list UI */}
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={setIsLoggedIn} />} />
        <Route
          path="/"
          element={isLoggedIn ? <TodoList /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
