import React from "react";
import { Table } from "react-bootstrap";
import Data from "./Data"; // Import Data component
import "./task.css"; // Import your custom CSS file
import "./alldata.css";
import { FcBusinessman } from "react-icons/fc";

function AllData({ onCardClick }) {
  const taskData = [
    {
      Employee_Group: "Akash",
      Employee_id: 1001,
      Department: "01-02-2023",
      Task_Detail: "05-03-2023",
      Applied_Date: "02-02-2023",
      status: "Pending",
    },
    {
      Employee_Group: "Akash",
      Employee_id: 1001,
      Department: "01-02-2023",
      Task_Detail: "05-03-2023",
      Applied_Date: "02-02-2023",
      status: "Pending",
    },
    {
      Employee_Group: "Akash",
      Employee_id: 1001,
      Department: "01-02-2023",
      Task_Detail: "05-03-2023",
      Applied_Date: "02-02-2023",
      status: "Pending",
    },
    {
      Employee_Group: "Akash",
      Employee_id: 1001,
      Department: "01-02-2023",
      Task_Detail: "05-03-2023",
      Applied_Date: "02-02-2023",
      status: "Complete",
    },
    {
      Employee_Group: "Akash",
      Employee_id: 1001,
      Department: "01-02-2023",
      Task_Detail: "05-03-2023",
      Applied_Date: "02-02-2023",
      status: "Complete",
    },
    {
      Employee_Group: "Akash",
      Employee_id: 1001,
      Department: "01-02-2023",
      Task_Detail: "05-03-2023",
      Applied_Date: "02-02-2023",
      status: "Complete",
    },
    {
      Employee_Group: "Akash",
      Employee_id: 1001,
      Department: "01-02-2023",
      Task_Detail: "05-03-2023",
      Applied_Date: "02-02-2023",
      status: "Complete",
    },

    // Add more data if needed
  ];

  const statusColors = {
    Pending: {
      color: "orange",
      backgroundColor: "#FFD580",
    },
    Complete: {
      color: "green",
      backgroundColor: "lightGreen",
    },
  };

  const assignedTasks = taskData.filter((task) => task.status === "Pending");
  const completedTasks = taskData.filter((task) => task.status === "Complete");

  return (
    <div>
      <div className="TaskContainer mt-3 pt-3">
        <tr>
          <td colSpan="6" className="completed-projects-heading">
            Completed Projects
          </td>
        </tr>
        <Table className="full-width-table tablerow">
          <thead>
            <tr>
              <th>Employee/Group</th>
              <th>Employee Id</th>
              <th>Department</th>
              <th>Task Detail</th>
              <th>Applied Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {assignedTasks.map((task, index) => (
              <tr key={index} onClick={() => onCardClick(task.name)}>
                <td>
                  <span>
                    <FcBusinessman size={20}/>
                  </span>
                  {task.Employee_Group}
                </td>
                <td>{task.Employee_id}</td>
                <td>{task.Department}</td>
                <td>{task.Task_Detail}</td>
                <td>{task.Applied_Date}</td>
                <td style={statusColors[task.status]}>{task.status}</td>
              </tr>
            ))}
          </tbody>
          {completedTasks.length > 0 && (
            <tr>
              <td colSpan="6" className="completed-projects-heading">
                Completed Projects
              </td>
            </tr>
          )}
          <thead>
            <tr>
              <th>Employee/Group</th>
              <th>Employee Id</th>
              <th>Department</th>
              <th>Task Detail</th>
              <th>Applied Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {completedTasks.map((task, index) => (
              <tr key={index} onClick={() => onCardClick(task.name)}>
                <td >
                  <span className="ml-2">
                    <FcBusinessman  size={20}/>
                  </span>
                  {task.Employee_Group}
                </td>
                <td>{task.Employee_id}</td>
                <td>{task.Department}</td>
                <td>{task.Task_Detail}</td>
                <td>{task.Applied_Date}</td>
                <td style={statusColors[task.status]}>{task.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default AllData;
