import React, { useState, useRef, useEffect } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import CSD_detail from './Compo_ProjectDoc/CreateDetailP/CSD_detail';
import CSD_detail2 from './Compo_ProjectDoc/CreateDetailP/CSD_detail2';
import CSD_person from './Compo_ProjectDoc/CreateDetailP/CSD_person';
import CSD_locationtime from './Compo_ProjectDoc/CreateDetailP/CSD_locationtime';
import CSD_timestep from './Compo_ProjectDoc/CreateDetailP/CSD_timestep';
import CSD_budget from './Compo_ProjectDoc/CreateDetailP/CSD_budget';

function NewProjectDocument() {
  const [id_projects, setIdProjects] = useState('');
  const [cSD_Detail, setCSD_Detail] = useState(false);//fix edit
  const [cSD_Detail2, setCSD_Detail2] = useState(false);//fix edit
  const [cSD_person, setCSD_Person] = useState(false);
  const [cSD_locationtime, setCSD_LocationTime] = useState(false);
  const [cSD_timestep, setCSD_timestep] = useState(false);//fix edit
  const [cSD_budget, setCSD_budget] = useState(true);
  const containerRef = useRef(null);

  const CSD_DetailComponent = () => {
    setCSD_Detail(true);

  };
  const CSD_Detail2Component = () => {
    if (cSD_Detail) {
      setCSD_Detail2(true);
    }
  };

  const CSD_personComponent = () => {
    if (cSD_Detail2) {
      setCSD_Person(true);
    }
  };
  const CSD_LocationtimeComponent = () => {
    if (cSD_person) {
      setCSD_LocationTime(true);
    }
  };
  const CSD_timestepComponent = () => {
    if (cSD_person) {
      setCSD_timestep(true);
    }
  };
  const CSD_budgetComponent = () => {
    // if (cSD_timestep) {
      setCSD_budget(true);
    // }
  };
  // Function to switch to CSD_person view and scroll to top
  const switchToCSDDetail2 = () => {
    setCSD_Detail2(true);
    setCSD_Detail(false);
    // Scroll to the top of the Container
    containerRef.current.scrollIntoView({ behavior: "smooth" });
  };
  // Function to switch to CSD_person view and scroll to top
  const switchToCSDPerson = () => {
    setCSD_Person(true);
    setCSD_Detail2(false);
    // Scroll to the top of the Container
    containerRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const switchToCSDLocationTime = () => {
    setCSD_LocationTime(true);
    setCSD_Person(false);
    // Scroll to the top of the Container
    containerRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const switchToCSDTimestep = () => {
    setCSD_timestep(true);
    setCSD_LocationTime(false);
    // Scroll to the top of the Container
    containerRef.current.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <Container fluid ref={containerRef}>
      <h1>{id_projects}</h1>
      <Row>
        <Col md="3">
          <div className="sticky-sidebar">
            <Card>
              <Card.Header className="bg-secondary text-white">เมนูจัดการโครงการ</Card.Header>
              <Card.Body>
                <ul className="list-group">
                  <li className="list-group-item">
                    <a href="#section1">1. แบบขออนุมัติโครงการ</a>
                  </li>
                  <li className={cSD_Detail ? "list-group-item active" : "list-group-item"}>
                    <a href="#" onClick={CSD_DetailComponent}>1.1 ข้อมูลพื้นฐานโครงการ dd1</a>
                  </li>
                  <li className="list-group-item">
                    <a href="#" onClick={CSD_Detail2Component}>1.3 ขั้นตอนการดำเนินงาน และแผนการดำเนินโครงการdd2</a>
                  </li>
                  <li className={cSD_person ? "list-group-item active" : "list-group-item disabled"}>
                    <a href="#" onClick={CSD_personComponent}>1.2 กลุ่มเป้าหมายผู้เข้าร่วมโครงการdp3</a>
                  </li>
                  <li className="list-group-item">
                    <a href="#" onClick={CSD_LocationtimeComponent}>1.3 ขั้นตอนการดำเนินงาน และแผนการดำเนินโครงการLT4</a>
                  </li>
                  <li className="list-group-item">
                    <a href="#" onClick={CSD_timestepComponent}>1.3 ขั้นตอนการดำเนินงาน และแผนการดำเนินโครงการdt5</a>
                  </li>
                  
                  <li className="list-group-item">
                  <a href="#" onClick={CSD_budgetComponent}>1.5 งบประมาณของโครงการ</a>
                    </li>
                  <li className="list-group-item"><a href="#section1-5">1.5 ข้อมูลเพิ่มเติม</a></li>
                  <li className="list-group-item"><a href="#section1-6">1.6 เอกสารเพิ่มเติม</a></li>
                  {/* <li className="list-group-item"><a href="#section2">2. รายการเปลี่ยนแปลงแก้ไข</a></li>
                  <li className="list-group-item"><a href="#pr-1">3. สรุปและประเมินผลโครงการ</a></li> */}
                </ul>
              </Card.Body>
            </Card>
          </div>
        </Col>

        {cSD_Detail && <CSD_detail setIdProjects={setIdProjects}  switchToCSDDetail2={switchToCSDDetail2} />}
        {cSD_Detail2 && <CSD_detail2 id_projects={id_projects} switchToCSDPerson={switchToCSDPerson} />}
        {cSD_person && <CSD_person id_projects={id_projects} switchToCSDLocationTime={switchToCSDLocationTime} />}
        {cSD_locationtime && <CSD_locationtime id_projects={id_projects} switchToCSDTimestep={switchToCSDTimestep} />}
        {cSD_timestep && <CSD_timestep id_projects={id_projects}  />}
        {cSD_budget && <CSD_budget id_projects={id_projects}/>}

      </Row>
    </Container>
  );
}

export default NewProjectDocument;
