import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { CardBody, CardFooter } from "reactstrap";
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
  Nav,
  Table,
  Modal,
} from "react-bootstrap";
import Axios from "axios";

function SD_showedit({ id_project }) {
  const [historyEditData, setHistoryEditData] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const [project_name, setProjectName] = useState();

  useEffect(() => {
    getProjectHistoryEdit();
    getProjectData();
  }, []); // Fetch project data on component mount

  const getProjectData = () => {
    Axios.get(
      `http://localhost:3001/student/project/getidproject/${id_project}`
    )
      .then((response) => {
        setProjectData(response.data);
        setProjectName(projectData[0].project_name);
      })
      .catch((error) => {
        console.error("Error fetching project data:", error);
      });
  };

  const getProjectHistoryEdit = () => {
    Axios.get(
      `http://localhost:3001/student/project/getedithistory/${id_project}`
    )
      .then((response) => {
        setHistoryEditData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching project data:", error);
      });
  };

  return (
    <>
      {/* วนค่าจากdatabase  */}
      <Col md="9">
        <Card>
          <CardHeader
            style={{
              backgroundColor: "#535353",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                marginRight: "auto",
                marginBottom: "10px",
                fontSize: "16px",
                color: "white",
              }}
            >
              รายการการแก้ไข
            </div>
          </CardHeader>

          <CardBody>
            <Table striped="columns">
              <tbody>
                {/* ชื่อโครงการ */}
                <tr style={{ backgroundColor: "white" }}>
                  <td className="head-side-td" style={{ verticalAlign: "top" }}>
                    <div>การแก้ไข</div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                  
                    <Table striped="columns">
                      <thead
                        style={{ backgroundColor: "rgba(255, 139, 19, 0)" }}
                      >
                        <tr
                          style={{ backgroundColor: "rgba(255, 139, 19, 1)" }}
                        >
                          <th
                            style={{
                              width: "5%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            #
                          </th>
                          <th
                            style={{
                              width: "25%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            <div>ชื่อโครงการ</div>
                          </th>
                          <th
                            style={{
                              width: "30%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            วันที่/เวลา
                          </th>
                          <th
                            style={{
                              width: "20%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            แก้ไขที่หน้า
                          </th>
                          <th
                            style={{
                              width: "16%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            icit นักศึกษาที่แก้ไข
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {historyEditData.map((data) => (
                          <tr style={{ backgroundColor: "white" }}>
                            <td>
                              
                              <div>{data.countedit}</div>
                              
                            </td>
                            <td>
                              <div>{project_name}</div>
                            </td>
                            <td>
                              <div>
                                {new Date(data.edit_time).toLocaleString(
                                  "th-TH",
                                  {
                                    timeZone: "Asia/Bangkok",
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    second: "2-digit",
                                  }
                                )}
                              </div>
                            </td>
                            <td>
                              <div>{data.editpage}</div>
                            </td>
                            <td>
                            <div>{data.	id_student}</div>
                            </td>

                            
                          </tr>
                        ))}
                        {/* <tr
                          style={{ backgroundColor: "rgba(255, 139, 19, .3)" }}
                        >
                       
                          <td></td>
                          <td></td>
                          <td></td>
                          <td style={{ textAlignLast: "right" }}>
                            <div
                              style={{ color: "#FF8B13", fontWeight: "bold" }}
                            >
                              รวมเป็นเงิน
                            </div>
                          </td>
                          <td>
                            <Form.Control
                              className="font-form-control"
                              size="sm"
                              type="text"
                              disabled
                            />
                          </td>
                        </tr> */}
                      </tbody>
                    </Table>
                  </td>
                </tr>
              </tbody>
            </Table>
          </CardBody>

          <CardFooter
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "10px",
            }}
          ></CardFooter>
        </Card>
      </Col>
    </>
  );
}
export default SD_showedit;
