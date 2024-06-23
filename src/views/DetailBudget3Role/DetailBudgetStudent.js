import React, { useState, useEffect } from "react";
import { Table, Card, Button, Col, Row, Form } from "react-bootstrap";
import Axios from "axios";

function DetailBudgetStudent() {
  const storedUserData = sessionStorage.getItem("user");
  const storedUser = storedUserData ? JSON.parse(storedUserData) : {};
  const strclubName = storedUser.clubName;
  const stryearly = storedUser.yearly;
  const stragencyGroupName = storedUser.agencyGroupName;

  const [clubName, setClubName] = useState(strclubName);
  const [yearly, setYearly] = useState(stryearly);
  const selectYear = new Date().getFullYear() + 543;
  const startYear = selectYear - 10;
  const endYear = selectYear;
  const years = [];
  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setYearly(selectedValue);
  };
  const [responsible_agency, setResponsible_agency] = useState(stragencyGroupName);
  const [ProjectList, setProjectList] = useState([]);
  const [BudgetList, setBudgetList] = useState([]);
  const [totalNetBudget, setTotalNetBudget] = useState(0);
  const [totalAllowBudget, setTotalAllowBudget] = useState(0);
  const [totalLeftowBudget, setTotalLeftBudget] = useState(0);

  useEffect(() => {
    if (yearly) {
      Axios.get(
        `${process.env.REACT_APP_API_URL}/student/studentallprojects/${clubName}/${yearly}`
      ).then((response) => {
        setProjectList(response.data);
      }).catch((error) => {
        console.error("Error fetching project details:", error);
      });
    }
  }, [responsible_agency, yearly]);

  useEffect(() => {
    if (yearly) {
      Axios.get(
        `${process.env.REACT_APP_API_URL}/student/project/getBudgetclubName/${clubName}/${yearly}`
      ).then((response) => {
        setBudgetList(response.data);
      }).catch((error) => {
        console.error("Error fetching project details:", error);
      });
    }
  }, [responsible_agency, yearly]);


  useEffect(() => {
    let sumnet = 0;
    let sumallow = 0;
    BudgetList.forEach((project) => {
      if (project.net_budget) {
        const net_budget = project.net_budget.replace(/,/g, "");
        sumnet += parseFloat(net_budget);
      }
      if (project.allow_budget) {
        const allow_budget = project.allow_budget.replace(/,/g, "");
        sumallow += parseFloat(allow_budget);
      }
    });
    setTotalNetBudget(sumnet);
    setTotalAllowBudget(sumallow);
  }, [BudgetList]);


  useEffect(() => {
    setTotalLeftBudget(totalNetBudget - totalAllowBudget)
  }, [totalNetBudget, totalAllowBudget])


  return (
    <>
      <Col md="12">
        <Row>
          <Col>
            <Card>
              <Card.Header
                style={{
                  backgroundColor: "#535353",
                  color: "white",
                  // fontWeight: "bold",
                  textAlign: "center",
                  paddingBottom: "10px",
                  paddingTop: "10px"
                }}
              >
                <div>{`งบประมาณของ ${clubName}`}</div>
                {/* <div>งบประมาณกิจกรรมนักศึกษา {}</div> */}
              </Card.Header>
              <Card.Body style={{ paddingBottom: "0px", paddingTop: "2%", paddingLeft: "2%", paddingRight: "2%" }}>
                <Row>
                  {/* งบประมาณที่อนุมัติ */}
                  <Col>
                    <Card>
                      <Card.Header
                        style={{
                          backgroundColor: "#FF8B13",
                          color: "white",
                          textAlign: "center",
                          // fontWeight: "bold",
                          paddingBottom: "10px",
                          paddingTop: "10px"
                        }}
                      >
                        งบประมาณที่อนุมัติ
                      </Card.Header>
                      <Card.Body>
                        <Card.Title style={{ color: "#28a745", textAlign: "center" }}><div>{`${totalNetBudget.toLocaleString()}`}</div></Card.Title>
                        <Card.Text style={{ color: "#28a745", textAlign: "center", marginTop: "5px" }} className="font-form-control">อนุมัติ</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  {/* งบประมาณตั้งเบิกแล้ว */}
                  <Col>
                    <Card>
                      <Card.Header
                        style={{
                          backgroundColor: "#FF8B13",
                          color: "white",
                          // fontWeight: "bold",
                          paddingBottom: "10px",
                          paddingTop: "10px",
                          textAlign: "center"
                        }}
                      >
                        งบประมาณตั้งเบิกแล้ว
                      </Card.Header>
                      <Card.Body>
                        <Card.Title style={{ textAlign: "center", fontWeight: "bold" }}><div>{`${totalAllowBudget.toLocaleString()}`}</div></Card.Title>
                        <Card.Text style={{ textAlign: "center", marginTop: "5px" }} className="font-form-control">ยอดเงินปัจจุบัน</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  {/* งบประมาณคงเหลือ */}
                  <Col>
                    <Card>
                      <Card.Header
                        style={{
                          backgroundColor: "#FF8B13",
                          color: "white",
                          // fontWeight: "bold",
                          paddingBottom: "10px",
                          paddingTop: "10px",
                          textAlign: "center"
                        }}
                      >
                        งบประมาณคงเหลือ
                      </Card.Header>
                      <Card.Body>
                        <Card.Title style={{ textAlign: "center", fontWeight: "bold" }}><div>{`${totalLeftowBudget.toLocaleString()}`}</div></Card.Title>
                        <Card.Text style={{ textAlign: "center", marginTop: "5px" }} className="font-form-control">คงเหลือ</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>

                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>

      {/* <h1>{`${clubName}`}</h1> */}
      <Col md="12">
        <div style={{ marginLeft: "15px", marginTop: "0%", marginBottom: "1%" }}>
          <Row>
            <Col md="2" style={{ alignContent: "space-around" }}>
              <div style={{ fontSize: "15px" }}>งบประมาณของโครงการทั้งหมด</div>
            </Col>
            <Col md="2">
              <Form.Control
                as="select"
                className="font-form-control"
                size="sm"
                onChange={handleChange}
              >
                <option value="">เลือก ปีการศึกษา</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </Form.Control>
            </Col>
          </Row>
        </div>



        <Table striped="columns">
          <thead
            style={{ backgroundColor: "rgba(255, 139, 19, 0)" }}
          >
            <tr
              style={{ backgroundColor: "rgba(255, 139, 19, 1)" }}
            >
              <th
                style={{
                  width: "10%",
                  color: "white",
                  // fontWeight: "bold",
                }}
              >
                <div style={{fontSize:"12px"}}>เลขรหัสโครงการ</div>
              </th>
              <th
                style={{
                  width: "30%",
                  color: "white",
                  // fontWeight: "bold",
                }}
              >
                <div style={{fontSize:"12px"}}>ชื่อโครงการ</div>
              </th>
              <th
                style={{
                  width: "15%",
                  color: "white",
                  // fontWeight: "bold",
                }}
              >
                <div style={{fontSize:"12px"}}>หน่วยงาน</div>
              </th>
              <th
                style={{
                  width: "10%",
                  color: "white",
                  // fontWeight: "bold",
                }}
              >
                <div style={{fontSize:"12px"}}>ปีการศึกษา</div>
              </th>
              <th
                style={{
                  width: "20%",
                  color: "white",
                  // fontWeight: "bold",
                }}
              >
                <div style={{fontSize:"12px"}}>งบประมาณที่อนุมัติ</div>
              </th>
              <th
                style={{
                  width: "20%",
                  color: "white",
                  // fontWeight: "bold",
                }}
              >
                <div style={{fontSize:"12px"}}>งบประมาณที่ใช้จริง</div>
              </th>

            </tr>
          </thead>
          <tbody>
            {BudgetList.map((project, index) => {
              // Find the corresponding project in ProjectList
              const matchingProject = ProjectList.find(p => p.project_name === project.project_name);
              // console.log("matchingProject")
              // console.log(matchingProject)
              return (
                <tr key={index} style={{ backgroundColor: "white" }}>
                  {matchingProject ? (
                    <td><div>{matchingProject.project_number}</div></td>
                  ) : (
                    <td></td>
                  )}

                  <td><div>{project.project_name}</div></td>
                  <td><div>{project.responsible_agency}</div></td>
                  <td><div>{project.yearly}</div></td>
                  <td><div>{project.net_budget}</div></td>
                  <td><div>{Number(project.allow_budget).toLocaleString()}</div></td>

                  {/* Add additional data from matchingProject if needed */}

                </tr>
              );
            })}
          </tbody>
        </Table>
      </Col>
    </>
  );
}

export default DetailBudgetStudent;
