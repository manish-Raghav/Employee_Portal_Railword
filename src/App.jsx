import {useState} from "react"
import RecentLeaveRequests from "./component/leave/RecentLeaveRequests"
import RecentLeaves from "./component/leave/RecentLeaves"

function App() {
  return (
    <div div className="relative w-full h-screen bg-gray-100">
      <div className="absolute bottom-0 right-0 w-[673px]  overflow-hidden ">
        <RecentLeaves />
        <RecentLeaveRequests />
      </div>
    </div>
  )
}

export default App
