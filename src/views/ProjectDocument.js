import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container, Row, Col } from "react-bootstrap";
import SD_detail from './Compo_ProjectDoc/ShowDetailP/SD_detail';
import SD_detail2 from './Compo_ProjectDoc/ShowDetailP/SD_detail2';
import SD_person from './Compo_ProjectDoc/ShowDetailP/SD_person';
import SD_locationtime from './Compo_ProjectDoc/ShowDetailP/SD_locationtime';
import SD_timestep from './Compo_ProjectDoc/ShowDetailP/SD_timestep';
import SD_budget from './Compo_ProjectDoc/ShowDetailP/SD_budget';
import SD_indicator from './Compo_ProjectDoc/ShowDetailP/SD_indicator';
import SD_addfile from './Compo_ProjectDoc/ShowDetailP/SD_addfile';

import SD_showedit from './Compo_ProjectDoc/ShowDetailP/SD_showedit';


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
              <Card.Header className="text-white" style={{ backgroundColor: "#535353", paddingBottom: "10px" }}>เมนูจัดการโครงการ</Card.Header>
              <Card.Body style={{ backgroundColor: "#d2d2d2", paddingBottom: "15px" }}>
                <table className="list-group">
                  <tr className="list-group-item" style={{ backgroundColor: "#535353" }}>
                    <th><a href="#section1"><div style={{ fontFamily: 'Bai Jamjuree', color: "white" }}>แบบขออนุมัติโครงการ</div></a></th>
                  </tr>
                  <tr className={currentStep === 'SD_Detail' ? "list-group-item active" : "list-group-item"}>
                    <td><a href="#" onClick={() => toggleStep('SD_Detail')} style={{ display: "inline-block", width: "100%" }}><div style={{ fontFamily: 'Bai Jamjuree', color: "white" }}>1.1 ข้อมูลพื้นฐานโครงการ</div></a></td>
                  </tr>
                  <tr className={currentStep === 'SD_Detail2' ? "list-group-item active" : "list-group-item"}>
                    <td><a href="#" onClick={() => toggleStep('SD_Detail2')} style={{ display: "inline-block", width: "100%" }}><div style={{ fontFamily: 'Bai Jamjuree', color: "white" }}>1.2 ลักษณะโครงการ</div></a></td>
                  </tr>
                  <tr className={currentStep === 'SD_person' ? "list-group-item active" : "list-group-item "}>
                    <td><a href="#" onClick={() => toggleStep('SD_person')}style={{ display: "inline-block", width: "100%" }}><div style={{fontFamily: 'Bai Jamjuree', color: "white"}}>1.3 กลุ่มเป้าหมายโครงการ</div></a></td>
                  </tr>
                  <tr className={currentStep === 'SD_locationtime' ? "list-group-item active" : "list-group-item "}>
                    <td><a href="#" onClick={() => toggleStep('SD_locationtime')}style={{ display: "inline-block", width: "100%" }}><div style={{fontFamily: 'Bai Jamjuree', color: "white"}}>1.4 สถานที่และเวลาดำเนินการ</div></a></td>
                  </tr>
                  <tr className={currentStep === 'SD_timestep' ? "list-group-item active" : "list-group-item"}>
                    <td><a href="#" onClick={() => toggleStep('SD_timestep')}style={{ display: "inline-block", width: "100%" }}><div style={{fontFamily: 'Bai Jamjuree', color: "white"}}>1.5 ขั้นตอนและแผนดำเนินงาน</div></a></td>
                  </tr>
                  <tr className={currentStep === 'SD_budget' ? "list-group-item active" : "list-group-item"}>
                    <td><a href="#" onClick={() => toggleStep('SD_budget')}style={{ display: "inline-block", width: "100%" }}><div style={{fontFamily: 'Bai Jamjuree', color: "white"}}>1.6 งบประมาณโครงการ</div></a></td>
                  </tr>
                  <tr className={currentStep === 'SD_indicator' ? "list-group-item active" : "list-group-item"}>
                    <td><a href="#" onClick={() => toggleStep('SD_indicator')}style={{ display: "inline-block", width: "100%" }}><div style={{fontFamily: 'Bai Jamjuree', color: "white"}}>1.7 ความคาดหวังของโครงการ</div></a></td>
                  </tr>
                  {/* <tr className={currentStep === 'SD_addfile' ? "list-group-item active" : "list-group-item"}>
                    <td><a href="#" onClick={() => toggleStep('SD_addfile')}style={{ display: "inline-block", width: "100%" }}><div style={{fontFamily: 'Bai Jamjuree', color: "white"}}>1.8 เอกสารเพิ่มเติม</div></a></td>
                  </tr> */}
                  <tr className="list-group-item" style={{ backgroundColor: "#535353" }}>
                    <th><a href="#section1"><div style={{ fontFamily: 'Bai Jamjuree', color: "white" }}>แบบขออนุมัติโครงการ</div></a></th>
                  </tr>
                  <tr className={currentStep === 'SD_showedit' ? "list-group-item active" : "list-group-item"}>
                    <td><a href="#" onClick={() => toggleStep('SD_showedit')}style={{ display: "inline-block", width: "100%" }}><div style={{fontFamily: 'Bai Jamjuree', color: "white"}}>2.1 รายการแก้ไข</div></a></td>
                  </tr>
                </table>
              </Card.Body>
            </Card>
          </Col>

          {/* Conditionally render components based on currentStep */}
          {currentStep === 'SD_Detail' && <SD_detail id_project={id_project} />}
          {currentStep === 'SD_Detail2' && <SD_detail2 id_project={id_project} />}
          {currentStep === 'SD_person' && <SD_person id_project={id_project} />}
          {currentStep === 'SD_locationtime' && <SD_locationtime id_project={id_project} />}
          {currentStep === 'SD_timestep' && <SD_timestep id_project={id_project} />}
          {currentStep === 'SD_budget' && <SD_budget id_project={id_project}/>}
          {currentStep === 'SD_indicator' && <SD_indicator id_project={id_project}/>}
          {currentStep === 'SD_showedit' && <SD_showedit id_project={id_project}/>}
        </Row>
      </Container>
    </>
  );
}

export default ProjectDocument;
