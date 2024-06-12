import React, { useState } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { FaClipboardList, FaCheckCircle, FaPlus } from 'react-icons/fa';
import './data.css';
import AddProjectModal from './AddProjectModal';

const Data = ({ onCardClick }) => {
  const [showModal, setShowModal] = useState(false);
  const [clickedCard, setClickedCard] = useState(null);

  const handleAddProjectClick = () => {
    setShowModal(true);
  };

  const handleCardClick = (cardType) => {
    setClickedCard(cardType); // Store the clicked card type
    onCardClick(cardType); // Pass the clicked card type to the parent component
  };

  return (
    <div>
      <Row className="mb-4 data-container">
        <Col>
          <div className="data-card card" onClick={() => handleCardClick("Assign Project")}>
            <div className="data-card-body">
              <FaClipboardList className="data-icon" />
              <h5 className="data-card-title">Assigned Projects</h5>
              <p className="data-card-text">25</p>
              <hr className="data-divider" />
              <h6 className="data-card-subtitle">Update: July 10, 2023</h6>
            </div>
          </div>
        </Col>
        <Col>
          <div className="data-card card" onClick={() => handleCardClick("Complete Project")}>
            <div className="data-card-body">
              <FaCheckCircle className="data-icon" />
              <h5 className="data-card-title">Completed Projects</h5>
              <p className="data-card-text">10</p>
              <hr className="data-divider" />
              <h6 className="data-card-subtitle">Update: July 10, 2023</h6>
            </div>
          </div>
        </Col>
        <Col>
          <div className="data-card card ">
            <div className="data-card-body">
              <FaPlus className="data-icon" />
              <Button variant="outline-primary"  onClick={handleAddProjectClick} className="data-button">+ Add New Project</Button>
            </div>
          </div>
        </Col>
      </Row>
      <AddProjectModal show={showModal} onHide={() => setShowModal(false)} />
    </div>
  );
};

export default Data;
