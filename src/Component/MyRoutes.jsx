import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Employee from './Employee/Employee'
import Attendance from './Attendance/Attendance'
import LeaveComp from './leave/LeaveComp' 
import Dwskboard from './DeskBoard/Dwskboard'
import Report from './Report/Report'
import Profile from './Profile/Profile'
import Feedback from './FeedBack/Feedback'




const MyRoutes = () => {
    return (
        <div>
           <Routes>
           <Route path='/' element ={<Dwskboard />} />
           <Route path='/Employee' element={<Employee />} />
           <Route path='/attendance' element={<Attendance/>} />
           <Route path='/profile' element={<Profile/>} />
           <Route path='/project' element={<Layout />} />
           <Route path='/Leave' element={<LeaveComp/>} />
           <Route path='/reporting' element={<Report />} />
           <Route path='/feedback' element={<Feedback/>} />

           {/* <Route path='/Leave' element={<LeaveComp /> } /> */}
        </Routes>
        </div>
      )
}

export default MyRoutes
