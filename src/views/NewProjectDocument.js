import React, { useState, useRef } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
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
  const [cSD_locationtime, setCSD_LocationTime] = useState(true);
  const [cSD_timestep, setCSD_timestep] = useState(false);//fix edit
  const [cSD_budget, setCSD_budget] = useState(false);
  const containerRef = useRef(null);

  

  const CSD_DetailComponent = () => {
    setCSD_Detail(true);
  };

  const CSD_Detail2Component = () => {
    if (cSD_Detail) {
      setCSD_Detail2(true);
      setCSD_Detail(false);
    }
  };

  const CSD_personComponent = () => {
    if (cSD_Detail2) {
      setCSD_Person(true);
      setCSD_Detail2(false);
    }
  };

  const CSD_LocationtimeComponent = () => {
    if (cSD_person) {
      setCSD_LocationTime(true);
      setCSD_Person(false);
    }
  };

  const CSD_timestepComponent = () => {
    if (cSD_person) {
      setCSD_timestep(true);
      setCSD_LocationTime(false);
    }
  };

  const CSD_budgetComponent = () => {
    setCSD_budget(true);
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

  const switchToCSDBudget = () => {
    setCSD_budget(true);
    setCSD_timestep(false);
    // Scroll to the top of the Container
    containerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container fluid ref={containerRef}>
      <h1>{id_projects}</h1>
      <Row>
        <div style={{width: "20%"}}>
          <div className="sticky-sidebar">
            <Card>
              <Card.Header className="text-white" style={{backgroundColor:"#535353", paddingBottom: "10px"}}>เมนูจัดการโครงการ</Card.Header>
              <Card.Body style={{backgroundColor: "#d2d2d2", paddingBottom: "15px"}}>
                <table className="list-group">
                  <tr className="list-group-item" style={{backgroundColor: "#535353"}}>
                    <th><a href="#section1"><div style={{fontFamily: 'Bai Jamjuree', color: "white"}}>แบบขออนุมัติโครงการ</div></a></th>
                  </tr>
                  <tr className={cSD_Detail ? "list-group-item active" : "list-group-item"}>
                    <td><a href="#" onClick={cSD_Detail ? CSD_DetailComponent : null} style={{ display: "inline-block", width: "100%" }}><div style={{fontFamily: 'Bai Jamjuree', color: "white"}}>1.1 ข้อมูลพื้นฐานโครงการ</div></a></td>
                  </tr>
                  <tr className={cSD_Detail2 ? "list-group-item active" : "list-group-item"}>
                    <td><a href="#" onClick={cSD_Detail2 ? CSD_Detail2Component : null} style={{ display: "inline-block", width: "100%" }}><div style={{fontFamily: 'Bai Jamjuree', color: "white"}}>1.2 ลักษณะโครงการ</div></a></td>
                  </tr>
                  <tr className={cSD_person ? "list-group-item active" : "list-group-item"}>
                    <td><a href="#" onClick={cSD_person ? CSD_personComponent : null} style={{ display: "inline-block", width: "100%" }}><div style={{fontFamily: 'Bai Jamjuree', color: "white"}}>1.3 กลุ่มเป้าหมายโครงการ</div></a></td>
                  </tr>
                  <tr className={cSD_locationtime ? "list-group-item active" : "list-group-item"}>
                    <td><a href="#" onClick={cSD_locationtime ? CSD_LocationtimeComponent : null} style={{ display: "inline-block", width: "100%" }}><div style={{fontFamily: 'Bai Jamjuree', color: "white"}}>1.4 สถานที่และเวลาดำเนินการ</div></a></td>
                  </tr>
                  <tr className={cSD_timestep ? "list-group-item active" : "list-group-item"}>
                    <td><a href="#" onClick={cSD_timestep ? CSD_timestepComponent : null} style={{ display: "inline-block", width: "100%" }}><div style={{fontFamily: 'Bai Jamjuree', color: "white"}}>1.3 ขั้นตอนการดำเนินงาน และแผนการดำเนินโครงการdt5</div></a></td>
                  </tr>
                  <tr className={cSD_budget ? "list-group-item active" : "list-group-item"}>
                    <td><a href="#" onClick={cSD_budget ? CSD_budgetComponent : null} style={{ display: "inline-block", width: "100%" }}><div style={{fontFamily: 'Bai Jamjuree', color: "white"}}>1.5 งบประมาณโครงการ</div></a></td>
                  </tr>
                  <tr>
                    <td className="list-group-item"><a href="#section1-5" style={{ display: "inline-block", width: "100%" }}><div style={{fontFamily: 'Bai Jamjuree', color: "white"}}>1.5 ข้อมูลเพิ่มเติม</div></a></td>
                  </tr>
                  <tr>
                    <td className="list-group-item"><a href="#section1-6" style={{ display: "inline-block", width: "100%" }}><div style={{fontFamily: 'Bai Jamjuree', color: "white"}}>1.6 เอกสารเพิ่มเติม</div></a></td>
                  </tr>
                </table>
              </Card.Body>

            </Card>
          </div>
        </div>

        {cSD_Detail && <CSD_detail setIdProjects={setIdProjects} switchToCSDDetail2={switchToCSDDetail2} />}
        {cSD_Detail2 && <CSD_detail2 id_projects={id_projects} switchToCSDPerson={switchToCSDPerson} />}
        {cSD_person && <CSD_person id_projects={id_projects} switchToCSDLocationTime={switchToCSDLocationTime} />}
        {cSD_locationtime && <CSD_locationtime id_projects={id_projects} switchToCSDTimestep={switchToCSDTimestep} />}
        {cSD_timestep && <CSD_timestep id_projects={id_projects} switchToCSDBudget={switchToCSDBudget}/>}
        {cSD_budget && <CSD_budget id_projects={id_projects} />}
      </Row>
    </Container>
  );
}

export default NewProjectDocument;
