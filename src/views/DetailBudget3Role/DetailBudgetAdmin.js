import React, { useState, useEffect } from "react";
import { Table, Card, Button, Col, Row, Form } from "react-bootstrap";
import Axios from "axios";

function DetailBudgetAdmin() {
  const storedUserData = sessionStorage.getItem("user");
  const storedUser = storedUserData ? JSON.parse(storedUserData) : {};

  const [clubName, setClubName] = useState("");
  const currentYear = new Date().getFullYear();
  const [yearly, setYearly] = useState((currentYear + 543).toString());

  const [responsible_agency, setResponsible_agency] = useState("");
  const [ProjectList, setProjectList] = useState([]);
  const [totalNetBudget, setTotalNetBudget] = useState(0);

  const [totalAllowBudget, setTotalAllowBudget] = useState(0);
  const [totalLeftowBudget, setTotalLeftBudget] = useState(0);

  const [BudgetList, setBudgetList] = useState([]);
  const [AgnecyGroupName, setAgnecyGroupName] = useState("ทั้งหมด");





  // หลังเลือกดูแต่ละฝ่ายงาน
  useEffect(() => {
    if (AgnecyGroupName !== 'ทั้งหมด') {
      Axios.get(`http://localhost:3001/admin/getSelectGroupNetProject/${AgnecyGroupName}/${yearly}`)
        .then((response) => {
          setBudgetList(response.data);
        })
        .catch((error) => {
          console.error("Error fetching project details:", error);
        });
    } else {
      Axios.get(`http://localhost:3001/admin/getyearlyNetProject/${yearly}`)
        .then((response) => {
          setBudgetList(response.data);
        })
        .catch((error) => {
          console.error("Error fetching project details:", error);
        });
    }

  }, [AgnecyGroupName, yearly]);

  // หลังเลือกดูแต่ละฝ่ายงาน
  useEffect(() => {
    if (AgnecyGroupName !== 'ทั้งหมด') {
      Axios.get(`http://localhost:3001/admin/getsomeprojectshavenumber/${AgnecyGroupName}/${yearly}`)
        .then((response) => {
          setProjectList(response.data);
        })
        .catch((error) => {
          console.error("Error fetching project details:", error);
        });
    } else {
      Axios.get(`http://localhost:3001/admin/yearlyprojectshavenumber/${yearly}`)
        .then((response) => {
          setProjectList(response.data);
        })
        .catch((error) => {
          console.error("Error fetching project details:", error);
        });
    }

  }, [AgnecyGroupName, yearly]);

  useEffect(() => {
    console.log("yearly")
    console.log(yearly)
    console.log(BudgetList)
    console.log(ProjectList)
  }, [BudgetList, yearly,ProjectList])


  // ตอนทั้งหมด แยกแต่ละฝ่าย
  const [groupedProjects, setgroupedProjects] = useState([]);
  useEffect(() => {
    if (AgnecyGroupName === 'ทั้งหมด') {
      const groupedProjects = {
        "องค์กรนักศึกษาส่วนกลาง": [],
        "ชมรมฝ่ายกีฬา": [],
        "ชมรมฝ่ายอาสาพัฒนา": [],
        "ชมรมฝ่ายบำเพ็ญประโยชน์": [],
        "ชมรมฝ่ายศิลปวัฒนธรรม": []
      };

      BudgetList.forEach((project) => {
        const groupName = project.AgnecyGroupName;
        if (groupedProjects[groupName]) {
          groupedProjects[groupName].push(project);
        }
      });
      setgroupedProjects(groupedProjects)
      console.log("Grouped Projects:", groupedProjects);
    }
  }, [AgnecyGroupName, BudgetList]);




  useEffect(() => {
    let sumnet = 0;
    let sumallow = 0;
    BudgetList.forEach((Budget) => {
      console.log();
      if (Budget.net_budget) {
        const net_budget = Budget.net_budget.replace(/,/g, "");
        sumnet += parseFloat(net_budget);
      }
      if (Budget.allow_budget) {
        const allow_budget = Budget.allow_budget.replace(/,/g, "");
        sumallow += parseFloat(allow_budget);
      }
    });
    setTotalNetBudget(sumnet);
    setTotalAllowBudget(sumallow);
  }, [BudgetList]);

  useEffect(() => {
    setTotalLeftBudget(totalNetBudget - totalAllowBudget);
  }, [totalNetBudget, totalAllowBudget]);

  return (
    <>
      <h1>budget admin</h1>
      
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
                      style={{
                        backgroundColor: "blue",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      งบประมาณที่อนุมัติ
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>{`${totalNetBudget.toLocaleString()}`}</Card.Title>
                      <Card.Text>อนุมัติ</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                {/* งบประมาณตั้งเบิกแล้ว */}
                <Col>
                  <Card>
                    <Card.Header
                      style={{
                        backgroundColor: "green",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      งบประมาณตั้งเบิกแล้ว
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>{`${totalAllowBudget.toLocaleString()}`}</Card.Title>
                      <Card.Text>ยอดเงินปัจจุบัน</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                {/* งบประมาณคงเหลือ */}
                <Col>
                  <Card>
                    <Card.Header
                      style={{
                        backgroundColor: "green",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      งบประมาณคงเหลือ
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>{`${totalLeftowBudget.toLocaleString()}`}</Card.Title>
                      <Card.Text>คงเหลือ</Card.Text>
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
        <Form.Control
          as="select"
          className="font-form-control"
          size="sm"
          onChange={(event) => {
            const selectedValue = event.target.value;
            setYearly(selectedValue)
          }}
        >
          <option value="">เลือกปีการศึกษา</option>
          {Array.from(
            new Set(BudgetList.map((personName) => personName.yearly))
          ) // Filter unique years
            .sort((a, b) => a - b) // Sort years
            .map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
        </Form.Control>

        <Form.Control
          as="select"
          className="font-form-control"
          size="sm"
          onChange={(e) => {
            const selectedText =
              e.target.options[e.target.selectedIndex]
                .text;
            setAgnecyGroupName(selectedText);
          }}
          required
          style={{ width: "70%" }} // Set the width to fit the container
        >
          <option>กรุณาเลือก</option>
          <option value="ทั้งหมด">
            ทั้งหมด
          </option>
          <option value="องค์กรนักศึกษาส่วนกลาง">
            องค์กรนักศึกษาส่วนกลาง
          </option>
          <option value="ชมรมฝ่ายวิชาการ">
            ชมรมฝ่ายวิชาการ
          </option>
          <option value="ชมรมฝ่ายศิลปวัฒนธรรม">
            ชมรมฝ่ายศิลปวัฒนธรรม
          </option>
          <option value="ชมรมฝ่ายอาสาพัฒนาและบำเพ็ญประโยชน์">
            ชมรมฝ่ายอาสาพัฒนาและบำเพ็ญประโยชน์
          </option>
          <option value="ชมรมฝ่ายกีฬา">
            ชมรมฝ่ายกีฬา
          </option>
        </Form.Control>


        {AgnecyGroupName !== 'ทั้งหมด' && (
          <Table striped="columns">
            <thead style={{ backgroundColor: "rgba(255, 139, 19, 0)" }}>
              <tr style={{ backgroundColor: "rgba(255, 139, 19, 1)" }}>
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
              {ProjectList.map((project, index) => (
                <tr key={index} style={{ backgroundColor: "white" }}>
                  <td>{project.project_number}</td>
                  <td>{project.project_name}</td>
                  <td>{project.responsible_agency}</td>
                  <td>{project.yearly}</td>
                  <td>{project.net_budget}</td>
                  <td>{Number(project.allow_budget).toLocaleString()}</td>
                  
                </tr>
              ))}
            </tbody>
          </Table>
        )}

        {AgnecyGroupName === 'ทั้งหมด' && (
          <Table striped="columns">
            <thead style={{ backgroundColor: "rgba(255, 139, 19, 0)" }}>
              <tr style={{ backgroundColor: "rgba(255, 139, 19, 1)" }}>
                <th
                  style={{
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  <div>หน่วยงาน</div>
                </th>
                <th
                  style={{
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  <div>ปีการศึกษา</div>
                </th>
                <th
                  style={{
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  <div>งบประมาณที่อนุมัติ</div>
                </th>
                <th
                  style={{
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  <div>งบประมาณที่ใช้จริง</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(groupedProjects).map(([groupName, projects], index) => {
                const totalNetBudget = projects.reduce((total, project) => {
                  return total + parseInt(project.net_budget.replace(/,/g, ''), 10);
                }, 0);

                const totalAllowBudget = projects.reduce((total, project) => {
                  return total + (project.allow_budget ? parseInt(project.allow_budget.replace(/,/g, ''), 10) : 0);
                }, 0);

                return (
                  <tr key={index} style={{ backgroundColor: "white" }}>
                    <td>{groupName}</td>
                    <td>{/* You need to implement logic to calculate total yearly */}</td>
                    <td>{totalNetBudget.toLocaleString()}</td>
                    <td>{totalAllowBudget.toLocaleString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}



      </div>
    </>
  );
}

export default DetailBudgetAdmin;
