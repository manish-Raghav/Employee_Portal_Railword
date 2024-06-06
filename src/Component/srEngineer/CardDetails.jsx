import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import "./carddetails.css";
import { AiOutlineTeam, AiOutlineCheck } from "react-icons/ai";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { MdAccessTime } from "react-icons/md"; // Import the time icon

const CardDetails = () => {
  const { cardId } = useParams();
  const card = useSelector((state) => state.cards.cards[cardId]);
  const projectId = `Project: ${parseInt(cardId) + 1001}`; // Generating unique ID

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <div className="card-details">
      <div className="card-content">
        <div className="datas">
          <h2>{projectId}</h2> {/* Displaying unique ID */}
          <h2>{card.heading}</h2>
          <h6>UI/UX Design, App Design</h6>
          <h6>
            <span>Project Manager</span>
            {`: ${card.projectManager}`}
          </h6>
          <h6>
            <span>
              <AiOutlineTeam />
            </span>
            {`${card.employees}`}
            <MdAccessTime className="time-icon" />
            {`1 hour`}
          </h6>
          <h2>Description</h2>
          <p>{card.text}</p>
          <h2>Technology Use</h2>
          <ul>
            {card.technologies.map((tech, i) => (
              <li key={i}>
                <AiOutlineCheck className="check-icon" />
                {tech}
              </li>
            ))}
          </ul>
          <h2>Chat With Senior</h2>
          <ul>
            <li>
              <BiSolidMessageRoundedDots className="message-icon" />
              <li>Email us at</li>
            </li> 
              <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;info@gmail.com</li>
          </ul>
        </div>
        <div className="video">
          <video controls>
            <source src={card.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
