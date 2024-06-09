import React from 'react'
import ChallengesAndSolutions from '../../Component/SR_Engineer_Component/Challange&Solution/ChallengesAndSolutions'
import { FaUser, FaUsers, FaCalendarCheck, FaFileAlt, FaProjectDiagram, FaChartBar, FaComments } from 'react-icons/fa';
import { AiOutlineSolution } from "react-icons/ai";
import { LuTableProperties } from "react-icons/lu";
import { IoHome } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { Route,Routes } from 'react-router-dom'
import Header from '../../Component/Header/Header';
import Testbar from '../../Component/Header/Testbar';
import Profile from '../../Component/Profile/Profile';
import AdminDashboard from '../../Component/Admin_Comp/Dashboard/AdminDashboard';



const AdminComp = () => {

    const links = [
        { label: 'Dashboard', path: '/Admin/dashboard' , icon: <IoHome /> },
        { label: 'Employee', path: '/Admin/Employee' , icon: <FaUsers /> },
        { label: 'Attendance', path: '/Admin/attendance' , icon: <FaCalendarCheck /> },
        { label: 'Leave', path: '/Admin/leave' , icon: <FaFileAlt /> },
        { label: 'Profile', path: '/Admin/profile' , icon: <FaUser /> },
        { label: 'Project & Task', path: '/Admin/Project', icon: <LuTableProperties/> },
       
        //   { label: 'Challenges & Solutions', path: '/Sr/challanges', icon: <AiOutlineSolution /> },
          { label: 'Reporting & Analytics', path: '/Admin/reporting' , icon: <FaProjectDiagram /> },
          { label: 'Feedback & Suggetions', path: '/Admin/feedback' , icon: <FaChartBar /> },
        
         
          { label: 'Logout', path: '/Admin/logout', icon: <MdLogout /> },
         
        ];
  return (
    <div className=' h-[160vh] w-full bg-[#dde2e6]' >
    <div className='flex flex-col   w-full '  >
    <Header />
    <div className='flex '>
    <div>
    <Testbar links={links} />
    </div>
         {/* <MyRoutes /> */}

         <div>
           <Routes>
           <Route path='/dashboard' element ={<AdminDashboard />} />
       
        
           {/* <Route path='/attendance' element={<Attendance/>} /> */}
           <Route path='/profile' element={<Profile/>} />
           {/* <Route path='/project' element={<Layout/>} />*/}
           {/* <Route path='/Leave' element={<LeaveComp/>} />  */}
           {/* <Route path='/reporting' element={<ReportList />} /> */}
           {/* <Route path='/feedback' element={<Feedback/>} /> */}

           {/* <Route path='/challanges' element={<ChallengesAndSolutions /> } /> */}
        </Routes>
        </div>
         
       </div>
       </div>
     
         
         
       </div>
  )
}

export default AdminComp
