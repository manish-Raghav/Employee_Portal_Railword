import React, { useState, useEffect } from 'react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(0);

  const tasksData = {
    "2024-06-08": [
      { startTime: "9:30", endTime: "10:30", title: "Task Planning", description: "Review daily tasks and set priorities" },
      { startTime: "11:00", endTime: "12:00", title: "Team Meeting", description: "Discuss project status" },
      { startTime: "11:30", endTime: "12:30", title: "Lunch with Team", description: "Team building lunch" },
      { startTime: "3:00", endTime: "4:00", title: "Project Update", description: "Update on project progress" },
    ],
    "2024-06-07": [
      { startTime: "10:00", endTime: "11:00", title: "Client Call", description: "Discuss requirements with client" },
      { startTime: "1:00", endTime: "2:00", title: "Code Review", description: "Review pull requests" },
    ],
    "2024-06-06": [
      { startTime: "2:00", endTime: "3:00", title: "Design Review", description: "Review new design mockups" },
    ],
    "2024-06-09": [
      { startTime: "11:30", endTime: "12:30", title: "Lunch with Team", description: "Team building lunch" },
      { startTime: "3:00", endTime: "4:00", title: "Project Update", description: "Update on project progress" },
    ],
    "2024-06-10": [
      { startTime: "9:00", endTime: "9:30", title: "Daily Standup", description: "Team daily standup meeting" },
      { startTime: "4:00", endTime: "4:30", title: "Wrap Up", description: "End of day wrap up" },
    ],
  };

  useEffect(() => {
    const formattedDate = currentDate.toISOString().split('T')[0];
    setSelectedDate(formattedDate);
  }, [currentDate]);

  useEffect(() => {
    setSelectedTaskIndex(0); // Reset to first task when selectedDate changes
  }, [selectedDate]);

  const getDates = (startDate) => {
    const dates = [];
    for (let i = -2; i <= 2; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
  };

  const datesToShow = getDates(currentDate);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleTaskClick = (index) => {
    setSelectedTaskIndex(index);
  };

  return (
    <div className="bg-white shadow-md p-4 w-[375px] h-[809px] rounded-[20px]">
      <h2 className="text-xl font-bold mb-2">Calendar</h2>
      <p className="text-gray-500 mb-4">Today's Date: {currentDate.toDateString()}</p>

      <div className="flex justify-between mb-4">
        {datesToShow.map((date, index) => (
          <div
            key={index}
            className={`text-center w-1/7 cursor-pointer ${selectedDate === date ? 'text-green-500' : ''}`}
            onClick={() => handleDateClick(date)}
          >
            <p className="font-bold">{new Date(date).toLocaleDateString('en-US', { weekday: 'short' })}</p>
            <p>{new Date(date).getDate()}</p>
          </div>
        ))}
      </div>

      <div className="flex">
        <div className="flex flex-col items-center w-full relative">
          {tasksData[selectedDate]?.map((task, index) => (
            <div key={index} className="flex gap-5 mb-7 w-full relative">
              <div className="text-center border-indigo-500 border-r-2 pr-4 relative">
                <p className="text-sm font-bold">{task.startTime}</p>
                <p className="text-sm text-gray-500">{task.endTime}</p>
                <span className="absolute -top-1 -right-2 w-4 h-4 rounded-full border-2 border-indigo-400 bg-white "></span>
              </div>
              <div
                className={`rounded-lg p-4 mb-4 w-full cursor-pointer ${
                  selectedTaskIndex === index ? 'bg-indigo-400 text-white' : 'bg-cyan-100'
                }`}
                onClick={() => handleTaskClick(index)}
              >
                <h3 className={`text-lg font-bold mb-2 ${selectedTaskIndex === index ? 'text-black' : ''}`}>
                  {task.title}
                </h3>
                <p className={`${selectedTaskIndex === index ? 'text-white' : 'text-gray-600'}`}>
                  {task.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
