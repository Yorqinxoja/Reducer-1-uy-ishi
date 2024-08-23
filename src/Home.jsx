import React from 'react';

const Home = ({ users }) => {
  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">Registered Users</h1>
      <ul className="space-y-6">
        {users.length > 0 ? (
          users.map((user, index) => (
            <li key={index} className="bg-green-800 p-6 rounded-lg shadow-lg">
              <p className="text-lg">
                <span className="font-semibold text-[22px]">Email:</span> {user.email}
              </p>
              <p className="text-lg">
                <span className="font-semibold text-[22px]">Password:</span> {user.password}
              </p>
              <p className="text-lg">
                <span className="font-semibold text-[22px]">Age:</span> {user.age}
              </p>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-400">No users registered yet.</p>
        )}
      </ul>
    </div>
  );
};

export default Home;
