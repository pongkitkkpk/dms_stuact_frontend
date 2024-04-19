import React, { useState, useEffect } from "react";
import { Table, Card, Button, Col, Row } from "react-bootstrap";
import Axios from "axios";

function DetailBudgetAdmin() {
    const storedUserData = sessionStorage.getItem("user");
    const storedUser = storedUserData ? JSON.parse(storedUserData) : {};


    const [clubName, setClubName] = useState("");
    const [yearly, setYearly] = useState("");
    const [responsible_agency, setResponsible_agency] = useState("");
    const [ProjectList, setProjectList] = useState([]);
    const [totalNetBudget, setTotalNetBudget] = useState(0);

    const [totalAllowBudget, setTotalAllowBudget] = useState(0);
    const [totalLeftowBudget, setTotalLeftBudget] = useState(0);

    const [BudgetList, setBudgetList] = useState([]);

    useEffect(() => {
        const getDetailProject = () => {
            Axios.get(
                `http://localhost:3001/admin/getallNetProject/`
            ).then((response) => {
                setBudgetList(response.data);
            }).catch((error) => {
                console.error("Error fetching project details:", error);
            });

        };
        getDetailProject();
    }, []);


    useEffect(() => {
        const getDetailProject = () => {
            Axios.get(
                "http://localhost:3001/admin/allprojectshavenumber"
            ).then((response) => {
                setProjectList(response.data);
            }).catch((error) => {
                console.error("Error fetching project details:", error);
            });
        };
        getDetailProject();
    }, []);

    useEffect(() => {
        // console.log(storedUser);
        // console.log(ProjectList);
        console.log(BudgetList);
    }, [storedUser, ProjectList,BudgetList]);

      useEffect(() => {
        let sumnet = 0;
        let sumallow = 0;
        BudgetList.forEach((Budget) => {
          console.log()
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
                <form>
                    <label htmlFor="yearly">Yearly:</label>
                    <input
                        type="text"
                        id="yearly"
                        name="yearly"
                        value={yearly}
                        onChange={(event) => setYearly(event.target.value)}
                    />
                </form>

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
                        {ProjectList.map((project, index) => (
                            <tr key={index} style={{ backgroundColor: "white" }}>
                                <td>{project.project_number}</td>
                                <td>{project.project_name}</td>
                                <td>{project.responsible_agency}</td>
                                <td>{project.yearly}</td>
                                <td>{project.net_budget}</td>
                                <td>{project.allow_budget}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default DetailBudgetAdmin;
