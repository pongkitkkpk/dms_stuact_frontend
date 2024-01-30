import React, { useState } from 'react';
import Axios from 'axios';
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
  Form
} from "react-bootstrap";
import TableAdd from "./TableAdd";
import setCode from "./setCode.json"

function TableList() {
  const [userList, setUserList] = useState([]);

  const getUsers = () => {
    Axios.get('http://localhost:3001/users').then((response) => {
      setUserList(response.data);
    })
  }
  getUsers()
  return (
    <>
      <TableAdd />

      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Striped Table with Hover</Card.Title>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">

                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">รหัสนักศึกษา</th>
                      <th className="border-0">ชื่อ</th>
                      <th className="border-0">ตำแหน่ง</th>
                      <th className="border-0">หน่วยงาน/ชมรม</th>
                      <th className="border-0">City</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userList.map((val, key) => {
                      return (
                        <tr>
                          <td> {val.idStudent}</td>
                          <td>ชื่อค้าบบบ</td>
                          <td>{val.position === "S" ? 'นักศึกษาประสานงาน' : null}
                            {val.position === "SC-P" ? 'ประธานสภา' : null}
                            {val.position === "SO-P" ? 'นายกองค์การ' : null}
                            {val.position === "C-P" ? 'ประธานชมรม' : null}
                            {val.position === "Ad" ? 'อาจารย์ที่ปรึกษา' : null}
                            {val.position === "Stuact" ? 'บุคลการกองกิจการนักศึกษา' : null}</td>
                          {/* <td> {val.position}</td> */}
                          <td> {val.codeclub}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container >
    </>
  );
}

export default TableList;
