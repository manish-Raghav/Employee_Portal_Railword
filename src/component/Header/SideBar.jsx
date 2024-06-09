 import React, { useState } from "react";
import { Link } from "react-router-dom";
import Employee from "../Employee/Employee";
import './sidebar.css';


















const Sidebar = () => {

// const [activeLink, setActiveLink] = useState("Dashboard");

// const handleSetActive = (linkName) => {
//   setActiveLink(linkName);
// };

// return (
//   <div
//     className="d-flex flex-column flex-shrink-0 p-3 bg-light h-100 sidebar"
//     style={{ width: "250px", height: "100vh" }}
//   >
//     <ul className="nav nav-pills flex-column mb-auto gap-2 ">

//       <li className="nav-item sidebar-item">
//       <Link to="/"
//           className={`nav-link ${
//             activeLink === "Dashboard" ? "active-sidebar-item" : "text-dark"
//           }`}
//           aria-current={activeLink === "Dashboard" ? "page" : undefined}
//           onClick={() => handleSetActive("Dashboard")}
//         >
//           <i className="bi bi-house-door"></i> Dashboard
//         </Link>
//       </li>



//       <li className="sidebar-item">
//         <Link to="/attendance"
//           className={`nav-link ${
//             activeLink === "Profile" ? "active-sidebar-item" : "text-dark"
//           }`}
//           aria-current={activeLink === "Profile" ? "page" : undefined}
//           onClick={() => handleSetActive("Profile")}
//         >
//           <i className="bi bi-calendar-check"></i> Profile
//         </Link>
//       </li>




//       <li className="sidebar-item">
//          <Link to="/profile"
//           className={`nav-link ${
//             activeLink === "Employee" ? "active-sidebar-item" : "text-dark"
//           }`}
//           aria-current={activeLink === "Employee" ? "page" : undefined}
//           onClick={() => handleSetActive("Employee")}
//         >
//           <i className="bi bi-person"></i> Employee
//         </Link>
//       </li>



//       <li className="sidebar-item">
//       <Link to="/Employee"
//           className={`nav-link ${
//             activeLink === "Attendance" ? "active-sidebar-item" : "text-dark"
//           }`}
//           aria-current={activeLink === "Attendance" ? "page" : undefined}
//           onClick={() => handleSetActive("Attendance")}
//         >
//           <i className="bi bi-people"></i> Attendance
//         </Link>
//       </li>



//       <li className="sidebar-item">
//       <Link to="/project"
//           className={`nav-link ${
//             activeLink === "Projects" ? "active-sidebar-item" : "text-dark"
//           }`}
//           aria-current={activeLink === "Projects" ? "page" : undefined}
//           onClick={() => handleSetActive("Projects")}
//         >
//           <i className="bi bi-card-checklist"></i> Projects & Tasks
//         </Link>
//       </li>




//       <li className="sidebar-item">
//       <Link to="/Leave"
//           className={`nav-link ${
//             activeLink === "Leave" ? "active-sidebar-item" : "text-dark"
//           }`}
//           aria-current={activeLink === "Leave" ? "page" : undefined}
//           onClick={() => handleSetActive("Leave")}
//         >
//           <i className="bi bi-file-earmark"></i> Leave
//         </Link>
//       </li>



//       <li className="sidebar-item">
//       <Link to="/reporting"
//           className={`nav-link ${
//             activeLink === "Reporting" ? "active-sidebar-item" : "text-dark"
//           }`}
//           aria-current={activeLink === "Reporting" ? "page" : undefined}
//           onClick={() => handleSetActive("Reporting")}
//         >
//           <i className="bi bi-graph-up"></i> Reporting & Analytics
//         </Link>
//       </li>



//       <li className="sidebar-item">
//       <Link to="/feedback"
//           className={`nav-link ${
//             activeLink === "Feedback" ? "active-sidebar-item" : "text-dark"
//           }`}
//           aria-current={activeLink === "Feedback" ? "page" : undefined}
//           onClick={() => handleSetActive("Feedback")}
//         >
//           <i className="bi bi-chat-dots"></i> Feedback & Suggestions
//         </Link>
//       </li>



//       <li className="sidebar-item">
//       <Link to="/logout"
//           className={`nav-link ${
//             activeLink === "Logout" ? "active-sidebar-item" : "text-dark"
//           }`}
//           aria-current={activeLink === "Logout" ? "page" : undefined}
//           onClick={() => handleSetActive("Logout")}
//         >
//           <i className="bi bi-box-arrow-right"></i> Log out
//         </Link>
//       </li>


//     </ul>
//   </div>
// );






const [activeLink, setActiveLink] = useState("Dashboard");

const handleSetActive = (linkName) => {
  setActiveLink(linkName);
};

return (
  <div
    className="d-flex flex-column flex-shrink-0 p-3 bg-light h-100 sidebar mt-0"
    style={{ width: "330px", height: "100vh" }}
  >
    <ul className="nav nav-pills flex-column mb-auto gap-4 ml-3  border-[1px] border-grre">
      <li className="nav-item sidebar-item">
      <Link to="/"
          className={`nav-link ${
            activeLink === "Dashboard" ? "active-sidebar-item" : "text-dark"
          }`}
          aria-current={activeLink === "Dashboard" ? "page" : undefined}
          onClick={() => handleSetActive("Dashboard")}
        >
          <i className="bi bi-house-door"></i> Dashboard
        </Link>
      </li>



      <li className="sidebar-item">
      <Link to="/Employee"
          className={`nav-link ${
            activeLink === "Employee" ? "active-sidebar-item" : "text-dark"
          }`}
          aria-current={activeLink === "Employee" ? "page" : undefined}
          onClick={() => handleSetActive("Employee")}
        >
          <i className="bi bi-person"></i> Employee
        </Link>
      </li>


      <li className="sidebar-item">
      <Link to="/attendance"
          className={`nav-link ${
            activeLink === "Attendance" ? "active-sidebar-item" : "text-dark"
          }`}
          aria-current={activeLink === "Attendance" ? "page" : undefined}
          onClick={() => handleSetActive("Attendance")}
        >
          <i className="bi bi-people"></i> Attendance
        </Link>
      </li>
     




      <li className="sidebar-item">
      <Link to="/profile"
          className={`nav-link ${
            activeLink === "Profile" ? "active-sidebar-item" : "text-dark"
          }`}
          aria-current={activeLink === "Profile" ? "page" : undefined}
          onClick={() => handleSetActive("Profile")}
        >
          <i className="bi bi-calendar-check"></i> Profile
        </Link>
      </li>



    
     



      <li className="sidebar-item">
      <Link to="/project"
          className={`nav-link ${
            activeLink === "Projects" ? "active-sidebar-item" : "text-dark"
          }`}
          aria-current={activeLink === "Projects" ? "page" : undefined}
          onClick={() => handleSetActive("Projects")}
        >
          <i className="bi bi-card-checklist"></i> Projects 
        </Link>
      </li>


      <li className="sidebar-item">
      <Link to="/Leave"
          className={`nav-link ${
            activeLink === "Leave" ? "active-sidebar-item" : "text-dark"
          }`}
          aria-current={activeLink === "Leave" ? "page" : undefined}
          onClick={() => handleSetActive("Leave")}
        >
          <i className="bi bi-file-earmark"></i> Leave
        </Link>
      </li>


      {/* <li className="sidebar-item">
        <Link
          to="#"
          className={`nav-link ${
            activeLink === "Challenges" || activeLink === "Solutions"
              ? "active-sidebar-item"
              : "text-dark"
          }`}
          aria-current={
            activeLink === "Challenges" || activeLink === "Solutions"
              ? "page"
              : undefined
          }
          onClick={() => handleSetActive("Challenges")}
        >
          <i className="bi bi-headset"></i> Challenges & Solutions
        </Link>
      </li>
 */}

      
      <li className="sidebar-item">
      <Link to="/reporting"
          className={`nav-link ${
            activeLink === "Reporting" ? "active-sidebar-item" : "text-dark"
          }`}
          aria-current={activeLink === "Reporting" ? "page" : undefined}
          onClick={() => handleSetActive("Reporting")}
        >
          <i className="bi bi-graph-up"></i> Reporting & Analytics
        </Link>
      </li>
      <li className="sidebar-item">
      <Link to="/feedback"
          className={`nav-link ${
            activeLink === "Feedback" ? "active-sidebar-item" : "text-dark"
          }`}
          aria-current={activeLink === "Feedback" ? "page" : undefined}
          onClick={() => handleSetActive("Feedback")}
        >
          <i className="bi bi-chat-dots"></i> Feedback & Suggestions
        </Link>
      </li>
      <li className="sidebar-item">
      <Link to="/logout"
          className={`nav-link ${
            activeLink === "Logout" ? "active-sidebar-item" : "text-dark"
          }`}
          aria-current={activeLink === "Logout" ? "page" : undefined}
          onClick={() => handleSetActive("Logout")}
        >
          <i className="bi bi-box-arrow-right"></i> Log out
        </Link>
      </li>
    </ul>
  </div>
);








}














