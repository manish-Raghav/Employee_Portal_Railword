import React from 'react';
import Calendar from '../components/Calender';


const ProjectTasks = () => {
  const tasks = {
    individual: [
      { task: "UI Placement on Fitness App", time: " 2:30 PM" },
      { task: "Backend API Integration", time: " 4:00 PM" },
      { task: "Database Schema Update", time: " 6:00 PM" },
      { task: "UI Testing", time: " 8:00 PM" }
    ],
    group: [
      { task: "Sprint Planning", time: " 2:30 PM" },
      { task: "Team Retrospective", time: " 4:00 PM" },
      { task: "Client Meeting", time: " 6:00 PM" },
      { task: "Code Review", time: " 8:00 PM" }
    ]
  };

  const projects = [
    {
      srNo: 1,
      projectName: ' Social Application Design',
      projectId: 1001,
      projectManager: 'Neilsan Mando',
      startDate: 'Feb 01, 2023',
      finishDate: 'Mar 05, 2023',
      status: 'Pending',
      description: 'Designing the user flow for a new social media application',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQSyiDS23LHo2KIcnGvjckpAf9QymRq8DdKw&s'
    },
    {
      srNo: 2,
      projectName: 'Wildcare-Application',
      projectId: 1002,
      projectManager: 'Neilsan Mando',
      startDate: 'Feb 01, 2023',
      finishDate: 'Mar 05, 2023',
      status: 'Pending',
      description: 'Developing a wildlife care application.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQSyiDS23LHo2KIcnGvjckpAf9QymRq8DdKw&s'
    },
    
  ];

  const handleSeeMoreClick = () => {
    // Navigation logic to be added later
  };

  return (
    <div className="relative w-full h-[850px] mx-auto">
      <div className="w-full h-[64px] bg-gray-300 sticky top-0 z-50"></div>

      <div className="w-[320px] h-[680px] bg-gray-400 fixed top-[64px]"></div>

      <div className="absolute w-[calc(100% - 972px)] h-[850px] top-[80px] left-[352px] p-4 flex flex-wrap gap-4">
        <div className="w-[650px] h-[393px] rounded-lg shadow-md flex flex-col">
          <h1 className='m-3 text-[28px] font-bold'>My Today's Task</h1>
          <div className="flex gap-3 border-sm m-3">
            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-2 ml-7">Individual Task</h2>
              <ul className="list-disc pl-5">
                {tasks.individual.map((task, index) => (
                  <li key={index} className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <input type="radio" className="w-4 h-4 rounded-full  border-gray-300" />
                      <span className="text-gray-500 text-[12.6px]">{task.task}</span>
                    </div>
                    
                    <div className="flex gap-5 items-center">
                      <span className="text-sky-500 text-[12.6px] ml-6 border-b border-sky-500">Today Till</span>
                      <span className="text-sky-500 text-[12.6px] font-semibold border-b border-sky-500">{task.time}</span>
                      
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-2 ml-7">Group Task</h2>
              <ul className="list-disc pl-5">
                {tasks.group.map((task, index) => (
                  <li key={index} className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <input type="radio" className="w-4 h-4 rounded-full border-gray-300" />
                      <span className="text-gray-500 text-[12.6px]">{task.task}</span>
                    </div>
                    <div className="flex gap-5 items-center">
                        
                      <span className="text-sky-500 text-[12.6px] ml-6 border-b border-sky-500">Today Till</span>
                      <span className="text-sky-500 text-[12.6px] font-semibold border-b border-sky-500">{task.time}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md w-full relative">
            <h2 className="text-[28px] font-bold mb-2">Projects</h2>
            <button onClick={handleSeeMoreClick} className="absolute top-4 right-4 text-[20px]  text-sky-500 underline underline-offset-2  font-semibold py-2 px-4 rounded-md">
              See More
            </button>
            <div className="grid grid-cols-2 gap-4">
              {projects.slice(0, 2).map((project) => (
                <div key={project.srNo} className="bg-white  rounded-[20px]  w-[253px] h-[340px] shadow-md">
                  <img src={project.image} alt={project.projectName} className="rounded-t-md w-[253px] h-[151px]" />
                  <h3 className="text-[24px] font-[400] mt-2 px-1">{project.projectName}</h3>
                  <p className="text-gray-500 text-[11px] font-[300] px-1">{project.description}</p>
                  <button className="text-sky-500 text-[16px]  font-[400] border-2 border-sky-500 w-[87px] h-[34px] rounded-2xl mt-2 ml-2">View All</button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[375px] h-[60px] flex flex-col ">
          <div className="flex gap-2 border-sm">
            <div className="bg-white p-2 rounded-md shadow-md flex-1">
              <div className="  items-center ">
                <div className=' w-[180px] h-[60px]'>
                  <h2 className="text-[16px] font-[300] ">Assigned Projects</h2>
                  <h3 className="text-[20px] font-[600]">25</h3>
                  
                </div>
                <div className="  rounded-md border-t">
                <span className="text-gray-300 text[12px] font-[300]">Update: July 10, 2023</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-2 rounded-md shadow-md flex-1">
              <div className="  items-center ">
                <div className=' w-[180px] h-[60px]'>
                  <h2 className="text-[16px] font-[300] ">Completed Projects</h2>
                  <h3 className="text-[20px] font-[600]">25</h3>
                  
                </div>
                <div className="  rounded-md border-t">
                <span className="text-gray-300 text[12px] font-[300]">Update: July 10, 2023</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[375px] h-[709px] mt-4">
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectTasks;