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

function SD_locationtime({ id_project }) {
  const storedUserData = sessionStorage.getItem("user");
  const storedUser = storedUserData ? JSON.parse(storedUserData) : {};
  const id_student = storedUser.username;
  const strcodebooksomeoutyear = storedUser.codebooksomeoutyear;
  const [projectList, setProjectList] = useState([]);

  const [location1, setLocation1] = useState("");
  const [location2, setLocation2] = useState("");
  const [location3, setLocation3] = useState("");
  const [location4, setLocation4] = useState("");
  const [location5, setLocation5] = useState("");
  const [start_prepare, setStartPrepare] = useState("");
  const [end_prepare, setEndPrepare] = useState("");
  const [start_event, setStartEvent] = useState("");
  const [end_event, setEndEvent] = useState("");
  const [deadline, setDeadLine] = useState("");

  const [thaistart_prepare, setThaiStartPrepare] = useState("");
  const [thaiend_prepare, setThaiEndPrepare] = useState("");
  const [thaistart_event, setThaiStartEvent] = useState("");
  const [thaiend_event, setThaiEndEvent] = useState("");
  const [thaideadline, setThaiDeadLine] = useState("");

  const [created_at, setCreated_At] = useState(new Date());
  const [updated_at, setUpdated_at] = useState("");
  const [onlymonthstart, setOnlyMonthStart] = useState("");
  const [showdeadline, setShowDeadLine] = useState("");

  //
  const minDate = new Date();
  const [codeclub, setCodeclub] = useState("");
  const [yearly_countsketch,setYearlyCountSketch]=useState("");
  const [originalData, setOriginalData] = useState({});
  const [editData, setEditData] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);
  const getProjectData = () => {
    Axios.get(
      `http://localhost:3001/student/project/getidproject/${id_project}`
    ).then((response) => {
      setOriginalData(response.data[0]);
      setEditData(response.data[0]);
      setCodeclub(response.data[0].codeclub);
      setYearlyCountSketch(response.data[0].responsible_agency);
      setLocation1(response.data[0].location1);
      setLocation2(response.data[0].location2);
      setLocation3(response.data[0].location3);
      setLocation4(response.data[0].location4);
      setLocation5(response.data[0].location5);

      setStartPrepare(response.data[0].start_prepare);
      setEndPrepare(response.data[0].end_prepare);
      setStartEvent(response.data[0].start_event);
      setEndEvent(response.data[0].end_event);
      setDeadLine(response.data[0].deadline);

      setThaiStartPrepare(response.data[0].thaistart_prepare);
      setThaiEndPrepare(response.data[0].thaiend_prepare);
      setThaiStartEvent(response.data[0].thaistart_event);
      setThaiEndEvent(response.data[0].thaiend_event);
      setThaiDeadLine(response.data[0].thaideadline);
    });
  };

  useEffect(() => {
    getProjectData();
  }, [id_project]);


  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    const editpage = "สถานที่และเวลาดำเนินการ"
    // Save data here
    setIsEditMode(false);
    setEditData((prevEditData) => ({
        ...prevEditData,
        deadline: deadline,
      }));
    if (window.confirm("Do you want to save changes?")) {
      Axios.put(
        `http://localhost:3001/student/project/edit/${id_project}`,
        editData
      )
        .then((response) => {
          // Handle success
          console.log("Data saved successfully:", response.data);
          window.location.reload();
        })
        .catch((error) => {
          // Handle error
          console.error("Error saving data:", error);
        });
        Axios.post(
          `http://localhost:3001/student/project/edit/history/${id_project}`,
          {codeclub,editpage,id_student}
        )
          .then((response) => {
            console.log("Data saved successfully:", response.data);
            window.location.reload();
          })
          .catch((error) => {
            console.error("Error saving data:", error);
          });
    }
  };

  const handleBackClick = () => {
    const confirmBack = window.confirm(
      "คุณต้องการยกเลิกกลับไปเป็นข้อมูลเดิมใช่ไหม ข้อมูลที่คุณกรอกไปจะไม่บันทึกลงระบบ"
    );

    if (confirmBack) {
      setIsEditMode(false);
      setEditData(originalData);
    }
  };

  // Split month start_prepare
  useEffect(() => {
    if (start_prepare) {
      const start = new Date(start_prepare);
      const month = (start.getMonth() + 1).toString().padStart(2, "0");
      setOnlyMonthStart(`${month}`);
    }
  }, [start_prepare]);
  // Calculate end date for วันส่งรายงาน
  useEffect(() => {
    if (end_event) {
      const endReportDate = new Date(editData.end_event);
      endReportDate.setDate(endReportDate.getDate() + 30);
  
      const day = endReportDate.getDate().toString().padStart(2, "0");
      const month = (endReportDate.getMonth() + 1).toString().padStart(2, "0");
      const year = endReportDate.getFullYear();
  
      const a = `${year}-${month}-${day}`;
      console.log("New deadline:", a);
  
      // Update editData using the functional form of setEditData
      setEditData((prevEditData) => ({
        ...prevEditData,
        deadline: a,
      }));
      console.log("Updated editData:", editData);
  
      setDeadLine(a);
      console.log("Updated editData:", deadline);
      setShowDeadLine(`${day}/${month}/${year}`);
    }
  }, [editData.end_event]); 
  useEffect(() => {
    console.log("Updated editData2:", deadline);
    setEditData((prevEditData) => ({
        ...prevEditData,
        deadline: deadline,
      }));
  }, [deadline]);


  useEffect(() => {
    const formattedDate = new Date(editData.start_prepare).toLocaleDateString("th-TH", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    setEditData({
        ...editData,
        thaistart_prepare: formattedDate,
      });
    setThaiStartPrepare(formattedDate);
  }, [editData.start_prepare]);

  useEffect(() => {
    const formattedDate = new Date(editData.end_prepare).toLocaleDateString("th-TH", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    setEditData({
        ...editData,
        thaiend_prepare: formattedDate,
      });
    setThaiEndPrepare(formattedDate);
  }, [editData.end_prepare]);

  useEffect(() => {
    const formattedDate = new Date(editData.start_event).toLocaleDateString("th-TH", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    setEditData({
        ...editData,
        thaistart_event: formattedDate,
      });
    setThaiStartEvent(formattedDate);
  }, [editData.start_event]);

  useEffect(() => {
    const formattedDate = new Date(editData.end_event).toLocaleDateString("th-TH", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    setEditData({
        ...editData,
        thaiend_event: formattedDate,
      });
    setThaiEndEvent(formattedDate);
  }, [editData.end_event]);

  useEffect(() => {
    const formattedDate = new Date(editData.deadline).toLocaleDateString("th-TH", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    setEditData({
        ...editData,
        thaideadline: formattedDate,
      });
    setThaiDeadLine(formattedDate);
    console.log("BBBBBBBBBBBBBBB")
    console.log(formattedDate)
  }, [editData.deadline]);

  useEffect(() => {
    console.log(thaistart_prepare);
    console.log(thaiend_prepare);
    console.log(thaistart_event);
    console.log(thaiend_event);
    console.log(thaideadline);
  }, [
    thaiend_event,
    thaiend_prepare,
    thaistart_event,
    thaistart_prepare,
    thaideadline,
  ]);
  return (
    <>
      {/* วนค่าจากdatabase  */}
      <Col md="9">
        <Card>
          {!isEditMode && (
            <Button
              type="submit"
              className="btn-dataupdate"
              style={{ fontSize: "14px", margin: "1%" }}
              variant="primary"
              onClick={handleEditClick}
            >
              Edit
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
              สถานที่และเวลาดำเนินการ
            </div>
          </CardHeader>

          <CardBody>
            <Table striped="columns">
              <tbody>
                {/* สถานที่จัดโครงการ */}
                <tr>
                  <td className="head-side-td" style={{ verticalAlign: "top" }}>
                    <div>สถานที่จัดโครงการ</div>
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
                            placeholder={`สถานที่จัดโครงการที่ ${1}`}
                            value={isEditMode ? editData.location1 : location1}
                            readOnly={!isEditMode}
                            onChange={(event) => {
                              setEditData({
                                ...editData,
                                location1: event.target.value,
                              });
                            }}
                          />
                        </tr>

                        <tr style={{ backgroundColor: "white" }}>
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            placeholder={`สถานที่จัดโครงการที่ ${2}`}
                            value={isEditMode ? editData.location2 : location2}
                            readOnly={!isEditMode}
                            onChange={(event) => {
                              setEditData({
                                ...editData,
                                location2: event.target.value,
                              });
                            }}
                          />
                        </tr>
                        <tr style={{ backgroundColor: "white" }}>
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            placeholder={`สถานที่จัดโครงการที่ ${3}`}
                            value={isEditMode ? editData.location3 : location3}
                            readOnly={!isEditMode}
                            onChange={(event) => {
                              setEditData({
                                ...editData,
                                location3: event.target.value,
                              });
                            }}
                          />
                        </tr>
                        <tr style={{ backgroundColor: "white" }}>
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            placeholder={`สถานที่จัดโครงการที่ ${4}`}
                            value={isEditMode ? editData.location4 : location4}
                            readOnly={!isEditMode}
                            onChange={(event) => {
                              setEditData({
                                ...editData,
                                location4: event.target.value,
                              });
                            }}
                          />
                        </tr>
                        <tr style={{ backgroundColor: "white" }}>
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            placeholder={`สถานที่จัดโครงการที่ ${5}`}
                            value={isEditMode ? editData.location5 : location5}
                            readOnly={!isEditMode}
                            onChange={(event) => {
                              setEditData({
                                ...editData,
                                location5: event.target.value,
                              });
                            }}
                          />
                        </tr>
                      </tbody>
                    </Table>
                  </td>
                </tr>

                {/* ช่วงจัดเตรียมโครงการ */}
                <tr>
                  <td
                    className="head-side-td-swp"
                    style={{ verticalAlign: "top" }}
                  >
                    <div>ช่วงจัดเตรียมโครงการ</div>
                    {/* <p className="detail-prodoc">ระบุช่วงเวลาเตรียมงาน</p> */}
                  </td>
                  <td className="back-side-td">
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <td style={{ borderColor: "white", width: "50%" }}>
                        <Form.Label>วันเริ่มต้น (จัดเตรียม) :</Form.Label>
                        <DatePicker
                          selected={
                            isEditMode ? editData.start_prepare : start_prepare
                          }
                          onChange={(date) => setEditData({
                            ...editData,
                            start_prepare: date, // Ensure date is a valid date object
                          })}
                          dateFormat="dd/MM/yyyy"
                          placeholderText="เลือกวันเริ่มต้น"
                          className="form-control margin-form-control"
                          minDate={minDate}
                          popperPlacement="top-start"
                          isClearable
                          selectsStart
                          startDate={
                            isEditMode ? editData.start_prepare : start_prepare
                          }
                          endDate={
                            isEditMode ? editData.end_prepare : end_prepare
                          }
                          readOnly={!isEditMode}
                        />
                      </td>
                      <td style={{ borderColor: "white", width: "50%" }}>
                        <Form.Label>วันสิ้นสุด (จัดเตรียม) :</Form.Label>
                        <DatePicker
                          selected={ isEditMode ? editData.end_prepare:end_prepare}
                          onChange={(date) => setEditData({
                            ...editData,
                            end_prepare: date, // Ensure date is a valid date object
                          })}
                          dateFormat="dd/MM/yyyy"
                          placeholderText="เลือกวันสิ้นสุด"
                          className="form-control margin-form-control"
                          minDate={ isEditMode ? editData.start_prepare : start_prepare}
                          popperPlacement="top-start"
                          isClearable
                          selectsEnd
                          startDate={ isEditMode ? editData.start_prepare : start_prepare}
                          endDate={isEditMode ? editData.end_prepare : end_prepare}
                          readOnly={!isEditMode}
                        />
                      </td>
                    </div>
                  </td>
                </tr>

                {/* วันดำเนินโครงการ */}
                <tr>
                  <td className="head-side-td" style={{ verticalAlign: "top" }}>
                    <div>ช่วงดำเนินโครงการ</div>
                    {/* <p className="detail-prodoc">
                      กรณีจัดโครงการเพียงหนึ่งวันให้เลือกวันเริ่มต้นและวันสิ้นสุดเป็นวันเดียวกัน
                    </p> */}
                  </td>
                  <td className="back-side-td">
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <td style={{ borderColor: "white", width: "50%" }}>
                        <Form.Label>วันเริ่มต้น (ดำเนินงาน) : </Form.Label>
                        <DatePicker
                          selected={isEditMode ? editData.start_event:start_event}
                          onChange={(date) => setEditData({
                            ...editData,
                            start_event: date, // Ensure date is a valid date object
                          })}
                          dateFormat="dd/MM/yyyy"
                          placeholderText="เลือกวันเริ่มต้น"
                          className="form-control margin-form-control"
                          minDate={isEditMode ? editData.end_prepare:end_prepare}
                          popperPlacement="top-start"
                          isClearable
                          selectsStart
                          startDate={isEditMode ? editData.start_event:start_event}
                          endDate={isEditMode ? editData.end_event:end_event}
                          readOnly={!isEditMode}
                        />
                      </td>
                      <td style={{ borderColor: "white", width: "50%" }}>
                        <Form.Label>วันสิ้นสุด (ดำเนินงาน) : </Form.Label>
                        <DatePicker
                          selected={isEditMode ? editData.end_event:end_event}
                          onChange={(date) => setEditData({
                            ...editData,
                            end_event: date, // Ensure date is a valid date object
                          })}
                          dateFormat="dd/MM/yyyy"
                          placeholderText="เลือกวันสิ้นสุด"
                          className="form-control margin-form-control"
                          minDate={isEditMode ? editData.start_event:start_event}
                          popperPlacement="top-start"
                          isClearable
                          selectsEnd
                          startDate={isEditMode ? editData.start_event:start_event}
                          endDate={isEditMode ? editData.end_event:end_event}
                          readOnly={!isEditMode}
                        />
                      </td>
                    </div>
                  </td>
                </tr>

                {/* วันกำหนดส่งโครงการ */}
                <tr style={{ backgroundColor: "white" }}>
                  <td
                    className="head-side-td-swp"
                    style={{ verticalAlign: "top" }}
                  >
                    <div>วันกำหนดส่งโครงการ</div>
                    {/* <p className="detail-prodoc">
                      กำหนด 30 วัน หลังจากวันดำเนินงาน
                    </p> */}
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      {/* <Form.Label className="mr-2">วันส่งรายงาน:</Form.Label> */}
                      <input
                        type="text"
                        value={isEditMode ? editData.deadline:showdeadline}
                        className="form-control"
                        readOnly
                      />
                    </div>
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
export default SD_locationtime;
