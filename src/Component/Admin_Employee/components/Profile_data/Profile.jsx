













// import React from 'react';
// import { NavLink, Routes, Route } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faCalendarAlt, faClipboardList, faCalendarDay } from '@fortawesome/free-solid-svg-icons';
// import Attandance from './Attandance';
// import ProjectTask from './ProjectTask';
// import Leave from './Leave';
// import './Profile.css';

// const ProfileInfo = () => (
//   <div className="profile-info">
//     <table className="table table-bordered border-primary">
//       <tbody>
//         <tr>
//           <td>First Name</td>
//           <td>Lokendra</td>
//         </tr>
//         <tr>
//           <td>Last Name</td>
//           <td>Pandey</td>
//         </tr>
//         <tr>
//           <td>Employee Id</td>
//           <td>Rwi155</td>
//         </tr>
//         <tr>
//           <td>Mobile Number</td>
//           <td>(702) 555-0122</td>
//         </tr>
//         <tr>
//           <td>Date of Birth</td>
//           <td>August 18, 2001</td>
//         </tr>
//         <tr>
//           <td>Department</td>
//           <td>Designing</td>
//         </tr>
//         <tr>
//           <td>Email Address</td>
//           <td>xyz@gmail.com</td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
// );

// const Profile = () => {
//   return (
//     <div className="profile-card">
//       {/* <div className="profile-header">
//         <FontAwesomeIcon icon={faUser} className="profile-icon" />
//         <div> */} <div className="profile-header">
//          <img src="https://media.licdn.com/dms/image/D4D03AQGW5q-ed5fuKw/profile-displayphoto-shrink_200_200/0/1715247234088?e=2147483647&v=beta&t=g__xbk7kXoiStGnzMmIw_PpAHbZiRDuM5AJ5CMoAIuc" alt="Profile Picture" />
//       <div>
//           <h3>Lokendra Pandey</h3>
//           <ul>
//             <li>Team Lead</li>
//             <li>Indore Branch</li>
//           </ul>
//         </div>
//       </div>
//       <div className="profile-details">
//         <div className="profile-menu">
//           <div className="profile-item">
//             <NavLink to="/" end>
//               <FontAwesomeIcon icon={faUser} className="icon" />
//               Profile
//             </NavLink>
//           </div>
//           <div className="profile-item">
//             <NavLink to="attendance">
//               <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
//               Attendance
//             </NavLink>
//           </div>
//           <div className="profile-item">
//             <NavLink to="project-task">
//               <FontAwesomeIcon icon={faClipboardList} className="icon" />
//               Projects & Task
//             </NavLink>
//           </div>
//           <div className="profile-item">
//             <NavLink to="leave">
//               <FontAwesomeIcon icon={faCalendarDay} className="icon" />
//               Leave
//             </NavLink>
//           </div>
//         </div>
//         <div className="profile-content">
//           <Routes>
//             <Route path="/" element={<ProfileInfo />} />
//             <Route path="attendance" element={<Attandance />} />
//             <Route path="project-task" element={<ProjectTask />} />
//             <Route path="leave" element={<Leave />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;




























import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarAlt, faClipboardList, faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import Attandance from './Attandance';
import ProjectTask from './ProjectTask';
import Leave from './Leave';
import './Profile.css';

