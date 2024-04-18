import React, { useState, useEffect } from "react";
import Axios from "axios";
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
import Swal from 'sweetalert2';

function CSD_person({ id_projects, switchToCSDLocationTime }) {
  const [codeclub, setCodeClub] = useState("");
  const [yearly_countsketch, setYearlyCountSketch] = useState("");

  const [pPersonData, setPPersonData] = useState([]);

  const getpPersonData = () => {
    Axios.get("http://localhost:3001/student/project/p_person").then(
      (response) => {
        setPPersonData(response.data);
      }
    );
  };

  useEffect(() => {
    getpPersonData();
  }, []);

  useEffect(() => {
    const idinperson = pPersonData.filter(
      (person) => person.id_projects === id_projects
    );
    console.log("id" + id_projects);

    // Assuming idinperson is an array and you want to get data from the first element
    if (idinperson.length > 0) {
      const { codeclub, yearly_countsketch } = idinperson[0];
      setCodeClub(codeclub);
      setYearlyCountSketch(yearly_countsketch);
    }
  }, [id_projects, pPersonData]);
  // ********************************************** ผู้บริหาร *********************************************
  const [executiveType1Name, setExecutiveType1Name] = useState("");
  const [executiveType1Number, setExecutiveType1Number] = useState("");
  const [executiveType2Name, setExecutiveType2Name] = useState("");
  const [executiveType2Number, setExecutiveType2Number] = useState("");
  const [executiveType3Name, setExecutiveType3Name] = useState("");
  const [executiveType3Number, setExecutiveType3Number] = useState("");
  const [executiveType4Name, setExecutiveType4Name] = useState("");
  const [executiveType4Number, setExecutiveType4Number] = useState("");
  const [executiveType5Name, setExecutiveType5Name] = useState("");
  const [executiveType5Number, setExecutiveType5Number] = useState("");

  const [executiveTypeCount, setExecutiveTypeCount] = useState(1);
  const [grandTotalExecutive, setGrandTotalExecutive] = useState(0);

  const increaseExecutiveTypeCount = () => {
    if (executiveTypeCount < 5) {
      setExecutiveTypeCount(executiveTypeCount + 1);
    }
  };
  const decreaseExecutiveTypeCount = () => {
    if (executiveTypeCount > 1) {
      setExecutiveTypeCount(executiveTypeCount - 1);
      switch (executiveTypeCount) {
        case 5:
          setExecutiveType5Number(0);
          break;
        case 4:
          setExecutiveType4Number(0);
          break;
        case 3:
          setExecutiveType3Number(0);
          break;
        case 2:
          setExecutiveType2Number(0);
          break;
        case 1:
          setExecutiveType1Number(0);
          break;
        default:
        // Handle other cases if needed
      }
    }
  };

  useEffect(() => {
    console.log(executiveType1Name);
  }, [executiveType1Name]);
  useEffect(() => {
    // Calculate total for executive category
    const totalExecutiveCount =
      Number(executiveType1Number) +
      Number(executiveType2Number) +
      Number(executiveType3Number) +
      Number(executiveType4Number) +
      Number(executiveType5Number);

    // Update the grand total state for executive
    setGrandTotalExecutive(totalExecutiveCount);
  }, [
    executiveType1Number,
    executiveType2Number,
    executiveType3Number,
    executiveType4Number,
    executiveType5Number,
  ]);
  // ********************************************** ผู้บริหาร *********************************************

  // ********************************************** คณาจารย์ / บุคลากร *********************************************
  const [professorType1Name, setProfessorType1Name] = useState("");
  const [professorType1Number, setProfessorType1Number] = useState("");
  const [professorType2Name, setProfessorType2Name] = useState("");
  const [professorType2Number, setProfessorType2Number] = useState("");
  const [professorType3Name, setProfessorType3Name] = useState("");
  const [professorType3Number, setProfessorType3Number] = useState("");
  const [professorType4Name, setProfessorType4Name] = useState("");
  const [professorType4Number, setProfessorType4Number] = useState("");
  const [professorType5Name, setProfessorType5Name] = useState("");
  const [professorType5Number, setProfessorType5Number] = useState("");

  const [professorTypeCount, setProfessorTypeCount] = useState(1);
  const [grandTotalProfessor, setGrandTotalProfessor] = useState(0);
  const increaseProfessorTypeCount = () => {
    if (professorTypeCount < 5) {
      setProfessorTypeCount(professorTypeCount + 1);
    }
  };
  const decreaseProfessorTypeCount = () => {
    if (professorTypeCount > 1) {
      setProfessorTypeCount(professorTypeCount - 1);
      // Reset corresponding professorTypeNumber state variables to 0
      switch (professorTypeCount) {
        case 5:
          setProfessorType5Number(0);
          break;
        case 4:
          setProfessorType4Number(0);
          break;
        case 3:
          setProfessorType3Number(0);
          break;
        case 2:
          setProfessorType2Number(0);
          break;
        case 1:
          setProfessorType1Number(0);
          break;
        default:
        // Handle other cases if needed
      }
    }
  };

  useEffect(() => {
    // Calculate total for professor category
    const totalProfessorCount =
      Number(professorType1Number) +
      Number(professorType2Number) +
      Number(professorType3Number) +
      Number(professorType4Number) +
      Number(professorType5Number);

    // Update the grand total state for professor
    setGrandTotalProfessor(totalProfessorCount);
  }, [
    professorType1Number,
    professorType2Number,
    professorType3Number,
    professorType4Number,
    professorType5Number,
  ]);
  // ********************************************** คณาจารย์ / บุคลากร *********************************************

  // ********************************************** นักศึกษา *********************************************

  const [studentType1Name, setStudentType1Name] = useState("");
  const [studentType1Number, setStudentType1Number] = useState("");
  const [studentType2Name, setStudentType2Name] = useState("");
  const [studentType2Number, setStudentType2Number] = useState("");
  const [studentType3Name, setStudentType3Name] = useState("");
  const [studentType3Number, setStudentType3Number] = useState("");
  const [studentType4Name, setStudentType4Name] = useState("");
  const [studentType4Number, setStudentType4Number] = useState("");
  const [studentType5Name, setStudentType5Name] = useState("");
  const [studentType5Number, setStudentType5Number] = useState("");

  const [studentTypeCount, setStudentTypeCount] = useState(1);
  const [grandTotalStudent, setGrandTotalStudent] = useState(0);
  const increaseStudentTypeCount = () => {
    if (studentTypeCount < 5) {
      setStudentTypeCount(studentTypeCount + 1);
    }
  };
  const decreaseStudentTypeCount = () => {
    if (studentTypeCount > 1) {
      setStudentTypeCount(studentTypeCount - 1);
      // Reset corresponding studentTypeNumber state variables to 0
      switch (studentTypeCount) {
        case 5:
          setStudentType5Number(0);
          break;
        case 4:
          setStudentType4Number(0);
          break;
        case 3:
          setStudentType3Number(0);
          break;
        case 2:
          setStudentType2Number(0);
          break;
        case 1:
          setStudentType1Number(0);
          break;
        default:
        // Handle other cases if needed
      }
    }
  };

  useEffect(() => {
    // Calculate total for student category
    const totalStudentCount =
      Number(studentType1Number) +
      Number(studentType2Number) +
      Number(studentType3Number) +
      Number(studentType4Number) +
      Number(studentType5Number);

    // Update the grand total state for student
    setGrandTotalStudent(totalStudentCount);
  }, [
    studentType1Number,
    studentType2Number,
    studentType3Number,
    studentType4Number,
    studentType5Number,
  ]);
  // ********************************************** นักศึกษา *********************************************

  // ********************************************** วิทยากร *********************************************

  const [expertType1Name, setExpertType1Name] = useState("");
  const [expertType1Number, setExpertType1Number] = useState("");
  const [expertType2Name, setExpertType2Name] = useState("");
  const [expertType2Number, setExpertType2Number] = useState("");
  const [expertType3Name, setExpertType3Name] = useState("");
  const [expertType3Number, setExpertType3Number] = useState("");
  const [expertType4Name, setExpertType4Name] = useState("");
  const [expertType4Number, setExpertType4Number] = useState("");
  const [expertType5Name, setExpertType5Name] = useState("");
  const [expertType5Number, setExpertType5Number] = useState("");

  const [expertTypeCount, setExpertTypeCount] = useState(1);
  const [grandTotalExpert, setGrandTotalExpert] = useState(0);
  const increaseExpertTypeCount = () => {
    if (expertTypeCount < 5) {
      setExpertTypeCount(expertTypeCount + 1);
    }
  };
  const decreaseExpertTypeCount = () => {
    if (expertTypeCount > 1) {
      setExpertTypeCount(expertTypeCount - 1);
      // Reset corresponding studentTypeNumber state variables to 0
      switch (expertTypeCount) {
        case 5:
          setExpertType5Number(0);
          break;
        case 4:
          setExpertType4Number(0);
          break;
        case 3:
          setExpertType3Number(0);
          break;
        case 2:
          setExpertType2Number(0);
          break;
        case 1:
          setExpertType1Number(0);
          break;
        default:
        // Handle other cases if needed
      }
    }
  };
  useEffect(() => {
    // Calculate total for student category
    const totalExpertCount =
      Number(expertType1Number) +
      Number(expertType2Number) +
      Number(expertType3Number) +
      Number(expertType4Number) +
      Number(expertType5Number);

    // Update the grand total state for student
    setGrandTotalExpert(totalExpertCount);
  }, [
    expertType1Number,
    expertType2Number,
    expertType3Number,
    expertType4Number,
    expertType5Number,
  ]);

  // ********************************************** วิทยากร *********************************************

  const [grandTotalAll, setGrandTotalAll] = useState("");
  useEffect(() => {
    const totalAll =
      Number(grandTotalExecutive) +
      Number(grandTotalProfessor) +
      Number(grandTotalStudent) +
      Number(grandTotalExpert);

    setGrandTotalAll(totalAll);
  }, [
    grandTotalExecutive,
    grandTotalProfessor,
    grandTotalStudent,
    grandTotalExpert,
  ]);

  const createPerson = () => {
    Axios.post("http://localhost:3001/student/project/p_person/create/", {
      id_projects,
      codeclub,
      yearly_countsketch,
      executiveType1Name,
      executiveType1Number,
      executiveType2Name,
      executiveType2Number,
      executiveType3Name,
      executiveType3Number,
      executiveType4Name,
      executiveType4Number,
      executiveType5Name,
      executiveType5Number,
      executiveTypeCount,
      grandTotalExecutive,
      professorType1Name,
      professorType1Number,
      professorType2Name,
      professorType2Number,
      professorType3Name,
      professorType3Number,
      professorType4Name,
      professorType4Number,
      professorType5Name,
      professorType5Number,
      professorTypeCount,
      grandTotalProfessor,
      studentType1Name,
      studentType1Number,
      studentType2Name,
      studentType2Number,
      studentType3Name,
      studentType3Number,
      studentType4Name,
      studentType4Number,
      studentType5Name,
      studentType5Number,
      studentTypeCount,
      grandTotalStudent,
      expertType1Name,
      expertType1Number,
      expertType2Name,
      expertType2Number,
      expertType3Name,
      expertType3Number,
      expertType4Name,
      expertType4Number,
      expertType5Name,
      expertType5Number,
      expertTypeCount,
      grandTotalExpert,
      grandTotalAll,
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
        title: "บันทึกโครงการหน้า  กลุ่มเป้าหมายโครงการ",
        text: "ใส่ข้อมูล หมวดถัดไป",
        icon: "success",
      })
    switchToCSDLocationTime();
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
              กลุ่มเป้าหมายโครงการ
            </div>
          </CardHeader>

          <CardBody>
            <Table striped="columns">
              <tbody>
                {/* ผู้บริหาร executive */}
                <tr>
                  <td className="head-side-td" style={{ verticalAlign: "top" }}>
                    <div>ผู้บริหาร</div>
                  </td>
                  <td className="back-side-td">
                    {/* <label>
                      <div style={{ color: "black", fontSize: "14px" }}>
                        ผู้บริหาร จำนวน {grandTotalExecutive} คน
                      </div>
                    </label> */}

                    <Table striped="columns">
                      <thead
                        style={{ backgroundColor: "rgba(255, 139, 19, 0)" }}
                      >
                        <tr
                          style={{ backgroundColor: "rgba(255, 139, 19, 1)" }}
                        >
                          <th
                            style={{
                              width: "80%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            <div style={{ fontSize: "14px" }}>
                              ประเภทผู้บริหาร
                            </div>
                          </th>
                          <th
                            style={{
                              width: "20%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            <div style={{ fontSize: "14px" }}>จำนวน (คน)</div>
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {Array.from({ length: executiveTypeCount }).map(
                          (_, index) => (
                            <tr style={{ backgroundColor: "white" }}>
                              {/* ประเภทที่ i ของผู้บริหาร  */}
                              <td style={{ verticalAlign: "middle" }}>
                                <Form.Control
                                  className="font-form-control"
                                  size="sm"
                                  type="text"
                                  placeholder={`ผู้บริหารประเภทที่ ${
                                    index + 1
                                  }`}
                                  onChange={(event) => {
                                    switch (index) {
                                      case 0:
                                        setExecutiveType1Name(
                                          event.target.value
                                        );
                                        break;
                                      case 1:
                                        setExecutiveType2Name(
                                          event.target.value
                                        );
                                        break;
                                      case 2:
                                        setExecutiveType3Name(
                                          event.target.value
                                        );
                                        break;
                                      case 3:
                                        setExecutiveType4Name(
                                          event.target.value
                                        );
                                        break;
                                      case 4:
                                        setExecutiveType5Name(
                                          event.target.value
                                        );
                                        break;
                                      default:
                                      // Handle other cases if needed
                                    }
                                  }}
                                />
                              </td>
                              {/* จำนวนผู้บริหารของ ประเภทที่ i */}
                              <td
                                style={{
                                  verticalAlign: "middle",
                                  width: "30%",
                                }}
                              >
                                <Form.Control
                                  className="font-form-control"
                                  size="sm"
                                  type="number"
                                  placeholder={`ประเภทที่ ${index + 1}`}
                                  onChange={(event) => {
                                    switch (index) {
                                      case 0:
                                        setExecutiveType1Number(
                                          event.target.value
                                        );
                                        break;
                                      case 1:
                                        setExecutiveType2Number(
                                          event.target.value
                                        );
                                        break;
                                      case 2:
                                        setExecutiveType3Number(
                                          event.target.value
                                        );
                                        break;
                                      case 3:
                                        setExecutiveType4Number(
                                          event.target.value
                                        );
                                        break;
                                      case 4:
                                        setExecutiveType5Number(
                                          event.target.value
                                        );
                                        break;
                                      default:
                                      // Handle other cases if needed
                                    }
                                  }}
                                />
                              </td>
                            </tr>
                          )
                        )}
                        <tr
                          style={{ backgroundColor: "rgba(255, 139, 19, .3)" }}
                        >
                          <td style={{ textAlignLast: "right" }}>
                            <div
                              style={{ color: "#FF8B13", fontWeight: "bold" }}
                            >
                              จำนวนผู้บริหารทั้งสิ้น
                            </div>
                          </td>
                          <td>
                            <Form.Control
                              className="font-form-control"
                              size="sm"
                              type="text"
                              value={grandTotalExecutive}
                              disabled
                            />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {executiveTypeCount < 5 && (
                        <Button
                          variant="success"
                          className="ml-5 mb-3 btn-budget-increase border-success"
                          onClick={increaseExecutiveTypeCount}
                        >
                          <div style={{ fontSize: "14px" }}>เพิ่มประเภท</div>
                        </Button>
                      )}
                      {executiveTypeCount > 1 && (
                        <Button
                          variant="danger"
                          className="ml-5 mb-3 btn-budget-decrease border-danger"
                          onClick={decreaseExecutiveTypeCount}
                        >
                          <div style={{ fontSize: "14px" }}>ลดประเภท</div>
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>

                {/* คณาจารย์ / บุคลากร  / */}
                <tr>
                  <td
                    className="head-side-td-swp"
                    style={{ verticalAlign: "top" }}
                  >
                    <div>คณาจารย์/บุคลากร</div>
                  </td>
                  <td className="back-side-td">
                    {/* <label>
                      คณาจารย์ / บุคลากร จำนวน {grandTotalProfessor} คน
                    </label> */}
                    <Table striped="columns">
                      <thead
                        style={{ backgroundColor: "rgba(255, 139, 19, 0)" }}
                      >
                        <tr
                          style={{ backgroundColor: "rgba(255, 139, 19, 1)" }}
                        >
                          <th
                            style={{
                              width: "80%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            <div style={{ fontSize: "14px" }}>
                              ประเภทคณาจารย์ / บุคลากร
                            </div>
                          </th>
                          <th
                            style={{
                              width: "20%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            <div style={{ fontSize: "14px" }}>จำนวน (คน)</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: professorTypeCount }).map(
                          (_, index) => (
                            <tr
                              style={{ backgroundColor: "white" }}
                              key={index}
                            >
                              {/* ประเภทที่ i ของคณาจารย์ / บุคลากร  */}
                              <td style={{ verticalAlign: "middle" }}>
                                <Form.Control
                                  className="font-form-control"
                                  size="sm"
                                  type="text"
                                  placeholder={`คณาจารย์ / บุคลากรประเภทที่ ${
                                    index + 1
                                  }`}
                                  onChange={(event) => {
                                    switch (index) {
                                      case 0:
                                        setProfessorType1Name(
                                          event.target.value
                                        );
                                        break;
                                      case 1:
                                        setProfessorType2Name(
                                          event.target.value
                                        );
                                        break;
                                      case 2:
                                        setProfessorType3Name(
                                          event.target.value
                                        );
                                        break;
                                      case 3:
                                        setProfessorType4Name(
                                          event.target.value
                                        );
                                        break;
                                      case 4:
                                        setProfessorType5Name(
                                          event.target.value
                                        );
                                        break;
                                      default:
                                      // Handle other cases if needed
                                    }
                                  }}
                                />
                              </td>
                              {/* จำนวนคณาจารย์ / บุคลากรของ ประเภทที่ i */}
                              <td
                                style={{
                                  verticalAlign: "middle",
                                  width: "30%",
                                }}
                              >
                                <Form.Control
                                  className="font-form-control"
                                  size="sm"
                                  type="number"
                                  placeholder={`ประเภทที่ ${index + 1}`}
                                  onChange={(event) => {
                                    switch (index) {
                                      case 0:
                                        setProfessorType1Number(
                                          event.target.value
                                        );
                                        break;
                                      case 1:
                                        setProfessorType2Number(
                                          event.target.value
                                        );
                                        break;
                                      case 2:
                                        setProfessorType3Number(
                                          event.target.value
                                        );
                                        break;
                                      case 3:
                                        setProfessorType4Number(
                                          event.target.value
                                        );
                                        break;
                                      case 4:
                                        setProfessorType5Number(
                                          event.target.value
                                        );
                                        break;
                                      default:
                                      // Handle other cases if needed
                                    }
                                  }}
                                />
                              </td>
                            </tr>
                          )
                        )}
                        <tr
                          style={{ backgroundColor: "rgba(255, 139, 19, .3)" }}
                        >
                          <td style={{ textAlignLast: "right" }}>
                            <div
                              style={{ color: "#FF8B13", fontWeight: "bold" }}
                            >
                              จำนวนคณาจารย์ / บุคลากรทั้งสิ้น
                            </div>
                          </td>
                          <td>
                            <Form.Control
                              className="font-form-control"
                              size="sm"
                              type="text"
                              value={grandTotalProfessor}
                              disabled
                            />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {professorTypeCount < 5 && (
                        <Button
                          variant="success"
                          className="ml-5 mb-3 btn-budget-increase border-success"
                          onClick={increaseProfessorTypeCount}
                        >
                          <div style={{ fontSize: "14px" }}>เพิ่มประเภท</div>
                        </Button>
                      )}
                      {professorTypeCount > 1 && (
                        <Button
                          variant="danger"
                          className="ml-5 mb-3 btn-budget-decrease border-danger"
                          onClick={decreaseProfessorTypeCount}
                        >
                          <div style={{ fontSize: "14px" }}>ลดประเภท</div>
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>

                {/* นักศึกษา */}
                <tr>
                  <td className="head-side-td" style={{ verticalAlign: "top" }}>
                    <div>นักศึกษา</div>
                  </td>
                  <td className="back-side-td">
                    {/* <label>นักศึกษา จำนวน {grandTotalStudent} คน</label> */}
                    <Table striped="columns">
                      <thead
                        style={{ backgroundColor: "rgba(255, 139, 19, 0)" }}
                      >
                        <tr
                          style={{ backgroundColor: "rgba(255, 139, 19, 1)" }}
                        >
                          <th
                            style={{
                              width: "80%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            <div style={{ fontSize: "14px" }}>
                              ประเภทนักศึกษา
                            </div>
                          </th>
                          <th
                            style={{
                              width: "20%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            <div style={{ fontSize: "14px" }}>จำนวน (คน)</div>
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {Array.from({ length: studentTypeCount }).map(
                          (_, index) => (
                            <tr style={{ backgroundColor: "white" }}>
                              {/* ประเภทที่ i ของนักศึกษา  */}
                              <td style={{ verticalAlign: "middle" }}>
                                <Form.Control
                                  className="font-form-control"
                                  size="sm"
                                  type="text"
                                  placeholder={`นักศึกษาประเภทที่  ${
                                    index + 1
                                  }`}
                                  onChange={(event) => {
                                    switch (index) {
                                      case 0:
                                        setStudentType1Name(event.target.value);
                                        break;
                                      case 1:
                                        setStudentType2Name(event.target.value);
                                        break;
                                      case 2:
                                        setStudentType3Name(event.target.value);
                                        break;
                                      case 3:
                                        setStudentType4Name(event.target.value);
                                        break;
                                      case 4:
                                        setStudentType5Name(event.target.value);
                                        break;
                                      default:
                                      // Handle other cases if needed
                                    }
                                  }}
                                />
                              </td>
                              {/* จำนวนนักศึกษาของ ประเภทที่ i */}
                              <td
                                style={{
                                  verticalAlign: "middle",
                                  width: "30%",
                                }}
                              >
                                <Form.Control
                                  className="font-form-control"
                                  size="sm"
                                  type="number"
                                  placeholder={`ประเภทที่  ${index + 1}`}
                                  onChange={(event) => {
                                    switch (index) {
                                      case 0:
                                        setStudentType1Number(
                                          event.target.value
                                        );
                                        break;
                                      case 1:
                                        setStudentType2Number(
                                          event.target.value
                                        );
                                        break;
                                      case 2:
                                        setStudentType3Number(
                                          event.target.value
                                        );
                                        break;
                                      case 3:
                                        setStudentType4Number(
                                          event.target.value
                                        );
                                        break;
                                      case 4:
                                        setStudentType5Number(
                                          event.target.value
                                        );
                                        break;
                                      default:
                                      // Handle other cases if needed
                                    }
                                  }}
                                />
                              </td>
                            </tr>
                          )
                        )}
                        <tr
                          style={{ backgroundColor: "rgba(255, 139, 19, .3)" }}
                        >
                          <td style={{ textAlignLast: "right" }}>
                            <div
                              style={{ color: "#FF8B13", fontWeight: "bold" }}
                            >
                              จำนวนนักศึกษาทั้งสิ้น
                            </div>
                          </td>
                          <td>
                            <Form.Control
                              className="font-form-control"
                              size="sm"
                              type="text"
                              value={grandTotalStudent}
                              disabled
                            />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {studentTypeCount < 5 && (
                        <Button
                          variant="success"
                          className="ml-5 mb-3 btn-budget-increase border-success"
                          onClick={increaseStudentTypeCount}
                        >
                          <div style={{ fontSize: "14px" }}>เพิ่มประเภท</div>
                        </Button>
                      )}
                      {studentTypeCount > 1 && (
                        <Button
                          variant="danger"
                          className="ml-5 mb-3 btn-budget-decrease border-danger"
                          onClick={decreaseStudentTypeCount}
                        >
                          <div style={{ fontSize: "14px" }}>ลดประเภท</div>
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>

                {/* วิทยากร */}
                <tr>
                  <td
                    className="head-side-td-swp"
                    style={{ verticalAlign: "top" }}
                  >
                    <div>วิทยากร</div>
                  </td>
                  <td className="back-side-td">
                    {/* <label>วิทยากร จำนวน {grandTotalExpert} คน</label> */}
                    <Table striped="columns">
                      <thead
                        style={{ backgroundColor: "rgba(255, 139, 19, 0)" }}
                      >
                        <tr
                          style={{ backgroundColor: "rgba(255, 139, 19, 1)" }}
                        >
                          <th
                            style={{
                              width: "80%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            <div style={{ fontSize: "14px" }}>
                              ประเภทวิทยากร
                            </div>
                          </th>
                          <th
                            style={{
                              width: "20%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            <div style={{ fontSize: "14px" }}>จำนวน (คน)</div>
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {Array.from({ length: expertTypeCount }).map(
                          (_, index) => (
                            <tr style={{ backgroundColor: "white" }}>
                              {/* ประเภทที่ i ของวิทยากร  */}
                              <td
                                // colSpan={2}
                                style={{ verticalAlign: "middle" }}
                              >
                                <Form.Control
                                  className="font-form-control"
                                  size="sm"
                                  type="text"
                                  placeholder={`วิทยากรประเภทที่ ${index + 1}`}
                                  onChange={(event) => {
                                    switch (index) {
                                      case 0:
                                        setExpertType1Name(event.target.value);
                                        break;
                                      case 1:
                                        setExpertType2Name(event.target.value);
                                        break;
                                      case 2:
                                        setExpertType3Name(event.target.value);
                                        break;
                                      case 3:
                                        setExpertType4Name(event.target.value);
                                        break;
                                      case 4:
                                        setExpertType5Name(event.target.value);
                                        break;
                                      default:
                                      // Handle other cases if needed
                                    }
                                  }}
                                />
                              </td>
                              {/* จำนวนวิทยากรของ ประเภทที่ i */}
                              <td
                                style={{
                                  verticalAlign: "middle",
                                  width: "30%",
                                }}
                              >
                                <Form.Control
                                  className="font-form-control"
                                  size="sm"
                                  type="number"
                                  placeholder={`ประเภทที่  ${index + 1}`}
                                  onChange={(event) => {
                                    switch (index) {
                                      case 0:
                                        setExpertType1Number(
                                          event.target.value
                                        );
                                        break;
                                      case 1:
                                        setExpertType2Number(
                                          event.target.value
                                        );
                                        break;
                                      case 2:
                                        setExpertType3Number(
                                          event.target.value
                                        );
                                        break;
                                      case 3:
                                        setExpertType4Number(
                                          event.target.value
                                        );
                                        break;
                                      case 4:
                                        setExpertType5Number(
                                          event.target.value
                                        );
                                        break;
                                      default:
                                      // Handle other cases if needed
                                    }
                                  }}
                                />
                              </td>
                            </tr>
                          )
                        )}
                        <tr
                          style={{ backgroundColor: "rgba(255, 139, 19, .3)" }}
                        >
                          <td style={{ textAlignLast: "right" }}>
                            <div
                              style={{ color: "#FF8B13", fontWeight: "bold" }}
                            >
                              จำนวนวิทยากรทั้งสิ้น
                            </div>
                          </td>
                          <td>
                            <Form.Control
                              className="font-form-control"
                              size="sm"
                              type="text"
                              value={grandTotalExpert}
                              disabled
                            />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {expertTypeCount < 5 && (
                        <Button
                          variant="success"
                          className="ml-5 mb-3 btn-budget-increase border-success"
                          onClick={increaseExpertTypeCount}
                        >
                          <div style={{ fontSize: "14px" }}>เพิ่มประเภท</div>
                        </Button>
                      )}
                      {expertTypeCount > 1 && (
                        <Button
                          variant="danger"
                          className="ml-5 mb-3 btn-budget-decrease border-danger"
                          onClick={decreaseExpertTypeCount}
                        >
                          <div style={{ fontSize: "14px" }}>ลดประเภท</div>
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>

                {/* ยอดคนรวม */}
                <tr style={{ backgroundColor: "white" }}>
                  <td
                    className="head-side-td"
                    style={{ verticalAlign: "top" }}
                  >
                    <div>กลุ่มเป้าหมายสุทธิ</div>
                  </td>

                  <td className="back-side-td">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          color: "#FF8B13",
                          fontWeight: "bold",
                          width: "40%",
                          textAlignLast: "right",
                        }}
                      >
                        รวมทั้งสิ้น
                      </div>
                      <Form.Control
                        style={{
                          marginLeft: "10px",
                          marginRight: "10px",
                          width: "20%",
                        }} // Adjust margin as needed
                        size="sm"
                        type="text"
                        value={grandTotalAll}
                        disabled
                      />
                      <div
                        style={{
                          color: "#FF8B13",
                          fontWeight: "bold",
                          width: "40%",
                        }}
                      >
                        คน
                      </div>
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
              type="submit"
              variant="warning"
              className="btn-dataupdate"
              onClick={createPerson}
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
export default CSD_person;
