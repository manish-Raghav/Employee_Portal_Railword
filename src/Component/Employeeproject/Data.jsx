// Data.jsx

import React from "react";
import { PiNoteDuotone } from "react-icons/pi";
import { AiOutlineBars } from "react-icons/ai";
import { Row, Col } from "react-bootstrap";
import "./data.css";

function Data({ onCardClick, onHeadingClick }) {
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
    onCardClick(name); // Pass the clicked card's name to the parent component
  };

  const handleHeadingClick = (name) => {
    onHeadingClick(name); // Pass the clicked heading to the parent component
  };

  return (
    <div className="custom-data-card ">
      <Row className="w-100">
        {obj.map((e, index) => (
          <Col sm={6} key={index} className="p-0">
            <div
              className="custom-s-cards "
              onClick={() => {
                handleCardClick(e.name);
                handleHeadingClick(e.name); // Call handleHeadingClick when a heading is clicked
              }}
            >
              <e.url size={30} />
              <div className="custom-data">
                <span className="custom-font">{e.name}</span>
                {e.count && <span className="custom-font-color">{e.count}</span>}
              </div>
              <hr className="custom-separator" />
              {e.date && <div className="custom-update-info">Update: {e.date}</div>}
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Data;