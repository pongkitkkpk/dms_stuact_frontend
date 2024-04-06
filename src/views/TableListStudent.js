import React, { useState, useEffect } from 'react';
import Axios from 'axios';
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
import TableAddStudent from "./TableAddStudent";
import setCode from "./setCode.json";

function TableListStudent() {
  const [userList, setUserList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const getUsers = () => {
    Axios.get('http://localhost:3001/admin/studentusers').then((response) => {
      setUserList(response.data);
    });
  };

  const deleteUser = (id) => {
    Axios.delete(`http://localhost:3001/admin/user/deleteUser/${id}`).then((response) => {
      setUserList(
        userList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const filteredUserList = userList.filter((user) => {
    const yearlyString = user.yearly ? user.yearly.toString() : ""; // Convert yearly to string, handle null case
    return (
      (user.id_student && user.id_student.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (user.name_student && user.name_student.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (user.campus && user.campus.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (user.clubName && user.clubName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (user.WorkGroup && user.WorkGroup.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (yearlyString && yearlyString.includes(searchQuery.toLowerCase())) // Include yearly in the search
    );
  });
  

  return (
    <>
      <TableAddStudent />
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
                <Form.Group controlId="search">
                  <Form.Control
                    type="text"
                    placeholder="Search by clubName or WorkGroup"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </Form.Group>
                <Table className="table-hover table-striped">
                  <thead>
                    <tr style={{ backgroundColor: "rgba(255, 139, 19, 1)" }}>
                      <th style={{ width: "10%", color: "white", fontWeight: "bold" }}>ICIT Account</th>
                      <th style={{ width: "13%", color: "white", fontWeight: "bold" }}>ชื่อ-นามสกุล</th>
                      <th style={{ width: "15%", color: "white", fontWeight: "bold" }}>email</th>
                      <th style={{ width: "8%", color: "white", fontWeight: "bold" }}>วิทยาเขต</th>
                      <th style={{ width: "15%", color: "white", fontWeight: "bold" }}>คณะ/มหาวิทยาลัย</th>
                      <th style={{ width: "8%", color: "white", fontWeight: "bold" }}>ตำแหน่ง</th>
                      <th style={{ width: "15%", color: "white", fontWeight: "bold" }}>หน่วยงาน/คณะสโมสร</th>
                      <th style={{ width: "5%", color: "white", fontWeight: "bold" }}>ปีการศึกษาที่ดูแล</th>
                      <th style={{ width: "5%", color: "white", fontWeight: "bold" }}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUserList.map((val, key) => {
                      return (
                        <tr key={key}>
                          <td style={{ maxWidth: "100px", overflow: "hidden", textOverflow: "ellipsis" }}> {val.id_student}</td>
                          {/* ชื่อ */}
                          <td>{val.name_student}</td>
                          {/* email */}
                          <td style={{ maxWidth: "100px", overflow: "hidden", textOverflow: "ellipsis" }}>{val.email}</td>
                          {/* วิทยาเขต */}
                          <td>{val.campus}</td>
                          {/* คณะ/มหาวิทยาลัย */}
                          <td>{val.department}</td>
                          {/* ตำแหน่ง */}
                          <td>
                            {val.position === "S" ? 'นักศึกษาประสานงาน' : null}
                            {val.position === "SH" ? (
                              val.clubName.includes("สภา") ? 'ประธานสภา' :
                                val.clubName.includes("องค์การ") ? 'นายกองค์การ' :
                                  'ประธานชมรม'
                            ) : null}
                            {val.position === "Ad" ? 'อาจารย์ที่ปรึกษา' : null}
                          </td>
                          {/* หน่วยงาน/คณะ */}
                          <td style={{ maxWidth: "100px", overflow: "hidden", textOverflow: "ellipsis" }}> {val.clubName}</td>
                          {/* ปีการศึกษาที่ดูแล */}
                          <td style={{ maxWidth: "100px", overflow: "hidden", textOverflow: "ellipsis" }}> {val.yearly}</td>
                          
                          <td> <button className='btn btn-danger' onClick={() => deleteUser(val.id)}>ลบ</button></td>
                        </tr>
                      );
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

export default TableListStudent;