import React, { useState, useEffect } from "react";
import { Button, Card, Form, Col, Table } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { CardBody, CardFooter } from "reactstrap";
import Axios from "axios";
import Swal from "sweetalert2";
import setCode from "./setCode.json";
function DAddSplitBudget() {
  const [project_name, setProjectName] = useState("");
  const [responsible_agency, setResponsibleAgency] = useState("");
  const [yearly, setYearly] = useState("2566");

  const [campus, setCampus] = useState("Bangkok");
  const [codedivision, setCodedivision] = useState("");
  const [codeagency, setCodeagency] = useState("");
  const [clubName, setClubname] = useState("");
  const [net_budget, setNetBudget] = useState("");


  const createNetProject = () => {
    Axios.post(`http://localhost:3001/admin/createNetProject`, {
      project_name: project_name,
      responsible_agency: clubName,
      campus: campus,
      yearly: yearly,
      net_budget: net_budget,
    })
      .then((response) => {
        // Handle success response
        console.log("Net project created successfully:", response.data);
        window.location.reload();
      })
      .catch((error) => {
        // Handle error response
        console.error("Error creating net project:", error);
        // You can display an error message to the user or perform other actions here
      });
  };

  return (
    <>
      <Col md="12">
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
            งบประมาณโครงการ
          </div>
        </CardHeader>
        <CardBody>
          <Table striped>
            <tbody>
              <tr style={{ backgroundColor: "white" }}>
                <td className="head-side-td" style={{ verticalAlign: "top" }}>
                  <div>งบประมาณโครงการ</div>
                </td>
                <td className="back-side-td">
                  <Table striped="columns">
                    <thead style={{ backgroundColor: "rgba(255, 139, 19, 0)" }}>
                      <tr style={{ backgroundColor: "rgba(255, 139, 19, 1)" }}>
                        <th
                          style={{
                            width: "30%",
                            color: "white",
                            fontWeight: "bold",
                          }}
                        >
                          ชื่อโครงการ
                        </th>

                        <th
                          style={{
                            width: "15%",
                            color: "white",
                            fontWeight: "bold",
                          }}
                        >
                          วิทยาเขต
                        </th>

                        <th
                          style={{
                            width: "20%",
                            color: "white",
                            fontWeight: "bold",
                          }}
                        >
                          หน่วยงาน
                        </th>

                        <th
                          style={{
                            width: "11%",
                            color: "white",
                            fontWeight: "bold",
                          }}
                        >
                          ปีการศึกษา
                        </th>

                        <th
                          style={{
                            width: "16%",
                            color: "white",
                            fontWeight: "bold",
                          }}
                        >
                          งบประมาณสุทธิ
                        </th>
                        <th
                          style={{
                            width: "10%",
                            color: "white",
                            fontWeight: "bold",
                          }}
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ backgroundColor: "white" }}>
                        <td>
                          <Form.Control
                            className="font-form-control"
                            size="sm"
                            type="text"
                            placeholder={`ชื่อโครงการ`}
                            onChange={(event) => {
                              setProjectName(event.target.value);
                            }}
                          />
                        </td>

                        <td>
                          <select
                            onChange={(event) => {
                              setCampus(event.target.value); // Update the selected campus
                            }}
                            className="form-select"
                            style={{ width: "100%" }}
                          >
                            <option value="Bangkok">
                              <div>กรุงเทพ</div>
                            </option>
                            <option value="Prachin">
                              <div>ปราจีนบุรี</div>
                            </option>
                            <option value="Rayong">
                              {" "}
                              <div>ระยอง</div>
                            </option>
                            {/* Add more options as needed */}
                          </select>
                        </td>

                        <td>
                          <select
                            onChange={(event) => {
                              setCodedivision("D04");
                              setCodeagency(event.target.value);

                              const selectedText =
                                event.target.options[event.target.selectedIndex]
                                  .text;
                              setClubname(selectedText);
                            }}
                            required
                            className="form-select"
                            style={{ width: "100%" }}
                          >
                            <option value="">
                              <div>กรุณาเลือก ชมรม/หน่วยงาน/องค์กร</div>
                            </option>

                            {setCode.Divison.D04.Agency.map(
                              (agencyGroup, index) => {
                                const campusData = agencyGroup[campus]; // Get data for the selected campus
                                return (
                                  campusData && (
                                    <optgroup
                                      key={index}
                                      label={agencyGroup.name}
                                    >
  
                                      {Object.keys(campusData).map(
                                        (agencyKey) =>
                                          agencyKey !== "name" && (
                                            <option
                                              key={agencyKey}
                                              value={agencyKey}
                                            >
                                              {` ${campusData[agencyKey]}`}
                                            </option>
                                          )
                                      )}
                                    </optgroup>
                                  )
                                );
                              }
                            )}
                          </select>
                        </td>

                        <td>
                          <Form.Control
                            className="font-form-control"
                            size="sm"
                            type="text"
                            placeholder={`พ.ศ.`}
                            value={yearly}
                            onChange={(event) => {
                              setYearly(event.target.value);
                            }}
                          />
                        </td>
                        <td>
                          <Form.Control
                            className="font-form-control"
                            size="sm"
                            type="text"
                            placeholder={`งบประมาณสุทธิ`}
                            value={net_budget}      
                            onChange={(event) => {
                              const value = Number(
                                event.target.value.replace(/,/g, "")
                              );
                              setNetBudget(value.toLocaleString("en-US"));
                            }}
                          />
                        </td>

                        <td>
                          <div>บาท</div>
                        </td>
                      </tr>

                      <tr
                        style={{
                          backgroundColor: "rgba(255, 139, 19, .3)",
                        }}
                      ></tr>
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
        >
          <Button
            onClick={createNetProject}
            type="submit"
            variant="warning"
            className="btn-dataupdate"
            style={{ fontSize: "14px" }}
          >
            บันทึกข้อมูล
          </Button>
        </CardFooter>
      </Col>
    </>
  );
}

export default DAddSplitBudget;
