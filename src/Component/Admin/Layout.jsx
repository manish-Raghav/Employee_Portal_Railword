import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardsList from "./CardsList";
import Data from "./Data";
// import Task from "./Task";
// import Complete from "./Complete";
import Task from "../srEngineer/Task";
import Complete from "../srEngineer/Complete";

const Layout = () => {
  const [showTask, setShowTask] = useState(false);
  const [showComplete, setShowComplete] = useState(false);
  const [clickedCard, setClickedCard] = useState(null); // State to keep track of clicked card

  const handleCardClick = (cardType) => {
    setClickedCard(cardType); // Store the clicked card type
    if (cardType === "Assign Project") {
      setShowTask(true);
      setShowComplete(false);
    } else if (cardType === "Complete Project") {
      setShowTask(false);
      setShowComplete(true);
    }
  };

  const handleSeeAllClick = (showTask) => {
    setShowTask(showTask);
    setShowComplete(!showTask);
    setClickedCard(null); // Reset clicked card when "See All" is clicked
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <div className="custom-container">
            {clickedCard ? null : (!showTask && !showComplete && <Data onCardClick={handleCardClick} />)} {/* Render Data component only if no card is clicked */}
            {!showTask && !showComplete && <CardsList onSeeAllClick={handleSeeAllClick} />}
            {showTask && <Task />}
            {showComplete && <Complete />}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
