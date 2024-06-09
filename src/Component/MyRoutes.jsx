import React from 'react'
// import { Route,Routes } from 'react-router-dom'
// import Employee from './Employee/Employee'
// import Attendance from './Attendance/Attendance'
// import LeaveComp from './HR_Components/leave/LeaveComp' 
// import Dwskboard from './HR_Components/DeskBoard/Dwskboard'
// import Report from './HR_Components/Report/Report'
// import Profile from './Profile/Profile'
// import Feedback from './FeedBack/Feedback'
// import Layout from './Project/Layout'





const MyRoutes = () => {
    return (
        <div>
           <Routes>
           <Route path='/' element ={<Dwskboard />} />
           <Route path='/Employee' element={<Employee />} />
        
           <Route path='/attendance' element={<Attendance/>} />
           <Route path='/profile' element={<Profile/>} />
           <Route path='/project' element={<Attendance/>} />
           <Route path='/Leave' element={<LeaveComp/>} />
           <Route path='/reporting' element={<Report />} />
           <Route path='/feedback' element={<Feedback/>} />

           {/* <Route path='/Leave' element={<LeaveComp /> } /> */}
        </Routes>
        </div>
      )
}

export default MyRoutes
