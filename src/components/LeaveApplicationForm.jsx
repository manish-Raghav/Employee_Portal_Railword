import React, { useState } from 'react';

const LeaveApplicationForm = () => {

  const [formData, setFormData] = useState({
    leaveType: '',
    leaveDate: '',
    leavePeriod: '',
    reason: '',
    coverBy: '',
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, attachment: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-2">Leave Application Form</h2>
      <p className="text-gray-700 mb-6">Please provide information about your leave.</p>
      <div className="mb-6">
        <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-white">Leave Type:</label>
        <select
          name="leaveType"
          value={formData.leaveType}
          onChange={handleChange}
          className="w-full p-3 rounded-3xl bg-gray-100 border-gray-300 text-gray-900"
        >
          <option value="" className="text-gray-400">Choose leave type...</option>
          <option value="sick" className="text-gray-600">Sick Leave</option>
          <option value="vacation" className="text-gray-600">Vacation Leave</option>
          <option value="emergency" className="text-gray-600">Emergency Leave</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-white">Select Date:</label>
        <input
          type="date"
          name="leaveDate"
          value={formData.leaveDate}
          onChange={handleChange}
          className="w-full p-3 bg-gray-100 rounded-3xl text-gray-500"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-white">Select Period:</label>
        <select
          name="leavePeriod"
          value={formData.leavePeriod}
          onChange={handleChange}
          className="w-full p-3 bg-gray-100 rounded-3xl text-gray-600"
        >
          <option value="" className="text-gray-400">Period of leave...</option>
          <option value="half-day" className="text-gray-600">Half Day</option>
          <option value="full-day" className="text-gray-600">Full Day</option>
          <option value="multiple-days" className="text-gray-600">Multiple Days</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-white">Reason:</label>
        <textarea
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          className="w-full p-3 bg-gray-100 rounded-3xl text-gray-600"
          placeholder="Reason for leave..."
        />
      </div>
      <div className="mb-4">
        <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-white">Attachment:</label>
        <input
          type="file"
          accept=".pdf,.png,.jpg"
          onChange={handleFileChange}
          className="w-full p-3 bg-gray-100 rounded-3xl text-gray-600"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-white">Jobs Will Be Covered By:</label>
        <select
          name="coverBy"
          value={formData.coverBy}
          onChange={handleChange}
          className="w-full p-3 bg-gray-100 rounded-3xl text-gray-600"
        >
          <option value="" className="text-gray-400">Who will cover your work...</option>
          <option value="john" className="text-gray-600">John Doe</option>
          <option value="jane" className="text-gray-600">Jane Smith</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-4 rounded-lg"
      >
        Apply leave
      </button>
    </form>
  );
};

export default LeaveApplicationForm;
