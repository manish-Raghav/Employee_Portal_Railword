import React, { useState } from 'react'

import { Route,Routes } from 'react-router-dom'
import Testbar from '../../Component/Header/Testbar'
import Profile from '../../Component/Profile/Profile'
import Attendance from '../../Component/Attendance/Attendance'
import Feedback from '../../Component/FeedBack/Feedback'
import Header from '../../Component/Header/Header'
import Deskboard from '../../Component/SR_Engineer_Component/Deshboard/Deskboard'
import Employee from '../../Component/SR_Engineer_Component/Employee/pages/Employee/index'
// import Employee2 from '../../Component/SR_Engineer_Component/Employee/components/Employee/Employee2'

import ChallengesAndSolutions from '../../Component/SR_Engineer_Component/Challange&Solution/ChallengesAndSolutions'
import { FaUser, FaUsers, FaCalendarCheck, FaFileAlt, FaProjectDiagram, FaChartBar, FaComments } from 'react-icons/fa';
import { AiOutlineSolution } from "react-icons/ai";
import { LuTableProperties } from "react-icons/lu";
import { IoHome } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import ReportList from '../../Component/SR_Engineer_Component/Report/ReportList'
import LeaveComp from '../../Component/leave/LeaveComp'
import Pop_up from '../../Component/Pop_up'
import Layout from '../../Component/SR_Engineer_Component/Project&Task/Layout'

const SrComp = () => {
  const [showPopup, setShowPopup] = useState(true);
    const links = [
      { label: 'Dashboard', path: '/Senoir_Employee/dashboard' , icon: <IoHome /> },
      { label: 'Employee', path: '/Senoir_Employee/Employee' , icon: <FaUsers /> },
      { label: 'Attendance', path: '/Senoir_Employee/attendance' , icon: <FaCalendarCheck /> },
      { label: 'Leave', path: '/Senoir_Employee/leave' , icon: <FaFileAlt /> },
      { label: 'Profile', path: '/Senoir_Employee/profile' , icon: <FaUser /> },
      { label: 'Project & Task', path: '/Senoir_Employee/Project', icon: <LuTableProperties/> },
     
        { label: 'Challenges & Solutions', path: '/Senoir_Employee/challanges', icon: <AiOutlineSolution /> },
        { label: 'Reporting & Analytics', path: '/Senoir_Employee/reporting' , icon: <FaProjectDiagram /> },
        { label: 'Feedback & Suggetions', path: '/Senoir_Employee/feedback' , icon: <FaChartBar /> },
      
       
        { label: 'Logout', path: '/Senoir_Employee/logout', icon: <MdLogout /> },
       
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
           <Route path='/dashboard' element ={<Deskboard />} />
           <Route path='/Employee' element ={<Employee/>} />
           {/* <Route path='/Senoir_Employee/view_all' element ={<Employee2/>} /> */}
          
        
           <Route path='/attendance' element={<Attendance/>} />
           <Route path='/profile' element={<Profile/>} />
           <Route path='/project' element={<Layout/>} />
           <Route path='/Leave' element={<LeaveComp/>} /> 
           <Route path='/reporting' element={<ReportList />} />
           <Route path='/feedback' element={<Feedback/>} />

           <Route path='/challanges' element={<ChallengesAndSolutions /> } />
        </Routes>
        </div>
         
       </div>
       </div>
     
         
         
       </div>
  )
}

export default SrComp
