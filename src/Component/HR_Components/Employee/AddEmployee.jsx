import React, { useState } from 'react'
import { CiCamera } from "react-icons/ci";

const AddEmployee = ({setformisActive ,setIsActive}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    department: '',
    officeLocation: '',
    designation: '',
    employeeId: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };


  const cancel =()=>{
    setformisActive(true);
    setIsActive(true)
  }

  return (
    <div className="container w-[61.5rem] flex mx-auto p-6   mt-8 relative  bg-white">
    <div className="flex justify-between  absolute top-0 items-center ">
          <h2 className="text-2xl font-semibold text-gray-700">New Employee Information</h2>
          
        </div>
      <div className="w-[65rem]  bg-white shadow-md rounded-lg p-4 mt-4">
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex  w-full mb-6">
              <div className="w-28 h-20  bg-gray-200 flex items-center justify-center">
                <span className=""><CiCamera  size={30}/></span>
              </div>
            </div>
            {/* <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            /> */}
           
            
            <input
              type="text"
              name="First Name"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />

            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              placeholder="Date of Birth"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <select
              name="officeLocation"
              value={formData.officeLocation}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              <option value="">Select Office Location</option>
              {/* Add options as needed */}
            </select>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              {/* Add more options as needed */}
            </select>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              <option value="">Select Department</option>
              {/* Add options as needed */}
            </select>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              placeholder="Enter Designation"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input
              type="text"
              name="employeeId"
              value={formData.employeeId}
              onChange={handleChange}
              placeholder="Employee ID"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
           
          </div>
          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100"
              onClick={cancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-purple-700"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );

}

export default AddEmployee
