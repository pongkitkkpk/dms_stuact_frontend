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
import Swal from "sweetalert2";

function SD_finalindicator({ id_project, currentStepProject }) {
  // รอแก้ db indicator เพิ่มผลการ ของ volume กับ quality กับ บรรลุเป้าหมาย หรือไม่บรรลุเป้าหมาย กับเหตุผล
  // ใช้ BD เดิม

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

  const [expresultvolume1, setexpresultVolume1] = useState("");
  const [expresultvolume2, setexpresultVolume2] = useState("");
  const [expresultvolume3, setexpresultVolume3] = useState("");
  const [expresultvolume4, setexpresultVolume4] = useState("");
  const [expresultvolume5, setexpresultVolume5] = useState("");

  const [quality1, setQuality1] = useState("");
  const [quality2, setQuality2] = useState("");
  const [quality3, setQuality3] = useState("");
  const [quality4, setQuality4] = useState("");
  const [quality5, setQuality5] = useState("");
  // ผลที่คาดว่าจะได้รับ
  const [expresultquality1, setexpresultQuality1] = useState("");
  const [expresultquality2, setexpresultQuality2] = useState("");
  const [expresultquality3, setexpresultQuality3] = useState("");
  const [expresultquality4, setexpresultQuality4] = useState("");
  const [expresultquality5, setexpresultQuality5] = useState("");


  const [expresult1, setExpresult1] = useState("");
  const [expresult2, setExpresult2] = useState("");
  const [expresult3, setExpresult3] = useState("");
  const [expresult4, setExpresult4] = useState("");
  const [expresult5, setExpresult5] = useState("");
  // ผลที่คาดว่าจะได้รับ



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
      setexpresultVolume1(response.data[0].expresultvolume1);
      setexpresultVolume2(response.data[0].expresultvolume2);
      setexpresultVolume3(response.data[0].expresultvolume3);
      setexpresultVolume4(response.data[0].expresultvolume4);
      setexpresultVolume5(response.data[0].expresultvolume5);
      setQuality1(response.data[0].quality1);
      setQuality2(response.data[0].quality2);
      setQuality3(response.data[0].quality3);
      setQuality4(response.data[0].quality4);
      setQuality5(response.data[0].quality5);
      setexpresultQuality1(response.data[0].expresultquality1);
      setexpresultQuality2(response.data[0].expresultquality2);
      setexpresultQuality3(response.data[0].expresultquality3);
      setexpresultQuality4(response.data[0].expresultquality4);
      setexpresultQuality5(response.data[0].expresultquality5);
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
    const editpage = "ความคาดหวังของโครงการ";
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
          `http://localhost:3001/student/project/finalindicator/edit/${id_project}`,
          {
            volume1: volume1,
            volume2: volume2,
            volume3: volume3,
            volume4: volume4,
            volume5: volume5,
            expresultvolume1: expresultvolume1,
            expresultvolume2: expresultvolume2,
            expresultvolume3: expresultvolume3,
            expresultvolume4: expresultvolume4,
            expresultvolume5: expresultvolume5,
            quality1: quality1,
            quality2: quality2,
            quality3: quality3,
            quality4: quality4,
            quality5: quality5,
            expresultquality1: expresultquality1,
            expresultquality2: expresultquality2,
            expresultquality3: expresultquality3,
            expresultquality4: expresultquality4,
            expresultquality5: expresultquality5,
            expresult1: expresult1,
            expresult2: expresult2,
            expresult3: expresult3,
            expresult4: expresult4,
            expresult5: expresult5,
            is_1follow: is_1follow,
            is_2follow: is_2follow,
            is_3follow: is_3follow,
            is_4follow: is_4follow,
            is_etcfollow: is_etcfollow,
            etcfollow: etcfollow,
          }
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
        Swal.fire(
          "save เรียบร้อย!",
          "Your changes have been reverted.",
          "success"
        );
      }
    });
  };

  const handleBackClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "คุณต้องการยกเลิกกลับไปเป็นข้อมูลเดิมใช่ไหม ข้อมูลที่คุณกรอกไปจะไม่บันทึกลงระบบ",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, proceed",
      cancelButtonText: "No, cancel",
      // reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        setIsEditMode(false);
        setEditData(originalData);
        window.location.reload();

        Swal.fire("Cancelled!", "Your changes have been reverted.", "success");
      }
    });
  };
  return (
    <>
      <Col md="9">
        <Card>
          <Button
            type="submit"
            className="btn-dataupdate"
            style={{ fontSize: "14px", margin: "1%" }}
            variant="primary"
            onClick={handleEditClick}
          >
            แก้ไข
          </Button>

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
                    <div>
                      <p className="title" style={{ marginBottom: "0" }}>
                        ตัวชี้วัด
                      </p>
                      <p className="title" style={{ marginBottom: "0" }}>
                        (ด้านปริมาณ)
                      </p>
                    </div>
                  </td>
                  <td className="back-side-td">
                    <Table>
                      <thead>
                        <tr></tr>
                      </thead>
                      <tbody>
                        <tr style={{ backgroundColor: "white" }}>
                          เป้าหมายด้านปริมาณข้อที่1 :
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            value={volume1}
                            placeholder={`ด้านปริมาณข้อที่ ${1}`}
                            onChange={(event) => {
                              setVolume1(event.target.value);
                            }}
                            readOnly={!isEditMode}
                          />
                        </tr>
                        <tr style={{ backgroundColor: "white" }}>
                          ผลการ :
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            value={expresultvolume1}
                            placeholder={`ผลการข้อที่ ${1}`}
                            onChange={(event) => {
                              setexpresultVolume1(event.target.value);
                            }}
                            readOnly={!isEditMode}
                          />
                        </tr>
                        <hr></hr>
                        
                        <tr style={{ backgroundColor: "white" }}>
                          เป้าหมายด้านปริมาณข้อที่ 2  :
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
                          ผลการ :
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            value={expresultvolume2}
                            placeholder={`ผลการข้อที่ ${2}`}
                            onChange={(event) => {
                              setexpresultVolume2(event.target.value);
                            }}
                            readOnly={!isEditMode}
                          />
                        </tr>
                        <hr></hr>
                        <tr style={{ backgroundColor: "white" }}>
                          เป้าหมายด้านปริมาณข้อที่ 3  :
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
                          ผลการ :
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            value={expresultvolume3}
                            placeholder={`ผลการข้อที่ ${3}`}
                            onChange={(event) => {
                              setexpresultVolume3(event.target.value);
                            }}
                            readOnly={!isEditMode}
                          />
                        </tr>
                        <hr></hr>
                        <tr style={{ backgroundColor: "white" }}>
                          เป้าหมายด้านปริมาณข้อที่ 4 :
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
                          ผลการ :
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            value={expresultvolume4}
                            placeholder={`ผลการข้อที่ ${4}`}
                            onChange={(event) => {
                              setexpresultVolume4(event.target.value);
                            }}
                            readOnly={!isEditMode}
                          />
                        </tr>
                        <hr></hr>
                        <tr style={{ backgroundColor: "white" }}>
                          เป้าหมายด้านปริมาณข้อที่ 5 :
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
                        <tr style={{ backgroundColor: "white" }}>
                          ผลการ :
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            value={expresultvolume5}
                            placeholder={`ผลการข้อที่ ${5}`}
                            onChange={(event) => {
                              setexpresultVolume5(event.target.value);
                            }}
                            readOnly={!isEditMode}
                          />
                        </tr>
                        <hr></hr>
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
                    <div>
                      <p className="title" style={{ marginBottom: "0" }}>
                        ตัวชี้วัด
                      </p>
                      <p className="title" style={{ marginBottom: "0" }}>
                        (ด้านคุณภาพ)
                      </p>
                    </div>
                  </td>
                  <td className="back-side-td">
                    <Table>
                      <thead>
                        <tr></tr>
                      </thead>
                      <tbody>
                        <tr style={{ backgroundColor: "white" }}>
                          เป้าหมายด้านคุณภาพ ข้อที่1 :
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
                          ผลการด้านคุณภาพ ข้อที่ 1 :
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            placeholder={`ผลการด้านคุณภาพ ข้อที่${1}`}
                            value={expresultquality1}
                            onChange={(event) => {
                              setexpresultQuality1(event.target.value);
                            }}
                            readOnly={!isEditMode}
                          />
                        </tr>
                        <hr></hr>
                        <tr style={{ backgroundColor: "white" }}>
                          ผลการ :
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
                    <div>ผลที่ได้รับจากการดำเนินโครงการ</div>
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
                  <td
                    className="head-side-td-swp"
                    style={{ verticalAlign: "top" }}
                  >
                    <div>
                      <p className="title" style={{ marginBottom: "0" }}>
                        วิธีติดตามผล
                      </p>
                      <p className="title" style={{ marginBottom: "0" }}>
                        การประเมินผล
                      </p>
                      <p className="title" style={{ marginBottom: "0" }}>
                        โครงการ/กิจกรรม
                      </p>
                    </div>
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
                        type="radio"
                        name="followUp"
                        value="4"
                        checked={is_4follow}
                        onChange={() => {
                          setIs_4follow(true);
                          setIs_etcfollow(false);
                        }}
                        disabled={!isEditMode}
                        readOnly={!isEditMode}
                      />
                      {`    `}บรรลุเป้าหมาย
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
                        type="radio"
                        name="followUp"
                        value="5"
                        checked={is_etcfollow}
                        onChange={() => {
                          setIs_etcfollow(true);
                          setIs_4follow(false);
                        }}
                        disabled={!isEditMode}
                        readOnly={!isEditMode}
                      />
                      {"    "}ไม่บรรลุเป้าหมาย
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
export default SD_finalindicator;
