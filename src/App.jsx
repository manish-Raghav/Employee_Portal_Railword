import React from 'react'
import LeaveApplicationForm from './components/LeaveApplicationForm'
import LeaveTracker from './components/LeaveTracker'

function App() {
  return (
    <>
    <div className="flex flex-col items-start justify-start bg-gray-100 p-4">
    <LeaveTracker total={10} used={5} className="mb-5" />
    <div className="mt-5 flex items-start justify-start">
    <LeaveApplicationForm />
    </div>
   
  </div>
    </>
  )
}

export default App
