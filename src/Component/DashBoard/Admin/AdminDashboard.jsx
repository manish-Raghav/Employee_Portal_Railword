import React from 'react'
import BranchCard from './BranchCard'
import ProjectProgress from './ProjectProgress'
import Schedule from './Schedule'

const AdminDashboard = () => {

    const branches = [
      {name: "Rajpur Branch", employees: 560, manager: "Rachna Sarkar"},
      {name: "Indore Branch", employees: 1050, manager: "Khushboo Kataria"},
      {name: "Gurgaon Branch", employees: 470, manager: "Rachna Sarkar"},
      {name: "Pune Branch", employees: 250, manager: "Khushboo Kataria"},
    ]

    const progressData = [60, 30, 50, 80, 70, 40, 90]

    const schedule = [
      {
        time: "09:30",
        title: "UI/UX Designer",
        description: "Practical Task Review",
      },
      {time: "12:00", title: "Magento Developer", description: "Resume Review"},
      {time: "01:30", title: "Sales Manager", description: "Final HR Round"},
      {
        time: "09:30",
        title: "Front-end Developer",
        description: "Practical Task Review",
      },
      {time: "11:00", title: "React JS", description: "TL Meeting"},
    ]
  return (
    <div className="grid grid-cols-2 mx-auto p-4 bg-white rounded-xl mt-4">
      <div className="grid grid-cols-2 w-[700px] gap-4">
        {branches.map((branch, index) => (
          <BranchCard key={index} branch={branch} />
        ))}
        <ProjectProgress data={progressData} />
      </div>
      <div className="  grid mx-auto " >
        <Schedule schedule={schedule} />
      </div>
    </div>
  )
}

export default AdminDashboard
