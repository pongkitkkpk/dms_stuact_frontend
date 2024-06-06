import React, { useState, useEffect } from "react";
import Axios from "axios";
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
} from "react-bootstrap";
import TableAddPersonel from "./TableAddPersonel";
import Swal from "sweetalert2";


function TableListPersonel() {
  const [userList, setUserList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getUsers = () => {
    Axios.get("http://localhost:3001/admin/stuactusers").then((response) => {
      setUserList(response.data);
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  // Filter userList based on searchQuery
  const filteredUserList = userList.filter((user) => {
    const yearlyString = user.yearly ? user.yearly.toString() : ""; // Convert yearly to string, handle null case
    return (
      (user.id_student &&
        user.id_student.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (user.name_student &&
        user.name_student.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (user.campus &&
        user.campus.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (user.clubName &&
        user.clubName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (user.WorkGroup &&
        user.WorkGroup.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (user.ClubGroup &&
        user.ClubGroup.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (yearlyString && yearlyString.includes(searchQuery.toLowerCase())) // Include yearly in the search
    );
  });

  const handleDeleteProject = (id_project, name_student) => {
    Swal.fire({
      className: "title",
      title: `คุณต้องการลบรายชื่อ "${name_student}" ใช่หรือไม่?`,
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.delete(`http://localhost:3001/admin/user/deleteUser/${id_project}`)
          .then((response) => {
            setUserList(
              userList.filter((val) => {
                return val.id !== id_project; // Use 'id_project' instead of 'id'
              })
            );
          })
          .catch((error) => {
            console.error("Error deleting project:", error);
          });
          Swal.fire({
            className: "title",
            title: `ลบรายชื่อ "${name_student}" สำเร็จ!`,
            text: "",
            icon: "success",
          });
      }
    });
  };
  
  return (
    <>
      <TableAddPersonel />
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="striped-tabled-with-hover">
              <Card.Header
                style={{
                  marginBottom: "-2px",
                  backgroundColor: "#535353",
                  color: "white",
                }}
              >
                <div
                  style={{
                    fontSize: "16px",
                    paddingBottom: "10px",
                    paddingTop: "0px",
                  }}
                >
                  ตารางแสดงบทบาททั้งหมดของบุคลากร
                </div>
                {/* <p className="card-category">
                  Here is a subtitle for this table
                </p> */}
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <div
                  style={{
                    marginLeft: "15px",
                    marginTop: "3px",
                    marginRight: "15px",
                  }}
                >
                  <Form.Group
                    controlId="search"
                    style={{ marginBottom: "10px" }}
                  >
                    <Form.Control
                      type="text"
                      placeholder="พิมพ์คำค้นหาได้ที่นี่"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </Form.Group>
                  <Table className="table-hover table-striped">
                    <thead>
                      <tr style={{ backgroundColor: "rgba(255, 139, 19, 1)" }}>
                        <th
                          style={{
                            width: "11%",
                            color: "white",
                            // fontWeight: "bold",
                          }}
                        >
                          ICIT Account
                        </th>
                        <th
                          style={{
                            width: "13%",
                            color: "white",
                            // fontWeight: "bold",
                          }}
                        >
                          ชื่อ-นามสกุล
                        </th>
                        <th
                          style={{
                            width: "16%",
                            color: "white",
                            // fontWeight: "bold",
                          }}
                        >
                          อีเมล
                        </th>
                        <th
                          style={{
                            width: "0%",
                            color: "white",
                            // fontWeight: "bold",
                          }}
                        >
                          {/* วิทยาเขต */}
                        </th>
                        <th
                          style={{
                            width: "8%",
                            color: "white",
                            // fontWeight: "bold",
                          }}
                        >
                          ตำแหน่ง
                        </th>
                        <th
                          style={{
                            width: "12%",
                            color: "white",
                            // fontWeight: "bold",
                          }}
                        >
                          หน่วยงาน
                        </th>
                        <th
                          style={{
                            width: "15%",
                            color: "white",
                            // fontWeight: "bold",
                          }}
                        >
                          กลุ่มงาน
                        </th>
                        <th
                          style={{
                            width: "15%",
                            color: "white",
                            // fontWeight: "bold",
                          }}
                        >
                          ฝ่ายงานที่ดูแล
                        </th>
                        <th
                          style={{
                            width: "5%",
                            color: "white",
                            // fontWeight: "bold",
                          }}
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredUserList.map((val, key) => {
                        return (
                          <tr key={key}>
                            {/* ICIT */}
                            <td
                              style={{
                                maxWidth: "100px",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              {" "}
                              <div>{val.id_student}</div>
                            </td>
                            {/* ชื่อ */}
                            <td>
                              <div>{val.name_student}</div>
                            </td>
                            {/* email */}
                            <td
                              style={{
                                maxWidth: "100px",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              <div>{val.email}</div>
                            </td>
                            {/* วิทยาเขต */}
                            <td>
                              <div>{val.campus}</div>
                            </td>
                            {/* ตำแหน่ง */}
                            <td>
                              {val.position === "Stuact" ? (
                                <div>บุคลากร</div>
                              ) : null}
                            </td>
                            {/* หน่วยงาน */}
                            <td
                              style={{
                                maxWidth: "100px",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              {" "}
                              <div>{val.clubName}</div>
                            </td>
                            {/* กลุ่มงาน */}
                            <td>
                              <div>{val.WorkGroup}</div>
                            </td>
                            <td>
                              <div>{val.ClubGroup}</div>
                            </td>
                            <td>
                              {" "}
                              <button
                                variant="danger"
                                style={{borderColor:"#F33E3E"}}
                                className="btn btn-budget-decrease"
                                onClick={() => handleDeleteProject(val.id, val.name_student)}
                              >
                                <div>ลบ</div>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableListPersonel;
