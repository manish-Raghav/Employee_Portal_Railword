

import React from 'react';

import { FaUser, FaEnvelope, FaPhone, FaIdCard } from 'react-icons/fa';

const Feedback = () => {
  return ( 
    <>
   
                                                         {/* maindiv */}
    <div className='flex justify-between lg:w-[90%]      ml-24 mt-16 rounded-lg' >
                                                          {/* slidebar  */}
 
                                                           {/* FormDiv */}
    {/* <div className="min-h-screen  bg-gray-300 md:h-1/4 flex  justify-center p-5">    */}
    
    <div className="flex flex-col   md:h-[600px]  bg-white  md:flex-row  shadow-lg rounded-lg overflow-hidden ">
    
      <div className="md:w-1/2   rounded-lg  lg:p-10 bg-white  p-4 text-gray-600">
    
        <h2 className="text-3xl font-bold mb-4 text-violet-900">Fill the form to submit your feedback</h2>
        <p className="text-lg text-gray-400  ">Lorem ipsum dolor sit amet consectetur adipisicing elit posuere vel venenatis eu sit massa volutpat massa rhoncus odio feugiat tellus, elit massa sed.</p>
      </div>
                                                           {/* form */}
      <div className="md:w-2/3 p-10">
        <form    >
          <div className="flex flex-col md:flex-row md:space-x-5  mb-6">
            <div className="flex-1 mb-4 md:mb-0">
              <label className="block text-sm font-bold mb-2" htmlFor="name">Name</label>
              <div className="relative">
    
                <input type="text" name="name"    className="w-full pl-5 pr-4 py-2 border-2  hover:shadow-lg rounded-full focus:outline-none focus:border-blue-500" placeholder="John Carter" />
    
                <FaUser className="absolute  right-3 top-3 text-gray-300" />
              </div>
            </div>
    
            <div className="flex-1">
              <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
              <div className="relative">
    
                <input type="email" name="email"  className="w-full pl-5 pr-4 py-2 border-2  hover:shadow-lg rounded-full focus:outline-none focus:border-blue-500" placeholder="Email address" />
    
                <FaEnvelope className="absolute right-3 top-3 text-gray-300" />
              </div>
            </div>
          </div>
    
          <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
            <div className="flex-1 mb-4 md:mb-0">
              <label className="block text-sm font-bold mb-2" htmlFor="phone">Phone Number</label>
              <div className="relative">
    
                <input type="text"  name="phoneNumber"   className="w-full  pl-5 pr-4 py-2 border-2   hover:shadow-lg  rounded-full focus:outline-none focus:border-blue-500" placeholder="(123) 456-7890" />
    
                <FaPhone className="absolute right-3 top-3 text-gray-300" />
              </div>
            </div>
    
            <div className="flex-1">
              <label className="block text-sm font-bold mb-2" htmlFor="empId">Emp ID</label>
              <div className="relative">
    
                <input type="text" name="empId"   className="w-full pl-5 pr-4 py-2 border-2  hover:shadow-lg   rounded-full focus:outline-none focus:border-blue-500" placeholder="EMP ID" />
    
                <FaIdCard className="absolute right-3 top-3 text-gray-300" />
              </div>
            </div>
          </div>
    
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="feedback">Feedback/Suggestion</label>
    
            <textarea name="feedback"   className="w-full h-[150px] pl-4 pr-4 py-2 border-2   hover:shadow-lg  rounded-xl focus:outline-none focus:border-blue-500" placeholder="If you have any additional feedback or suggestion, please type it in here..."></textarea>
    
          </div>
          <button type="submit" className="w-1/2  mx-[150px] py-3 mt-7 bg-blue-600 text-white font-bold  rounded-full hover:bg-blue-700  hover:shadow-lg  hover:shadow-black transition duration-300">Submit feedback/Suggestion   </button>
        </form>
      </div>
    </div>
    </div>
    {/* </div> */}
    </>
      );
        }

export default Feedback;
