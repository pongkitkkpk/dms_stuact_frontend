import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container, Row, Col } from "react-bootstrap";
import SD_detail from './Compo_ProjectDoc/ShowDetailP/SD_detail';
import SD_detail2 from './Compo_ProjectDoc/ShowDetailP/SD_detail2';
import SD_plan from './Compo_ProjectDoc/ShowDetailP/SD_plan';
import SD_budget from './Compo_ProjectDoc/ShowDetailP/SD_budget';
import SD_locationtime from './Compo_ProjectDoc/ShowDetailP/SD_locationtime';

function ProjectDocument() {
  const { id_project } = useParams();
  const [currentStep, setCurrentStep] = useState('SD_Detail'); // Default step is SD_Detail

  // Function to toggle between steps
  const toggleStep = (step) => {
    setCurrentStep(step);
  };

  return (
    <>
      <h1>{id_project}</h1>

      <Container fluid>
        <Row>
          <Col md="3">
            <Card >
              <Card.Header className="bg-secondary text-white">เมนูจัดการโครงการ</Card.Header>
              <Card.Body>
                <ul className="list-group">
                  <li className="list-group-item">
                    <a href="#section1">1. แบบขออนุมัติโครงการ</a>
                  </li>
                  <li className={currentStep === 'SD_Detail' ? "list-group-item active" : "list-group-item"}>
                    <a href="#" onClick={() => toggleStep('SD_Detail')}>1.1 ข้อมูลพื้นฐานโครงการ dd1</a>
                  </li>
                  <li className={currentStep === 'SD_Detail2' ? "list-group-item active" : "list-group-item"}>
                    <a href="#" onClick={() => toggleStep('SD_Detail2')}>1.3 ขั้นตอนการดำเนินงาน และแผนการดำเนินโครงการdd2</a>
                  </li>
                  <li className={currentStep === 'SD_locationtime' ? "list-group-item active" : "list-group-item "}>
                    <a href="#" onClick={() => toggleStep('SD_locationtime')}>1.2 SD_locationtime</a>
                  </li>
                  <li className={currentStep === 'SD_Budget' ? "list-group-item active" : "list-group-item"}>
                    <a href="#" onClick={() => toggleStep('SD_Budget')}>1.5 งบประมาณของโครงการ</a>
                  </li>
                  <li className="list-group-item"><a href="#section1-5">1.5 ข้อมูลเพิ่มเติม</a></li>
                  <li className="list-group-item"><a href="#section1-6">1.6 เอกสารเพิ่มเติม</a></li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Conditionally render components based on currentStep */}
          {currentStep === 'SD_Detail' && <SD_detail id_project={id_project} />}
          {currentStep === 'SD_Detail2' && <SD_detail2 id_project={id_project} />}
          {currentStep === 'SD_locationtime' && <SD_locationtime id_project={id_project} />}
          {currentStep === 'SD_Plan' && <SD_plan />}
          {currentStep === 'SD_Budget' && <SD_budget />}
        </Row>
      </Container>
    </>
  );
}

export default ProjectDocument;
