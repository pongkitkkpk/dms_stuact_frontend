import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import Axios from "axios";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { CardBody, CardFooter } from "reactstrap";
// react-bootstrap components
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
import Swal from 'sweetalert2';

function SD_detail({ id_project, currentStepProject }) {
  const storedUserData = sessionStorage.getItem("user");
  const storedUser = storedUserData ? JSON.parse(storedUserData) : {};
  const id_student = storedUser.username;
  const strcodebooksomeoutyear = storedUser.codebooksomeoutyear;

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
  const [is_newproject, setIsNewProject] = useState(false);
  const [is_continueproject, setIsContinueProject] = useState(false);
  const [problem1, setProblem1] = useState("");
  const [result1, setResult1] = useState("");
  const [problem2, setProblem2] = useState("");
  const [result2, setResult2] = useState("");
  const [problem3, setProblem3] = useState("");
  const [result3, setResult3] = useState("");

  const [originalData, setOriginalData] = useState({});
  const [editData, setEditData] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);
  const [codeclub, setCodeclub] = useState("");
  const [yearly_countsketch,setYearly_countsketch]=useState("");
  const getProjectData = () => {
    Axios.get(
      `http://localhost:3001/student/project/getidproject/${id_project}`
    ).then((response) => {
      setOriginalData(response.data[0]);
      setEditData(response.data[0]);
      setCodeclub(response.data[0].codeclub);
      setYearly_countsketch(response.data[0].responsible_agency);
      setPrinciplesAndReasons1(response.data[0].principles_and_reasons1);
      setPrinciplesAndReasons2(response.data[0].principles_and_reasons2);
      setPrinciplesAndReasons3(response.data[0].principles_and_reasons3);
      setPrinciplesAndReasons4(response.data[0].principles_and_reasons4);
      setPrinciplesAndReasons5(response.data[0].principles_and_reasons5);
      setObjective1(response.data[0].objective1);
      setObjective2(response.data[0].objective2);
      setObjective3(response.data[0].objective3);
      setObjective4(response.data[0].objective4);
      setObjective5(response.data[0].objective5);
      setProjectType1(response.data[0].project_type1);
      setProjectType2(response.data[0].project_type2);
      setProjectType3(response.data[0].project_type3);
      setProjectType4(response.data[0].project_type4);
      setProjectType5(response.data[0].project_type5);
      setIsNewProject(response.data[0].is_newproject);
      setIsContinueProject(response.data[0].is_continueproject);
      setProblem1(response.data[0].problem1);
      setResult1(response.data[0].result1);
      setProblem2(response.data[0].problem2);
      setResult2(response.data[0].result2);
      setProblem3(response.data[0].problem3);
      setResult3(response.data[0].result3);
    });
  };


  useEffect(() => {
    getProjectData();
  }, [id_project]);

  useEffect(() => {
    console.log(editData.is_continueproject);
  }, [editData]);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    const editpage = "ลักษณะโครงการ";
    Swal.fire({
      title: "คุณต้องการบันทึกข้อมูลใช่ไหม?",
      text: "การบันทึกข้อมูลจะไม่สามารถยกเลิกได้",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "บันทึก",
      cancelButtonText: "ยกเลิก",
      // reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.put(
          `http://localhost:3001/student/project/edit/${id_project}`,
          editData
        )
          .then((response) => {
            console.log(response.data);
            window.location.reload();
          })
          .catch((error) => {
            console.error("Error creating project:", error);
          });

        Axios.post(
          `http://localhost:3001/student/project/edit/history/${id_project}`,
          { codeclub, editpage, id_student }
        )
          .then((response) => {
            console.log("Data saved successfully:", response.data);
            window.location.reload();
          })
          .catch((error) => {
            console.error("Error saving data:", error);
          });
          Swal.fire("บันทึกการแก้ไข เรียบร้อย!", "การแก้ไขของคุณจำเป็นต้อง refresh หน้าใหม่.", "success");
      }
    });
  };
  // const handleSaveClick = () => {
  //   // Save data here
  //   const editpage = "ลักษณะโครงการ"
  //   setIsEditMode(false);

  //   if (window.confirm("Do you want to save changes?")) {
  //     Axios.put(
  //       `http://localhost:3001/student/project/edit/${id_project}`,
  //       editData
  //     )
  //       .then((response) => {
  //         // Handle success
  //         console.log("Data saved successfully:", response.data);
  //         window.location.reload();
  //       })
  //       .catch((error) => {
  //         // Handle error
  //         console.error("Error saving data:", error);
  //       });

  //       Axios.post(
  //         `http://localhost:3001/student/project/edit/history/${id_project}`,
  //         {codeclub,editpage,id_student}
  //       )
  //         .then((response) => {
  //           console.log("Data saved successfully:", response.data);
  //           window.location.reload();
  //         })
  //         .catch((error) => {
  //           console.error("Error saving data:", error);
  //         });
  //   }
  // };

  const handleBackClick = () => {
    Swal.fire({
      title: "คุณต้องการยกเลิกกลับไปเป็นข้อมูลเดิมใช่ไหม?",
      text: "ข้อมูลที่คุณกรอกไปจะไม่บันทึกลงระบบ",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "ใช่,ฉันต้องการข้อมูลเดิม",
      cancelButtonText: "ยกเลิก",
      // reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        setIsEditMode(false);
        setEditData(originalData);
        window.location.reload();

        Swal.fire("ยกเลิกการแก้ไข!", "การแก้ไขของคุณจะไม่บันทึกเข้าสู่ระบบ", "success");
      }
    });
  };
  // const handleBackClick = () => {
  //   const confirmBack = window.confirm(
  //     "คุณต้องการยกเลิกกลับไปเป็นข้อมูลเดิมใช่ไหม ข้อมูลที่คุณกรอกไปจะไม่บันทึกลงระบบ"
  //   );

  //   if (confirmBack) {
  //     setIsEditMode(false);
  //     setEditData(originalData);
  //   }
  // };

  return (
    <>
    
      <Col md="9">
        
        <Card>
        {currentStepProject <= 3 && !isEditMode && (
            <Button
              type="submit"
              className="btn-dataupdate"
              style={{ fontSize: "14px", margin: "1%" }}
              variant="primary"
              onClick={handleEditClick}
            >
              แก้ไข
            </Button>
          )}
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
                      <tbody>
                        <tr style={{ backgroundColor: "white" }}>
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            as="textarea"
                            rows={3}
                            placeholder={`เพิ่มหลักการและเหตุผล ${1}`}
                            value={
                              isEditMode
                                ? editData.principles_and_reasons1
                                : principles_and_reasons1
                            }
                            readOnly={!isEditMode}
                            onChange={(event) => {
                              setEditData({
                                ...editData,
                                principles_and_reasons1: event.target.value,
                              });
                            }}
                          />
                        </tr>
                        <tr style={{ backgroundColor: "white" }}>
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            as="textarea"
                            rows={3}
                            placeholder={`เพิ่มหลักการและเหตุผล ${2}`}
                            value={
                              isEditMode
                                ? editData.principles_and_reasons2
                                : principles_and_reasons2
                            }
                            readOnly={!isEditMode}
                            onChange={(event) => {
                              setEditData({
                                ...editData,
                                principles_and_reasons2: event.target.value,
                              });
                            }}
                          />
                        </tr>
                        <tr style={{ backgroundColor: "white" }}>
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            as="textarea"
                            rows={3}
                            placeholder={`เพิ่มหลักการและเหตุผล ${3}`}
                            value={
                              isEditMode
                                ? editData.principles_and_reasons3
                                : principles_and_reasons3
                            }
                            readOnly={!isEditMode}
                            onChange={(event) => {
                              setEditData({
                                ...editData,
                                principles_and_reasons3: event.target.value,
                              });
                            }}
                          />
                        </tr>
                        <tr style={{ backgroundColor: "white" }}>
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            as="textarea"
                            rows={3}
                            placeholder={`เพิ่มหลักการและเหตุผล ${4}`}
                            value={
                              isEditMode
                                ? editData.principles_and_reasons4
                                : principles_and_reasons4
                            }
                            readOnly={!isEditMode}
                            onChange={(event) => {
                              setEditData({
                                ...editData,
                                principles_and_reasons4: event.target.value,
                              });
                            }}
                          />
                        </tr>
                        <tr style={{ backgroundColor: "white" }}>
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            as="textarea"
                            rows={3}
                            placeholder={`เพิ่มหลักการและเหตุผล ${5}`}
                            value={
                              isEditMode
                                ? editData.principles_and_reasons5
                                : principles_and_reasons5
                            }
                            readOnly={!isEditMode}
                            onChange={(event) => {
                              setEditData({
                                ...editData,
                                principles_and_reasons5: event.target.value,
                              });
                            }}
                          />
                        </tr>
                      </tbody>
                    </Table>
                  </td>
                </tr>
                {/* วัตถุประสงค์ */}
                <tr>
                  <td
                    className="head-side-td-swp"
                    style={{ verticalAlign: "top" }}
                  >
                    <div><p className="title" style={{marginBottom:"0"}}>วัตถุประสงค์</p><p className="title" style={{marginBottom:"0"}}>ของโครงการ</p></div>
                    
                  </td>
                  <td className="back-side-td">
                    <Table>
                      <thead>
                        <tr></tr>
                      </thead>
                      <tbody>
                        <tr style={{ backgroundColor: "white" }}>
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            placeholder={`วัตถุประสงค์ ${1}`}
                            value={
                              isEditMode ? editData.objective1 : objective1
                            }
                            readOnly={!isEditMode}
                            onChange={(event) => {
                              setEditData({
                                ...editData,
                                objective1: event.target.value,
                              });
                            }}
                          />
                        </tr>
                        <tr style={{ backgroundColor: "white" }}>
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            placeholder={`วัตถุประสงค์ ${2}`}
                            value={
                              isEditMode ? editData.objective2 : objective2
                            }
                            readOnly={!isEditMode}
                            onChange={(event) => {
                              setEditData({
                                ...editData,
                                objective2: event.target.value,
                              });
                            }}
                          />
                        </tr>
                        <tr style={{ backgroundColor: "white" }}>
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            placeholder={`วัตถุประสงค์ ${3}`}
                            value={
                              isEditMode ? editData.objective3 : objective3
                            }
                            readOnly={!isEditMode}
                            onChange={(event) => {
                              setEditData({
                                ...editData,
                                objective3: event.target.value,
                              });
                            }}
                          />
                        </tr>
                        <tr style={{ backgroundColor: "white" }}>
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            placeholder={`วัตถุประสงค์ ${4}`}
                            value={
                              isEditMode ? editData.objective4 : objective3
                            }
                            readOnly={!isEditMode}
                            onChange={(event) => {
                              setEditData({
                                ...editData,
                                objective4: event.target.value,
                              });
                            }}
                          />
                        </tr>
                        <tr style={{ backgroundColor: "white" }}>
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            placeholder={`วัตถุประสงค์ ${5}`}
                            value={
                              isEditMode ? editData.objective5 : objective3
                            }
                            readOnly={!isEditMode}
                            onChange={(event) => {
                              setEditData({
                                ...editData,
                                objective5: event.target.value,
                              });
                            }}
                          />
                        </tr>
                      </tbody>
                    </Table>
                  </td>
                </tr>
                {/* ลักษณะรูปแบบโครงการ */}
                <tr style={{ backgroundColor: "white" }}>
                  <td
                    className="head-side-td"
                    style={{ verticalAlign: "top" }}
                  >
                    <div>ลักษณะรูปแบบโครงการ</div>
                  </td>
                  <td className="back-side-td">
                    <Table>
                      <tbody>
                        <tr style={{ backgroundColor: "white" }}>
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            placeholder={`ลักษณะรูปแบบโครงการ ข้อที่${1}`}
                            value={
                              isEditMode
                                ? editData.project_type1
                                : project_type1
                            }
                            readOnly={!isEditMode}
                            onChange={(event) => {
                              setEditData({
                                ...editData,
                                project_type1: event.target.value,
                              });
                            }}
                          />
                        </tr>
                        <tr style={{ backgroundColor: "white" }}>
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            placeholder={`ลักษณะรูปแบบโครงการ ข้อที่${2}`}
                            value={
                              isEditMode
                                ? editData.project_type2
                                : project_type2
                            }
                            readOnly={!isEditMode}
                            onChange={(event) => {
                              setEditData({
                                ...editData,
                                project_type2: event.target.value,
                              });
                            }}
                          />
                        </tr>
                        <tr style={{ backgroundColor: "white" }}>
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            placeholder={`ลักษณะรูปแบบโครงการ ข้อที่${3}`}
                            value={
                              isEditMode
                                ? editData.project_type3
                                : project_type3
                            }
                            readOnly={!isEditMode}
                            onChange={(event) => {
                              setEditData({
                                ...editData,
                                project_type3: event.target.value,
                              });
                            }}
                          />
                        </tr>
                        <tr style={{ backgroundColor: "white" }}>
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            placeholder={`ลักษณะรูปแบบโครงการ ข้อที่${4}`}
                            value={
                              isEditMode
                                ? editData.project_type4
                                : project_type4
                            }
                            readOnly={!isEditMode}
                            onChange={(event) => {
                              setEditData({
                                ...editData,
                                project_type4: event.target.value,
                              });
                            }}
                          />
                        </tr>
                        <tr style={{ backgroundColor: "white" }}>
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            placeholder={`ลักษณะรูปแบบโครงการ ข้อที่${5}`}
                            value={
                              isEditMode
                                ? editData.project_type5
                                : project_type5
                            }
                            readOnly={!isEditMode}
                            onChange={(event) => {
                              setEditData({
                                ...editData,
                                project_type5: event.target.value,
                              });
                            }}
                          />
                        </tr>
                      </tbody>
                    </Table>
                  </td>
                </tr>
                {/* ลักษณะโครงการ */}
                <tr style={{ backgroundColor: "white" }}>
                  <td
                    className="head-side-td-swp"
                    style={{ verticalAlign: "center" }}
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
                        <label
                          style={{
                            marginLeft: "10px",
                            fontSize: "14px",
                            color: "black",
                          }}
                        >
                          <input
                            type="radio"
                            id="newProjectRadio"
                            name="projectType"
                            checked={
                              isEditMode
                                ? editData.is_newproject
                                : is_newproject
                            }
                            readOnly={!isEditMode}
                            disabled={!isEditMode}
                            onChange={(event) => {
                              setEditData({
                                ...editData,
                                is_newproject: true,
                                is_continueproject: false,
                                problem1: null,
                                result1: null,
                                problem2: null,
                                result2: null,
                                problem3: null,
                                result3: null,
                              });
                            }}
                          />
                          {`    `}โครงการใหม่
                        </label>
                      </div>
                      <div style={{ marginRight: "10%" }}>
                        <label
                          style={{
                            marginLeft: "10px",
                            fontSize: "14px",
                            color: "black",
                          }}
                        >
                          <input
                            type="radio"
                            id="continueProjectRadio"
                            name="projectType"
                            checked={
                              isEditMode
                                ? editData.is_continueproject
                                : is_continueproject
                            }
                            readOnly={!isEditMode}
                            disabled={!isEditMode}
                            onChange={(event) => {
                              setEditData({
                                ...editData,
                                is_newproject: false,
                                is_continueproject: event.target.checked,
                              });
                            }}
                          />
                          {`        `}โครงการต่อเนื่อง
                        </label>
                      </div>
                    </div>
                    {editData.is_continueproject && (
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
                                size="sm"
                                type="text"
                                placeholder="ปัญหาข้อ 1"
                                value={
                                  isEditMode ? editData.problem1 : problem1
                                }
                                readOnly={!isEditMode}
                                onChange={(event) => {
                                  setEditData({
                                    ...editData,
                                    problem1: event.target.value,
                                  });
                                }}
                              />
                            </td>
                            {/* แนวทางข้อ 1 */}
                            <td style={{ verticalAlign: "middle" }}>
                              <Form.Control
                                size="sm"
                                type="text"
                                placeholder="แนวทางข้อ 1 "
                                value={isEditMode ? editData.result1 : result1}
                                readOnly={!isEditMode}
                                onChange={(event) => {
                                  setEditData({
                                    ...editData,
                                    result1: event.target.value,
                                  });
                                }}
                              />
                            </td>
                          </tr>
                          {/* ข้อ 2 */}
                          <tr style={{ backgroundColor: "white" }}>
                            {/* ปัญหาข้อ 2  */}
                            <td style={{ verticalAlign: "middle" }}>
                              <Form.Control
                                size="sm"
                                type="text"
                                placeholder="ปัญหาข้อ 2"
                                value={
                                  isEditMode ? editData.problem2 : problem2
                                }
                                readOnly={!isEditMode}
                                onChange={(event) => {
                                  setEditData({
                                    ...editData,
                                    problem2: event.target.value,
                                  });
                                }}
                              />
                            </td>
                            {/* แนวทางข้อ 2 */}
                            <td style={{ verticalAlign: "middle" }}>
                              <Form.Control
                                size="sm"
                                type="text"
                                placeholder="แนวทางข้อ 2 "
                                value={isEditMode ? editData.result2 : result2}
                                readOnly={!isEditMode}
                                onChange={(event) => {
                                  setEditData({
                                    ...editData,
                                    result2: event.target.value,
                                  });
                                }}
                              />
                            </td>
                          </tr>
                          {/* ข้อ 3 */}
                          <tr style={{ backgroundColor: "white" }}>
                            {/* ปัญหาข้อ 3  */}
                            <td style={{ verticalAlign: "middle" }}>
                              <Form.Control
                                size="sm"
                                type="text"
                                placeholder="ปัญหาข้อ 3"
                                value={
                                  isEditMode ? editData.problem3 : problem3
                                }
                                readOnly={!isEditMode}
                                onChange={(event) => {
                                  setEditData({
                                    ...editData,
                                    problem3: event.target.value,
                                  });
                                }}
                              />
                            </td>
                            {/* แนวทางข้อ 3 */}
                            <td style={{ verticalAlign: "middle" }}>
                              <Form.Control
                                size="sm"
                                type="text"
                                placeholder="แนวทางข้อ 3 "
                                value={isEditMode ? editData.result3 : result3}
                                readOnly={!isEditMode}
                                onChange={(event) => {
                                  setEditData({
                                    ...editData,
                                    result3: event.target.value,
                                  });
                                }}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </Table>
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
              marginBottom: "10px",
            }}
          >
            {isEditMode ? (
              <>
                <Button
                  variant="success"
                  type="submit"
                  className="ml-5 mb-3 btn-budget-increase"
                  style={{ fontSize: "14px" }}
                  onClick={handleSaveClick}
                >
                  Save
                </Button>
                <Button
                  type="submit"
                  className="ml-5 mb-3 btn-budget-decrease"
                  style={{ fontSize: "14px" }}
                  variant="danger"
                  onClick={handleBackClick}
                >
                  Back
                </Button>
              </>
            ) : null}
          </CardFooter>
        </Card>
      </Col>
    </>
  );
}

export default SD_detail;
