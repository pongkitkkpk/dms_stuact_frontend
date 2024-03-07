import React, { useState, useRef, useEffect } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import CSD_detail from './Compo_ProjectDoc/CreateDetailP/CSD_detail';
import CSD_person from './Compo_ProjectDoc/CreateDetailP/CSD_person';

function NewProjectDocument() {
  const [id_projects, setIdProjects] = useState('');
  const [startMonth, setStartMonth] = useState('');
  const [cSD_Detail, setCSD_Detail] = useState(true);
  const [cSD_person, setCSD_Person] = useState(false);
  const containerRef = useRef(null);

  const CSD_DetailComponent = () => {
    setCSD_Detail(true);
    setCSD_Person(false);
  };

  const CSD_personComponent = () => {
    if (cSD_Detail) {
      setCSD_Person(true);
    }
  };

  // Function to switch to CSD_person view and scroll to top
  const switchToCSDPerson = () => {
    setCSD_Person(true);
    setCSD_Detail(false);
    // Scroll to the top of the Container
    containerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    console.log(startMonth)
  }, [startMonth])
  
  return (
    <Container fluid ref={containerRef}>
      <h1>{id_projects}</h1>
      <Row>
        <Col md="3">
          <Card>
            <Card.Header className="bg-secondary text-white">เมนูจัดการโครงการ</Card.Header>
            <Card.Body>
              <ul className="list-group">
                <li className="list-group-item">
                  <a href="#section1">1. แบบขออนุมัติโครงการ</a>
                </li>
                <li className={cSD_Detail ? "list-group-item active" : "list-group-item"}>
                  <a href="#" onClick={CSD_DetailComponent}>1.1 ข้อมูลพื้นฐานโครงการ</a>
                </li>
                <li className={cSD_person ? "list-group-item active" : "list-group-item disabled"}>
                  <a href="#" onClick={CSD_personComponent}>1.2 ผู้เข้าร่วมโครงการ</a>
                </li>
                <li className="list-group-item"><a href="#">1.3 งบประมาณ</a></li>
                <li className="list-group-item"><a href="#section1-4">1.4 เป้าหมาย / ตัวชี้วัดความสำเร็จ</a></li>
                <li className="list-group-item"><a href="#section1-5">1.5 ข้อมูลเพิ่มเติม</a></li>
                <li className="list-group-item"><a href="#section1-6">1.6 เอกสารเพิ่มเติม</a></li>
                <li className="list-group-item"><a href="#section2">2. รายการเปลี่ยนแปลงแก้ไข</a></li>
                <li className="list-group-item"><a href="#pr-1">3. สรุปและประเมินผลโครงการ</a></li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        {cSD_Detail && <CSD_detail setIdProjects={setIdProjects} setStartMonth={setStartMonth} switchToCSDPerson={switchToCSDPerson} />}
        {cSD_person && <CSD_person id_projects={id_projects} />}

      </Row>
    </Container>
  );
}

export default NewProjectDocument;
