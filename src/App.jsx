import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './Register';
import Home from './Home';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <Router>
      <nav className="p-6 bg-gray-800 text-white flex justify-between">
        <Link to="/" className="text-xl font-semibold hover:text-green-400">Home</Link>
        <Link to="/register" className="text-xl font-semibold hover:text-green-400">Register</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home users={users} />} />
        <Route path="/register" element={<Register addUser={addUser} />} />
      </Routes>
    </Router>
  );
};

export default App;
