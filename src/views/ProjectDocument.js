import React, { useState } from 'react';

// react-bootstrap components
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
  Nav
} from "react-bootstrap";

import ArrowProgressBar from './Compo_ProjectDoc/ArrowProgressBar';
function ProjectDocument() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 7;

  const handleNextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, totalSteps));
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };



  return (
    <>
      {/* <h1>{currentStep}</h1> */}
      <div>
        <ArrowProgressBar steps={totalSteps} currentStep={currentStep} />
        <div>
          <button onClick={handlePrevStep} disabled={currentStep === 1}>
            Previous Step
          </button>
          <button onClick={handleNextStep} disabled={currentStep === totalSteps}>
            Next Step
          </button>
        </div>
      </div>

      <Container fluid>
        <Row>
          <Col md="2">
            <Card className="bg-dark text-white">
              <Card.Header className="bg-secondary text-white" >เมนูจัดการโครงการ</Card.Header>
              <Card.Body>
                
                  <Nav.Link href="#section1">1. แบบขออนุมัติโครงการ</Nav.Link>
                  <Nav.Link href="#section1-1">1.1 ข้อมูลพื้นฐานโครงการ</Nav.Link>
                  <Nav.Link href="#section1-2">1.2 แผนการดำเนินงาน</Nav.Link>
                  <Nav.Link href="#section1-3">1.3 งบประมาณ</Nav.Link>
                  <Nav.Link href="#section1-4">1.4 เป้าหมาย / ตัวชี้วัดความสำเร็จ</Nav.Link>
                  <Nav.Link href="#section1-5">1.5 ข้อมูลเพิ่มเติม</Nav.Link>
                  <Nav.Link href="#section1-6">1.6 เอกสารเพิ่มเติม</Nav.Link>
                  <Nav.Link href="#section2">2. รายการเปลี่ยนแปลงแก้ไข</Nav.Link>
                  <Nav.Link href="#pr-1">3. สรุปและประเมินผลโครงการ</Nav.Link>
                
              </Card.Body>
            </Card>

          </Col>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Edit Profile</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>เลขหนังสือ (disabled)</label>
                        <Form.Control
                          defaultValue="B8444845"
                          disabled
                          placeholder="Company"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>Username</label>
                        <Form.Control
                          defaultValue="michael23"
                          placeholder="Username"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Form.Control
                          placeholder="Email"
                          type="email"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>First Name</label>
                        <Form.Control
                          defaultValue="Mike"
                          placeholder="Company"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Last Name</label>
                        <Form.Control
                          defaultValue="Andrew"
                          placeholder="Last Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control
                          defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                          placeholder="Home Address"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>City</label>
                        <Form.Control
                          defaultValue="Mike"
                          placeholder="City"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Country</label>
                        <Form.Control
                          defaultValue="Andrew"
                          placeholder="Country"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Postal Code</label>
                        <Form.Control
                          placeholder="ZIP Code"
                          type="number"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>About Me</label>
                        <Form.Control
                          cols="80"
                          defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in
                            that two seat Lambo."
                          placeholder="Here can be your description"
                          rows="4"
                          as="textarea"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    Update Profile
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container >
    </>
  );
}
export default ProjectDocument;