// Layout.jsx

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TodayTask from "./TodayTask"; // Import TodayTasks component
// import CardsList from "./CardsList";
import CardsList from "../srEngineer/CardsList";
// import AssignTaskForm from "./AssignTaskForm";
import AssignTaskForm from "../srEngineer/AssignTaskForm";
import Data from "./Data";
// import Task from "./Task";
import Task from "../srEngineer/Task";
// import Complete from "./Complete";
import Complete from "../srEngineer/Complete";
// import Calender from "./Calender";
import Calender from "../srEngineer/Calender";
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
                      <TodayTask /> {/* Render TodayTasks before CardsList */}
                      <CardsList onSeeAllClick={handleSeeAllClick} />
                    </>
                  )}
                  {showAssignTaskForm && <AssignTaskForm />}
                </Col>
                <Col sm={4} className="">
                <Data onCardClick={handleCardClick} onHeadingClick={handleHeadingClick} /> {/* Move Data component here */}
                  {!showAssignTaskForm && (

                    <Calender onCardClick={handleCardClick} /> /* Calender remains at the bottom */
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
