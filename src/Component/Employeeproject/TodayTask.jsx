// src/TaskList.js
import React, { useState } from 'react';
import { FaCheckCircle, FaCalendarAlt, FaClock, FaRegCircle } from 'react-icons/fa';
import './todaytask.css';

const TaskItem = ({ task }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleIconClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="task-item">
      {isChecked ? (
        <FaCheckCircle className="task-icon card checked" onClick={handleIconClick} />
      ) : (
        <FaRegCircle className="task-icon card unchecked" onClick={handleIconClick} />
      )}
      <div className="task-content">
        <div className="task-title">{task.title}</div>
        <div className="task-time">
          <FaCalendarAlt className="time-icon" /> {task.date} <FaClock className="time-icon" /> {task.time}
        </div>
      </div>
    </div>
  );
};

const TaskList = ({ title, tasks }) => (
  <div className="task-list">
    <h2>{title}</h2>
    {tasks.map((task, index) => (
      <TaskItem key={index} task={task} />
    ))}
  </div>
);

const TodayTask= () => {
  const tasks = [
    { title: 'UI Placement on Fitness App', date: 'Today Till', time: '2:30 PM' },
    { title: 'UI Placement on Fitness App', date: 'Today Till', time: '2:30 PM' },
    { title: 'UI Placement on Fitness App', date: 'Today Till', time: '2:30 PM' },
    { title: 'UI Placement on Fitness App', date: 'Today Till', time: '2:30 PM' },
  ];

  return (
    <div className="tasks-container">
      <h4>My Today's Task</h4>
      <div className="tasks-columns">
        <TaskList title="Individual Task" tasks={tasks} />
        <TaskList title="Group Task" tasks={tasks} />
      </div>
    </div>
  );
};

export default TodayTask;
