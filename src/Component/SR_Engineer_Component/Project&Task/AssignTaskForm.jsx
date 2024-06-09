import React, { useState } from "react";
import "./assigntaskform.css";

const AssignTaskForm = () => {
  const [formData, setFormData] = useState({
    employee: "",
    startDate: "",
    endDate: "",
    taskassign: "",
    technology: "",
    detail: "",
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
    <div className="custom-assign-form">
      <form className="custom-form" onSubmit={handleSubmit}>
        <h2>Assign Task</h2>
        <p>Please provide information</p>
        <div className="custom-form-group">
          <label>Select Employee Or Group:</label>
          <select
            name="employee"
            value={formData.employee}
            onChange={handleChange}
            className="custom-form-control"
          >
            <option value="">Select employee or group</option>
            <option value="employee1">Employee 1</option>
            <option value="employee2">Employee 2</option>
            <option value="employee3">Employee 3</option>
            <option value="employee4">Employee 4</option>
          </select>
        </div>
        <div className="custom-form-group">
          <label>Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="custom-form-control"
          />
        </div>
        <div className="custom-form-group">
          <label>End Date:</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="custom-form-control"
          />
        </div>
        <div className="custom-form-group">
          <label>Task assigned:</label>
          <select
            name="taskassign"
            value={formData.taskassign}
            onChange={handleChange}
            className="custom-form-control"
          >
            <option value="">Select task</option>
            <option value="example1">Example 1</option>
            <option value="example2">Example 2</option>
            <option value="example3">Example 3</option>
            <option value="example4">Example 4</option>
          </select>
        </div>
        <div className="custom-form-group">
          <label>Technology Used:</label>
          <textarea
            name="technology"
            value={formData.technology}
            onChange={handleChange}
            className="custom-form-control"
            placeholder="Enter Detail..."
          />
        </div>
        <div className="custom-form-group">
          <label>Details:</label>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            className="custom-form-control"
            placeholder="Enter Detail..."
            style={{ height: 150 }}
          />
        </div>
        <div className="custom-form-group">
          <input
            accept=".pdf,.png,.jpg"
            type="file"
            onChange={handleFileChange}
            className="custom-form-control"
          />
        </div>
        <button type="submit" className="custom-task-button">
          Assign Task
        </button>
      </form>
    </div>
  );
};

export default AssignTaskForm;