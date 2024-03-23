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
    Axios.get('http://localhost:3001/admin/users').then((response) => {
      setUserList(response.data);
    })
  }
  const deleteUser = (id) => {
    Axios.delete(`http://localhost:3001/admin/user/deleteUser/${id}`).then((response) => {
      setUserList(
        userList.filter((val) => {
          return val.id !== id; // Use 'id' instead of 'idStudent'
        })
      );
    });
  };
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
                          <td> {val.id_student}</td>
                          <td>{val.name_student}</td>
                          <td>
                            {val.position === "S" ? 'นักศึกษาประสานงาน' : null}
                            {val.position === "SH" ? (
                              val.clubName.includes("สภา") ? 'ประธานสภา' :
                                val.clubName.includes("องค์การ") ? 'นายกองค์การ' :
                                  'ประธานชมรม'
                            ) : null}
                            {val.position === "Ad" ? 'อาจารย์ที่ปรึกษา' : null}
                            {val.position === "Stuact" ? 'บุคลการกองกิจการนักศึกษา' : null}
                          </td>
                          {/* <td> {val.codeclub}</td> */}
                          <td> {val.clubName}</td>
                          <td> <button className='btn btn-danger' onClick={() => deleteUser(val.id)}>ลบ</button></td>
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
