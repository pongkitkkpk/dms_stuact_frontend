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
  const startYear = selectYear - 5;
  const endYear = selectYear + 5;
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
        `http://localhost:3001/student/studentallprojects/${clubName}/${yearly}`
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
        `http://localhost:3001/student/project/getBudgetclubName/${clubName}/${yearly}`
      ).then((response) => {
        setBudgetList(response.data);
      }).catch((error) => {
        console.error("Error fetching project details:", error);
      });
    }
  }, [responsible_agency, yearly]);

  useEffect(() => {
    console.log(storedUser);
  }, [storedUser]);

  useEffect(() => {
    let sumnet = 0;
    let sumallow = 0;
    ProjectList.forEach((project) => {
      console.log()
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
  }, [ProjectList]);


  useEffect(() => {
    setTotalLeftBudget(totalNetBudget - totalAllowBudget)
  }, [totalNetBudget, totalAllowBudget])


  return (
    <>


      <Row>
        <Col>
          <Card>
            <Card.Header
              style={{
                backgroundColor: "rgba(255, 139, 19, 1)",
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              <div>{`งบประมาณของ ${clubName}`}</div>
            </Card.Header>
            <Card.Body>
              <Row>
                {/* งบประมาณที่อนุมัติ */}
                <Col>
                  <Card>
                    <Card.Header
                      style={{ backgroundColor: "blue", color: "white", fontWeight: "bold" }}
                    >
                      งบประมาณที่อนุมัติ
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>{`${totalNetBudget.toLocaleString()}`}</Card.Title>
                      <Card.Text>
                        อนุมัติ
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                {/* งบประมาณตั้งเบิกแล้ว */}
                <Col>
                  <Card>
                    <Card.Header
                      style={{ backgroundColor: "green", color: "white", fontWeight: "bold" }}
                    >
                      งบประมาณตั้งเบิกแล้ว
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>{`${totalAllowBudget.toLocaleString()}`}</Card.Title>
                      <Card.Text>
                        ยอดเงินปัจับัน
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                {/* งบประมาณคงเหลือ */}
                <Col>
                  <Card>
                    <Card.Header
                      style={{ backgroundColor: "green", color: "white", fontWeight: "bold" }}
                    >
                      งบประมาณคงเหลือ
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>{`${totalLeftowBudget.toLocaleString()}`}</Card.Title>
                      <Card.Text>
                        คงเหลือ
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>



      <h1>{`${clubName}`}</h1>
      <div>
        <Form.Group>

          <Form.Control
            as="select"
            className="font-form-control"
            size="sm"
            onChange={handleChange}
          >
            <option value="">เลือกปีการศึกษา(ทั้งหมด +- 7 ปี)</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </Form.Control>
        </Form.Group>


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
                  fontWeight: "bold",
                }}
              >
                <div>เลขรหัสโครงการ</div>
              </th>
              <th
                style={{
                  width: "30%",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                <div>ชื่อโครงการ</div>
              </th>
              <th
                style={{
                  width: "15%",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                <div>หน่วยงาน</div>
              </th>
              <th
                style={{
                  width: "10%",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                <div>ปีการศึกษา</div>
              </th>
              <th
                style={{
                  width: "20%",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                <div>งบประมาณที่อนุมัติ</div>
              </th>
              <th
                style={{
                  width: "20%",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                <div>งบประมาณที่ใช้จริง</div>
              </th>

            </tr>
          </thead>
          <tbody>
              {BudgetList.map((project, index) => {
                // Find the corresponding project in ProjectList
                const matchingProject = ProjectList.find(p => p.project_name === project.project_name);
                console.log("matchingProject")
                console.log(matchingProject)
                return (
                  <tr key={index} style={{ backgroundColor: "white" }}>
                    {matchingProject ? (
                      <td>{matchingProject.project_number}</td>
                    ) : (
                      <td></td>
                    )}
                    
                    <td>{project.project_name}</td>
                    <td>{project.responsible_agency}</td>
                    <td>{project.yearly}</td>
                    <td>{project.net_budget}</td>
                    <td>{Number(project.allow_budget).toLocaleString()}</td>

                    {/* Add additional data from matchingProject if needed */}

                  </tr>
                );
              })}
            </tbody>
        </Table>
      </div>
    </>
  );
}

export default DetailBudgetStudent;
