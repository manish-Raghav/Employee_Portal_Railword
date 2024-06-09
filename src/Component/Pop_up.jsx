import React from 'react'

const Pop_up = ({ onClose }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-10  w-[50vw] h-[50vh]  items-center justify-center rounded shadow-lg">
          <h2 className="text-2xl mb-4">Good Morning Employee</h2>
          <p className="mb-4">Please clock in for your attendance</p>
          <button className="bg-orange-400 text-white p-2 rounded" onClick={onClose}>Clock-In</button>
        </div>
      </div>
    );
  };

export default Pop_up
