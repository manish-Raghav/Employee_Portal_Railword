import React from "react"
import LeaveTracker from "./LeaveTracker"
import LeaveApplicationForm from "./LeaveApplicationForm"
import RecentLeaveRequests from "./RecentLeaveRequests"
import RecentLeaves from "./RecentLeaves"

const LeaveComp = () => {
  return (
    <div className="">

        <LeaveTracker total={10} used={5} className="mb-5" />
      
      <div>

        <div className="flex ">
          <LeaveApplicationForm />

          <div>
            <RecentLeaves />

            <RecentLeaveRequests />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeaveComp
