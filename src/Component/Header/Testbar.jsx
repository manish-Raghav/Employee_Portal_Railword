import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";


import { FaUser, FaUsers, FaCalendarCheck, FaFileAlt, FaProjectDiagram, FaChartBar, FaComments } from 'react-icons/fa';
const Testbar = ({ links }) => {

  const [activeIndex, setActiveIndex] = useState(null);
    return (
   


  //   <div className="w-80 h-full bg-transparent p-4 z-50 border-rose-600 border-2">
  //   <ul className=' flex flex-col gap-6 mt-4'>
  //     {links.map((link) => (
  //       <li key={link.name} className=" ">
  //         <Link
  //           to={link.path}
  //           className="flex items-center gap-1 text-xl p-2 text-gray-700 rounded hover:bg-blue-200"
  //           activeClassName="bg-blue-500 text-white"
  //         >
  //           <span className="mr-2   text-xl" >{link.icon}</span>
  //           {link.label}
  //         </Link>
  //       </li>
  //     ))}
  //   </ul>
  // </div>




  <div className="h-screen bg-transparent w-80  px-3  py-2 ">
  {links.map((item, index) => (
    <Link
      to={item.path}
      key={index}
      onClick={() => setActiveIndex(index)}
      className={`flex items-center p-3 my-2 rounded gap-2 cursor-pointer 
        ${activeIndex === index ? 'bg-blue-900 text-white rounded-r-3xl' : 'hover:bg-gray-300'}`}
    >
      <span className='text-lg'> {item.icon }  </span>
      <span className='text-lg'>{item.label}</span>
    </Link>
  ))}
</div>




    );
  };
  

export default Testbar
