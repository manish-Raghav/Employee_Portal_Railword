












import React from 'react';
// import './Attendance.css'; // Custom CSS for additional styling
import { NavLink, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarAlt, faClipboardList, faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import ProjectTask from './ProjectTask';
import Leave from './Leave';
// import Profile from '../Profile_data/Profile';
const attendanceData = [
  { date: 'July 01, 2023', checkIn: '09:28 AM', checkOut: '07:00 PM', breakTime: '00:30 Min', workingHours: '09:02 Hrs', status: 'On Time' },
  { date: 'July 02, 2023', checkIn: '09:20 AM', checkOut: '07:00 PM', breakTime: '00:20 Min', workingHours: '09:20 Hrs', status: 'On Time' },
  { date: 'July 03, 2023', checkIn: '09:25 AM', checkOut: '07:00 PM', breakTime: '00:30 Min', workingHours: '09:05 Hrs', status: 'On Time' },
  { date: 'July 04, 2023', checkIn: '09:45 AM', checkOut: '07:00 PM', breakTime: '00:40 Min', workingHours: '08:35 Hrs', status: 'Late' },
  { date: 'July 05, 2023', checkIn: '10:00 AM', checkOut: '07:00 PM', breakTime: '00:30 Min', workingHours: '08:30 Hrs', status: 'Late' },
  { date: 'July 06, 2023', checkIn: '09:28 AM', checkOut: '07:00 PM', breakTime: '00:30 Min', workingHours: '09:02 Hrs', status: 'On Time' },
  { date: 'July 06, 2023', checkIn: '09:28 AM', checkOut: '07:00 PM', breakTime: '00:30 Min', workingHours: '09:02 Hrs', status: 'On Time' },
  { date: 'July 06, 2023', checkIn: '09:28 AM', checkOut: '07:00 PM', breakTime: '00:30 Min', workingHours: '09:02 Hrs', status: 'On Time' },
  { date: 'July 06, 2023', checkIn: '09:28 AM', checkOut: '07:00 PM', breakTime: '00:30 Min', workingHours: '09:02 Hrs', status: 'On Time' },
  { date: 'July 06, 2023', checkIn: '09:28 AM', checkOut: '07:00 PM', breakTime: '00:30 Min', workingHours: '09:02 Hrs', status: 'On Time' },
];

const Attandance = () => {
  return (
<div className="container mt-4 ">
<div className="profile-card h-[1000px] w-[1200px] ml-[170px] mt-[110px]">
      <div className="profile-header">
         <img src="https://media.licdn.com/dms/image/D4D03AQGW5q-ed5fuKw/profile-displayphoto-shrink_200_200/0/1715247234088?e=2147483647&v=beta&t=g__xbk7kXoiStGnzMmIw_PpAHbZiRDuM5AJ5CMoAIuc" alt="" />
      <div>
          <h3>Lokendra Pandey</h3>
          <ul>
            <li>Team Lead</li>
            <li>Indore Branch</li>
          </ul>
        </div>
      </div>
      <div className="profile-details">
        <div className="profile-menu">
          <div className="profile-item">
            <NavLink to="/" end>
              <FontAwesomeIcon icon={faUser} className="icon" />
              Profile
            </NavLink>
          </div>
          <div className="profile-item">
            <NavLink to="/attendance">
              <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
              Attendance
            </NavLink>
          </div>
          <div className="profile-item">
            <NavLink to="/project-task">
              <FontAwesomeIcon icon={faClipboardList} className="icon" />
              Projects & Task
            </NavLink>
          </div>
          <div className="profile-item">
            <NavLink to="/leave">
              <FontAwesomeIcon icon={faCalendarDay} className="icon" />
              Leave
            </NavLink>
          </div>
        </div>
        <div className="profile-content">
          <Routes>

            <Route path="project-task" element={<ProjectTask />} />
            <Route path="leave" element={<Leave />} />
          </Routes>
        </div>

      </div>
    </div>
<table className="table table-bordered border- absolute bottom-0 left-0 " style={{ fontSize: '20px', width: '58%', margin:'0px 0px -225px 480px '   }}>

        <thead className="thead-light">
          <tr className=''>
            <th style={{ padding: '16px' }}>Date</th>
            <th style={{ padding: '16px' }}>Check In</th>
            <th style={{ padding: '16px' }}>Check Out</th>
            <th style={{ padding: '16px' }}>Break</th>
            <th style={{ padding: '16px' }}>Working Hours</th>
            <th style={{ padding: '16px' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((entry, index) => (
            <tr key={index}>
              <td style={{ padding: '16px' }}>{entry.date}</td>
              <td style={{ padding: '16px' }}>{entry.checkIn}</td>
              <td style={{ padding: '16px' }}>{entry.checkOut}</td>
              <td style={{ padding: '16px' }}>{entry.breakTime}</td>
              <td style={{ padding: '16px' }}>{entry.workingHours}</td>
              <td className={entry.status === 'On Time' ? 'text-success' : 'text-danger'}>{entry.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attandance;
