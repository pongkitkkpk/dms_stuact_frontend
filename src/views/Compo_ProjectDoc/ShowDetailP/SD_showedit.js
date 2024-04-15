import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
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
  Modal,
} from "react-bootstrap";
import Axios from "axios";

function SD_showedit({ id_project }) {
    const [projectData, setProjectData] = useState([]);

    useEffect(() => {
      getProjectData();
    }, []); // Fetch project data on component mount
  
    const getProjectData = () => {
      Axios.get(`http://localhost:3001/student/project/getedithistory/${id_project}`)
        .then((response) => {
          setProjectData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching project data:", error);
        });
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
              รายการการแก้ไข
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
                        {personCount != 0 && (
                          <tr key={0} style={{ backgroundColor: "white" }}>
                            <td style={{ verticalAlign: "middle" }}>
                              <Form.Control
                                className="font-form-control"
                                size="sm"
                                type="text"
                                disabled
                                value={person1_name}
                                placeholder={`ชื่อ ผู้รับผิดชอบโครงการ คนที่ 1`}
                              />
                            </td>
                            <td style={{ verticalAlign: "middle" }}>
                              <Form.Control
                                className="font-form-control"
                                size="sm"
                                type="text"
                                placeholder={`เบอร์ติดต่อ ผู้รับผิดชอบโครงการ คนที่ 1`}
                                onChange={(event) =>
                                  setPerson1Contact(event.target.value)
                                }
                              />
                            </td>
                          </tr>
                        )}
                        {personCount > 1 && (
                          <tr key={1} style={{ backgroundColor: "white" }}>
                            <td style={{ verticalAlign: "middle" }}>
                              <Form.Control
                                className="font-form-control"
                                size="sm"
                                type="text"
                                disabled
                                value={person2_name}
                                placeholder={`ชื่อ ผู้รับผิดชอบโครงการ คนที่ 2`}
                              />
                            </td>
                            <td style={{ verticalAlign: "middle" }}>
                              <Form.Control
                                className="font-form-control"
                                size="sm"
                                type="text"
                                placeholder={`เบอร์ติดต่อ ผู้รับผิดชอบโครงการ คนที่ 2`}
                                onChange={(event) =>
                                  setPerson2Contact(event.target.value)
                                }
                              />
                            </td>
                          </tr>
                        )}
                        {personCount > 2 && (
                          <tr key={2} style={{ backgroundColor: "white" }}>
                            <td style={{ verticalAlign: "middle" }}>
                              <Form.Control
                                className="font-form-control"
                                size="sm"
                                type="text"
                                disabled
                                value={person3_name}
                                placeholder={`ชื่อ ผู้รับผิดชอบโครงการ คนที่ 3`}
                              />
                            </td>
                            <td style={{ verticalAlign: "middle" }}>
                              <Form.Control
                                className="font-form-control"
                                size="sm"
                                type="text"
                                placeholder={`เบอร์ติดต่อ ผู้รับผิดชอบโครงการ คนที่ 3`}
                                onChange={(event) =>
                                  setPerson3Contact(event.target.value)
                                }
                              />
                            </td>
                          </tr>
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
                      {personCount < 3 && (
                        <Button
                          variant="success"
                          className="ml-5 mb-3 btn-budget-increase border-success"
                          onClick={increasePersonCount}
                        >
                          <div style={{ fontSize: "14px" }}>เพิ่มบุคคล</div>
                        </Button>
                      )}
                      {personCount != 0 && (
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
                        checked={is_1side}
                        onChange={() => setIs_1side(!is_1side)}
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
                        value="2"
                        checked={is_2side}
                        onChange={() => setIs_2side(!is_2side)}
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
                        value="3"
                        checked={is_3side}
                        onChange={() => setIs_3side(!is_3side)}
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
                        value="4"
                        checked={is_4side}
                        onChange={() => setIs_4side(!is_4side)}
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
              marginBottom: "10px",
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
export default SD_showedit;
