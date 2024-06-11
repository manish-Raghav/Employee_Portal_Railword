import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import Employee from '../../Component/SR_Engineer_Component/Employee/pages/Employee'

import AssignTaskForm from "components/AssignForm/AssignTaskForm";
import Employee2 from "../../SR_Engineer_Component/Employee/components/Employee/Employee2";


const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Employee /> },
    { path: "*", element: <NotFound /> },
    
    {
      path:"Senoir_Employee/create_team",
      element:<AssignTaskForm/>
    },
    {
      path:"/Senoir_Employee/view_all",
      element:<Employee2/>,
    }
  ]);

  return element;
};

export default ProjectRoutes;
