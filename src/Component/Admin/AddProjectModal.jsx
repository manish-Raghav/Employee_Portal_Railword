import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import "./addprojectmodal.css";
const AddProjectModal = ({ show, onHide }) => {
  const [clientDetails, setClientDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [projectDetails, setProjectDetails] = useState({
    name: "",
    category: "",
    deadline: "",
    budget: "",
    description: "",
  });

  const handleClientInputChange = (e) => {
    const { name, value } = e.target;
    setClientDetails({ ...clientDetails, [name]: value });
  };

  const handleProjectInputChange = (e) => {
    const { name, value } = e.target;
    setProjectDetails({ ...projectDetails, [name]: value });
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Client Details:", clientDetails);
    console.log("Project Details:", projectDetails);
    // Close modal
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add New Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <h1>Client Details</h1>
          <Row>
            <Col>
              <Form.Control
                className=""
                type="text"
                placeholder="Customer Name"
                name=" customername"
                value={clientDetails.customername}
                onChange={handleClientInputChange}
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Company Name"
                name="companyname"
                value={clientDetails.companyname}
                onChange={handleClientInputChange}
              />
            </Col>
            <Col>
              <Form.Control
                type="tel"
                placeholder="Phone number"
                name="phonenumber"
                value={clientDetails.phonenumber}
                onChange={handleClientInputChange}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                type="email"
                placeholder="Email-id"
                name="email"
                value={clientDetails.email}
                onChange={handleClientInputChange}
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Country Name"
                name="countryname"
                value={clientDetails.countryname}
                onChange={handleClientInputChange}
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Project Status"
                name="projectstatus"
                value={clientDetails.projectstatus}
                onChange={handleClientInputChange}
              />
            </Col>
          </Row>
          <br />
          <h1>Project Details</h1>
          <Row>
            <Col>
              <Form.Control
                type="text"
                placeholder="Project Title or Name"
                name="projectname"
                value={projectDetails.projectname}
                onChange={handleProjectInputChange}
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Project ID"
                name="projectid"
                value={projectDetails.projectid}
                onChange={handleProjectInputChange}
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Project Manager"
                name="Project Manager"
                value={projectDetails.projectmanager}
                onChange={handleProjectInputChange}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Control
                type="text"
                placeholder="Team Size"
                name="teamsixe"
                value={projectDetails.teamsize}
                onChange={handleProjectInputChange}
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Project used for"
                name="projectuse"
                value={projectDetails.projectuse}
                onChange={handleProjectInputChange}
              />
            </Col>

            <Col>
              <Form.Control
                type="text"
                placeholder="Start Date"
                name="startdate"
                value={projectDetails.startdate}
                onChange={handleProjectInputChange}
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Finish Date"
                name="finishdate"
                value={projectDetails.finishdate}
                onChange={handleProjectInputChange}
              />
            </Col>
            <Col>
              <Form.Control
                type="photo"
                name="addphoto"
                placeholder="Add Photo"
                value={projectDetails.addphoto}
                onChange={handleProjectInputChange}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                type="select"
                name="deadline"
                placeholder="Select Branch"
                value={projectDetails.deadline}
                onChange={handleProjectInputChange}
              />
            </Col>
          </Row>
          <h1>Description:</h1>
          <Row>
            
              <Col>
                <Form.Control
                  as="textarea"
                  className="form-control-textarea"
                  placeholder="Enter Description"
                  name="description"
                  value={projectDetails.description}
                  onChange={handleProjectInputChange}
                />
              </Col>
            
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddProjectModal;
