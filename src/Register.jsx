import React, { useState } from 'react';

const Register = ({ addUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { email, password, age };
    addUser(newUser);
    setEmail('');
    setPassword('');
    setAge('');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg w-96 text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
        <div className="mb-4">
          <label className="block text-gray-400">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mt-2 bg-gray-700 rounded border border-gray-600 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mt-2 bg-gray-700 rounded border border-gray-600 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-400">Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-3 mt-2 bg-gray-700 rounded border border-gray-600 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
            placeholder="Enter your age"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-800 hover:bg-green-500 text-white py-3 rounded-lg font-semibold transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
