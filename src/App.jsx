import {useState} from "react"
import RecentLeaveRequests from "./component/leave/RecentLeaveRequests"
import RecentLeaves from "./component/leave/RecentLeaves"
import LeaveApplicationForm from "./component/leave/LeaveApplicationForm"
import LeaveTracker from "./component/leave/LeaveTracker"
import Header from "./component/Header/Header"
import "bootstrap-icons/font/bootstrap-icons.css"
import SideBar from "./component/Header/SideBar"

function App() {
  return (
    <div className=" bg-gray-300 flex flex-col">
      <div className="min-h-[64px]  mb-2 rounded-xl">
        <Header />
      </div>

      <div className=" grid  sm:grid-cols-12 grid-cols-1  gap-2 ">
        <div className=" rounded-xl sm:col-span-2 min-h-[1000px]">
          <SideBar />
        </div>

        <div className="  ">
          <div className="min-w-[800px] h-[64px] bg-slate-600 "></div>
          {/* <div className="grid sm:grid-col-4 gap-2">
              
          </div> */}
          <div className="min-w-[1060px] h-[150px] bg-slate-600 ">
            {/* <LeaveTracker total={10} used={5} className="mb-5" /> */}
          </div>
          <div className=" grid grid-cols-5 min-w-[1060px] ">
            <div className="col-span-2 ">
              <LeaveApplicationForm />
            </div>

            <div className="col-span-3 min-h-[670px] gap-0">
              <div className="min-h[250px]">
                <RecentLeaves />
              </div>
              <div className="min-h[300px]">
                <RecentLeaveRequests />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App


