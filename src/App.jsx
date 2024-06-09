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
        </Routes>
    </>
  )
}

export default App


