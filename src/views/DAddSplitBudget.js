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
  const [AgnecyGroupName, setAgnecyGroupName] = useState("");
  const [yearly, setYearly] = useState("2566");

  const [campus, setCampus] = useState("Bangkok");
  const [codedivision, setCodedivision] = useState("");
  const [codeagency, setCodeagency] = useState("");
  const [clubName, setClubname] = useState("");
  const [net_budget, setNetBudget] = useState("");



  const createNetProject = () => {
    Axios.post(`http://localhost:3001/admin/createNetProject`, {
      project_name: project_name,
      AgnecyGroupName: AgnecyGroupName,
      responsible_agency: clubName,
      campus: campus,
      yearly: yearly,
      net_budget: net_budget,
    })
      .then((response) => {
        // Handle success response
        console.log("Net project created successfully:");
      })
      .catch((error) => {
        // Handle error response
        console.error("Error creating net project:", error);
        // You can display an error message to the user or perform other actions here
      });
      Swal.fire({
        title: `บันทึกการ เพิ่มงบประมาณโครงการ ${project_name} เรียบร้อยแล้ว`,
        text: "ใส่ข้อมูล หมวดถัดไป",
        icon: "success",
      }).then(() => {
        window.location.reload();
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
              marginBottom: "-1px",
              marginTop: "3px",
              fontSize: "16px",
              color: "white",
            }}
          >
            เพิ่มงบประมาณโครงการ
          </div>
        </CardHeader>
        <CardBody
          style={{
            backgroundColor: "white",
            paddingBottom: "0px",
            marginBottom: "0px",
          }}
        >
          <Table striped="columns" style={{ marginBottom: "0px" }}>
            <tbody>
              <tr style={{ backgroundColor: "white" }}>
                <Table striped="columns">
                  <thead style={{ backgroundColor: "rgba(255, 139, 19, 0)" }}>
                    <tr style={{ backgroundColor: "rgba(255, 139, 19, 1)" }}>
                      <th
                        style={{
                          width: "35%",
                          color: "white",
                          // fontWeight: "bold",
                        }}
                      >
                        ชื่อโครงการ
                      </th>

                      <th
                        style={{
                          width: "15%",
                          color: "white",
                          // fontWeight: "bold",
                        }}
                      >
                        วิทยาเขต
                      </th>

                      <th
                        style={{
                          width: "25%",
                          color: "white",
                          // fontWeight: "bold",
                        }}
                      >
                        หน่วยงาน
                      </th>

                      <th
                        style={{
                          width: "11%",
                          color: "white",
                          // fontWeight: "bold",
                        }}
                      >
                        ปีการศึกษา
                      </th>

                      <th
                        style={{
                          width: "16%",
                          color: "white",
                          // fontWeight: "bold",
                        }}
                      >
                        งบประมาณสุทธิ
                      </th>
                      <th
                        style={{
                          width: "10%",
                          color: "white",
                          // fontWeight: "bold",
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
                          className="form-select font-form-control"
                          style={{ width: "100%", height: "39px" }}
                        >
                          <option value="">
                            <div>กรุณาเลือก วิทยาเขต</div>
                          </option>
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
                            console.log(selectedText)
                            console.log(event.target.selectedIndex)
                            const agencyGroupName =
                              event.target.options[event.target.selectedIndex].getAttribute('data-agencygroup');

                            setClubname(selectedText);
                            setAgnecyGroupName(agencyGroupName);
                          }}
                          required
                          className="form-select font-form-control"
                          style={{ width: "100%", height: "39px" }}
                        >
                          <option value="">
                            <div>กรุณาเลือก หน่วยงาน</div>
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
                                            data-agencygroup={agencyGroup.name}
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
              </tr>
            </tbody>
          </Table>
          <CardFooter
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "10px",
              paddingBottom: "20px",
              border: "none",
              backgroundColor: "white",
            }}
          >
            <Button
              onClick={createNetProject}
              type="submit"
              variant="success"
              className="btn-budget-increase"
              style={{ fontSize: "14px" }}
            >
              บันทึกข้อมูล
            </Button>
          </CardFooter>
        </CardBody>
      </Col>
    </>
  );
}

export default DAddSplitBudget;
