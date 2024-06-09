import React, { useState } from 'react';

const ProjectTable = () => {
  const [showAssigned, setShowAssigned] = useState(true);

  const projects = [
    {
      srNo: 1,
      projectName: 'User- Flow Social Application Design',
      projectId: 1001,
      projectManager: 'Neilsan mando',
      startDate: 'Feb 01, 2023',
      finishDate: 'Mar 05, 2023',
      status: 'Pending',
      description: '...',
    },
    {
      srNo: 2,
      projectName: 'Wildcare - Development Project',
      projectId: 1002,
      projectManager: 'Neilsan mando',
      startDate: 'Feb 01, 2023',
      finishDate: 'Mar 05, 2023',
      status: 'Pending',
      description: '...',
    },
    {
      srNo: 3,
      projectName: 'Completed Project A',
      projectId: 2001,
      projectManager: 'Jane Doe',
      startDate: 'Jan 01, 2023',
      finishDate: 'Jan 30, 2023',
      status: 'Completed',
      description: '...',
    },
    {
      srNo: 4,
      projectName: 'Completed Project B',
      projectId: 2002,
      projectManager: 'John Smith',
      startDate: 'Feb 01, 2023',
      finishDate: 'Feb 28, 2023',
      status: 'Completed',
      description: '...',
    },
  ];

  const handleShowAssigned = () => {
    setShowAssigned(true);
  };

  const handleShowCompleted = () => {
    setShowAssigned(false);
  };

  const assignedProjects = projects.filter(project => project.status === 'Pending');
  const completedProjects = projects.filter(project => project.status === 'Completed');

  const displayProjects = showAssigned ? assignedProjects : completedProjects;

  return (
    <div className="relative w-full h-[850px] mx-auto">
    <div className="w-full h-[64px] bg-gray-300 sticky top-0 z-50">
      
    </div>
    
    <div className="w-[320px] h-[680px] bg-gray-400 fixed top-[64px]"></div>
     
    <div className="absolute w-[calc(100%-352px)] h-[850px] bg-white rounded-lg top-[80px] left-[352px] p-4 shadow-lg">

    <div className="container mx-auto w-[1080px] h-[776px] p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-8">
          <div
            className={`flex items-center cursor-pointer ${showAssigned ? 'text-purple-500 border-b-2 border-purple-500' : 'text-gray-800'}`}
            onClick={handleShowAssigned}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 15a4 4 0 004 4h9a5 5 0 005-5v-7a5 5 0 00-5-5H7a4 4 0 00-4 4v7"
              />
            </svg>
            <h2 className="text-xl font-bold ml-2">
              Assigned Projects
            </h2>
          </div>
          <div
            className={`flex items-center cursor-pointer ${!showAssigned ? 'text-purple-500 border-b-2 border-purple-500' : 'text-gray-800 '}`}
            onClick={handleShowCompleted}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="text-xl font-bold ml-2">
              Completed Projects
            </h2>
          </div>
        </div>
      </div>
      <div className="overflow-y-auto h-[656px]">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th
                scope="col"
                className="px-3 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Sr. No.
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Project Name
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Project ID
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Project Manager
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Start Date
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Finish Date
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Description
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {displayProjects.map((project, index) => (
              <tr key={index}>
                <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {project.srNo}
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                  {project.projectName}
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                  {project.projectId}
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                  {project.projectManager}
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                  {project.startDate}
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                  {project.finishDate}
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${project.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}
                  >
                    {project.status}
                  </span>
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
       
            
    </div>
</div>
  );
};

export default ProjectTable;
