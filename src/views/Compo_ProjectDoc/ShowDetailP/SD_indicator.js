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

function SD_indicator({ id_project }) {
  const storedUserData = sessionStorage.getItem("user");
  const storedUser = storedUserData ? JSON.parse(storedUserData) : {};
  const id_student = storedUser.username;
  const strcodebooksomeoutyear = storedUser.codebooksomeoutyear;
  const [codeclub, setCodeclub] = useState("");
  const [yearly_countsketch, setYearlyCountSketch] = useState("");

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
  };


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

  const [originalData, setOriginalData] = useState({});
  const [editData, setEditData] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);
  const [showdeadline, setShowDeadLine] = useState("");
  const getProjectData = () => {
    Axios.get(
      `http://localhost:3001/student/project/indicator/getidproject/${id_project}`
    ).then((response) => {
      setOriginalData(response.data[0]);
      setEditData(response.data[0]);
      setCodeclub(response.data[0].codeclub);
      setYearlyCountSketch(response.data[0].responsible_agency);
      setVolume1(response.data[0].volume1);
      setVolume2(response.data[0].volume2);
      setVolume3(response.data[0].volume3);
      setVolume4(response.data[0].volume4);
      setVolume5(response.data[0].volume5);
      setQuality1(response.data[0].quality1);
      setQuality2(response.data[0].quality2);
      setQuality3(response.data[0].quality3);
      setQuality4(response.data[0].quality4);
      setQuality5(response.data[0].quality5);
      setExpresult1(response.data[0].expresult1);
      setExpresult2(response.data[0].expresult2);
      setExpresult3(response.data[0].expresult3);
      setExpresult4(response.data[0].expresult4);
      setExpresult5(response.data[0].expresult5);
      setIs_1follow(response.data[0].is_1follow);
      setIs_2follow(response.data[0].is_2follow);
      setIs_3follow(response.data[0].is_3follow);
      setIs_4follow(response.data[0].is_4follow);
      setIs_etcfollow(response.data[0].is_etcfollow);
      setEtcfollow(response.data[0].etcfollow);
    });
  };
  useEffect(() => {
    getProjectData();
  }, [id_project]);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    const editpage = "ความคาดหวังของโครงการ"
    setIsEditMode(false);

    if (window.confirm("Do you want to save changes?")) {
      Axios.put(`http://localhost:3001/student/project/indicator/edit/${id_project}`, {
        volume1 : volume1,
        volume2 : volume2,
        volume3 : volume3,
        volume4 : volume4,
        volume5 : volume5,
        quality1 : quality1,
        quality2 : quality2,
        quality3 : quality3,
        quality4 : quality4,
        quality5 : quality5,
        expresult1 : expresult1,
        expresult2 : expresult2,
        expresult3 : expresult3,
        expresult4 : expresult4,
        expresult5 : expresult5,
        is_1follow :is_1follow,
        is_2follow :is_2follow,
        is_3follow :is_3follow,
        is_4follow :is_4follow,
        is_etcfollow :is_etcfollow,
        etcfollow :etcfollow,
      })
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
  return (
    <>
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
                        <tr style={{ backgroundColor: "white" }}>
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            value={volume1 }
                            placeholder={`ด้านปริมาณข้อที่ ${1}`}
                            onChange={(event) => {
                              setVolume1(event.target.value);
                            }}
                            readOnly={!isEditMode}
                          />
                        </tr>
                        <tr style={{ backgroundColor: "white" }}>
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            value={volume2}
                            placeholder={`ด้านปริมาณข้อที่ ${2}`}
                            onChange={(event) => {
                              setVolume2(event.target.value);
                            }}
                            readOnly={!isEditMode}
                          />
                        </tr>
                        <tr style={{ backgroundColor: "white" }}>
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            value={volume3}
                            placeholder={`ด้านปริมาณข้อที่ ${3}`}
                            onChange={(event) => {
                              setVolume3(event.target.value);
                            }}
                            readOnly={!isEditMode}
                          />
                        </tr>
                        <tr style={{ backgroundColor: "white" }}>
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            value={volume4}
                            placeholder={`ด้านปริมาณข้อที่ ${4}`}
                            onChange={(event) => {
                              setVolume4(event.target.value);
                            }}
                            readOnly={!isEditMode}
                          />
                        </tr>
                        <tr style={{ backgroundColor: "white" }}>
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            value={volume5}
                            placeholder={`ด้านปริมาณข้อที่ ${5}`}
                            onChange={(event) => {
                              setVolume5(event.target.value);
                            }}
                            readOnly={!isEditMode}
                          />
                        </tr>
                      </tbody>
                    </Table>
                  </td>
                </tr>

                {/* ตัวชี้วัด(ด้านคุณภาพ) */}
                <tr style={{ backgroundColor: "white" }}>
                  <td
                    className="head-side-td-swp"
                    style={{ verticalAlign: "top" }}
                  >
                    <div>ตัวชี้วัด </div>
                    <p>(ด้านคุณภาพ)</p>
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
                            placeholder={`ด้านคุณภาพข้อที่ ${1}`}
                            value={quality1}
                            onChange={(event) => {
                              setQuality1(event.target.value);
                            }}
                            readOnly={!isEditMode}
                          />
                        </tr>
                        <tr style={{ backgroundColor: "white" }}>
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            value={quality2}
                            placeholder={`ด้านคุณภาพข้อที่ ${2}`}
                            onChange={(event) => {
                              setQuality2(event.target.value);
                            }}
                            readOnly={!isEditMode}
                          />
                        </tr>
                        <tr style={{ backgroundColor: "white" }}>
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            value={quality3}
                            placeholder={`ด้านคุณภาพข้อที่ ${3}`}
                            onChange={(event) => {
                              setQuality3(event.target.value);
                            }}
                            readOnly={!isEditMode}
                          />
                        </tr>
                        <tr style={{ backgroundColor: "white" }}>
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            value={quality4}
                            placeholder={`ด้านคุณภาพข้อที่ ${4}`}
                            onChange={(event) => {
                              setQuality4(event.target.value);
                            }}
                            readOnly={!isEditMode}
                          />
                        </tr>
                        <tr style={{ backgroundColor: "white" }}>
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            value={quality5}
                            placeholder={`ด้านคุณภาพข้อที่ ${5}`}
                            onChange={(event) => {
                              setQuality5(event.target.value);
                            }}
                            readOnly={!isEditMode}
                          />
                        </tr>
                      </tbody>
                    </Table>
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
                        <tr style={{ backgroundColor: "white" }}>
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            placeholder={`ผลที่คาดว่าจะได้รับ ${1}`}
                            value={expresult1}
                            onChange={(event) => {
                              setExpresult1(event.target.value);
                            }}
                            readOnly={!isEditMode}
                          />
                        </tr>
                        <tr style={{ backgroundColor: "white" }}>
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            placeholder={`ผลที่คาดว่าจะได้รับ ${2}`}
                            value={expresult2}
                            onChange={(event) => {
                              setExpresult2(event.target.value);
                            }}
                            readOnly={!isEditMode}
                          />
                        </tr>
                        <tr style={{ backgroundColor: "white" }}>
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            placeholder={`ผลที่คาดว่าจะได้รับ ${3}`}
                            value={expresult3}
                            onChange={(event) => {
                              setExpresult3(event.target.value);
                            }}
                            readOnly={!isEditMode}
                          />
                        </tr>
                        <tr style={{ backgroundColor: "white" }}>
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            placeholder={`ผลที่คาดว่าจะได้รับ ${4}`}
                            value={expresult4}
                            onChange={(event) => {
                              setExpresult4(event.target.value);
                            }}
                            readOnly={!isEditMode}
                          />
                        </tr>
                        <tr style={{ backgroundColor: "white" }}>
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            placeholder={`ผลที่คาดว่าจะได้รับ ${5}`}
                            value={expresult5}
                            onChange={(event) => {
                              setExpresult5(event.target.value);
                            }}
                            readOnly={!isEditMode}
                          />
                        </tr>
                      </tbody>
                    </Table>
                  </td>
                </tr>
                {/* วิธีติดตามผล */}
                <tr style={{ backgroundColor: "white" }}>
                  <td className="head-side-td" style={{ verticalAlign: "top" }}>
                    <div>วิธีติดตามผลประเมินผลโครงการ/กิจกรรม</div>
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
                        checked={is_1follow}
                        onChange={() => setIs_1follow(!is_1follow)}
                        disabled={!isEditMode}
                        readOnly={!isEditMode}
                      />
                      {`    `}รายงานผลดำเนินโครงการ (Report)
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
                        checked={is_2follow}
                        onChange={() => setIs_2follow(!is_2follow)}
                        disabled={!isEditMode}
                        readOnly={!isEditMode}
                      />
                      {`    `}แบบสอบถามประเมินผล (Questionnaires)
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
                        checked={is_3follow}
                        onChange={() => setIs_3follow(!is_3follow)}
                        disabled={!isEditMode}
                        readOnly={!isEditMode}
                      />
                      {`    `}แบบสังเกตการณ์ (Observation)
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
                        checked={is_4follow}
                        onChange={() => setIs_4follow(!is_4follow)}
                        disabled={!isEditMode}
                        readOnly={!isEditMode}
                      />
                      {`    `}แบบการสัมภาษณ์ (Interview)
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
                        checked={is_etcfollow}
                        onChange={() => setIs_etcfollow(!is_etcfollow)}
                        disabled={!isEditMode}
                        readOnly={!isEditMode}
                      />
                      {"    "}อื่นๆ
                      {is_etcfollow && (
                        <Form.Control
                          style={{ marginLeft: "10%", marginTop: "5%" }}
                          className="table-margin"
                          size="sm"
                          type="text"
                          value={etcfollow}
                          placeholder={`ผลที่คาดว่าจะได้รับ`}
                          onChange={(e) => setEtcfollow(e.target.value)}
                          readOnly={!isEditMode}
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
export default SD_indicator;
