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

function CSD_detail({ setIdProjects, switchToCSDDetail2 }) {
  const [projectList, setProjectList] = useState([]);
  // const divition = "สภา";

  const ad_name = "aaaaaaaaaaaa";
  //ตัวแปรรับค่าจาก database
  const storedUserData = sessionStorage.getItem("user");
  const storedUser = storedUserData ? JSON.parse(storedUserData) : {};
  const studentuser = storedUser.username;

  console.log(storedUser);
  // console.log( storedUser);

  // ตัวแปรส่งค่าไปยัง database
  const [id_student, setId_student] = useState(studentuser);
  const [project_name, setProjectName] = useState("");
  const [project_number, setProjectNumber] = useState("");
  const [divition, setDivition] = useState("");
  const [years, setYears] = useState("");
  const [codeclub, setCodeClub] = useState(""); //code_some
  const [yearly, setYearly] = useState(""); // Assuming yearly is a number
  const [yearly_count, setYearlyCount] = useState(""); // Assuming yearly_countsketch is a number
  const [yearly_countsketch, setYearlyCountSketch] = useState(""); // Assuming yearly_countsketch is a number
  const [responsible_agency, setResponsibleAgency] = useState("");
  const [academic_year, setAcademicYear] = useState("");
  const [advisor_name, setAdvisorName] = useState("");
  const [person1_name, setPerson1Name] = useState("");
  const [person1_contact, setPerson1Contact] = useState("");
  const [person2_name, setPerson2Name] = useState("");
  const [person2_contact, setPerson2Contact] = useState("");
  const [person3_name, setPerson3Name] = useState("");
  const [person3_contact, setPerson3Contact] = useState("");

  //
  const minDate = new Date();

  // *********************************************************
  const [userList, setUserList] = useState([]);
  const getUsers = () => {
    Axios.get("http://localhost:3001/student/users").then((response) => {
      setUserList(response.data);
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    const user = userList.find((user) => user.id_student === id_student);
    if (user) {
      console.log("user");
      console.log(user);
      // console.log()
      const yearstr = "ปีการศึกษา 25" + user.yearly;
      setYearly(yearstr);
      setDivition(user.clubName);
      setCodeClub(user.codebooksome);
    }
  }, [userList, id_student]);
  // *********************************************************

  const addBasicProject = () => {
    Axios.get(
      `http://localhost:3001/student/project/getcodeclub/${codeclub}`
    ).then((response) => {
      const existingProject = response.data.find(
        (project) => project.codeclub === codeclub
      );
      if (existingProject) {
        const currentYearlyCount = parseInt(
          existingProject.yearly_countsketch,
          10
        );
        const updatedYearlyCount = currentYearlyCount + 1;
        const formattedYearlyCount = String(updatedYearlyCount).padStart(
          2,
          "0"
        );
        // setProjectNumber หลังกรอกครบทุกหน้าเรียบร้อยแล้ว
        // setProjectNumber(codeclub+formattedYearlyCount)

        createProject(formattedYearlyCount);
        const newProjectId = response.data[0].id; // Assuming the id is the correct property
        setIdProjects(newProjectId + 1);
      } else {
        // If project_number doesn't exist, create a new project with yearly_count set to 1
        createProject("01");
      }
    });
  };

  const createProject = (yearlyCountsketch) => {
    Axios.post("http://localhost:3001/student/project/create/", {
      id_student: id_student,
      project_name: project_name,
      project_number: project_number,
      codeclub: codeclub,
      yearly: yearly,
      yearly_count: yearly_count,
      yearly_countsketch: yearlyCountsketch,
      responsible_agency: responsible_agency,
      academic_year: academic_year,
      advisor_name: advisor_name,
      person1_name: person1_name,
      person1_contact: person1_contact,
      person2_name: person2_name,
      person2_contact: person2_contact,
      person3_name: person3_name,
      person3_contact: person3_contact,
    }).then(() => {
      // Assuming setProjectList is a state setter function for your projectList state
      setProjectList([
        ...projectList,
        {
          id_student: id_student,
          project_name: project_name,
          project_number: project_number,
          codeclub: codeclub,
          yearly: yearly,
          yearly_count: yearly_count,
          yearly_countsketch: yearly_countsketch,
          responsible_agency: responsible_agency,
          academic_year: academic_year,
          advisor_name: advisor_name,
          person1_name: person1_name,
          person1_contact: person1_contact,
          person2_name: person2_name,
          person2_contact: person2_contact,
          person3_name: person3_name,
          person3_contact: person3_contact,
        },
      ]);
    });

    // window.scrollTo({ top: 0, behavior: 'smooth' });
    switchToCSDDetail2();
  };

  return (
    <>
      {/* วนค่าจากdatabase  */}
      <div style={{ width: "79%", marginLeft: "1%" }}>
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
              ข้อมูลพื้นฐานโครงการ
            </div>
          </CardHeader>

          <CardBody>
            <Table striped="columns">
              <tbody>
                {/* ชื่อโครงการ */}
                <tr style={{ backgroundColor: "white" }}>
                  <td className="head-side-td" style={{ verticalAlign: "top" }}>
                    <div>ชื่อโครงการ</div>
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
                {/* หน่วยงานที่รับผิดชอบ db */}
                <tr style={{ backgroundColor: "white" }}>
                  <td
                    className="head-side-td-swp"
                    style={{ verticalAlign: "top" }}
                  >
                    <div>หน่วยงานที่รับผิดชอบ</div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <Form.Control
                      className="font-form-control"
                      size="sm"
                      type="text"
                      placeholder="Enter ID Code"
                      value={divition}
                      disabled
                    />
                  </td>
                </tr>
                {/* ปีการศึกษา db */}
                <tr style={{ backgroundColor: "white" }}>
                  <td className="head-side-td" style={{ verticalAlign: "top" }}>
                    <div>ปีการศึกษา</div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <Form.Control
                      className="font-form-control"
                      size="sm"
                      type="text"
                      placeholder="Enter ID Code"
                      value={yearly}
                      disabled
                    />
                  </td>
                </tr>
                {/* ที่อาจารย์ปรึกษา  db */}
                <tr style={{ backgroundColor: "white" }}>
                  <td
                    className="head-side-td-swp"
                    style={{ verticalAlign: "top" }}
                  >
                    <div>อาจารย์ปรึกษา</div>
                    {/* <p className="detail-prodoc">
                      ข้อมูลอัตโนมัติจากหน่วยงานที่รับผิดชอบ
                    </p> */}
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <Form.Control
                      className="font-form-control"
                      size="sm"
                      type="text"
                      placeholder="Enter ID Code"
                      value={ad_name}
                      disabled
                    />
                  </td>
                </tr>
                {/* ผู้รับผิดชอบโครงการ */}
                <tr style={{ backgroundColor: "white" }}>
                  
                  <td className="head-side-td" style={{ verticalAlign: "top" }}>
                    <div>ผู้รับผิดชอบโครงการ</div>
                  </td>
                  <td className="back-side-td">

           
                  <button >เพิ่ม</button>
                  

                    <Table striped="columns">
                      <thead
                        style={{ backgroundColor: "rgba(255, 139, 19, 0)" }}
                      >
                        <tr
                          style={{ backgroundColor: "rgba(255, 139, 19, 1)" }}
                        >
                          <th
                            style={{
                              width: "30%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            <div style={{ fontSize: "14px" }}>ชื่อ-สกุล</div>
                          </th>
                          <th
                            style={{
                              width: "30%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            <div style={{ fontSize: "14px" }}>เบอร์ติดต่อ</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* คนที่ 1 */}
                        <tr style={{ backgroundColor: "white" }}>
                          {/* ชื่อ คนที่ 1  */}
                          <td style={{ verticalAlign: "middle" }}>
                            <Form.Control
                              className="font-form-control"
                              size="sm"
                              type="text"
                              placeholder="ชื่อ ผู้รับผิดชอบโครงการ คนที่ 1"
                              onChange={(event) => {
                                setPerson1Name(event.target.value);
                              }}
                            />
                          </td>
                          {/* เบอร์ คนที่ 1 */}
                          <td style={{ verticalAlign: "middle" }}>
                            <Form.Control
                              className="font-form-control"
                              size="sm"
                              type="text"
                              placeholder="เบอร์ติดต่อ ผู้รับผิดชอบโครงการ คนที่ 1"
                              onChange={(event) => {
                                setPerson1Contact(event.target.value);
                              }}
                            />
                          </td>
                        </tr>
                        {/* คนที่ 2 */}
                        <tr>
                          {/* ชื่อ คนที่ 2 */}
                          <td style={{ verticalAlign: "middle" }}>
                            <Form.Control
                              className="font-form-control"
                              size="sm"
                              type="text"
                              placeholder="ชื่อ ผู้รับผิดชอบโครงการ คนที่ 2"
                              onChange={(event) => {
                                setPerson2Name(event.target.value);
                              }}
                            />
                          </td>
                          {/* เบอร์ คนที่ 2 */}
                          <td style={{ verticalAlign: "middle" }}>
                            <Form.Control
                              className="font-form-control"
                              size="sm"
                              type="text"
                              placeholder="เบอร์ติดต่อ ผู้รับผิดชอบโครงการ คนที่ 2"
                              onChange={(event) => {
                                setPerson2Contact(event.target.value);
                              }}
                            />
                          </td>
                        </tr>
                        {/* คนที่ 3 */}
                        <tr style={{ backgroundColor: "white" }}>
                          {/* ชื่อ คนที่ 3 */}
                          <td style={{ verticalAlign: "middle" }}>
                            <Form.Control
                              className="font-form-control"
                              size="sm"
                              type="text"
                              placeholder="ชื่อ ผู้รับผิดชอบโครงการ คนที่ 3"
                              onChange={(event) => {
                                setPerson3Name(event.target.value);
                              }}
                            />
                          </td>
                          {/* เบอร์ คนที่ 3 */}
                          <td style={{ verticalAlign: "middle" }}>
                            <Form.Control
                              className="font-form-control"
                              size="sm"
                              type="text"
                              placeholder="เบอร์ติดต่อ ผู้รับผิดชอบโครงการ คนที่ 3"
                              onChange={(event) => {
                                setPerson3Contact(event.target.value);
                              }}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </td>
                </tr>
                {/* อารจารย์ผู้ดูแลโครงการ */}
                {/* <tr >
                                    <td className='head-side-td'>อารจารย์ผู้ดูแลโครงการ<p className='detail-prodoc'>กรณีที่ผู้ดูแลโครงการไม่ใช่อาจารย์ที่ปรึกษา</p></td>
                                    <td style={{ verticalAlign: "middle" }}>
                                        <Form.Control
                                            size="sm"
                                            type="text"
                                            placeholder="ชื่ออาจารย์ผู้ดูแลโครงการ"
                                            onChange={(event) => {
                                                setAdvisorName(event.target.value)
                                            }}
                                        />
                                    </td>
                                </tr> */}
              </tbody>
            </Table>
          </CardBody>

          <CardFooter
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              onClick={addBasicProject}
              type="submit"
              variant="warning"
              className="btn-dataupdate"
              style={{ fontSize: "14px" }}
            >
              บันทึกข้อมูล
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
export default CSD_detail;
