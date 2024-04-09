import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// react-bootstrap components
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
} from "react-bootstrap";
import Axios from "axios";

function CSD_indicator({ id_projects }) {
  return (
    <>
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
              ความคาดหวังของโครงการ
            </div>
          </CardHeader>

          <CardBody>
            <Table striped="columns">
              <tbody>
                <tr style={{ backgroundColor: "white" }}>
                  <td className="head-side-td" style={{ verticalAlign: "top" }}>
                    <div>ตัวชี้วัด</div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <Form.Control
                      className="font-form-control margin-form-control"
                      size="sm"
                      type="text"
                      placeholder="ชื่อโครงการ"
                      onChange={(event) => {
                        setProjectName(event.target.value);
                      }}
                    />
                    <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "10px"
                    }}
                  >
                    {/* {TypeBNTCount < 10 && ( */}
                    <Button
                      variant="success"
                      className="ml-5 mb-3 btn-budget-increase border-success"
                      // onClick={increaseTypeBNTCount}
                    >
                      <div style={{ fontSize: "14px" }}>
                        เพิ่มรายการค่าใช้สอย
                      </div>
                    </Button>
                    {/* )} */}
                    {/* {TypeBNTCount > 1 && ( */}
                    <Button
                      variant="danger"
                      className="ml-5 mb-3 btn-budget-decrease border-danger"
                      // onClick={decreaseTypeBNTCount}
                    >
                      <div style={{ fontSize: "14px" }}>ลดรายการค่าใช้สอย</div>
                    </Button>
                    {/* )} */}
                  </div>
                  </td>
                  
                </tr>

                <tr style={{ backgroundColor: "white" }}>
                  <td className="head-side-td" style={{ verticalAlign: "top" }}>
                    <div>ตัวชี้วัด</div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <Form.Control
                      className="font-form-control"
                      size="sm"
                      type="text"
                      placeholder="ชื่อโครงการ"
                      onChange={(event) => {
                        setProjectName(event.target.value);
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </CardBody>

          <CardFooter></CardFooter>
        </Card>
      </Col>
    </>
  );
}
export default CSD_indicator;
