// import React, { useState, useEffect } from "react";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Navbar, Container, Row, Col, Nav } from "react-bootstrap";


import React, { useState, useEffect } from "react";
  import "bootstrap-icons/font/bootstrap-icons.css";
  import "bootstrap/dist/css/bootstrap.min.css";
  import { Navbar, Container, Row, Col, Nav } from "react-bootstrap";
  import "./sidebar.css";

  // const [dateTime, setDateTime] = useState({
  //   time: new Date().toLocaleTimeString(),
  //   date: new Date().toLocaleDateString(undefined, {
  //     weekday: "long",
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //   }),
  // });

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setDateTime({
  //       time: new Date().toLocaleTimeString(),
  //       date: new Date().toLocaleDateString(undefined, {
  //         weekday: "long",
  //         year: "numeric",
  //         month: "long",
  //         day: "numeric",
  //       }),
  //     });
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, []);

  // return (
  //   <Navbar   className=" w-[97vw] h-[10vh] bg-slate-50 rounded-b-lg ml-2 scrol ">
  //     <Container>
  //       <Row className="w-100">
  //         <Col className="d-flex align-items-center text bg-black font-medium text-lg">
  //           <h4 
            
  //             style={{ marginRight: 100, marginLeft: -60, cursor: "pointer" }}
  //           >
  //             monitor
  //           </h4>

  //           <span>{dateTime.time}</span>
  //           <span className="mx-2"></span>
  //           <span>{dateTime.date}</span>
  //         </Col>
  //         <Col className="d-flex justify-content-end align-items-center">
  //           <Nav>
  //             <Nav.Link href="#notifications" className="mt-1 ">
  //               <i className="bi bi-bell " ></i>
  //             </Nav.Link>
  //             <Nav.Link href="#profile" className="d-flex align-items-center">
  //               <span>hi Employee</span>
  //               <img
  //                 src="https://github.com/mdo.png"
  //                 alt="mdo"
  //                 width="32"
  //                 height="32"
  //                 className="rounded-circle ms-2 "
  //               />
  //             </Nav.Link>
  //             <Nav.Link href="#logout">
  //               <i
  //                 className="bi bi-box-arrow-right"
  //                 style={{
  //                   marginLeft: "50px",
  //                   marginRight: "-50px",
  //                   fontSize: "1.3rem",
  //                 }}
  //               ></i>
  //             </Nav.Link>
  //           </Nav>
  //         </Col>
  //       </Row>
  //     </Container>
  //   </Navbar>
  // );



  
  const Header = () => {

    const [dateTime, setDateTime] = useState({
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    })
  
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
        })
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    return (
      // <Navbar className="header">
      <div className="d-flex justify-content-between header">
        {/* <Row className="w-100 justify-content-between"> */}
        <div className="d-flex align-items-center justify-content-between w-30">
          <h4
          style={{  marginLeft: 60, cursor: "pointer" }}
          >
            monitor
          </h4>
          <div className="d-flex gap-3">
            <span className="date-text">{dateTime.time}</span>
            <span className="date-text">{dateTime.date}</span>
          </div>
        </div>
        <div className="d-flex align-items-center ">
          <Nav>
            <Nav.Link href="#notifications" className="mt-1 text-main-dark">
              <i className="bi bi-bell"></i>
            </Nav.Link>
            <Nav.Link href="#profile" className="text-main-dark d-flex align-items-center">
              <span className="text-main-dark">hi Employee</span>
              <img
                src="https://github.com/mdo.png"
                alt="mdo"
                width="32"
                height="32"
                className="rounded-circle ms-2 text-main-dark"
              />
            </Nav.Link>
            <Nav.Link href="#logout" className="text-main-dark">
              <i
                className="bi bi-box-arrow-right"
                style={{
                  // marginLeft: "50px",
                  // marginRight: "-50px",
                  fontSize: "1.3rem",
                }}

              ></i>
            </Nav.Link>
          </Nav>
        </div>
        {/* </Row> */}
      </div>

    );
  }
  
 
export default Header;