// const Sidebar = () => {
//   const [activeLink, setActiveLink] = useState("Dashboard");

//   const handleSetActive = (linkName) => {
//     setActiveLink(linkName);
//   };

//   return (
//     <div
//     className="d-flex flex-column flex-shrink-0 p-3 bg-light bg-transparent z-40"
//       style={{ width: "250px", height: "100vh" }}
//     >
//       <ul className="nav nav-pills flex-column mb-auto gap-3">



//         <li className="nav-item">
//           <Link to="/"
//             className={`nav-link ${
//               activeLink === "Dashboard" ? "active" : "text-dark"
//             }`}
//             aria-current={activeLink === "Dashboard" ? "page" : undefined}
//             onClick={() => handleSetActive("Dashboard")}
//           >
//             <i className="bi bi-house-door"></i> Dashboard
//           </Link>
//         </li>





        
//         <li>
       
//         <Link to="/attendance"
//             className={`nav-link ${
//               activeLink === "Attendance" ? "active" : "text-dark"
//             }`}
//             aria-current={activeLink === "Attendance" ? "page" : undefined}
//             onClick={() => handleSetActive("Attendance")}
//           >
//             <i className="bi bi-calendar-check"></i> Attendance
//           </Link>
//         </li>




//         <li>
//         <Link to="/profile"
//             className={`nav-link ${
//               activeLink === "Profile" ? "active" : "text-dark"
//             }`}
//             aria-current={activeLink === "Profile" ? "page" : undefined}
//             onClick={() => handleSetActive("Profile")}
//           >
//             <i className="bi bi-person"></i> Profile
//           </Link>
//         </li>




