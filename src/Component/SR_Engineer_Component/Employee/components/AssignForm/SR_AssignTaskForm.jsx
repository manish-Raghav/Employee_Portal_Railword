import React, { useState } from "react";
import "./SR_assigntaskform.css";
const SR_AssignTaskForm = () => {
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
    <div className="assign-form ml-[37%] mt-[50px] h-[640px]">
    <form
      className="max-w-lg  mx-auto bg-white shadow-md "
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-2">Create Group</h2>
      <p className="text-gray-700 mb-6">
        Please provide information
      </p>
      <div className="mb-3 ">
        <label className="block text-sm font-medium text-gray-900 dark:text-white">
          Select Employees
        </label>
        <select
          name="employee"
          value={formData.leaveType}
          onChange={handleChange}
          className="w-full  rounded-3xl bg-gray-100 border-gray-300 text-gray-900 p-3"
          placeholder="select employee or group"
        >
          <option value="" className="text-gray-400">
            Employee 1
          </option>
          <option value="sick" className="text-gray-600">
          Employee 2
          </option>
          <option value="vacation" className="text-gray-600">
          Employee 3
          </option>
          <option value="emergency" className="text-gray-600">
          Employee 4
          </option>
        </select>
      </div>
      <div className="mb-3">
      <label className="block text-sm font-medium text-gray-900 dark:text-white">
          Select Team Lead
        </label>
        <select
          name="employee"
          value={formData.leaveType}
          onChange={handleChange}
          className="w-full  rounded-3xl bg-gray-100 border-gray-300 text-gray-900 p-3"
          placeholder="select employee or group"
        >
          <option value="" className="text-gray-400">
            Employee 1
          </option>
          <option value="sick" className="text-gray-600">
          Employee 2
          </option>
          <option value="vacation" className="text-gray-600">
          Employee 3
          </option>
          <option value="emergency" className="text-gray-600">
          Employee 4
          </option>
        </select>
        </div>
        <div className="mb-3">
        <label className="block text-sm font-medium text-gray-900 dark:text-white">
          Group/Team name
        </label>
        <input  
          name="technology"
          value={formData.reason}
          onChange={handleChange}
          className="w-full bg-gray-100 rounded-3xl p-3  text-gray-600"
          placeholder="Group Name..."
        />
      </div>
      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-900 dark:text-white">
          Task assigned:
        </label>
        <select
          name="taskassign"
          value={formData.leavePeriod}
          onChange={handleChange}
          className="w-full bg-gray-100 rounded-3xl text-gray-600 p-3"
          placeholder="Who will cover your work ..."
        >
          <option value="" className="text-gray-400">
            example 1
          </option>
          <option value="half-day" className="text-gray-600">
            example 2
          </option>
          <option value="full-day" className="text-gray-600">
          example 3
          </option>
          <option value="multiple-days" className="text-gray-600">
          example 4
                    </option>
        </select>
      </div>
      
      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-900 dark:text-white">
          Details:
        </label>
        <textarea
          name="details"
          style={{height:150}}
          value={formData.reason}
          onChange={handleChange}
          className="w-full bg-gray-100 text-gray-600 p-3"
          placeholder="Enter Detail..."
        />
      </div>
    
      
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-4"
      >
        Create Team & Group
      </button>
    </form>
    </div>
  );
};

export default SR_AssignTaskForm;
