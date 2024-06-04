import { useState } from 'react'
import Header from './Component/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Component/Header/SideBar';
import MyRoutes from './Component/MyRoutes';
// import Routes from './Component/Routes';

function App() {
  return (
    <>
     
       <div className=' h-[160vh] w-full bg-[#dde2e6]' >
       <div className='flex flex-col   w-full '  >
       <Header />
       <div className='flex'>
        <Sidebar />
        
         <MyRoutes />
         
       </div>
       </div>
     
         
         
       </div>
       
    </>
  )
}

export default App


