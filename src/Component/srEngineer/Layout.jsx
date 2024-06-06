import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import Sidebar from "./Sidebar";
import CardsList from "../CardsList";
import AssignTaskForm from "../AssignTaskForm";
import Data from "../Data";
import Task from "../Task";
import Complete from "../Complete";
import Calender from "../Calender";
import AllData from "../AllData"; // Ensure correct path

const Layout = () => {
  const [showTask, setShowTask] = useState(false);
  const [showComplete, setShowComplete] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [showAssignTaskForm, setShowAssignTaskForm] = useState(false); // State for showing AssignTaskForm
  const [showAllData, setShowAllData] = useState(false); // State for showing AllData

  const handleCardClick = (cardName) => {
    if (cardName === "Assign Task") {
      setShowAssignTaskForm(true);
      setShowAllData(true);
      setShowTask(false);
      setShowComplete(false);
      setShowTable(false);
    } else {
      setShowTask(cardName === "Assigned Project");
      setShowComplete(cardName === "Complete Project");
      setShowTable(cardName === "Assigned Project" || cardName === "Complete Project");
      setShowAssignTaskForm(false);
      setShowAllData(false);
    }
  };

  const handleSeeAllClick = (isAssignedProject) => {
    setShowTask(isAssignedProject);
    setShowComplete(!isAssignedProject);
    setShowTable(true);
    setShowAssignTaskForm(false); // Hide AssignTaskForm when "See All" is clicked
    setShowAllData(false);
  };

  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col xs={2} className="p-0">
            <Sidebar />
          </Col>
          <Col xs={10} >
            <Row>
              {!showTable && !showAllData && (
                <>
                  <Col sm={8} className="p-0">
                    {!showTask && !showComplete && !showAssignTaskForm && (
                      <>
                        <CardsList onSeeAllClick={handleSeeAllClick} /> {/* Pass the handleSeeAllClick function */}
                        <Data onCardClick={handleCardClick} />
                      </>
                    )}
                    {showAssignTaskForm && <AssignTaskForm />}
                  </Col>
                  <Col sm={4} className="">
                    {!showAssignTaskForm && <Calender onCardClick={handleCardClick} />}
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
    </>
  );
};

export default Layout;
