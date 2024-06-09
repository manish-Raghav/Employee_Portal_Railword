import React, { useState } from 'react'
import { FaUser, FaUsers, FaCalendarCheck, FaFileAlt, FaProjectDiagram, FaChartBar, FaComments } from 'react-icons/fa';
import { AiOutlineSolution } from "react-icons/ai";
import { LuTableProperties } from "react-icons/lu";
import { IoHome } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { Route,Routes } from 'react-router-dom';




import Attendance from '../../Component/Attendance/Attendance'
import LeaveComp from '../../Component/leave/LeaveComp' 
// import Dwskboard from '../../Component/HR_Components/DeskBoard/Dwskboard'

import Profile from '../../Component/Profile/Profile'
import Feedback from '../../Component/FeedBack/Feedback'
import Testbar from '../../Component/Header/Testbar'
import ReportList from '../../Component/SR_Engineer_Component/Report/ReportList'

import Header from '../../Component/Header/Header'
import ChallengesAndSolutions from '../../Component/SR_Engineer_Component/Challange&Solution/ChallengesAndSolutions';
import ProjectDescription from '../../Component/Jr_Component/Task/ProjectDescription';
import Deskboard from '../../Component/SR_Engineer_Component/Deshboard/Deskboard';
import Pop_up from '../../Component/Pop_up';










const Jr_Comp = () => {
  
  const [showPopup, setShowPopup] = useState(true);
  const links = [
    { label: 'Dashboard', path: '/Employee/dashboard' , icon: <IoHome /> },
  
    { label: 'Profile', path: '/Employee/profile' , icon: <FaUser /> },
    { label: 'Task', path: '/Employee/task' , icon: <FaUsers /> },
    { label: 'Attendance', path: '/Employee/attendance' , icon: <FaCalendarCheck /> },
    { label: 'Leave', path: '/Employee/leave' , icon: <FaFileAlt /> },
    { label: 'Reporting & Analytics', path: '/Employee/reporting' , icon: <FaProjectDiagram /> },
    
      { label: 'Challenges & Solutions', path: '/Employee/challanges', icon: <AiOutlineSolution /> },
   
      { label: 'Feedback & Suggetions', path: '/Employee/feedback' , icon: <FaChartBar /> },
    
     
      { label: 'Logout', path: '/jr/logout', icon: <MdLogout /> },
     
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
        <Route path='/profile' element={<Profile/>} />
        <Route path='/task' element={<ProjectDescription />} />
     
        <Route path='/attendance' element={<Attendance/>} />
       
       
        <Route path='/Leave' element={<LeaveComp/>} />
        <Route path='/challanges' element={<ChallengesAndSolutions /> } />
        <Route path='/reporting' element={<ReportList />} />
        <Route path='/feedback' element={<Feedback/>} />

        {/* <Route path='/Leave' element={<LeaveComp /> } /> */}
     </Routes>
     </div>
      
    </div>
    </div>
  
      
      
    </div>
  )
}

export default Jr_Comp
