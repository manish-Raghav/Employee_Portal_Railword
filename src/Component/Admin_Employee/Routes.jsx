// import React from "react";
// import { useRoutes } from "react-router-dom";
// import NotFound from "pages/NotFound";
// import Employee from "pages/Employee";
// import Employee2 from "components/Employee/Employee2";
// import Profile from "components/Profile_data/Profile";
// import Attandance from "components/Profile_data/Attandance"; // Corrected import
// import ProjectTask from "components/Profile_data/ProjectTask";
// import Leave from "components/Profile_data/Leave";

// const ProjectRoutes = () => {
//   let element = useRoutes([
//     { path: "/", element: <Employee /> },
//     { path: "*", element: <NotFound /> },
//     {
//       path: "/profile/*",
//       element: <Profile />,
//       children: [
//         { path: "", element: <Profile /> }, // Default profile route
// { path: "attandance", element: <Attandance /> }, // Corrected path
//         { path: "project-task", element: <ProjectTask /> },
//         { path: "leave", element: <Leave /> },
//       ],
//     },
//   ]);

//   return element;
// };

// export default ProjectRoutes;


















// import React from "react";
// import { useRoutes } from "react-router-dom";
// import NotFound from "pages/NotFound";
// import Employee from "pages/Employee";
// import Employee2 from "components/Employee/Employee2";
// import Profile from "components/Profile_data/Profile";
// import Attandance from "components/Profile_data/Attandance";
// import ProjectTask from "components/Profile_data/ProjectTask";
// import Leave from "components/Profile_data/Leave";

// const ProjectRoutes = () => {
//   let element = useRoutes([
//     { path: "/", element: <Employee /> },
//     { path: "*", element: <NotFound /> },
//     { path: "/view_all", element: <Employee2 /> },
//     {
//       path: "/profile/*",
//       element: <Profile />,
//       children: [
//         { path: "", element: <Profile /> },  // Default profile route
// { path: "attandance", element: <Attandance /> },
//         { path: "project-task", element: <ProjectTask /> },
//         { path: "leave", element: <Leave /> },
//       ],
//     },
//   ]);

//   return element;
// };

// export default ProjectRoutes;



import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import Employee from "pages/Employee";
import Employee2 from "components/Employee/Employee2";
import Profile from "components/Profile_data/Profile";
import Attandance from "components/Profile_data/Attandance";
import ProjectTask from "components/Profile_data/ProjectTask";
import Leave from "components/Profile_data/Leave";

const ProjectRoutes = () => {
  let element = useRoutes([
{ path: "/", element: <Employee /> },
    { path: "*", element: <NotFound /> },
    
    
    {
      path:"/view_all",
      element:<Employee2/>
    },
    {
      path:"/profile",
      element:<Profile/>
    },
    {
      path:"/attandance",
element:<Attandance/>
    },
    {
      path:"/project-task",
      element:<ProjectTask/>
    },
    {
      path:"/leave",
      element:<Leave/>
    }
  ]);

  return element;
};

export default ProjectRoutes;
