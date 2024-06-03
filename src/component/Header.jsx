import React, { useState, useEffect } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Row, Col, Nav } from "react-bootstrap";

const Header = () => {
  const [dateTime, setDateTime] = useState({
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime({
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString(undefined, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Row className="w-100">
          <Col className="d-flex align-items-center">
            <h4
              style={{ marginRight: 100, marginLeft: -60, cursor: "pointer" }}
            >
              monitor
            </h4>

            <span>{dateTime.time}</span>
            <span className="mx-2"></span>
            <span>{dateTime.date}</span>
          </Col>
          <Col className="d-flex justify-content-end align-items-center">
            <Nav>
              <Nav.Link href="#notifications" className="mt-1">
                <i className="bi bi-bell"></i>
              </Nav.Link>
              <Nav.Link href="#profile" className="d-flex align-items-center">
                <span>hi Employee</span>
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle ms-2"
                />
              </Nav.Link>
              <Nav.Link href="#logout">
                <i
                  className="bi bi-box-arrow-right"
                  style={{
                    marginLeft: "50px",
                    marginRight: "-50px",
                    fontSize: "1.3rem",
                  }}
                ></i>
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;
