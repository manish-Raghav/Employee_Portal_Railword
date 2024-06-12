import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import CardsList from "./CardsList";
import CardsList from "../srEngineer/CardsList";
// import AssignTaskForm from "./AssignTaskForm";
import AssignTaskForm from "../srEngineer/AssignTaskForm";
import Data from "./Data";
// import Data from "../srEngineer/Data";
// import Task from "./Task";
import Task from "../srEngineer/Task";
// import Complete from "./Complete";
import Complete from "../srEngineer/Complete";

const Layout = () => {
  const [showTask, setShowTask] = useState(false);
  const [showComplete, setShowComplete] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");
  const [showAssignTaskForm, setShowAssignTaskForm] = useState(true); // Initially showing AssignTaskForm

  const handleCardClick = (name, type) => {
    setShowTask(name === "Assigned Project");
    setShowComplete(name === "Complete Project");

    setShowTable(true);
    setShowAssignTaskForm(false); // Hide AssignTaskForm when a card is clicked
  };

  const handleSeeAllClick = (isAssignedProject) => {
    setShowTask(isAssignedProject);
    setShowComplete(!isAssignedProject);

    setShowTable(true);
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={5}>
          {!showTask && !showComplete && showAssignTaskForm && (
            <AssignTaskForm />
          )}{" "}
          {/* Conditionally render AssignTaskForm */}
        </Col>
        <Col xs={7}>
          {!showTable && !showTask && !showComplete && (
            <>
              <Col xs={12}>
                <Data onCardClick={handleCardClick} />
              </Col>
              <Col xs={12} className="p-0">
                <CardsList onSeeAllClick={handleSeeAllClick} />
              </Col>
            </>
          )}
        </Col>
      </Row>
      {showTable && (
        <Row>
          <Col xs={12}>
            {showTask && <Task onCardClick={handleCardClick} />}
            {showComplete && <Complete onCardClick={handleCardClick} />}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Layout;
