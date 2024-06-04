import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardsList from "./CardsList";
import AssignTaskForm from "./AssignTaskForm";
import Data from "./Data";
import Task from "./Task";
import Complete from "./Complete";

const Layout = () => {
  const [showTask, setShowTask] = useState(false);
  const [showComplete, setShowComplete] = useState(false);
  const [showTable, setShowTable] = useState(false); // State to control table visibility
  const [tableData, setTableData] = useState(null); // State to store table data

  const handleCardClick = (cardName) => {
    setShowTask(cardName === "Assigned Project");
    setShowComplete(cardName === "Complete Project");
    setShowTable(true); // Show table for any project clicked
  };

  const handleSeeAllClick = (isAssignedProject) => {
    setShowTask(isAssignedProject);
    setShowComplete(!isAssignedProject);
    setShowTable(true); // Show table for See All clicked
  };

  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col xs={2} className="p-0">
            <Sidebar />
          </Col>
          <Col xs={10}>
            <Row>
              <Col xs={5}>
                {!showTask && !showComplete && <AssignTaskForm />}
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
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
