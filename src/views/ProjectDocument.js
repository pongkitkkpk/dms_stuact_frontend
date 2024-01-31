import React, { useState } from 'react';

// react-bootstrap components
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
  Nav,
  Table
} from "react-bootstrap";

import ArrowProgressBar from './Compo_ProjectDoc/ArrowProgressBar';
import SD_detail from './Compo_ProjectDoc/ShowDetailP/SD_detail';
import SD_plan from './Compo_ProjectDoc/ShowDetailP/SD_plan';
import SD_budget from './Compo_ProjectDoc/ShowDetailP/SD_budget';

function ProjectDocument() {

  // รับค่ามากจาก database ที่เป็นโครงการ 1 อัน
  const [currentStep, setCurrentStep] = useState(1);
  const [SD_Detail, setSD_Detail] = useState(true);
  const [SD_Plan, setSD_Plan] = useState(false);
  const [SD_Budget, setSD_Budget] = useState(false);
  const totalSteps = 7;

  const handleNextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, totalSteps));
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const SD_DetailComponent = () => {
    setSD_Detail(true);
    setSD_Plan(false);
    setSD_Budget(false);
  };
  const SD_PlanComponent = () => {
    setSD_Detail(false);
    setSD_Plan(true);
    setSD_Budget(false);
  };
  const SD_BudgetComponent = () => {
    setSD_Detail(false);
    setSD_Plan(false);
    setSD_Budget(true);
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
                <Nav.Link href="#" onClick={SD_DetailComponent}>
                  1.1 ข้อมูลพื้นฐานโครงการ
                </Nav.Link>
                <Nav.Link href="#" onClick={SD_PlanComponent}>
                  1.2 แผนการดำเนินงาน
                </Nav.Link>
                <Nav.Link href="#"onClick={SD_BudgetComponent}>1.3 งบประมาณ</Nav.Link>
                <Nav.Link href="#section1-4">1.4 เป้าหมาย / ตัวชี้วัดความสำเร็จ</Nav.Link>
                <Nav.Link href="#section1-5">1.5 ข้อมูลเพิ่มเติม</Nav.Link>
                <Nav.Link href="#section1-6">1.6 เอกสารเพิ่มเติม</Nav.Link>
                <Nav.Link href="#section2">2. รายการเปลี่ยนแปลงแก้ไข</Nav.Link>
                <Nav.Link href="#pr-1">3. สรุปและประเมินผลโครงการ</Nav.Link>
              </Card.Body>
            </Card>
          </Col>

          {SD_Detail && <SD_detail />}
          {SD_Plan && <SD_plan />}
          {SD_Budget && <SD_budget />}
        </Row>

      </Container >
    </>
  );
}
export default ProjectDocument;