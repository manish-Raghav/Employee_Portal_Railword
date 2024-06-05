import React from "react";
import { PiNoteDuotone } from "react-icons/pi";
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
    onCardClick(name); // Pass the clicked card's name to the parent component
  };

  return (
    <div className="dataCard">
      {obj.map((e, index) => (
        <div className="sCard" key={index} onClick={() => handleCardClick(e.name)}>
          <e.url size={25} />
          <div className="data">
            <span className="font">{e.name}</span>
            <span className="fontColor">{e.count}</span>
          </div>
          <hr className="separator" />
          <div className="updateInfo">Update: {e.date}</div>
        </div>
      ))}
    </div>
  );
}

export default Data;
