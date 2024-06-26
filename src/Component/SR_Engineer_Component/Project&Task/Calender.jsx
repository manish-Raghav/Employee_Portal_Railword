import React, { useState } from "react";
import "./calender.css";

const Calender = () => {
  const [schedule, setSchedule] = useState([
    {
      time: "09:30  10:20",
      title: "Task Planning",
      description: "Review daily Task and set Priorities",
      color: "unique-blue",
    },
    {
      time: "11:00  11:50",
      title: "Daily Catch with design team",
      description: "New App Design and development",
      color: "unique-light-blue",
    },
    {
      time: "01:30  02:00",
      title: "Lunch Break",
      description: "",
      color: "unique-light-blue",
    },
    {
      time: "02:20  05:00",
      title: "Team Brainstorm",
      description: "New App Design and development",
      color: "unique-light-blue",
    },
  ]);

  return (
    <div className="unique-calendar-container">
      <header className="unique-calendar-header">
        <h2>Calendar</h2>
        <p>Today</p>
        <p>Monday, 17 May 2024</p>
      </header>
      <div className="unique-calendar">
        <div className="unique-day-names">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span className="active">Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
        <div className="unique-day-numbers">
          <span>14</span>
          <span>15</span>
          <span>16</span>
          <span className="active">17</span>
          <span>18</span>
          <span>19</span>
          <span>20</span>
        </div>
      </div>
      <div className="unique-schedule">
        {schedule.map((item, index) => (
          <div className="unique-schedule-item" key={index}>
            <div className="unique-time">
              {item.time}
              <div className={`unique-timeline ${item.color}`}>
                <div className="unique-circle"></div>
              </div>
            </div>
            <div className={`unique-task ${item.color}`}>
              <h3>{item.title}</h3>
              {item.description && <p>{item.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calender;