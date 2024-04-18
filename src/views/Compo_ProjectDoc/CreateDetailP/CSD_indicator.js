import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// react-bootstrap components
import CardHeader from "react-bootstrap/esm/CardHeader";
import { CardBody, CardFooter } from "reactstrap";
import Swal from 'sweetalert2';
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

function CSD_indicator({ id_projects }) {

  const [volume1, setVolume1] = useState("");
  const [volume2, setVolume2] = useState("");
  const [volume3, setVolume3] = useState("");
  const [volume4, setVolume4] = useState("");
  const [volume5, setVolume5] = useState("");
  // ผลที่คาดว่าจะได้รับ
  const [VolumeCount, setVolumecount] = useState(1);
  const increaseVolumeCount = () => {
    if (VolumeCount < 5) {
      setVolumecount(VolumeCount + 1);
    }
  };
  const decreaseVolumeCount = () => {
    if (VolumeCount > 1) {
      setVolumecount(VolumeCount - 1);
      // Reset corresponding studentTypeNumber state variables to 0
      switch (VolumeCount) {
        case 4:
          setVolume5("");
          break;
        case 3:
          setVolume4("");
          break;
        case 2:
          setVolume3("");
          break;
        case 1:
          setVolume2("");
          break;
        case 0:
          setVolume1("");
          break;
        default:
        // Handle other cases if needed
      }
    }
  };

  const [quality1, setQuality1] = useState("");
  const [quality2, setQuality2] = useState("");
  const [quality3, setQuality3] = useState("");
  const [quality4, setQuality4] = useState("");
  const [quality5, setQuality5] = useState("");
  // ผลที่คาดว่าจะได้รับ
  const [QualityCount, setQualitycount] = useState(1);
  const increaseQualityCount = () => {
    if (QualityCount < 5) {
      setQualitycount(QualityCount + 1);
    }
  };
  const decreaseQualityCount = () => {
    if (QualityCount > 1) {
      setQualitycount(QualityCount - 1);
      // Reset corresponding studentTypeNumber state variables to 0
      switch (QualityCount) {
        case 4:
          setQuality5("");
          break;
        case 3:
          setQuality4("");
          break;
        case 2:
          setQuality3("");
          break;
        case 1:
          setQuality2("");
          break;
        case 0:
          setQuality1("");
          break;
        default:
        // Handle other cases if needed
      }
    }
  }; QualityCount

  const [expresult1, setExpresult1] = useState("");
  const [expresult2, setExpresult2] = useState("");
  const [expresult3, setExpresult3] = useState("");
  const [expresult4, setExpresult4] = useState("");
  const [expresult5, setExpresult5] = useState("");
  // ผลที่คาดว่าจะได้รับ
  const [ExpresultCount, setExpresultcount] = useState(1);
  const increaseExpresultCount = () => {
    if (ExpresultCount < 5) {
      setExpresultcount(ExpresultCount + 1);
    }
  };
  const decreaseExpresultCount = () => {
    if (ExpresultCount > 1) {
      setExpresultcount(ExpresultCount - 1);
      // Reset corresponding studentTypeNumber state variables to 0
      switch (ExpresultCount) {
        case 4:
          setExpresult5("");
          break;
        case 3:
          setExpresult4("");
          break;
        case 2:
          setExpresult3("");
          break;
        case 1:
          setExpresult2("");
          break;
        case 0:
          setExpresult1("");
          break;
        default:
        // Handle other cases if needed
      }
    }
  };

  const [is_1follow, setIs_1follow] = useState(false);
  const [is_2follow, setIs_2follow] = useState(false);
  const [is_3follow, setIs_3follow] = useState(false);
  const [is_4follow, setIs_4follow] = useState(false);
  const [is_etcfollow, setIs_etcfollow] = useState(false);
  const [etcfollow, setEtcfollow] = useState("");

  const createIndicator = () => {
    Axios.put(`http://localhost:3001/student/project/p_indicator/create/${id_projects}`, {
      volume1,
      volume2,
      volume3,
      volume4,
      volume5,
      quality1,
      quality2,
      quality3,
      quality4,
      quality5,
      expresult1,
      expresult2,
      expresult3,
      expresult4,
      expresult5,
      is_1follow,
      is_2follow,
      is_3follow,
      is_4follow,
      is_etcfollow,
      etcfollow
    })
      .then((response) => {
        console.log(response.data);
        
        // Handle success, if needed
      })
      .catch((error) => {
        console.error("There was an error!", error);
        // Handle error, if needed
      });
      Swal.fire({
        title: "เสร็จโครงการเสร็จสิ้น?",
        text: "ทำการเพิ่มโครงการแล้ว",
        icon: "success",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = '/students/allproject';
        }
      });
  };
  return (
    <>
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
              ความคาดหวังของโครงการ
            </div>
          </CardHeader>

          <CardBody>
            <Table striped="columns">
              <tbody>
                {/* ตัวชี้วัด(ด้านปริมาณ) */}
                <tr style={{ backgroundColor: "white" }}>
                  <td className="head-side-td" style={{ verticalAlign: "top" }}>
                    <div>ตัวชี้วัด </div>
                    <p>(ด้านปริมาณ)</p>
                  </td>
                  <td className="back-side-td">
                    <Table>
                      <thead>
                        <tr></tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: VolumeCount }).map(
                          (_, index) => (
                            <tr
                              key={index}
                              style={{ backgroundColor: "white" }}
                            >
                              <Form.Control
                                className="table-margin"
                                size="sm"
                                type="text"
                                placeholder={`ด้านปริมาณข้อที่ ${index + 1}`}
                                onChange={(event) => {
                                  switch (index) {
                                    case 0:
                                      setVolume1(event.target.value);
                                      break;
                                    case 1:
                                      setVolume2(event.target.value);
                                      break;
                                    case 2:
                                      setVolume3(event.target.value);
                                      break;
                                    case 3:
                                      setVolume4(event.target.value);
                                      break;
                                    case 4:
                                      setVolume5(event.target.value);
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
                      {VolumeCount < 5 && (
                        <Button
                          variant="success"
                          className="ml-5 mb-3 btn-budget-increase border-success"
                          onClick={increaseVolumeCount}
                        >
                          <div style={{ fontSize: "14px" }}>
                            เพิ่มหลักการและเหตุผล
                          </div>
                        </Button>
                      )}
                      {VolumeCount > 1 && (
                        <Button
                          variant="danger"
                          className="ml-5 mb-3 btn-budget-decrease border-danger"
                          onClick={decreaseVolumeCount}
                        >
                          <div style={{ fontSize: "14px" }}>
                            ลดหลักการและเหตุผล
                          </div>
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>

                {/* ตัวชี้วัด(ด้านคุณภาพ) */}
                <tr style={{ backgroundColor: "white" }}>
                  <td className="head-side-td-swp" style={{ verticalAlign: "top" }}>
                    <div>ตัวชี้วัด </div>
                    <p>(ด้านคุณภาพ)</p>
                  </td>
                  <td className="back-side-td">
                    <Table>
                      <thead>
                        <tr></tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: QualityCount }).map(
                          (_, index) => (
                            <tr
                              key={index}
                              style={{ backgroundColor: "white" }}
                            >
                              <Form.Control
                                className="table-margin"
                                size="sm"
                                type="text"
                                placeholder={`ด้านคุณภาพข้อที่ ${index + 1}`}
                                onChange={(event) => {
                                  switch (index) {
                                    case 0:
                                      setQuality1(event.target.value);
                                      break;
                                    case 1:
                                      setQuality2(event.target.value);
                                      break;
                                    case 2:
                                      setQuality3(event.target.value);
                                      break;
                                    case 3:
                                      setQuality4(event.target.value);
                                      break;
                                    case 4:
                                      setQuality5(event.target.value);
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
                      {QualityCount < 5 && (
                        <Button
                          variant="success"
                          className="ml-5 mb-3 btn-budget-increase border-success"
                          onClick={increaseQualityCount}
                        >
                          <div style={{ fontSize: "14px" }}>
                            เพิ่มหลักการและเหตุผล
                          </div>
                        </Button>
                      )}
                      {QualityCount > 1 && (
                        <Button
                          variant="danger"
                          className="ml-5 mb-3 btn-budget-decrease border-danger"
                          onClick={decreaseQualityCount}
                        >
                          <div style={{ fontSize: "14px" }}>
                            ลดหลักการและเหตุผล
                          </div>
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>

                {/* ผลที่คาดว่าจะได้รับ */}
                <tr style={{ backgroundColor: "white" }}>
                  <td className="head-side-td" style={{ verticalAlign: "top" }}>
                    <div>ผลที่คาดว่าจะได้รับ</div>
                  </td>
                  <td className="back-side-td">
                    <Table>
                      <thead>
                        <tr></tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: ExpresultCount }).map(
                          (_, index) => (
                            <tr
                              key={index}
                              style={{ backgroundColor: "white" }}
                            >
                              <Form.Control
                                className="table-margin"
                                size="sm"
                                type="text"
                                placeholder={`ผลที่คาดว่าจะได้รับ ${index + 1}`}
                                onChange={(event) => {
                                  switch (index) {
                                    case 0:
                                      setExpresult1(event.target.value);
                                      break;
                                    case 1:
                                      setExpresult2(event.target.value);
                                      break;
                                    case 2:
                                      setExpresult3(event.target.value);
                                      break;
                                    case 3:
                                      setExpresult4(event.target.value);
                                      break;
                                    case 4:
                                      setExpresult5(event.target.value);
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
                      {ExpresultCount < 5 && (
                        <Button
                          variant="success"
                          className="ml-5 mb-3 btn-budget-increase border-success"
                          onClick={increaseExpresultCount}
                        >
                          <div style={{ fontSize: "14px" }}>
                            เพิ่มหลักการและเหตุผล
                          </div>
                        </Button>
                      )}
                      {ExpresultCount > 1 && (
                        <Button
                          variant="danger"
                          className="ml-5 mb-3 btn-budget-decrease border-danger"
                          onClick={decreaseExpresultCount}
                        >
                          <div style={{ fontSize: "14px" }}>
                            ลดหลักการและเหตุผล
                          </div>
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
                {/* วิธีติดตามผล */}
                <tr style={{ backgroundColor: "white" }}>
                  <td className="head-side-td" style={{ verticalAlign: "top" }}>
                    <div>วิธีติดตามผลประเมินผลโครงการ/กิจกรรม</div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <label style={{ marginLeft: "10px", fontSize: "14px", color: "black" }}>
                      <input
                        type="checkbox"
                        value="1"
                        checked={is_1follow}
                        onChange={() => setIs_1follow(!is_1follow)}

                      />
                      {`    `}รายงานผลดำเนินโครงการ (Report)
                    </label>
                    <br />
                    <label style={{ marginLeft: "10px", fontSize: "14px", color: "black" }}>
                      <input
                        type="checkbox"
                        value="2"
                        checked={is_2follow}
                        onChange={() => setIs_2follow(!is_2follow)}
                      />
                      {`    `}แบบสอบถามประเมินผล (Questionnaires)
                    </label>
                    <br />
                    <label style={{ marginLeft: "10px", fontSize: "14px", color: "black" }}>
                      <input
                        type="checkbox"
                        value="3"
                        checked={is_3follow}
                        onChange={() => setIs_3follow(!is_3follow)}
                      />
                      {`    `}แบบสังเกตการณ์ (Observation)
                    </label>
                    <br />
                    <label style={{ marginLeft: "10px", fontSize: "14px", color: "black" }}>
                      <input
                        type="checkbox"
                        value="4"
                        checked={is_4follow}
                        onChange={() => setIs_4follow(!is_4follow)}
                      />
                      {`    `}แบบการสัมภาษณ์ (Interview)
                    </label>
                    <br />
                    <label style={{ marginLeft: "10px", fontSize: "14px", color: "black" }}>
                      <input
                        type="checkbox"
                        value="5"
                        checked={is_etcfollow}
                        onChange={() => setIs_etcfollow(!is_etcfollow)}
                      />
                      {'    '}อื่นๆ
                      {is_etcfollow && (

                        <Form.Control
                        style={{marginLeft:"10%",marginTop:"5%"}}
                          className="table-margin"
                          size="sm"
                          type="text"
                          value={etcfollow}
                          placeholder={`ผลที่คาดว่าจะได้รับ`}
                          onChange={(e) => setEtcfollow(e.target.value)}
                        />

                      )}
                    </label>

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
            }}
          >
            <Button
              onClick={createIndicator}
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
export default CSD_indicator;
