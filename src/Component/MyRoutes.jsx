import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Employee from './Employee/Employee'
import Attendance from './Attendance/Attendance'
import LeaveComp from './leave/LeaveComp' 
import Dwskboard from './DeskBoard/Dwskboard'
import Report from './Report/Report'
import Profile from './Profile/Profile'
import Feedback from './FeedBack/Feedback'
<<<<<<< HEAD
// import Layout from './Project/Layout'
// import CardDetails from './Project/CardDetails'
// import Layout from './srEngineer/Layout'
// import CardDetails from './srEngineer/CardDetails'
// import Layout from './Admin/Layout'
// import CardDetails from './Admin/CardDetails'
import Layout from './Employeeproject/Layout'
import CardDetails from './Employeeproject/CardDetails'
=======

import Layout from './Admin/Layout'
import CardDetails from './Admin/CardDetails'


>>>>>>> 22156151a3e07dbe38b269715ab7d2b5f7568f5b
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
           <Route path='/card/:cardId' element={<CardDetails />} />
<<<<<<< HEAD
=======

           {/* <Route path='/Leave' element={<LeaveComp /> } /> */}
>>>>>>> 22156151a3e07dbe38b269715ab7d2b5f7568f5b
        </Routes>
        </div>
      )
}

export default MyRoutes
