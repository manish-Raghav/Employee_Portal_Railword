import React, { useState } from "react";
import { Table } from "react-bootstrap";
import Data from "./Data"; // Import Data component
import "./task.css"; // Import your custom CSS file

function Task({ onCardClick }) {
  const [selectedHeading, setSelectedHeading] = useState("Assign Project"); // State to track the selected heading

  const handleHeadingClick = (heading) => {
    setSelectedHeading(heading); // Update the state to the clicked heading
  };

  const assignProjectData = [
    {
      name: "user flow social Application design",
      id: 1001,
      pr_manager: "Neilson Mando",
      Start_date: "01-02-2023",
      Finish_date: "05-03-2023",
      status: "Pending",
      Description: "It is not Pending",
    },
    {
      name: "user flow ",
      id: 1002,
      pr_manager: "Akash",
      Start_date: "11-02-2023",
      Finish_date: "15-03-2023",
      status: "Pending",
      Description: "It is not Pending",
    },
    {
      name: "user Application design",
      id: 1003,
      pr_manager: "Manish",
      Start_date: "20-03-2023",
      Finish_date: "05-04-2023",
      status: "Pending",
      Description: "It is not Pending",
    },
    {
      name: "Application design",
      id: 1004,
      pr_manager: "Arvind",
      Start_date: "11-05-2023",
      Finish_date: "20-05-2023",
      status: "Pending",
      Description: "It is not Pending",
    },
    {
      name: "Social Application design",
      id: 1005,
      pr_manager: "Harsh",
      Start_date: "22-05-2023",
      Finish_date: "30-05-2023",
      status: "Pending",
      Description: "It is not Pending",
    },
  ];

  const completeProjectData = [
    {
      name: "user flow social Application design",
      id: 1001,
      pr_manager: "Neilson Mando",
      Start_date: "01-02-2023",
      Finish_date: "05-03-2023",
      status: "Complete",
      Description: "It is Complete",
    },
    {
      name: "user flow social Application design",
      id: 1002,
      pr_manager: "Neilson Mando",
      Start_date: "01-02-2023",
      Finish_date: "05-03-2023",
      status: "Complete",
      Description: "It is Complete",
    },
    {
      name: "user flow social Application design",
      id: 1003,
      pr_manager: "Neilson Mando",
      Start_date: "01-02-2023",
      Finish_date: "05-03-2023",
      status: "Complete",
      Description: "It is Complete",
    },
    {
      name: "user flow social Application design",
      id: 1004,
      pr_manager: "Neilson Mando",
      Start_date: "01-02-2023",
      Finish_date: "05-03-2023",
      status: "Complete",
      Description: "It is Complete",
    },
    {
      name: "user flow social Application design",
      id: 1005,
      pr_manager: "Neilson Mando",
      Start_date: "01-02-2023",
      Finish_date: "05-03-2023",
      status: "Complete",
      Description: "It is Complete",
    },
  ];

  const color = {
    color: selectedHeading === "Assign Project" ? "orange" : "green",
    backgroundColor:
      selectedHeading === "Assign Project" ? "#FFD580" : "lightGreen",
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6 ">
          <h5
            className="card custom-task-card"
            onClick={() => handleHeadingClick("Assign Project")}
          >
            Assign Project
          </h5>
        </div>
        <div className="col-md-6">
          <h5
            className="card custom-task-card"
            onClick={() => handleHeadingClick("Complete Project")}
          >
            Complete Project
          </h5>
        </div>
      </div>

      <Table  className="custom-full-width-table">
        <thead>
          <tr>
            <th>S.N.</th>
            <th>Project Name</th>
            <th>Project Id</th>
            <th>Project Manager</th>
            <th>Start Date</th>
            <th>Finish Date</th>
            <th>Status</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {selectedHeading === "Assign Project" &&
            assignProjectData.map((pr, index) => (
              <tr key={pr.id} onClick={() => onCardClick(pr.name)}>
                <td>{index + 1}</td>
                <td>{pr.name}</td>
                <td>{pr.id}</td>
                <td>{pr.pr_manager}</td>
                <td>{pr.Start_date}</td>
                <td>{pr.Finish_date}</td>
                <td style={color}>{pr.status}</td>
                <td>{pr.Description}</td>
              </tr>
            ))}
          {selectedHeading === "Complete Project" &&
            completeProjectData.map((pr, index) => (
              <tr key={pr.id} onClick={() => onCardClick(pr.name)}>
                <td>{index + 1}</td>
                <td>{pr.name}</td>
                <td>{pr.id}</td>
                <td>{pr.pr_manager}</td>
                <td>{pr.Start_date}</td>
                <td>{pr.Finish_date}</td>
                <td style={color}>{pr.status}</td>
                <td>{pr.Description}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Task;