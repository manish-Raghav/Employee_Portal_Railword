import React, { useState } from "react";
import "./assigntaskform.css";

const AssignTaskForm = () => {
  const [formData, setFormData] = useState({
    employee: "",
    startDate: "",
    endDate: "",
    taskAssign: "",
    technology: "",
    detail: "",
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
    <div className="assign-task-form-container">
      <form className="assign-task-form" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-2">Assign Task</h2>
        <p className="text-gray-700 mb-6">Please provide information</p>
        
        <div className="mb-1">
          <label className="block text-sm font-medium text-gray-900">Select Employee Or Group:</label>
          <select
            name="employee"
            value={formData.employee}
            onChange={handleChange}
            className="w-full  bg-gray-100 border-gray-300 text-gray-900 "
          >
            <option value="" className="text-gray-400">Select employee or group</option>
            <option value="Employee 1" className="text-gray-600">Employee 1</option>
            <option value="Employee 2" className="text-gray-600">Employee 2</option>
            <option value="Employee 3" className="text-gray-600">Employee 3</option>
            <option value="Employee 4" className="text-gray-600">Employee 4</option>
          </select>
        </div>
        
        <div className="mb-1">
          <label className="block text-sm font-medium text-gray-900">Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full bg-gray-100  text-gray-500"
          />
        </div>
        
        <div className="mb-1">
          <label className="block text-sm font-medium text-gray-900">End Date:</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full bg-gray-100 text-gray-500"
          />
        </div>
        
        <div className="mb-1">
          <label className="block text-sm font-medium text-gray-900">Task Assigned:</label>
          <select
            name="taskAssign"
            value={formData.taskAssign}
            onChange={handleChange}
            className="w-full bg-gray-100 text-gray-600"
          >
            <option value="" className="text-gray-400">Select task</option>
            <option value="example 1" className="text-gray-600">example 1</option>
            <option value="example 2" className="text-gray-600">example 2</option>
            <option value="example 3" className="text-gray-600">example 3</option>
            <option value="example 4" className="text-gray-600">example 4</option>
          </select>
        </div>
        
        <div className="mb-1">
          <label className="block text-sm font-medium text-gray-900">Technology Used:</label>
          <textarea
            name="technology"
            value={formData.technology}
            onChange={handleChange}
            className="w-full bg-gray-100 text-gray-600"
            placeholder="Enter technology details..."
          />
        </div>
        
        <div className="mb-1">
          <label className="block text-sm font-medium text-gray-900">Details:</label>
          <textarea
            name="detail"
            style={{ height: 150 }}
            value={formData.detail}
            onChange={handleChange}
            className="w-full bg-gray-100 text-gray-600"
            placeholder="Enter task details..."
          />
        </div>
        
        <div className="mb-1">
          <input
            accept=".pdf,.png,.jpg"
            type="file"
            onChange={handleFileChange}
            className="w-full bg-gray-100 text-gray-600"
          />
        </div>
        
        <button type="submit" className="w-full bg-blue-500 text-white p-4">
          Assign Task
        </button>
      </form>
    </div>
  );
};

export default AssignTaskForm;
