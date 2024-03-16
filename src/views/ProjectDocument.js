import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams hook
import { Card, Container, Row, Col, Nav } from "react-bootstrap";
import ArrowProgressBar from './Compo_ProjectDoc/ArrowProgressBar';
import SD_detail from './Compo_ProjectDoc/ShowDetailP/SD_detail';
import SD_plan from './Compo_ProjectDoc/ShowDetailP/SD_plan';
import SD_budget from './Compo_ProjectDoc/ShowDetailP/SD_budget';

function ProjectDocument() {
  const totalSteps = 7;
  const { id_project } = useParams(); // Get id_project from URL params

  // State to manage current step and step component visibility
  const [stepState, setStepState] = useState({
    currentStep: 1,
    steps: {
      SD_Detail: true,
      SD_Plan: false,
      SD_Budget: false
      // Add more steps as needed
    }
  });

  // Function to handle next step
  const handleNextStep = () => {
    setStepState(prevState => ({
      ...prevState,
      currentStep: Math.min(prevState.currentStep + 1, totalSteps)
    }));
  };

  // Function to handle previous step
  const handlePrevStep = () => {
    setStepState(prevState => ({
      ...prevState,
      currentStep: Math.max(prevState.currentStep - 1, 1)
    }));
  };

  // Function to toggle step component visibility
  const toggleStep = (stepName) => {
    setStepState(prevState => ({
      ...prevState,
      steps: {
        ...prevState.steps,
        [stepName]: true
      }
    }));
  };

  return (
    <>
      {/* Render id_project */}
      <h1>{id_project}</h1>

      <ArrowProgressBar steps={totalSteps} currentStep={stepState.currentStep} />
      <div>
        <button onClick={handlePrevStep} disabled={stepState.currentStep === 1}>
          Previous Step
        </button>
        <button onClick={handleNextStep} disabled={stepState.currentStep === totalSteps}>
          Next Step
        </button>
      </div>

      <Container fluid>
        <Row>
          <Col md="2">
            <Card className="bg-dark text-white">
              <Card.Header className="bg-secondary text-white">เมนูจัดการโครงการ</Card.Header>
              <Card.Body>
                <Nav.Link href="#section1" onClick={() => toggleStep('SD_Detail')}>1. แบบขออนุมัติโครงการ</Nav.Link>
                <Nav.Link href="#" onClick={() => toggleStep('SD_Plan')}>1.1 ข้อมูลพื้นฐานโครงการ</Nav.Link>
                <Nav.Link href="#" onClick={() => toggleStep('SD_Plan')}>1.2 แผนการดำเนินงาน</Nav.Link>
                <Nav.Link href="#" onClick={() => toggleStep('SD_Budget')}>1.3 งบประมาณ</Nav.Link>
                <Nav.Link href="#section1-4">1.4 เป้าหมาย / ตัวชี้วัดความสำเร็จ</Nav.Link>
                <Nav.Link href="#section1-5">1.5 ข้อมูลเพิ่มเติม</Nav.Link>
                <Nav.Link href="#section1-6">1.6 เอกสารเพิ่มเติม</Nav.Link>
                <Nav.Link href="#section2">2. รายการเปลี่ยนแปลงแก้ไข</Nav.Link>
                <Nav.Link href="#pr-1">3. สรุปและประเมินผลโครงการ</Nav.Link>
              </Card.Body>
            </Card>
          </Col>

          {stepState.steps.SD_Detail && <SD_detail id_project={id_project}/>}
          {stepState.steps.SD_Plan && <SD_plan />}
          {stepState.steps.SD_Budget && <SD_budget />}
        </Row>
      </Container>
    </>
  );
}

export default ProjectDocument;
