import React from "react";
import { Table } from "react-bootstrap";
import Data from "./Data"; // Import Data component
import "./task.css"; // Import your custom CSS file

function Task({ onCardClick }) {
  const data = [
    {
      name: "user flow social Application design",
      id: 1001,
      pr_manager: "Neilson Mando",
      Start_date: "01-02-2023",
      Finish_date: "05-03-2023",
      status: "Pending",
      Description: "It is not Complete",
    },
    // Add more data if needed
  ];

  const color = {
    color: "orange",
    backgroundColor: "#FFD580",
  };

  return (
    <div>
      <Data onCardClick={onCardClick} /> {/* Add Data component */}
      <div className="TaskContainer">
        <Table striped bordered hover className="full-width-table">
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
            {data.map((pr, index) => (
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
    </div>
  );
}

export default Task;
