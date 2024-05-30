import { useState } from 'react'
import RecentLeaveRequests from './component/leave/RecentLeaveRequests'
import RecentLeaves from './component/leave/RecentLeaves'


function App() {


  return (
    <>
      <div className='flex justify-center items-center h-[550px] ' >
        <RecentLeaveRequests />
        <RecentLeaves/>
       </div>
    </>
  )
}

export default App
