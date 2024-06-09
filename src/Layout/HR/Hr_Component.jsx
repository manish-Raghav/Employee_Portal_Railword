import React, { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Attendance from '../../Component/Attendance/Attendance'
import LeaveComp from '../../Component/leave/LeaveComp' 
import Dwskboard from '../../Component/HR_Components/DeskBoard/Dwskboard'

import Profile from '../../Component/Profile/Profile'
import Feedback from '../../Component/FeedBack/Feedback'
import Testbar from '../../Component/Header/Testbar'


import Header from '../../Component/Header/Header'
import Employee from '../../Component/HR_Components/Employee/Employee'
import Report from '../../Component/HR_Components/Report/Report'
import { LuTableProperties } from "react-icons/lu";
import { IoHome } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { FaUser, FaUsers, FaCalendarCheck, FaFileAlt, FaProjectDiagram, FaChartBar, FaComments } from 'react-icons/fa';
import Layout from '../../Component/Project/Layout'
import Pop_up from '../../Component/Pop_up'
// import { Icons } from '../../Component/HR_Components/IconsOfSidebar'
 

const Hr_Component = () => {
  const [showPopup, setShowPopup] = useState(true);
    const links = [
        { label: 'Dashboard', path: '/hr/Deshboard' , icon: <IoHome /> },
        { label: 'Employee', path: '/hr/Employee' , icon: <FaUsers /> },
        { label: 'Attendance', path: '/hr/attendance' , icon: <FaCalendarCheck /> },
        { label: 'Leave', path: '/hr/leave' , icon: <FaFileAlt /> },
        { label: 'Profile', path: '/hr/profile' , icon: <FaUser /> },
        { label: 'Project', path: '/hr/Project', icon: <LuTableProperties  /> },
        { label: 'Reporting & Analytics', path: '/hr/reporting' , icon: <FaProjectDiagram /> },
        { label: 'Feedback & Suggetions', path: '/hr/feedback' , icon: <FaChartBar /> },
        { label: 'Logout', path: '/hr/logout', icon: <MdLogout /> },
        
      ]; 
  return (
    <div className=' h-[160vh] w-full bg-[#dde2e6]' >
       <div className='flex flex-col   w-full '  >
       <Header />
       <div className='flex '>
       <div>
       <Testbar links={links} />
       </div>
        
         <div className=''>
         {showPopup && <Pop_up onClose={() => setShowPopup(false)} />}
         </div>
         {/* <MyRoutes /> */}

         <div>
           <Routes>
           <Route path='/Deshboard' element ={<Dwskboard />} />
           <Route path='/Employee' element={<Employee />} />
        
           <Route path='/attendance' element={<Attendance/>} />
           <Route path='/profile' element={<Profile/>} />
           <Route path='/project' element={<Layout/>} />
           <Route path='/Leave' element={<LeaveComp/>} />
           <Route path='/reporting' element={<Report />} />
           <Route path='/feedback' element={<Feedback/>} />

           {/* <Route path='/Leave' element={<LeaveComp /> } /> */}
        </Routes>
        </div>
         
       </div>
       </div>
     
         
         
       </div>
  )
}

export default Hr_Component
