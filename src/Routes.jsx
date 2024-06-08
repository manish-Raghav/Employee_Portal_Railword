import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import Employee from "pages/Employee";
import Employee2 from "components/Employee/Employee2";
import AssignTaskForm from "components/AssignForm/AssignTaskForm";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Employee /> },
    { path: "*", element: <NotFound /> },
    
    {
      path:"/create_team",
      element:<AssignTaskForm/>
    },
    {
      path:"/view_all",
      element:<Employee2/>
    }
  ]);

  return element;
};

export default ProjectRoutes;
