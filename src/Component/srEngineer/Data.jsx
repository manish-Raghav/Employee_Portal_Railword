import React from "react";
import { PiNoteDuotone } from "react-icons/pi";
import { AiOutlineBars } from "react-icons/ai";
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
    {
      url: AiOutlineBars,
      name: "Assign Task",
    },
  ];

  const handleCardClick = (name) => {
    onCardClick(name); // Pass the clicked card's name to the parent component
  };

  return (
    <div className="dataCard">
      <Row className="w-100">
        {obj.map((e, index) => (
          <Col sm={6} key={index} className="p-0">
            <div className="sCard mt-4" onClick={() => handleCardClick(e.name)}>
              <e.url size={30} />
              <div className="data">
                <span className="font">{e.name}</span>
                {e.count && <span className="fontColor">{e.count}</span>}
              </div>
              <hr className="separator" />
              {e.date && <div className="updateInfo">Update: {e.date}</div>}
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Data;
