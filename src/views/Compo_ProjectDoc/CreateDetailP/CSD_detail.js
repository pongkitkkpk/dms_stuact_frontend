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

  //ตัวแปรรับค่าจาก database
  const storedUserData = sessionStorage.getItem("user");
  const storedUser = storedUserData ? JSON.parse(storedUserData) : {};
  const studentuser = storedUser.username;
  const strcodebooksomeoutyear = storedUser.codebooksomeoutyear

  // console.log( storedUser);

  // ตัวแปรส่งค่าไปยัง database
  const [id_student, setId_student] = useState(studentuser);
  const [project_name, setProjectName] = useState("");
  const [project_phase, setProject_phase] = useState("0");
  const [project_number, setProject_number] = useState("");
  const [codeclub, setCodeClub] = useState(""); //code_some
  const [codebooksomeoutyear, setCodebooksomeoutyear] = useState(strcodebooksomeoutyear);
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

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [is_1side, setIs_1side] = useState(false);
  const [is_2side, setIs_2side] = useState(false);
  const [is_3side, setIs_3side] = useState(false);
  const [is_4side, setIs_4side] = useState(false);
  const [is_5side, setIs_5side] = useState(false);

  //
  const minDate = new Date();

  // เพิ่มสถานที่
  const [personCount, setPersonCount] = useState(1);
  const increasePersonCount = () => {
    if (personCount < 3) {
      setPersonCount(personCount + 1);
    }
  };
  const decreasePersonCount = () => {
    if (personCount > 1) {
      setPersonCount(personCount - 1);
      // Reset corresponding studentTypeNumber state variables to 0
      switch (personCount) {
        case 2:
          setPerson3Name("")
          setPerson3Contact("")
          break;
        case 1:
          setPerson2Name("")
          setPerson2Contact("")
          break;
        case 0:
          setPerson1Name("")
          setPerson1Contact("")
          break;
        default:
        // Handle other cases if needed
      }
    }
  };
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
      setYearly(user.yearly);
      setResponsibleAgency(user.clubName);
      setCodeClub(user.codebooksome);
    }
  }, [userList, id_student]);

  // หาอาจารย์ที่ปรึกษา
  useEffect(() => {

    const user = userList.find((user) => user.clubName === storedUser.clubName &&
      user.yearly == storedUser.yearly &&
      user.position === "Ad"
    );

    if (user) {
      setAdvisorName(user.name_student);

    } else {
      // If no matching user is found, you might want to reset the state variables
      // setYearly("");
      // setResponsibleAgency("");
      // setCodeClub("");
    }
  }, [userList, studentuser, storedUser]);

  // *********************************************************

  const addBasicProject = () => {
    Axios.get(
      `http://localhost:3001/student/project/getcodeclub/${codeclub}`
    ).then((response) => {
      const existingProject = response.data.find(
        (project) => project.codeclub === codeclub
      );
      if (existingProject) {
        const currentYearlyCount = parseInt(existingProject.yearly_countsketch, 10);
        const updatedYearlyCount = currentYearlyCount + 1;
        const formattedYearlyCount = String(updatedYearlyCount).padStart(2, "0");
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
      codebooksomeoutyear: codebooksomeoutyear,
      project_phase: project_phase,
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
      is_1side: is_1side,
      is_2side: is_2side,
      is_3side: is_3side,
      is_4side: is_4side,
      is_5side: is_5side
    }).then(() => {
      // Assuming setProjectList is a state setter function for your projectList state
      setProjectList([
        ...projectList,
        {
          id_student: id_student,
          project_name: project_name,
          project_number: project_number,
          codeclub: codeclub,
          codebooksomeoutyear: codebooksomeoutyear,
          project_phase: project_phase,
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
          is_1side: is_1side,
          is_2side: is_2side,
          is_3side: is_3side,
          is_4side: is_4side,
          is_5side: is_5side
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
                      value={responsible_agency}
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
                      value={"ปีการศึกษา 25" + yearly}
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
                      value={advisor_name}
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
                        {Array.from({ length: personCount }).map(
                          (_, index) => (
                            <tr tr key={index} style={{ backgroundColor: "white" }}>

                              <td style={{ verticalAlign: "middle" }}>
                                <Form.Control
                                  className="font-form-control"
                                  size="sm"
                                  type="text"
                                  placeholder={`ชื่อ ผู้รับผิดชอบโครงการ คนที่ ${index + 1}`}
                                  onChange={(event) => {
                                    switch (index) {
                                      case 0:
                                        setPerson1Name(event.target.value);
                                        break;
                                      case 1:
                                        setPerson2Name(event.target.value);
                                        break;
                                      case 2:
                                        setPerson3Name(event.target.value);
                                        break;
                                      default:
                                      // Handle other cases if needed
                                    }
                                  }
                                  }
                                />
                              </td>
                              {/* เบอร์ คนที่ */}
                              <td style={{ verticalAlign: "middle" }}>
                                <Form.Control
                                  className="font-form-control"
                                  size="sm"
                                  type="text"
                                  placeholder={`เบอร์ติดต่อ ผู้รับผิดชอบโครงการ คนที่ ${index + 1}`}
                                  onChange={(event) => {
                                    switch (index) {
                                      case 0:
                                        setPerson1Contact(event.target.value);
                                        break;
                                      case 1:
                                        setPerson2Contact(event.target.value);
                                        break;
                                      case 2:
                                        setPerson3Contact(event.target.value);
                                        break;
                                      default:
                                      // Handle other cases if needed
                                    }
                                  }}
                                />
                              </td>
                            </tr>
                          ))}

                      </tbody>
                    </Table>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {personCount < 3 && (
                        <Button
                          variant="success"
                          className="ml-5 mb-3 btn-budget-increase border-success"
                          onClick={increasePersonCount}
                        >
                          <div style={{ fontSize: "14px" }}>เพิ่มบุคคล</div>
                        </Button>
                      )}
                      {personCount > 1 && (
                        <Button
                          variant="danger"
                          className="ml-5 mb-3 btn-budget-decrease border-danger"
                          onClick={decreasePersonCount}
                        >
                          <div style={{ fontSize: "14px" }}>ลดบุคคล</div>
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>


                {/* ข้อ 5 เลือก 5 ด้าน  db */}
                <tr style={{ backgroundColor: "white" }}>
                  <td
                    className="head-side-td-swp"
                    style={{ verticalAlign: "top" }}
                  >
                    <div>
                      แผนยุทธศาสตร์
                    </div>
                    <div>การพัฒนา</div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <label style={{ marginLeft: "10px", fontSize: "14px", color: "black" }}>
                      <input
                        type="checkbox"
                        value="1"
                        checked={is_1side}
                        onChange={() => setIs_1side(!is_1side)}

                      />
                      {`    `}ด้านวิชาการที่ส่งเสริมคุณลักษณะบัณฑิตที่พึงประสงค์
                    </label>
                    <br />
                    <label style={{ marginLeft: "10px", fontSize: "14px", color: "black" }}>
                      <input
                        type="checkbox"
                        value="2"
                        checked={is_2side}
                        onChange={() => setIs_2side(!is_2side)}
                      />
                      {`    `}ด้านกีฬาหรือการส่งเสริมสุขภาพ
                    </label>
                    <br />
                    <label style={{ marginLeft: "10px", fontSize: "14px", color: "black" }}>
                      <input
                        type="checkbox"
                        value="3"
                        checked={is_3side}
                        onChange={() => setIs_3side(!is_3side)}
                      />
                      {`    `}ด้านบำเพ็ญประโยชน์หรือรักษาสิ่งแวดล้อม
                    </label>
                    <br />
                    <label style={{ marginLeft: "10px", fontSize: "14px", color: "black" }}>
                      <input
                        type="checkbox"
                        value="4"
                        checked={is_4side}
                        onChange={() => setIs_4side(!is_4side)}
                      />
                      {`    `}ด้านเสริมสร้างคุณธรรมและจริยธรรม
                    </label>
                    <br />
                    <label style={{ marginLeft: "10px", fontSize: "14px", color: "black" }}>
                      <input
                        type="checkbox"
                        value="5"
                        checked={is_5side}
                        onChange={() => setIs_5side(!is_5side)}
                      />
                      {`    `}ด้านส่งเสริมศิลปะและวัฒนธรรม
                    </label>
                    {/* Add more checkboxes as needed */}
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
              marginBottom: "10px"
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
      </div >
    </>
  );
}
export default CSD_detail;
