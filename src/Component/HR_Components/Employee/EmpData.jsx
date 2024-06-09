import React, { useState } from 'react'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const EmpData = ({data}) => {
 

  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(10);

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = data.slice(indexOfFirstEmployee, indexOfLastEmployee);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(data.length / employeesPerPage);

  


    console.log('emp_data componet here ---> ',data)
    return (
        <div className="overflow-x-auto h-auto  relative  bottom-2">
          <table className="min-w-full bg-white">
            <thead className="">
              <tr>
                <th className="py-2 px-4 text-[#c2c0c7]">S. No.</th>
                <th className="py-2 px-4 text-[#c2c0c7]">Employee Name</th>
                <th className="py-2 px-4 text-[#c2c0c7]">Employee ID</th>
                <th className="py-2 px-4 text-[#c2c0c7]">Department</th>
                <th className="py-2 px-4 text-[#c2c0c7]">Status</th>
                <th className="py-2 px-4 text-[#c2c0c7]">Action</th>
              </tr>
            </thead>
            <tbody className=''>
        
              {currentEmployees.map((employee, index) => (
                <tr key={employee.id} className="border-b ml-0">
                  <td className="py-2 px-4 ">{index+1}</td>
                  <td className="py-2 px-4 flex items-center">
                    <img src={employee.img} alt={employee.name} className="w-10 h-10 rounded-full mr-3" />
                    {employee.name}
                  </td>
                  <td className="py-2 px-4">{employee.emp_id}</td>
                  <td className="py-2 px-4">{employee.Department}</td>
                  <td className="py-2 px-4">
                    <span className="bg-purple-100 text-purple-600 py-1 px-3 rounded-full text-xs">
                      {employee.Status}
                    </span>
                  </td>
                  <td className="py-2 px-4 flex space-x-3">
                    <button className="text-gray-600 text-xl hover:text-gray-900">
                    <MdOutlineRemoveRedEye />
                    </button>
                    <button className="text-gray-600 text-xl hover:text-gray-900">
                    <AiOutlineEdit />
                    </button>
                    <button className="text-gray-600 text-xl hover:text-gray-900">
                    <RiDeleteBin6Line />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          
          <div className="flex justify-between bg-white items-center py-3  rounded-b-xl">
        <div className="text-gray-600 ml-4">
          Showing {indexOfFirstEmployee + 1} to {indexOfLastEmployee > data.length ? data.length : indexOfLastEmployee} out of {data.length} records
        </div>
        <div className="flex items-center space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 border rounded-full ${currentPage === index + 1 ? 'bg-purple-600 text-white' : 'bg-white text-gray-600'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EmpData
