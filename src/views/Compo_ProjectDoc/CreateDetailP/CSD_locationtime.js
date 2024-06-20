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

function CSD_locationtime({ id_projects, switchToCSDTimestep }) {

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

  const [problem1, setProblem1] = useState("");
  const [result1, setResult1] = useState("");
  const [problem2, setProblem2] = useState("");
  const [result2, setResult2] = useState("");
  const [problem3, setProblem3] = useState("");
  const [result3, setResult3] = useState("");

  const [created_at, setCreated_At] = useState(new Date());
  const [updated_at, setUpdated_at] = useState("");
  const [onlymonthstart, setOnlyMonthStart] = useState("");
  const [showdeadline, setShowDeadLine] = useState("");

  //
  const minDate = new Date();

  // เพิ่มสถานที่
  const [locationCount, setLocationCount] = useState(1);
  const increaseLocationCount = () => {
    if (locationCount < 5) {
      setLocationCount(locationCount + 1);
    }
  };
  const decreaseLocationCount = () => {
    if (locationCount > 1) {
      setLocationCount(locationCount - 1);
      // Reset corresponding studentTypeNumber state variables to 0
      switch (locationCount) {
        case 4:
          setLocation5("");
          break;
        case 3:
          setLocation4("");
          break;
        case 2:
          setLocation3("");
          break;
        case 1:
          setLocation2("");
          break;
        case 0:
          setLocation1("");
          break;
        default:
        // Handle other cases if needed
      }
    }
  };

  const createProject = (yearlyCountsketch) => {
    Axios.put(`${process.env.REACT_APP_API_URL}/student/project/create3/${id_projects}`, {
      location1: location1,
      location2: location2,
      location3: location3,
      location4: location4,
      location5: location5,
      start_prepare: start_prepare,
      end_prepare: end_prepare,
      start_event: start_event,
      end_event: end_event,
      deadline: deadline,
      thaistart_prepare: thaistart_prepare,
      thaiend_prepare: thaiend_prepare,
      thaistart_event: thaistart_event,
      thaiend_event: thaiend_event,
      thaideadline: thaideadline,
      problem1: problem1,
      result1: result1,
      problem2: problem2,
      result2: result2,
      problem3: problem3,
      result3: result3,
      created_at: created_at,
      updated_at: updated_at,
    }).then(() => {
      // Assuming setProjectList is a state setter function for your projectList state
      setProjectList([
        ...projectList,
        {
          location1: location1,
          location2: location2,
          location3: location3,
          location4: location4,
          location5: location5,
          start_prepare: start_prepare,
          end_prepare: end_prepare,
          start_event: start_event,
          end_event: end_event,
          deadline: deadline,
          problem1: problem1,
          result1: result1,
          problem2: problem2,
          result2: result2,
          problem3: problem3,
          result3: result3,
          created_at: created_at,
          updated_at: updated_at,
        },
      ]);
    });
    setStartPrepare("");
    setEndPrepare("");
    setStartEvent("");
    setEndEvent("");
    // window.scrollTo({ top: 0, behavior: 'smooth' });
    Swal.fire({
      title: "บันทึกโครงการหน้า  สถานที่และเวลาดำเนินการ",
      text: "",
      icon: "success",
    })
    setTimeout(() => {
      switchToCSDTimestep();
    }, 500); // Adjust the delay if needed

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
      const endReportDate = new Date(end_event);
      endReportDate.setDate(endReportDate.getDate() + 30);

      const day = endReportDate.getDate().toString().padStart(2, "0");
      const month = (endReportDate.getMonth() + 1).toString().padStart(2, "0");
      const year = endReportDate.getFullYear();

      setDeadLine(`${year}-${month}-${day}`);
      setShowDeadLine(`${day}/${month}/${year}`);
    }
  }, [end_event]);


  useEffect(() => {
    const formattedDate = new Date(start_prepare).toLocaleDateString('th-TH', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    setThaiStartPrepare(formattedDate)
  }, [start_prepare])
  useEffect(() => {
    const formattedDate = new Date(end_prepare).toLocaleDateString('th-TH', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    setThaiEndPrepare(formattedDate)
  }, [end_prepare])
  useEffect(() => {
    const formattedDate = new Date(start_event).toLocaleDateString('th-TH', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    setThaiStartEvent(formattedDate)
  }, [start_event])
  useEffect(() => {
    const formattedDate = new Date(end_event).toLocaleDateString('th-TH', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    setThaiEndEvent(formattedDate)
  }, [end_event])
  useEffect(() => {
    const formattedDate = new Date(deadline).toLocaleDateString('th-TH', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    setThaiDeadLine(formattedDate)
  }, [deadline])


  // useEffect(() => {

  //   console.log(thaistart_prepare)
  //   console.log(thaiend_prepare)
  //   console.log(thaistart_event)
  //   console.log(thaiend_event)
  //   console.log(thaideadline)
  // }, [thaiend_event, thaiend_prepare, thaistart_event, thaistart_prepare, thaideadline])
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
                        {Array.from({ length: locationCount }).map(
                          (_, index) => (
                            <tr
                              key={index}
                              style={{ backgroundColor: "white" }}
                            >
                              <Form.Control
                                className="table-margin"
                                size="sm"
                                type="text"
                                placeholder={`สถานที่จัดโครงการที่ ${index + 1
                                  }`}
                                onChange={(event) => {
                                  switch (index) {
                                    case 0:
                                      setLocation1(event.target.value);
                                      break;
                                    case 1:
                                      setLocation2(event.target.value);
                                      break;
                                    case 2:
                                      setLocation3(event.target.value);
                                      break;
                                    case 3:
                                      setLocation4(event.target.value);
                                      break;
                                    case 4:
                                      setLocation5(event.target.value);
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
                      {locationCount < 5 && (
                        <Button
                          variant="success"
                          className="ml-5 mb-3 btn-budget-increase border-success"
                          onClick={increaseLocationCount}
                        >
                          <div style={{ fontSize: "14px" }}>เพิ่มสถานที่</div>
                        </Button>
                      )}
                      {locationCount > 1 && (
                        <Button
                          variant="danger"
                          className="ml-5 mb-3 btn-budget-decrease border-danger"
                          onClick={decreaseLocationCount}
                        >
                          <div style={{ fontSize: "14px" }}>ลดสถานที่</div>
                        </Button>
                      )}
                    </div>
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
                          selected={start_prepare}
                          onChange={(date) =>
                            setStartPrepare(date)}
                          dateFormat="dd/MM/yyyy"
                          placeholderText="เลือกวันเริ่มต้น"
                          className="form-control margin-form-control"
                          minDate={minDate}
                          popperPlacement="top-start"
                          isClearable
                          selectsStart
                          startDate={start_prepare}
                          endDate={end_prepare}
                        />
                      </td>
                      <td style={{ borderColor: "white", width: "50%" }}>
                        <Form.Label>วันสิ้นสุด (จัดเตรียม) :</Form.Label>
                        <DatePicker
                          selected={end_prepare}
                          onChange={(date) => setEndPrepare(date)}
                          dateFormat="dd/MM/yyyy"
                          placeholderText="เลือกวันสิ้นสุด"
                          className="form-control margin-form-control"
                          minDate={start_prepare}
                          popperPlacement="top-start"
                          isClearable
                          selectsEnd
                          startDate={start_prepare}
                          endDate={end_prepare}
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
                          selected={start_event}
                          onChange={(date) => setStartEvent(date)}
                          dateFormat="dd/MM/yyyy"
                          placeholderText="เลือกวันเริ่มต้น"
                          className="form-control margin-form-control"
                          minDate={end_prepare}
                          popperPlacement="top-start"
                          isClearable
                          selectsStart
                          startDate={start_event}
                          endDate={end_event}
                        />
                      </td>
                      <td style={{ borderColor: "white", width: "50%" }}>
                        <Form.Label>วันสิ้นสุด (ดำเนินงาน) : </Form.Label>
                        <DatePicker
                          selected={end_event}
                          onChange={(date) => setEndEvent(date)}
                          dateFormat="dd/MM/yyyy"
                          placeholderText="เลือกวันสิ้นสุด"
                          className="form-control margin-form-control"
                          minDate={start_event}
                          popperPlacement="top-start"
                          isClearable
                          selectsEnd
                          startDate={start_event}
                          endDate={end_event}
                        />
                      </td>
                    </div>
                  </td>
                </tr>

                {/* วันกำหนดส่งโครงการ */}
                <tr style={{ backgroundColor: "white" }}>
                  <td className="head-side-td-swp" style={{ verticalAlign: "top" }}>
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
                        value={showdeadline}
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
export default CSD_locationtime;
