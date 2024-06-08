import React from "react"
import {Route, Routes} from "react-router-dom"
import Employee from "./employee/Employee"
import Attendance from "./Attendance/Attendance"
import LeaveComp from "./leave/LeaveComp"
import Dwskboard from "./DeskBoard/Dwskboard"
import Report from "./Report/Report"
import Profile from "./Profile/Profile"
import Feedback from "./FeedBack/Feedback"
import ChatComp from "./challengesAndSolutions/ChatComp"
import ChallengesAndSolutions from "./challengesAndSolutions/ChallengesAndSolutions"
import AdminDashboard from "./DashBoard/Admin/AdminDashboard"

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dwskboard />} />
        <Route path="/Employee" element={<Employee />} />

        <Route path="/attendance" element={<Attendance />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/project" element={<Employee />} />
        <Route path="/Leave" element={<LeaveComp />} />
        <Route path="/reporting" element={<Report />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route
          path="/challengesAndSolutions"
          element={<ChallengesAndSolutions />}
        />
        <Route path="/DashBoard" element={<AdminDashboard />} />
      </Routes>
    </div>
  )
}

export default MyRoutes