const ProfileInfo = () => (
  <div className="profile-info">
    <table className="table table-bordered border">
      <tbody>
        <tr>
          <td className='text-[#aeabab]'>First Name</td>
          <td>Lokendra</td>
        </tr>
        <tr>
          <td className='text-[#aeabab]'>Last Name</td>
          <td>Pandey</td>
        </tr>
        <tr>
          <td className='text-[#aeabab]'>Employee Id</td>
          <td>Rwi155</td>
        </tr>
        <tr>
          <td className='text-[#aeabab]'>Mobile Number</td>
          <td>(702) 555-0122</td>
        </tr>
        <tr>
          <td className='text-[#aeabab]'>Date of Birth</td>
          <td>August 18, 2001</td>
        </tr>
        <tr>
          <td className='text-[#aeabab]'>Department</td>
          <td>Designing</td>
        </tr>
        <tr>
          <td className='text-[#aeabab]'>Email Address</td>
          <td>xyz@gmail.com</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const Profile = () => {
  return (
    <div className="profile-card">
      {/* <div className="profile-header">
        <FontAwesomeIcon icon={faUser} className="profile-icon" />
        <div> */} <div className="profile-header">
         <img src="https://media.licdn.com/dms/image/D4D03AQGW5q-ed5fuKw/profile-displayphoto-shrink_200_200/0/1715247234088?e=2147483647&v=beta&t=g__xbk7kXoiStGnzMmIw_PpAHbZiRDuM5AJ5CMoAIuc" alt="Profile Picture" />
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
            <NavLink to="/Admin/profile" end>
              <FontAwesomeIcon icon={faUser} className="icon" />
              Profile
            </NavLink>
          </div>
          <div className="profile-item">
<NavLink to="/Admin/attandance">
              <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
              Attendance
            </NavLink>
          </div>
          <div className="profile-item">
            <NavLink to="/Admin/project-task">
              <FontAwesomeIcon icon={faClipboardList} className="icon" />
              Projects & Task
            </NavLink>
          </div>
          <div className="profile-item">
            <NavLink to="/Admin/leave/user">
              <FontAwesomeIcon icon={faCalendarDay} className="icon" />
              Leave
            </NavLink>
          </div>
        </div>
        <div className="/Admin/profile-content">
          <Routes>
            <Route path="/" element={<ProfileInfo />} />
<Route path="attandance" element={<Attandance />} />
<Route path="project-task" element={<ProjectTask />} />
<Route path="leave" element={<Leave />} /> 
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Profile;






// import React from 'react';
// import { NavLink, Routes, Route } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faCalendarAlt, faClipboardList, faCalendarDay } from '@fortawesome/free-solid-svg-icons';
// import Attandance from './Attandance';
// import ProjectTask from './ProjectTask';
// import Leave from './Leave';
// import './Profile.css';

// const ProfileInfo = () => (
//   <div className="profile-info">
//     <table className="table table-bordered border-primary">
//       <tbody>
//         <tr>
//           <td className='text-[#aeabab]'>First Name</td>
//           <td>Lokendra</td>
//         </tr>
//         <tr>
//           <td className='text-[#aeabab]'>Last Name</td>
//           <td>Pandey</td>
//         </tr>
//         <tr>
//           <td className='text-[#aeabab]'>Employee Id</td>
//           <td>Rwi155</td>
//         </tr>
//         <tr>
//           <td className='text-[#aeabab]'>Mobile Number</td>
//           <td>(702) 555-0122</td>
//         </tr>
//         <tr>
//           <td className='text-[#aeabab]'>Date of Birth</td>
//           <td>August 18, 2001</td>
//         </tr>
//         <tr>
//           <td className='text-[#aeabab]'>Department</td>
//           <td>Designing</td>
//         </tr>
//         <tr>
//           <td className='text-[#aeabab]'>Email Address</td>
//           <td>xyz@gmail.com</td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
// );

// const Profile = () => {
//   return (
//     <div className="profile-card">
//       {/* <div className="profile-header">
//         <FontAwesomeIcon icon={faUser} className="profile-icon" />
//         <div> */} <div className="profile-header">
//          <img src="https://media.licdn.com/dms/image/D4D03AQGW5q-ed5fuKw/profile-displayphoto-shrink_200_200/0/1715247234088?e=2147483647&v=beta&t=g__xbk7kXoiStGnzMmIw_PpAHbZiRDuM5AJ5CMoAIuc" alt="Profile Picture" />
//       <div>
//           <h3>Lokendra Pandey</h3>
//           <ul>
//             <li>Team Lead</li>
//             <li>Indore Branch</li>
//           </ul>
//         </div>
//       </div>
//       <div className="profile-details">
//         <div className="profile-menu">
//           <div className="profile-item">
//             <NavLink to="/" end>
//               <FontAwesomeIcon icon={faUser} className="icon" />
//               Profile
//             </NavLink>
//           </div>
//           <div className="profile-item">
//             <NavLink to="/attendance">
//               <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
//               Attendance
//             </NavLink>
//           </div>
//           <div className="profile-item">
//             <NavLink to="/project-task">
//               <FontAwesomeIcon icon={faClipboardList} className="icon" />
//               Projects & Task
//             </NavLink>
//           </div>
//           <div className="profile-item">
//             <NavLink to="/leave">
//               <FontAwesomeIcon icon={faCalendarDay} className="icon" />
//               Leave
//             </NavLink>
//           </div>
//         </div>
//         <div className="profile-content">
//           <Routes>
//             <Route path="/" element={<ProfileInfo />} />
// <Route path="attendance" element={<Attandance />} />
// <Route path="project-task" element={<ProjectTask />} />
// <Route path="leave" element={<Leave />} /> 
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