//         <li className="cursor-pointer">
//         <Link to="/Employee"
          
//             className={`nav-link ${
//               activeLink === "Employee" ? "active" : "text-dark"
//             }`}
//             aria-current={activeLink === "Employee" ? "page" : undefined}
//             onClick={() => handleSetActive("Employee")}
//           >
//             <i className="bi bi-people"></i> Employee
//           </Link>
//         </li>
        




//         <li>
//         <Link to="/project"
//             className={`nav-link ${
//               activeLink === "Projects" ? "active" : "text-dark"
//             }`}
//             aria-current={activeLink === "Projects" ? "page" : undefined}
//             onClick={() => handleSetActive("Projects")}
//           >
//             <i className="bi bi-card-checklist"></i> Projects & Tasks
//           </Link>
//         </li>





//         <li>
//         <Link to="/Leave"
//             className={`nav-link ${
//               activeLink === "Leave" ? "active" : "text-dark"
//             }`}
//             aria-current={activeLink === "Leave" ? "page" : undefined}
//             onClick={() => handleSetActive("Leave")}
//           >
//             <i className="bi bi-file-earmark"></i> Leave
//           </Link>
//         </li>



       




//         <li>
      
         
//           {/* <Link to={'/Reporting'} */}

//           <Link to="/reporting"
            
//             className={`nav-link ${
//               activeLink === "Reporting" ? "active" : "text-dark"
//             }`}
//             aria-current={activeLink === "Reporting" ? "page" : undefined}
//             onClick={() => handleSetActive("Reporting")}
//           >
//             <i className="bi bi-graph-up"></i> Reporting & Analytics
//           </Link>
//         </li>



//         <li>
//         <Link to="/feedback"
//             className={`nav-link ${
//               activeLink === "Feedback" ? "active" : "text-dark"
//             }`}
//             aria-current={activeLink === "Feedback" ? "page" : undefined}
//             onClick={() => handleSetActive("Feedback")}
//           >
//             <i className="bi bi-chat-dots"></i> Feedback & Suggestions
//           </Link>
//         </li>





//         <li>
//         <Link to="/logout"
//             className={`nav-link ${
//               activeLink === "Logout" ? "active" : "text-dark"
//             }`}
//             aria-current={activeLink === "Logout" ? "page" : undefined}
//             onClick={() => handleSetActive("Logout")}
//           >
//             <i className="bi bi-box-arrow-right"></i> Log out
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

export default Sidebar;









