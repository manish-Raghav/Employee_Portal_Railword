import React, { useState } from 'react';

const ProjectDescription = () => {
  const project = {
    projectId: '1001',
    projectName: 'User- Flow Social Application Design',
    description: 'Follow the video tutorial above. Understand how to use each tool in the Figma application. Also learn how to make a good and correct design. Starting from spacing, typography, content, and many other design hierarchies. Then try to make it yourself with your imagination and inspiration.',
    technologies: ['Figma', 'Understanding the basics of making design', 'Presenting the design flow'],
    manager: 'Nelson Mando',
    employeesInvolved: 3,
    hours: 1,
    lastModified: '1 July 2023',
    email: 'info@railworld.co.in',
    image: 'https://corporate-assets.lucid.co/chart/09255df0-f147-42b4-805e-163ad3001feb.png' // Update this with the URL to your image
  };

  const [file, setFile] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileInputChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleDivClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleSubmit = () => {
    if (file) {
      console.log('File submitted:', file);
      // Handle file submission logic here
    } else {
      console.log('No file selected.');
    }
  };

  return (
    <div>
      <div className=" w-full h-[850px] mx-auto">
        <div className="w-full h-[64px] bg-gray-300 sticky top-0 z-50"></div>
        <div className="w-[320px] h-[680px] bg-gray-400 fixed top-[64px]"></div>
        <div className="absolute w-[calc(100%-352px)] h-[850px] bg-white rounded-lg top-[80px] left-[352px] p-4 shadow-lg">
          <div className="bg-white p-8 flex justify-between">
            <div className="w-[60%]">
              <div className="flex justify-between items-center">
                <h2 className="text-[32px] font-[300] ">Project- ID:- {project.projectId}</h2>
              </div>

              <h1 className="text-[32px] font-[400] mt-4">{project.projectName}</h1>
              <p className="text-gray-500 text-[12.6px] font-[500] mt-2">UI UX Design. Apps Design</p>

              <div className="mt-4">
                <div className="flex items-center">
                  <span className='text-blue-500 font-[500]'>+</span>
                  <span className='text-blue-500 font-[500]'>{project.manager}</span>
                  <span className="ml-2 text-gray-500"> Project manager</span>
                </div>
                <div className="flex items-center mt-2">
                  <div className="p-2 mr-4">
                    <span className="text-[12.6] font-[500]">{project.employeesInvolved}</span>
                    <span className="text-[12.6] font-500 ml-2">Employee Involved</span>
                  </div>
                  <div className="p-2">
                    <span className="text-[12.6] font-[500]">{project.hours}</span>
                    <span className="text-[12.6] font-500 ml-2">Hour</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-[22px] font-[600]">Description</h2>
                <p className="text-gray-500 mt-2">{project.description}</p>
              </div>

              <div className="mt-8">
                <h2 className="text-[22px] font-[600]">Technology Use</h2>
                <ul className="list-disc ml-5 mt-4">
                  {project.technologies.map((tech, index) => (
                    <li key={index} className="flex items-center mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600 mr-2"
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
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h2 className="text-[22px] font-[600]">Chat with Senior</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500 text-[16px] font-[600] inline-block mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className='text-[16px] font-[600]'>Email us at</span>
              </div>
              <button className='ml-8 underline underline-offset-2 text-[16px] font-[600]'>{project.email}</button>
            </div>

            <div className="w-[35%] p-8">
              <div className='w-full h-[211px] rounded-[9px] bg-blue-400'>
                <img src={project.image} alt="Project" className="w-full h-full rounded-[9px] object-cover" />
              </div>
              <div className="mt-8">

                <h2 className="text-[20px] font-[600] mb-4">Task Remark</h2>
                <div className="flex justify-between">
                  <p className="text-gray-500 text-[14px] font-[500]">
                    Last Modified:
                  </p>
                  <p className='text-[16px] font-[600]'>
                    {project.lastModified}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-[14px] font-[500]">File submissions</h2>
                <div
                  className="w-[324px] h-[160px] p-4 border-dashed border-blue-500 border-2 rounded-lg mt-4 flex justify-center items-center cursor-pointer"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onClick={handleDivClick}
                >
                  {file ? (
                    <p>{file.name}</p>
                  ) : (
                    <p>+ Drag and drop a file here</p>
                  )}
                  <input
                    type="file"
                    id="fileInput"
                    onChange={handleFileInputChange}
                    className="hidden"
                  />
                </div>
                <p className='text-[12px] font-[400]'>*drag or browse from device</p>
                <button className="bg-blue-500 w-[324px] text-white py-2 px-4 rounded-lg mt-[50px]" onClick={handleSubmit}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDescription;