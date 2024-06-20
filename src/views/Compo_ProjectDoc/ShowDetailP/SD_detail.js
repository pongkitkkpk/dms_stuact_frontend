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

  const [project_name, setProjectName] = useState("");
  const [responsible_agency, setResponsibleAgency] = useState("");
  const [academic_year, setAcademicYear] = useState("");
  const [advisor_name, setAdvisorName] = useState("");
  const [person1_name, setPerson1Name] = useState("");
  const [person1_contact, setPerson1Contact] = useState("");
  const [person2_name, setPerson2Name] = useState("");
  const [person2_contact, setPerson2Contact] = useState("");
  const [person3_name, setPerson3Name] = useState("");
  const [person3_contact, setPerson3Contact] = useState("");

  const [is_1side, setIs_1side] = useState(false);
  const [is_2side, setIs_2side] = useState(false);
  const [is_3side, setIs_3side] = useState(false);
  const [is_4side, setIs_4side] = useState(false);
  const [is_5side, setIs_5side] = useState(false);

  const [originalData, setOriginalData] = useState({});
  const [editData, setEditData] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);
  const [showdeadline, setShowDeadLine] = useState("");
  const [codeclub, setCodeclub] = useState("");
  const [yearly_countsketch, setYearly_countsketch] = useState("");
  const [yearly, setYearly] = useState("");

  const getProjectData = () => {
    Axios.get(
      `${process.env.REACT_APP_API_URL}/student/project/getidproject/${id_project}`
    ).then((response) => {
      setOriginalData(response.data[0]);
      setEditData(response.data[0]);
      setCodeclub(response.data[0].codeclub);
      setYearly(response.data[0].yearly);
      setYearly_countsketch(response.data[0].responsible_agency);
      setProjectName(response.data[0].project_name);
      setResponsibleAgency(response.data[0].responsible_agency);
      setAcademicYear(response.data[0].academic_year);
      setAdvisorName(response.data[0].advisor_name);
      setPerson1Name(response.data[0].person1_name);
      setPerson1Contact(response.data[0].person1_contact);
      setPerson2Name(response.data[0].person2_name);
      setPerson2Contact(response.data[0].person2_contact);
      setPerson3Name(response.data[0].person3_name);
      setPerson3Contact(response.data[0].person3_contact);
      setIs_1side(response.data[0].is_1side);
      setIs_2side(response.data[0].is_2side);
      setIs_3side(response.data[0].is_3side);
      setIs_4side(response.data[0].is_4side);
      setIs_5side(response.data[0].is_5side);
    });
  };

  useEffect(() => {
    getProjectData();
  }, [id_project]);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  // const handleSaveClick = () => {
  //   const editpage = "ข้อมูลพื้นฐานโครงการ";

  //   setIsEditMode(false);
  //   if (window.confirm("Do you want to save changes?")) {
  //     Axios.put(
  //       `http://localhost:3001/student/project/edit/${id_project}`,
  //       editData
  //     )
  //       .then((response) => {
  //         console.log("Data saved successfully:", response.data);
  //         window.location.reload();
  //       })
  //       .catch((error) => {
  //         console.error("Error saving data:", error);
  //       });

  //     Axios.post(
  //       `http://localhost:3001/student/project/edit/history/${id_project}`,
  //       { codeclub, editpage, id_student }
  //     )
  //       .then((response) => {
  //         console.log("Data saved successfully:", response.data);
  //         window.location.reload();
  //       })
  //       .catch((error) => {
  //         console.error("Error saving data:", error);
  //       });
  //   }
  // };

  const handleSaveClick = () => {
    const editpage = "ข้อมูลพื้นฐานโครงการ";
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
          `${process.env.REACT_APP_API_URL}/student/project/edit/${id_project}`,
          editData
        )
          .then((response) => {
            // console.log(response.data);
            window.location.reload();
          })
          .catch((error) => {
            console.error("Error creating project:", error);
          });

        Axios.post(
          `${process.env.REACT_APP_API_URL}/student/project/edit/history/${id_project}`,
          { codeclub, editpage, id_student }
        )
          .then((response) => {
            // console.log("Data saved successfully:", response.data);
            window.location.reload();
          })
          .catch((error) => {
            console.error("Error saving data:", error);
          });
        Swal.fire("บันทึกการแก้ไข เรียบร้อย!", "การแก้ไขของคุณจำเป็นต้อง refresh หน้าใหม่.", "success");
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

  const handleDownloadClick04 = () => {
    window.location.href = `${process.env.REACT_APP_API_URL}/student/download04/${id_project}`;
  };
  const handleDownloadClick06 = () => {
    window.location.href = `${process.env.REACT_APP_API_URL}/student/download06/${id_project}`;
  };

  // const handleDownloadClick = () => {
  //   Axios.get(`http://localhost:3001/student/download/${id_project}`, {
  //     responseType: 'arraybuffer', // Ensure the response is treated as an array buffer
  //   })
  //   .then(response => {
  //     // Create a Blob from the response data with the appropriate MIME type
  //     const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });

  //     // Create a URL for the Blob
  //     const url = window.URL.createObjectURL(blob);

  //     // Create a temporary link element to trigger the download
  //     const link = document.createElement('a');
  //     link.href = url;
  //     link.setAttribute('download', `e-doc-${id_project}.docx`);

  //     // Append the link to the DOM and simulate a click
  //     document.body.appendChild(link);
  //     link.click();

  //     // Clean up by removing the link from the DOM and revoking the URL
  //     document.body.removeChild(link);
  //     window.URL.revokeObjectURL(url);
  //   })
  //   .catch(error => {
  //     console.error('Error downloading document:', error);
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Oops...',
  //       text: 'An error occurred while downloading the document!',
  //     });
  //   });
  // };



  return (
    <>
      <Col md="9">
        <Card>

          {currentStepProject <= 2 && !isEditMode && (
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
              ข้อมูลพื้นฐานโครงการ
            </div>
          </CardHeader>
          <CardBody>
            <Table striped="columns">
              <tbody>
                {/* download เอกสาร */}
                {!isEditMode && (
                  <>
                    <tr style={{ backgroundColor: "white" }}>
                      <td
                        className="head-side-td"
                        style={{ verticalAlign: "center" }}
                      >
                        <div>Download e-docx</div>
                      </td>
                      <td style={{ verticalAlign: "middle" }}>
                        <Button variant="primary" className="btn-download-file" onClick={handleDownloadClick04}>
                          <div style={{ fontSize: "14px" }}>ดาวน์โหลด กนศ.04 (.docx)</div>
                        </Button>
                        <Button style={{ marginLeft:"2%"}} variant="primary" className="btn-download-file" onClick={handleDownloadClick06}>
                          <div style={{ fontSize: "14px" }}>ดาวน์โหลด กนศ.06 (.docx)</div>
                        </Button>
                      </td>
                    </tr>
                   
                  </>
                )}

                {/* ชื่อโครงการ */}
                <tr style={{ backgroundColor: "white" }}>
                  <td className="head-side-td-swp" style={{ verticalAlign: "center" }}>
                    <div>ชื่อโครงการ</div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <Form.Control
                      className="font-form-control"
                      size="sm"
                      type="text"
                      placeholder="ชื่อโครงการ"
                      value={isEditMode ? editData.project_name : project_name}
                      readOnly={!isEditMode}
                      onChange={(event) => {
                        setEditData({
                          ...editData,
                          project_name: event.target.value,
                        });
                      }}
                    />
                  </td>
                </tr>
                {/* หน่วยงานที่รับผิดชอบ db */}
                <tr style={{ backgroundColor: "white" }}>
                  <td
                    className="head-side-td"
                    style={{ verticalAlign: "top" }}
                  >
                    <div><p className="title" style={{ marginBottom: "0" }}>หน่วยงาน</p><p className="title" style={{ marginBottom: "0" }}>ที่รับผิดชอบ</p></div>

                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <Form.Control
                      className="font-form-control"
                      size="sm"
                      type="text"
                      placeholder="Enter ID Code"
                      value={
                        isEditMode
                          ? editData.responsible_agency
                          : responsible_agency
                      }
                      readOnly
                      onChange={(event) => {
                        setEditData({
                          ...editData,
                          responsible_agency: event.target.value,
                        });
                      }}
                    />
                  </td>
                </tr>
                {/* ปีการศึกษา db */}
                <tr style={{ backgroundColor: "white" }}>
                  <td className="head-side-td-swp" style={{ verticalAlign: "center" }}>
                    <div>ปีการศึกษา</div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <Form.Control
                      className="font-form-control"
                      size="sm"
                      type="text"
                      placeholder="Enter ID Code"
                      value={
                        isEditMode ? editData.yearly : `ปีการศึกษา ${yearly}`
                      }
                      readOnly
                      onChange={(event) => {
                        setEditData({
                          ...editData,
                          yearly: event.target.value,
                        });
                      }}
                    />
                  </td>
                </tr>
                {/* ที่อาจารย์ปรึกษา  db */}
                <tr style={{ backgroundColor: "white" }}>
                  <td className="head-side-td">
                    <div>อาจารย์ปรึกษา</div>
                    {/* <p className="detail-prodoc">
                      ข้อมูลอัตโนมัติจากหน่วยงานที่รับผิดชอบ
                    </p> */}
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <Form.Control
                      size="sm"
                      type="text"
                      className="font-form-control"
                      placeholder="Enter ID Code"
                      value={isEditMode ? editData.advisor_name : advisor_name}
                      readOnly={!isEditMode}
                      onChange={(event) => {
                        setEditData({
                          ...editData,
                          advisor_name: event.target.value,
                        });
                      }}
                    />
                  </td>
                </tr>
                {/* เบอร์อาจารย์ที่ปรึกษา  db */}
                <tr style={{ backgroundColor: "white" }}>
                  <td className="head-side-td-swp">
                    <div><p className="title" style={{ marginBottom: "0" }}>เบอร์ติดต่อ</p><p className="title" style={{ marginBottom: "0" }}>อาจารย์ปรึกษา</p></div>
                    {/* <p className="detail-prodoc">
                      ข้อมูลอัตโนมัติจากหน่วยงานที่รับผิดชอบ
                    </p> */}
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <Form.Control
                      size="sm"
                      type="text"
                      className="font-form-control"
                      placeholder="Enter ID Code"
                      value={isEditMode ? editData.advisor_name : advisor_name}
                      readOnly={!isEditMode}
                      onChange={(event) => {
                        setEditData({
                          ...editData,
                          advisor_name: event.target.value,
                        });
                      }}
                    />
                  </td>
                </tr>
                {/* ผู้รับผิดชอบโครงการ */}
                <tr style={{ backgroundColor: "white" }}>
                  <td className="head-side-td" style={{ verticalAlign: "top" }}>
                    <div><p className="title" style={{ marginBottom: "0" }}>ผู้รับผิดชอบ</p><p className="title" style={{ marginBottom: "0" }}>โครงการ</p></div>
                  </td>
                  <td className="back-side-td">
                    <Table striped="columns">
                      <thead style={{ backgroundColor: "rgba(255, 139, 19, 0)" }}>
                        <tr style={{ backgroundColor: "rgba(255, 139, 19, 1)" }}>
                          <th style={{ color: "white", fontSize: "14px", fontWeight: "bold" }}>ชื่อ-สกุล</th>
                          <th style={{ color: "white", fontSize: "14px", fontWeight: "bold" }}>โทรศัพท์</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* คนที่ 1 */}
                        <tr style={{ backgroundColor: "white" }}>
                          {/* ชื่อ คนที่ 1  */}
                          <td style={{ verticalAlign: "middle" }}>
                            <Form.Control
                              size="sm"
                              type="text"
                              className="font-form-control"
                              placeholder="ชื่อ ผู้รับผิดชอบโครงการ คนที่ 1"
                              value={
                                isEditMode
                                  ? editData.person1_name
                                  : person1_name
                              }
                              readOnly={!isEditMode}
                              onChange={(event) => {
                                setEditData({
                                  ...editData,
                                  person1_name: event.target.value,
                                });
                              }}
                            />
                          </td>
                          {/* เบอร์ คนที่ 1 */}
                          <td style={{ verticalAlign: "middle" }}>
                            <Form.Control
                              size="sm"
                              type="text"
                              className="font-form-control"
                              placeholder="เบอร์ติดต่อ ผู้รับผิดชอบโครงการ คนที่ 1"
                              value={
                                isEditMode
                                  ? editData.person1_contact
                                  : person1_contact
                              }
                              readOnly={!isEditMode}
                              onChange={(event) => {
                                setEditData({
                                  ...editData,
                                  person1_contact: event.target.value,
                                });
                              }}
                            />
                          </td>
                        </tr>
                        {/* คนที่ 2 */}
                        <tr>
                          {/* ชื่อ คนที่ 2 */}
                          <td style={{ verticalAlign: "middle" }}>
                            <Form.Control
                              size="sm"
                              type="text"
                              className="font-form-control"
                              placeholder="ชื่อ ผู้รับผิดชอบโครงการ คนที่ 2"
                              value={
                                isEditMode
                                  ? editData.person2_name
                                  : person2_name
                              }
                              readOnly={!isEditMode}
                              onChange={(event) => {
                                setEditData({
                                  ...editData,
                                  person2_name: event.target.value,
                                });
                              }}
                            />
                          </td>
                          {/* เบอร์ คนที่ 2 */}
                          <td style={{ verticalAlign: "middle" }}>
                            <Form.Control
                              size="sm"
                              type="text"
                              className="font-form-control"
                              placeholder="เบอร์ติดต่อ ผู้รับผิดชอบโครงการ คนที่ 2"
                              value={
                                isEditMode
                                  ? editData.person2_contact
                                  : person2_contact
                              }
                              readOnly={!isEditMode}
                              onChange={(event) => {
                                setEditData({
                                  ...editData,
                                  person2_contact: event.target.value,
                                });
                              }}
                            />
                          </td>
                        </tr>
                        {/* คนที่ 3 */}
                        <tr style={{ backgroundColor: "white" }}>
                          {/* ชื่อ คนที่ 3 */}
                          <td style={{ verticalAlign: "middle" }}>
                            <Form.Control
                              size="sm"
                              type="text"
                              className="font-form-control"
                              placeholder="ชื่อ ผู้รับผิดชอบโครงการ คนที่ 3"
                              value={
                                isEditMode
                                  ? editData.person3_name
                                  : person3_name
                              }
                              readOnly={!isEditMode}
                              onChange={(event) => {
                                setEditData({
                                  ...editData,
                                  person3_name: event.target.value,
                                });
                              }}
                            />
                          </td>
                          {/* เบอร์ คนที่ 3 */}
                          <td style={{ verticalAlign: "middle" }}>
                            <Form.Control
                              size="sm"
                              type="text"
                              className="font-form-control"
                              placeholder="เบอร์ติดต่อ ผู้รับผิดชอบโครงการ คนที่ 3"
                              value={
                                isEditMode
                                  ? editData.person3_contact
                                  : person3_contact
                              }
                              readOnly={!isEditMode}
                              onChange={(event) => {
                                setEditData({
                                  ...editData,
                                  person3_contact: event.target.value,
                                });
                              }}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </td>
                </tr>
                {/* 5 ด้าน */}
                <tr style={{ backgroundColor: "white" }}>
                  <td
                    className="head-side-td-swp"
                    style={{ verticalAlign: "top" }}
                  >
                    <div>แผนยุทธศาสตร์</div>
                    <div>การพัฒนา</div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <label
                      style={{
                        marginLeft: "10px",
                        fontSize: "14px",
                        color: "black",
                      }}
                    >
                      <input
                        type="checkbox"
                        value="1"
                        checked={isEditMode ? editData.is_1side : is_1side}
                        readOnly={!isEditMode}
                        disabled={!isEditMode}
                        onChange={(event) => {
                          setEditData({
                            ...editData,
                            is_1side: !editData.is_1side,
                          });
                        }}
                      />
                      {`    `}ด้านวิชาการที่ส่งเสริมคุณลักษณะบัณฑิตที่พึงประสงค์
                    </label>
                    <br />
                    <label
                      style={{
                        marginLeft: "10px",
                        fontSize: "14px",
                        color: "black",
                      }}
                    >
                      <input
                        type="checkbox"
                        value="1"
                        checked={isEditMode ? editData.is_2side : is_2side}
                        readOnly={!isEditMode}
                        disabled={!isEditMode}
                        onChange={(event) => {
                          setEditData({
                            ...editData,
                            is_2side: !editData.is_2side,
                          });
                        }}
                      />
                      {`    `}ด้านกีฬาหรือการส่งเสริมสุขภาพ
                    </label>
                    <br />
                    <label
                      style={{
                        marginLeft: "10px",
                        fontSize: "14px",
                        color: "black",
                      }}
                    >
                      <input
                        type="checkbox"
                        value="1"
                        checked={isEditMode ? editData.is_3side : is_3side}
                        readOnly={!isEditMode}
                        disabled={!isEditMode}
                        onChange={(event) => {
                          setEditData({
                            ...editData,
                            is_3side: !editData.is_3side,
                          });
                        }}
                      />
                      {`    `}ด้านบำเพ็ญประโยชน์หรือรักษาสิ่งแวดล้อม
                    </label>
                    <br />
                    <label
                      style={{
                        marginLeft: "10px",
                        fontSize: "14px",
                        color: "black",
                      }}
                    >
                      <input
                        type="checkbox"
                        value="1"
                        checked={isEditMode ? editData.is_4side : is_4side}
                        readOnly={!isEditMode}
                        disabled={!isEditMode}
                        onChange={(event) => {
                          setEditData({
                            ...editData,
                            is_4side: !editData.is_4side,
                          });
                        }}
                      />
                      {`    `}ด้านเสริมสร้างคุณธรรมและจริยธรรม
                    </label>
                    <br />
                    <label
                      style={{
                        marginLeft: "10px",
                        fontSize: "14px",
                        color: "black",
                      }}
                    >
                      <input
                        type="checkbox"
                        value="1"
                        checked={isEditMode ? editData.is_5side : is_5side}
                        readOnly={!isEditMode}
                        disabled={!isEditMode}
                        onChange={(event) => {
                          setEditData({
                            ...editData,
                            is_5side: !editData.is_5side,
                          });
                        }}
                      />
                      {`    `}ด้านส่งเสริมศิลปะและวัฒนธรรม
                    </label>
                    {/* Add more checkboxes as needed */}
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
