import { useState } from 'react'
import Header from './Component/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Sidebar from './Component/Header/SideBar';
import MyRoutes from './Component/MyRoutes';
import Hr_Component from './Layout/HR/Hr_Component';

import  {Routes, Route } from 'react-router-dom';
import SrComp from './Layout/SR_Engineer/SrComp';
import Jr_Comp from './Layout/JR_Engineer/Jr_Comp';
import AdminComp from './Layout/Admin/AdminComp';
import Employee2 from './Component/SR_Engineer_Component/Employee/components/Employee/Employee2'
import SR_AssignTaskForm from './Component/SR_Engineer_Component/Employee/components/AssignForm/SR_AssignTaskForm';
import Admin_Employee2 from './Component/Admin_Employee/components/Employee/Admin_Employee2'
import Profile from './Component/Admin_Employee/components/Profile_data/Profile'
import Attandance from './Component/Admin_Employee/components/Profile_data/Attandance';
import ProjectTask from './Component/Admin_Employee/components/Profile_data/ProjectTask';
import Leave from './Component/Admin_Employee/components/Profile_data/Leave';
function App() {
  return (
    <>
     
       {/* <div className=' h-[160vh] w-full bg-[#dde2e6]' >
       <div className='flex flex-col   w-full '  >
       <Header />
       <div className='flex'>
        <Sidebar />
        
         <MyRoutes />
         
       </div>
       </div>
     
         
         
       </div> */}

        <Routes>
        <Route path="/Hr/*" element={<Hr_Component />} />
        <Route path="/Senoir_Employee/*" element={<SrComp />} />
        <Route path="/Employee/*" element={<Jr_Comp />} />
        <Route path="/Admin/*" element={<AdminComp />} />
        < Route path="/Senoir_Employee/view_all" element={<Employee2/>}/>
        < Route path="/Senoir_Employee/create_team" element={<SR_AssignTaskForm/>}/>
        < Route path='/Admin/view_all' element={<Admin_Employee2/>}/>
        < Route path='/Admin/profile/user' element={<Profile/>}/>
        < Route path='/Admin/attandance' element={<Attandance/>}/>
        < Route path='/Admin/project-task' element={<ProjectTask/>}/>
        < Route path='/Admin/leave/user' element={<Leave/>}/>

        </Routes>
    </>
  )
}

export default App


