import React, { useState } from 'react';
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

import CSD_detail from './Compo_ProjectDoc/CreateDetailP/CSD_detail';
function NewProjectDocument() {
    const [cSD_Detail, setCSD_Detail] = useState(true);

    const CSD_DetailComponent = () => {
        setCSD_Detail(true);
      };

    return(
        <>
        <Container fluid>
          <Row>
            <Col md="2">
              <Card className="bg-dark text-white">
                <Card.Header className="bg-secondary text-white" >เมนูจัดการโครงการ</Card.Header>
                <Card.Body>
                  <Nav.Link href="#section1">1. แบบขออนุมัติโครงการ</Nav.Link>
                  <Nav.Link href="#" onClick={CSD_DetailComponent}>
                    1.1 ข้อมูลพื้นฐานโครงการ
                  </Nav.Link>
                  <Nav.Link href="#" >
                    1.2 แผนการดำเนินงาน
                  </Nav.Link>
                  <Nav.Link href="#">1.3 งบประมาณ</Nav.Link>
                  <Nav.Link href="#section1-4">1.4 เป้าหมาย / ตัวชี้วัดความสำเร็จ</Nav.Link>
                  <Nav.Link href="#section1-5">1.5 ข้อมูลเพิ่มเติม</Nav.Link>
                  <Nav.Link href="#section1-6">1.6 เอกสารเพิ่มเติม</Nav.Link>
                  <Nav.Link href="#section2">2. รายการเปลี่ยนแปลงแก้ไข</Nav.Link>
                  <Nav.Link href="#pr-1">3. สรุปและประเมินผลโครงการ</Nav.Link>
                </Card.Body>
              </Card>
            </Col>
  
           
            {cSD_Detail &&<CSD_detail/>}
            
          </Row>
  
        </Container >
      </>
    );
}
export default NewProjectDocument;