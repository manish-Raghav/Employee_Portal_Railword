import React from "react";
import { Table } from "react-bootstrap";
import "./task.css";
import Data from "./Data";

function Complete({ onCardClick }) {
  const data = [
    {
      name: "user flow social Application design",
      id: 1001,
      pr_manager: "Neilson Mando",
      start_date: "01-02-2023",
      finish_date: "05-03-2023",
      status: "Complete",
      description: "It is complete",
    },
    // Add more data if needed
  ];

  const handleCardClick = (name) => {
    onCardClick(name);
  };

  const color = {
    color: "green",
    backgroundColor: "lightGreen",
  };
  return (
    <div>
      <div className="row">
        <Data onCardClick={onCardClick} />
      </div>

      <Table striped bordered hover>
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
            <tr key={pr.id} onClick={() => handleCardClick(pr.name)}>
              <td>{index + 1}</td>
              <td>{pr.name}</td>
              <td>{pr.id}</td>
              <td>{pr.pr_manager}</td>
              <td>{pr.start_date}</td>
              <td>{pr.finish_date}</td>
              <td style={color}>{pr.status}</td>
              <td>{pr.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Complete;
