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
import Swal from 'sweetalert2';

function CSD_detail2({ id_projects, switchToCSDPerson }) {
  const [projectList, setProjectList] = useState([]);
  const [principles_and_reasons1, setPrinciplesAndReasons1] = useState("");
  const [principles_and_reasons2, setPrinciplesAndReasons2] = useState("");
  const [principles_and_reasons3, setPrinciplesAndReasons3] = useState("");
  const [principles_and_reasons4, setPrinciplesAndReasons4] = useState("");
  const [principles_and_reasons5, setPrinciplesAndReasons5] = useState("");
  const [objective1, setObjective1] = useState("");
  const [objective2, setObjective2] = useState("");
  const [objective3, setObjective3] = useState("");
  const [objective4, setObjective4] = useState("");
  const [objective5, setObjective5] = useState("");
  const [project_type1, setProjectType1] = useState("");
  const [project_type2, setProjectType2] = useState("");
  const [project_type3, setProjectType3] = useState("");
  const [project_type4, setProjectType4] = useState("");
  const [project_type5, setProjectType5] = useState("");
  const [is_newproject, setIsNewProject] = useState(false); // Assuming is_newproject is a boolean
  const [is_continueproject, setIsContinueProject] = useState(false); // Assuming is_continueproject is a boolean

  const [problem1, setProblem1] = useState("");
  const [result1, setResult1] = useState("");
  const [problem2, setProblem2] = useState("");
  const [result2, setResult2] = useState("");
  const [problem3, setProblem3] = useState("");
  const [result3, setResult3] = useState("");

  //
  const minDate = new Date();

  // หลักการและเหตุผล
  const [PrinciplesAndReasonsCount, setPrinciplesAndReasonsount] = useState(1);
  const increasePrinciplesAndReasons = () => {
    if (PrinciplesAndReasonsCount < 5) {
      setPrinciplesAndReasonsount(PrinciplesAndReasonsCount + 1);
    }
  };
  const decreasePrinciplesAndReasons = () => {
    if (PrinciplesAndReasonsCount > 1) {
      setPrinciplesAndReasonsount(PrinciplesAndReasonsCount - 1);
      // Reset corresponding studentTypeNumber state variables to 0
      switch (PrinciplesAndReasonsCount) {
        case 4:
          setPrinciplesAndReasons5("");
          break;
        case 3:
          setPrinciplesAndReasons4("");
          break;
        case 2:
          setPrinciplesAndReasons3("");
          break;
        case 1:
          setPrinciplesAndReasons2("");
          break;
        case 0:
          setPrinciplesAndReasons1("");
          break;
        default:
        // Handle other cases if needed
      }
    }
  };

  // วัตถุประสงค์
  const [itemCount, setItemCount] = useState(1);
  const increaseItemCount = () => {
    if (itemCount < 5) {
      setItemCount(itemCount + 1);
    }
  };
  const decreaseItemCount = () => {
    if (itemCount > 1) {
      setItemCount(itemCount - 1);
      // Reset corresponding studentTypeNumber state variables to 0
      switch (itemCount) {
        case 4:
          setObjective5("");
          break;
        case 3:
          setObjective4("");
          break;
        case 2:
          setObjective3("");
          break;
        case 1:
          setObjective2("");
          break;
        case 0:
          setObjective1("");
          break;
        default:
        // Handle other cases if needed
      }
    }
  };

  // เพิ่มลักษณะรูปแบบโครงการ
  const [project_typeCount, setProjectTypeCount] = useState(1);
  const increaseProjectTypeCount = () => {
    if (project_typeCount < 5) {
      setProjectTypeCount(project_typeCount + 1);
    }
  };
  const decreaseProjectTypeCount = () => {
    if (project_typeCount > 1) {
      setProjectTypeCount(project_typeCount - 1);
      // Reset corresponding studentTypeNumber state variables to 0
      switch (project_typeCount) {
        case 4:
          setProjectType5("");
          break;
        case 3:
          setProjectType4("");
          break;
        case 2:
          setProjectType3("");
          break;
        case 1:
          setProjectType2("");
          break;
        case 0:
          setProjectType1("");
          break;
        default:
        // Handle other cases if needed
      }
    }
  };

  useEffect(()=>{
    console.log("AAAAAAAAAAAA")
    console.log(id_projects)
  },[id_projects])

  const createProject = () => {
    console.log("Creating project...");
  
    // Create project data object
    const projectData = {
      principles_and_reasons1,
      principles_and_reasons2,
      principles_and_reasons3,
      principles_and_reasons4,
      principles_and_reasons5,
      objective1,
      objective2,
      objective3,
      objective4,
      objective5,
      project_type1,
      project_type2,
      project_type3,
      project_type4,
      project_type5,
      is_newproject,
      is_continueproject,
      problem1,
      result1,
      problem2,
      result2,
      problem3,
      result3,
    };
  
    // Send project data to the server
    Axios.put(`http://localhost:3001/student/project/create2/${id_projects}`, projectData)
      .then(() => {
        console.log("Project created successfully");
        // Update local state with the new project
        setProjectList([...projectList, projectData]);
      })
      .catch(error => {
        console.error("Error creating project:", error);
        // Handle the error, e.g., show a notification to the user
      });
      Swal.fire({
        title: "บันทึกโครงการหน้า  ลักษณะโครงการ",
        text: "ใส่ข้อมูล หมวดถัดไป",
        icon: "success",
      })
    // Switch to CSD person view
    switchToCSDPerson();
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
              ลักษณะโครงการ
            </div>
          </CardHeader>

          <CardBody>
            <Table striped="columns">
              <tbody>
                {/* หลักการและเหตุผล */}
                <tr style={{ backgroundColor: "white" }}>
                  <td className="head-side-td" style={{ verticalAlign: "top" }}>
                    <div>หลักการและเหตุผล</div>
                  </td>
                  <td className="back-side-td">
                    <Table>
                      <thead>
                        <tr></tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: PrinciplesAndReasonsCount }).map(
                          (_, index) => (
                            <tr
                              key={index}
                              style={{ backgroundColor: "white" }}
                            >
                              <Form.Control
                                className="table-margin"
                                size="sm"
                                as="textarea" rows={3}
                                placeholder={`ย่อหน้าที่ ${index + 1}`}
                                onChange={(event) => {
                                  switch (index) {
                                    case 0:
                                      setPrinciplesAndReasons1(
                                        event.target.value
                                      );
                                      break;
                                    case 1:
                                      setPrinciplesAndReasons2(
                                        event.target.value
                                      );
                                      break;
                                    case 2:
                                      setPrinciplesAndReasons3(
                                        event.target.value
                                      );
                                      break;
                                    case 3:
                                      setPrinciplesAndReasons4(
                                        event.target.value
                                      );
                                      break;
                                    case 4:
                                      setPrinciplesAndReasons5(
                                        event.target.value
                                      );
                                      break;
                                    default:
                                    // Handle other cases if needed
                                  }
                                }}
                              />
                            </tr>
                          )
                        )}
                      </tbody>
                    </Table>
                    {/* button */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {PrinciplesAndReasonsCount < 5 && (
                        <Button
                          variant="success"
                          className="ml-5 mb-3 btn-budget-increase border-success"
                          onClick={increasePrinciplesAndReasons}
                        >
                          <div style={{ fontSize: "14px" }}>
                            เพิ่มหลักการและเหตุผล
                          </div>
                        </Button>
                      )}
                      {PrinciplesAndReasonsCount > 1 && (
                        <Button
                          variant="danger"
                          className="ml-5 mb-3 btn-budget-decrease border-danger"
                          onClick={decreasePrinciplesAndReasons}
                        >
                          <div style={{ fontSize: "14px" }}>
                            ลดหลักการและเหตุผล
                          </div>
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>

                {/* วัตถุประสงค์ */}
                <tr>
                  <td
                    className="head-side-td-swp"
                    style={{ verticalAlign: "top" }}
                  >
                    <div>วัตถุประสงค์ของโครงการ</div>
                  </td>
                  <td className="back-side-td">
                    <Table>
                      <thead>
                        <tr></tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: itemCount }).map((_, index) => (
                          <tr key={index} style={{ backgroundColor: "white" }}>
                            <Form.Control
                              className="table-margin"
                              size="sm"
                              type="text"
                              placeholder={`วัตถุประสงค์ที่ ${index + 1}`}
                              onChange={(event) => {
                                switch (index) {
                                  case 0:
                                    setObjective1(event.target.value);
                                    break;
                                  case 1:
                                    setObjective2(event.target.value);
                                    break;
                                  case 2:
                                    setObjective3(event.target.value);
                                    break;
                                  case 3:
                                    setObjective4(event.target.value);
                                    break;
                                  case 4:
                                    setObjective5(event.target.value);
                                    break;
                                  default:
                                  // Handle other cases if needed
                                }
                              }}
                            />
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
                      {itemCount < 5 && (
                        <Button
                          variant="success"
                          className="ml-5 mb-3 btn-budget-increase border-success"
                          onClick={increaseItemCount}
                        >
                          <div style={{ fontSize: "14px" }}>
                            เพิ่มวัตถุประสงค์
                          </div>
                        </Button>
                      )}
                      {itemCount > 1 && (
                        <Button
                          variant="danger"
                          className="ml-5 mb-3 btn-budget-decrease border-danger"
                          onClick={decreaseItemCount}
                        >
                          <div style={{ fontSize: "14px" }}>ลดวัตถุประสงค์</div>
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>

                {/* ลักษณะรูปแบบโครงการ */}
                <tr>
                  <td className="head-side-td" style={{ verticalAlign: "top" }}>
                    <div>ลักษณะรูปแบบโครงการ</div>
                  </td>
                  <td className="back-side-td">
                    <Table>
                      <tbody>
                        {Array.from({ length: project_typeCount }).map(
                          (_, index) => (
                            <tr
                              key={index}
                              style={{ backgroundColor: "white" }}
                            >
                              <Form.Control
                                className="table-margin"
                                size="sm"
                                type="text"
                                placeholder={`ลักษณะรูปแบบโครงการที่ ${index + 1
                                  }`}
                                onChange={(event) => {
                                  switch (index) {
                                    case 0:
                                      setProjectType1(event.target.value);
                                      break;
                                    case 1:
                                      setProjectType2(event.target.value);
                                      break;
                                    case 2:
                                      setProjectType3(event.target.value);
                                      break;
                                    case 3:
                                      setProjectType4(event.target.value);
                                      break;
                                    case 4:
                                      setProjectType5(event.target.value);
                                      break;

                                    default:
                                    // Handle other cases if needed
                                  }
                                }}
                              />
                            </tr>
                          )
                        )}
                      </tbody>
                    </Table>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {project_typeCount < 5 && (
                        <Button
                          variant="success"
                          className="ml-5 mb-3 btn-budget-increase border-success"
                          onClick={increaseProjectTypeCount}
                        >
                          <div style={{ fontSize: "14px" }}>
                            เพิ่มลักษณะ
                          </div>
                        </Button>
                      )}

                      {project_typeCount > 1 && (
                        <Button
                          variant="danger"
                          className="ml-5 mb-3 btn-budget-decrease border-danger"
                          onClick={decreaseProjectTypeCount}
                        >
                          <div style={{ fontSize: "14px" }}>
                            ลดลักษณะ
                          </div>
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
                {/* ลักษณะโครงการ */}
                <tr style={{ backgroundColor: "white" }}>
                  <td
                    className="head-side-td-swp"
                    style={{ verticalAlign: "top" }}
                  >
                    <div>ลักษณะโครงการ</div>
                  </td>
                  <td className="back-side-td">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "1%",
                        marginTop: "1%",
                      }}
                    >
                      <div style={{ marginRight: "10px" }}>
                        <label style={{ marginLeft: "10px", fontSize: "14px", color: "black" }}>
                          <input
                            type="radio"
                            id="newProjectRadio"
                            checked={is_newproject}
                            onChange={() => {
                              setIsNewProject(true);
                              setIsContinueProject(false);
                            }}
                            style={{ marginBottom: "0" }} // Add this style
                          />
                          {`    `}โครงการใหม่
                        </label>
                      </div>
                      <div style={{ marginRight: "10%" }}>
                        <label style={{ marginLeft: "10px", fontSize: "14px", color: "black" }}>
                          <input
                            type="radio"
                            id="continueProjectRadio"
                            checked={is_continueproject}
                            onChange={() => {
                              setIsNewProject(false);
                              setIsContinueProject(true);
                            }}
                            style={{ marginBottom: "0" }} // Add this style
                          />
                          {`        `}โครงการต่อเนื่อง
                        </label>
                      </div>
                    </div>
                    {is_continueproject && (
                      <>
                        <Table striped="columns">
                          <thead
                            style={{ backgroundColor: "rgba(255, 139, 19, 0)" }}
                          >
                            <tr
                              style={{
                                backgroundColor: "rgba(255, 139, 19, 1)",
                              }}
                            >
                              <th
                                style={{
                                  color: "white",
                                  fontWeight: "bold",
                                  fontSize: "14px",
                                }}
                              >
                                ปัญหาและอุปสรรคในปีที่ผ่านมา
                              </th>
                              <th
                                style={{
                                  color: "white",
                                  fontWeight: "bold",
                                  fontSize: "14px",
                                }}
                              >
                                แนวทางการปรับปรุงแก้ไขปัญหา และอุปสรรคในครั้งนี้
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* ข้อ 1 */}
                            <tr style={{ backgroundColor: "white" }}>
                              {/* ปัญหาข้อ 1  */}
                              <td style={{ verticalAlign: "middle" }}>
                                <Form.Control
                                  className="font-form-control"
                                  size="sm"
                                  type="text"
                                  placeholder="ปัญหาและอุปสรรคที่ 1"
                                  onChange={(event) => {
                                    setProblem1(event.target.value);
                                  }}
                                />
                              </td>
                              {/* แนวทางข้อ 1 */}
                              <td style={{ verticalAlign: "middle" }}>
                                <Form.Control
                                  className="font-form-control"
                                  size="sm"
                                  type="text"
                                  placeholder="แนวทางการปรับปรุงแก้ไขปัญหาที่ 1 "
                                  onChange={(event) => {
                                    setResult1(event.target.value);
                                  }}
                                />
                              </td>
                            </tr>
                            {/* ข้อ 2 */}
                            <tr style={{ backgroundColor: "white" }}>
                              {/* ปัญหาข้อ 2  */}
                              <td style={{ verticalAlign: "middle" }}>
                                <Form.Control
                                  className="font-form-control"
                                  size="sm"
                                  type="text"
                                  placeholder="ปัญหาและอุปสรรคที่ 2"
                                  onChange={(event) => {
                                    setProblem2(event.target.value);
                                  }}
                                />
                              </td>
                              {/* แนวทางข้อ 2 */}
                              <td style={{ verticalAlign: "middle" }}>
                                <Form.Control
                                  className="font-form-control"
                                  size="sm"
                                  type="text"
                                  placeholder="แนวทางการปรับปรุงแก้ไขปัญหาที่ 2 "
                                  onChange={(event) => {
                                    setResult2(event.target.value);
                                  }}
                                />
                              </td>
                            </tr>
                            {/* ข้อ 3 */}
                            <tr style={{ backgroundColor: "white" }}>
                              {/* ปัญหาข้อ 3  */}
                              <td style={{ verticalAlign: "middle" }}>
                                <Form.Control
                                  className="font-form-control"
                                  size="sm"
                                  type="text"
                                  placeholder="ปัญหาและอุปสรรคที่ 3"
                                  onChange={(event) => {
                                    setProblem3(event.target.value);
                                  }}
                                />
                              </td>
                              {/* แนวทางข้อ 3 */}
                              <td style={{ verticalAlign: "middle" }}>
                                <Form.Control
                                  className="font-form-control"
                                  size="sm"
                                  type="text"
                                  placeholder="แนวทางการปรับปรุงแก้ไขปัญหาที่ 3 "
                                  onChange={(event) => {
                                    setResult3(event.target.value);
                                  }}
                                />
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </>
                    )}
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
              marginBottom: "10px"
            }}
          >
            <Button
              onClick={createProject}
              type="submit"
              variant="warning"
              className="btn-dataupdate"
              style={{ fontSize: "14px" }}
            >
              บันทึกข้อมูล
            </Button>
          </CardFooter>
        </Card>
      </Col>
    </>
  );
}
export default CSD_detail2;
