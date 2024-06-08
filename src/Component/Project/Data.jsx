import React from "react";
import { PiNoteDuotone } from "react-icons/pi";
import { Row, Col } from "react-bootstrap";
import "./data.css";

function Data({ onCardClick }) {
  const obj = [
    {
      url: PiNoteDuotone,
      name: "Assigned Project",
      count: 25,
      date: "July 10, 2023",
    },
    {
      url: PiNoteDuotone,
      name: "Complete Project",
      count: 25,
      date: "July 10, 2023",
    },
  ];

  const handleCardClick = (name) => {
    onCardClick(name);
  };

  return (
    <div className="unique-dataCard">
      <Row className="w-100">
        {obj.map((e, index) => (
          <Col
            sm={6}
            key={index}
            onClick={() => handleCardClick(e.name)}
            className="p-0"
          >
            <div className="unique-sCard mt-2">
              <e.url size={30} className="unique-icon" />
              <div className="unique-data-details">
                <span className="unique-data-font">{e.name}</span>
                <span className="unique-data-font">{e.count}</span>
              </div>
              <hr className="unique-separator" />
              <div className="updateInfo-data-info">Update: {e.date}</div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Data;
