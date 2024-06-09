// Layout.jsx

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardsList from "./CardsList";
import AssignTaskForm from "./AssignTaskForm";
import Data from "./Data";
import Task from "./Task";
import Complete from "./Complete";
import Calender from "./Calender";
import AllData from "./AllData";

const Layout = () => {
  const [showTask, setShowTask] = useState(false);
  const [showComplete, setShowComplete] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [showAssignTaskForm, setShowAssignTaskForm] = useState(false);
  const [showAllData, setShowAllData] = useState(false);
  const [selectedHeading, setSelectedHeading] = useState(""); // State to track the selected heading

  const handleCardClick = (name) => {
    if (name === "Assign Task") {
      setShowAssignTaskForm(true);
      setShowAllData(true);
      setShowTask(false);
      setShowComplete(false);
      setShowTable(false);
    } else {
      setShowTask(name === "Assigned Project");
      setShowComplete(name === "Complete Project");
      setShowTable(name === "Assigned Project" || name === "Complete Project");
      setShowAssignTaskForm(false);
      setShowAllData(false);
    }
  };

  const handleSeeAllClick = (isAssignedProject) => {
    setShowTask(isAssignedProject);
    setShowComplete(!isAssignedProject);
    setShowTable(true);
    setShowAssignTaskForm(false);
    setShowAllData(false);
  };

  // Function to handle the clicked heading
  const handleHeadingClick = (heading) => {
    setSelectedHeading(heading);
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <Row>
            {!showTable && !showAllData && (
              <>
                <Col sm={8} className="p-0">
                  {!showTask && !showComplete && !showAssignTaskForm && (
                    <>
                      <CardsList onSeeAllClick={handleSeeAllClick} />
                      <Data onCardClick={handleCardClick} onHeadingClick={handleHeadingClick} /> {/* Pass the handleHeadingClick function */}
                    </>
                  )}
                  {showAssignTaskForm && <AssignTaskForm />}
                </Col>
                <Col sm={4} className="">
                  {!showAssignTaskForm && (
                    <Calender onCardClick={handleCardClick} />
                  )}
                </Col>
              </>
            )}
            {showTable && (
              <Col sm={12} className="">
                {showTask && <Task onCardClick={handleCardClick} />}
                {showComplete && <Complete onCardClick={handleCardClick} />}
              </Col>
            )}
            {showAllData && (
              <>
                <Col sm={5}>
                  <AssignTaskForm />
                </Col>
                <Col sm={7} className="">
                  <AllData onCardClick={handleCardClick} />
                </Col>
              </>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
