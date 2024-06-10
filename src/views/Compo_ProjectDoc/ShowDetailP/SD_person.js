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

function SD_person({ id_project, currentStepProject }) {

  const storedUserData = sessionStorage.getItem("user");
  const storedUser = storedUserData ? JSON.parse(storedUserData) : {};
  const id_student = storedUser.username;
  const strcodebooksomeoutyear = storedUser.codebooksomeoutyear;
  const [codeclub, setCodeclub] = useState("");
  const [yearly_countsketch, setYearlyCountSketch] = useState("");

  const [originalData, setOriginalData] = useState({});
  const [editData, setEditData] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);
  const getProjectData = () => {
    Axios.get(
      `http://localhost:3001/student/project/person/getidproject/${id_project}`
    ).then((response) => {
      setOriginalData(response.data[0]);
      setEditData(response.data[0]);
      setCodeclub(response.data[0].codeclub);
      setYearlyCountSketch(response.data[0].responsible_agency);
      setExecutiveType1Name(response.data[0].executiveType1Name);
      setExecutiveType2Name(response.data[0].executiveType2Name);
      setExecutiveType3Name(response.data[0].executiveType3Name);
      setExecutiveType4Name(response.data[0].executiveType4Name);
      setExecutiveType5Name(response.data[0].executiveType5Name);
      setExecutiveType1Number(response.data[0].executiveType1Number);
      setExecutiveType2Number(response.data[0].executiveType2Number);
      setExecutiveType3Number(response.data[0].executiveType3Number);
      setExecutiveType4Number(response.data[0].executiveType4Number);
      setExecutiveType5Number(response.data[0].executiveType5Number);
      setExecutiveType5Number(response.data[0].executiveType5Number);
      setExecutiveTypeCount(response.data[0].executiveTypeCount);
      setGrandTotalExecutive(response.data[0].grandTotalExecutive);

      setProfessorType1Name(response.data[0].professorType1Name);
      setProfessorType2Name(response.data[0].professorType2Name);
      setProfessorType3Name(response.data[0].professorType3Name);
      setProfessorType4Name(response.data[0].professorType4Name);
      setProfessorType5Name(response.data[0].professorType5Name);
      setProfessorType1Number(response.data[0].professorType1Number);
      setProfessorType2Number(response.data[0].professorType2Number);
      setProfessorType3Number(response.data[0].professorType3Number);
      setProfessorType4Number(response.data[0].professorType4Number);
      setProfessorType5Number(response.data[0].professorType5Number);
      setProfessorTypeCount(response.data[0].professorTypeCount);
      setGrandTotalProfessor(response.data[0].grandTotalProfessor);

      setStudentType1Name(response.data[0].studentType1Name);
      setStudentType2Name(response.data[0].studentType2Name);
      setStudentType3Name(response.data[0].studentType3Name);
      setStudentType4Name(response.data[0].studentType4Name);
      setStudentType5Name(response.data[0].studentType5Name);
      setStudentType1Number(response.data[0].studentType1Number);
      setStudentType2Number(response.data[0].studentType2Number);
      setStudentType3Number(response.data[0].studentType3Number);
      setStudentType4Number(response.data[0].studentType4Number);
      setStudentType5Number(response.data[0].studentType5Number);
      setStudentTypeCount(response.data[0].studentTypeCount);
      setGrandTotalStudent(response.data[0].grandTotalStudent);

      setExpertType1Name(response.data[0].expertType1Name);
      setExpertType2Name(response.data[0].expertType2Name);
      setExpertType3Name(response.data[0].expertType3Name);
      setExpertType4Name(response.data[0].expertType4Name);
      setExpertType5Name(response.data[0].expertType5Name);
      setExpertType1Number(response.data[0].expertType1Number);
      setExpertType2Number(response.data[0].expertType2Number);
      setExpertType3Number(response.data[0].expertType3Number);
      setExpertType4Number(response.data[0].expertType4Number);
      setExpertType5Number(response.data[0].expertType5Number);
      setExpertTypeCount(response.data[0].expertTypeCount);
      setGrandTotalExpert(response.data[0].grandTotalExpert);
      setGrandTotalAll(response.data[0].grandTotalAll);
    });
  };

  useEffect(() => {
    getProjectData();
  }, [id_project]);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  // const handleSaveClick = () => {
  //   const editpage = "กลุ่มเป้าหมายโครงการ"
  //   setIsEditMode(false);

  //   // Update the grand total state for executive

  //   if (window.confirm("Do you want to save changes?")) {
  //     Axios.put(
  //       `http://localhost:3001/student/project/person/edit/${id_project}`,
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
  const handleSaveClick = () => {
    const editpage = "กลุ่มเป้าหมายโครงการ";
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
          `http://localhost:3001/student/project/person/edit/${id_project}`,
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
    if (+executiveTypeCount < 5) {
      let updatedEditData = {
        ...editData,
        executiveTypeCount: +executiveTypeCount + 1,
      };

      // Increment the count and set it in editData
      setExecutiveTypeCount((prevCount) => +prevCount + 1);
      setEditData(updatedEditData);
    }
  };

  const decreaseExecutiveTypeCount = () => {
    if (+executiveTypeCount >= 1) {
      let updatedEditData = {
        ...editData,
        executiveTypeCount: +executiveTypeCount - 1,
      };

      // Reset the corresponding executive type name and number in editData
      switch (+executiveTypeCount) {
        case 5:
          updatedEditData = {
            ...updatedEditData,
            executiveType5Number: "",
            executiveType5Name: null,
          };
          break;
        case 4:
          updatedEditData = {
            ...updatedEditData,
            executiveType4Number: "",
            executiveType4Name: null,
          };
          break;
        case 3:
          updatedEditData = {
            ...updatedEditData,
            executiveType3Number: "",
            executiveType3Name: null,
          };
          break;
        case 2:
          updatedEditData = {
            ...updatedEditData,
            executiveType2Number: "",
            executiveType2Name: null,
          };
          break;
        case 1:
          updatedEditData = {
            ...updatedEditData,
            executiveType1Number: "",
            executiveType1Name: null,
          };
          break;
        default:
        // Handle other cases if needed
      }

      // Decrease the count and set it in editData
      setExecutiveTypeCount((prevCount) => prevCount - 1);
      setEditData(updatedEditData);
    }
  };
  useEffect(() => {
    // Calculate total for executive category
    let totalExecutiveCount = 0;

    for (let i = 1; i <= 5; i++) {
      const executiveTypeName = `executiveType${i}Name`;
      const executiveTypeNumber = `executiveType${i}Number`;
      // Check if the properties exist and if they are valid numbers
      if (
        editData.hasOwnProperty(executiveTypeName) &&
        !isNaN(parseFloat(editData[executiveTypeNumber]))
      ) {
        totalExecutiveCount += parseFloat(editData[executiveTypeNumber]);
      }
    }
    setEditData({
      ...editData,
      grandTotalExecutive: totalExecutiveCount,
    });
  }, [
    editData.executiveType1Number,
    editData.executiveType2Number,
    editData.executiveType3Number,
    editData.executiveType4Number,
    editData.executiveType5Number,
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
    if (+professorTypeCount < 5) {
      let updatedEditData = {
        ...editData,
        professorTypeCount: +professorTypeCount + 1,
      };

      // Increment the count and set it in editData
      setProfessorTypeCount((prevCount) => +prevCount + 1);
      setEditData(updatedEditData);
    }
  };
  const decreaseProfessorTypeCount = () => {
    if (+professorTypeCount >= 1) {
      let updatedEditData = {
        ...editData,
        professorTypeCount: +professorTypeCount - 1,
      };

      // Reset the corresponding executive type name and number in editData
      switch (+professorTypeCount) {
        case 5:
          updatedEditData = {
            ...updatedEditData,
            professorType5Number: "",
            professorType5Name: null,
          };
          break;
        case 4:
          updatedEditData = {
            ...updatedEditData,
            professorType4Number: "",
            professorType4Name: null,
          };
          break;
        case 3:
          updatedEditData = {
            ...updatedEditData,
            professorType3Number: "",
            professorType3Name: null,
          };
          break;
        case 2:
          updatedEditData = {
            ...updatedEditData,
            professorType2Number: "",
            professorType2Name: null,
          };
          break;
        case 1:
          updatedEditData = {
            ...updatedEditData,
            professorType1Number: "",
            professorType1Name: null,
          };
          break;
        default:
        // Handle other cases if needed
      }

      // Decrease the count and set it in editData
      setProfessorTypeCount((prevCount) => prevCount - 1);
      setEditData(updatedEditData);
    }
  };
  useEffect(() => {
    let totalProfessorCount = 0;

    for (let i = 1; i <= 5; i++) {
      const professorTypeName = `professorType${i}Name`;
      const professorTypeNumber = `professorType${i}Number`;
      if (
        editData.hasOwnProperty(professorTypeName) &&
        !isNaN(parseFloat(editData[professorTypeNumber]))
      ) {
        totalProfessorCount += parseFloat(editData[professorTypeNumber]);
      }
    }
    setEditData({
      ...editData,
      grandTotalProfessor: totalProfessorCount,
    });
  }, [
    editData.professorType1Number,
    editData.professorType2Number,
    editData.professorType3Number,
    editData.professorType4Number,
    editData.professorType5Number,
  ]);

  // ********************************************** คณาจารย์ / บุคลากร *********************************************

  // ********************************************** นักศึกษา *********************************************
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
    if (+studentTypeCount < 5) {
      let updatedEditData = {
        ...editData,
        studentTypeCount: +studentTypeCount + 1,
      };

      // Increment the count and set it in editData
      setStudentTypeCount((prevCount) => +prevCount + 1);
      setEditData(updatedEditData);
    }
  };
  const decreaseStudentTypeCount = () => {
    if (+studentTypeCount >= 1) {
      let updatedEditData = {
        ...editData,
        studentTypeCount: +studentTypeCount - 1,
      };

      // Reset the corresponding executive type name and number in editData
      switch (+studentTypeCount) {
        case 5:
          updatedEditData = {
            ...updatedEditData,
            studentType5Number: "",
            studentType5Name: null,
          };
          break;
        case 4:
          updatedEditData = {
            ...updatedEditData,
            studentType4Number: "",
            studentType4Name: null,
          };
          break;
        case 3:
          updatedEditData = {
            ...updatedEditData,
            studentType3Number: "",
            studentType3Name: null,
          };
          break;
        case 2:
          updatedEditData = {
            ...updatedEditData,
            studentType2Number: "",
            studentType2Name: null,
          };
          break;
        case 1:
          updatedEditData = {
            ...updatedEditData,
            studentType1Number: "",
            studentType1Name: null,
          };
          break;
        default:
      }
      setStudentTypeCount((prevCount) => prevCount - 1);
      setEditData(updatedEditData);
    }
  };

  useEffect(() => {
    let totalStudentCount = 0;

    for (let i = 1; i <= 5; i++) {
      const studentTypeName = `studentType${i}Name`;
      const studentTypeNumber = `studentType${i}Number`;
      if (
        editData.hasOwnProperty(studentTypeName) &&
        !isNaN(parseFloat(editData[studentTypeNumber]))
      ) {
        totalStudentCount += parseFloat(editData[studentTypeNumber]);
      }
    }
    setEditData({
      ...editData,
      grandTotalStudent: totalStudentCount,
    });
  }, [
    editData.studentType1Number,
    editData.studentType2Number,
    editData.studentType3Number,
    editData.studentType4Number,
    editData.studentType5Number,
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
    if (+expertTypeCount < 5) {
      let updatedEditData = {
        ...editData,
        expertTypeCount: +expertTypeCount + 1,
      };

      // Increment the count and set it in editData
      setExpertTypeCount((prevCount) => +prevCount + 1);
      setEditData(updatedEditData);
    }
  };
  const decreaseExpertTypeCount = () => {
    if (+expertTypeCount >= 1) {
      let updatedEditData = {
        ...editData,
        expertTypeCount: +expertTypeCount - 1,
      };

      // Reset the corresponding executive type name and number in editData
      switch (+expertTypeCount) {
        case 5:
          updatedEditData = {
            ...updatedEditData,
            expertType5Number: "",
            expertType5Name: null,
          };
          break;
        case 4:
          updatedEditData = {
            ...updatedEditData,
            expertType4Number: "",
            expertType4Name: null,
          };
          break;
        case 3:
          updatedEditData = {
            ...updatedEditData,
            expertType3Number: "",
            expertType3Name: null,
          };
          break;
        case 2:
          updatedEditData = {
            ...updatedEditData,
            expertType2Number: "",
            expertType2Name: null,
          };
          break;
        case 1:
          updatedEditData = {
            ...updatedEditData,
            expertType1Number: "",
            expertType1Name: null,
          };
          break;
        default:
      }
      setExpertTypeCount((prevCount) => prevCount - 1);
      setEditData(updatedEditData);
    }
  };
 
  useEffect(() => {
    let totalExpertCount = 0;

    for (let i = 1; i <= 5; i++) {
      const expertTypeName = `expertType${i}Name`;
      const expertTypeNumber = `expertType${i}Number`;
      if (
        editData.hasOwnProperty(expertTypeName) &&
        !isNaN(parseFloat(editData[expertTypeNumber]))
      ) {
        totalExpertCount += parseFloat(editData[expertTypeNumber]);
      }
    }
    setEditData({
      ...editData,
      grandTotalExpert: totalExpertCount,
    });
  }, [
    editData.expertType1Number,
    editData.expertType2Number,
    editData.expertType3Number,
    editData.expertType4Number,
    editData.expertType5Number,
  ]);


  // ********************************************** วิทยากร *********************************************

  const [grandTotalAll, setGrandTotalAll] = useState("");
  useEffect(() => {
    const totalAll =
      Number(editData.grandTotalExecutive) +
      Number(editData.grandTotalProfessor) +
      Number(editData.grandTotalStudent) +
      Number(editData.grandTotalExpert);

    setEditData({
      ...editData,
      grandTotalAll: totalAll,
    });
  }, [
    editData.grandTotalExecutive,
    editData.grandTotalProfessor,
    editData.grandTotalStudent,
    editData.grandTotalExpert,
  ]);

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
              กลุ่มเป้าหมายโครงการ
            </div>
          </CardHeader>

          <CardBody>
            <Table striped="columns">
              <tbody>
                <tr>
                  {/* ผู้บริหาร executive */}
                  <td className="head-side-td" style={{ verticalAlign: "top" }}>
                    <div>ผู้บริหาร</div>
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
                            <tr
                              key={index}
                              style={{ backgroundColor: "white" }}
                            >
                              {/* ประเภทที่ i ของผู้บริหาร */}
                              <td style={{ verticalAlign: "middle" }}>
                                <Form.Control
                                  className="font-form-control"
                                  size="sm"
                                  type="text"
                                  value={
                                    isEditMode
                                      ? editData[
                                          `executiveType${index + 1}Name`
                                        ]
                                      : originalData[
                                          `executiveType${index + 1}Name`
                                        ]
                                  }
                                  onChange={(event) => {
                                    const newValue = event.target.value;
                                    switch (index) {
                                      case 0:
                                        setEditData({
                                          ...editData,
                                          executiveType1Name: newValue,
                                        });
                                        break;
                                      case 1:
                                        setEditData({
                                          ...editData,
                                          executiveType2Name: newValue,
                                        });
                                        break;
                                      case 2:
                                        setEditData({
                                          ...editData,
                                          executiveType3Name: newValue,
                                        });
                                        break;
                                      case 3:
                                        setEditData({
                                          ...editData,
                                          executiveType4Name: newValue,
                                        });
                                        break;
                                      case 4:
                                        setEditData({
                                          ...editData,
                                          executiveType5Name: newValue,
                                        });
                                        break;
                                      default:
                                      // Handle other cases if needed
                                    }
                                  }}
                                  readOnly={!isEditMode} // Set readOnly based on isEditMode
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
                                  value={
                                    isEditMode
                                      ? editData[
                                          `executiveType${index + 1}Number`
                                        ]
                                      : originalData[
                                          `executiveType${index + 1}Number`
                                        ]
                                  }
                                  placeholder={`ประเภทที่ ${index + 1}`}
                                  onChange={(event) => {
                                    const newValue = event.target.value;
                                    switch (index) {
                                      case 0:
                                        setEditData({
                                          ...editData,
                                          executiveType1Number: newValue,
                                        });
                                        break;
                                      case 1:
                                        setEditData({
                                          ...editData,
                                          executiveType2Number: newValue,
                                        });
                                        break;
                                      case 2:
                                        setEditData({
                                          ...editData,
                                          executiveType3Number: newValue,
                                        });
                                        break;
                                      case 3:
                                        setEditData({
                                          ...editData,
                                          executiveType4Number: newValue,
                                        });
                                        break;
                                      case 4:
                                        setEditData({
                                          ...editData,
                                          executiveType5Number: newValue,
                                        });
                                        break;
                                      default:
                                    }
                                  }}
                                  readOnly={!isEditMode}
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
                              value={editData.grandTotalExecutive}
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
                      {isEditMode && (
                        <>
                          {executiveTypeCount < 5 && (
                            <Button
                              variant="success"
                              className="ml-5 mb-3 btn-budget-increase border-success"
                              onClick={increaseExecutiveTypeCount}
                            >
                              <div style={{ fontSize: "14px" }}>
                                เพิ่มประเภท
                              </div>
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
                        </>
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
                                  value={
                                    isEditMode
                                      ? editData[
                                          `professorType${index + 1}Name`
                                        ]
                                      : originalData[
                                          `professorType${index + 1}Name`
                                        ]
                                  }
                                  onChange={(event) => {
                                    const newValue = event.target.value;
                                    switch (index) {
                                      case 0:
                                        setEditData({
                                          ...editData,
                                          professorType1Name: newValue,
                                        });
                                        break;
                                      case 1:
                                        setEditData({
                                          ...editData,
                                          professorType2Name: newValue,
                                        });
                                        break;
                                      case 2:
                                        setEditData({
                                          ...editData,
                                          professorType3Name: newValue,
                                        });
                                        break;
                                      case 3:
                                        setEditData({
                                          ...editData,
                                          professorType4Name: newValue,
                                        });
                                        break;
                                      case 4:
                                        setEditData({
                                          ...editData,
                                          professorType5Name: newValue,
                                        });
                                        break;
                                      default:
                                      // Handle other cases if needed
                                    }
                                  }}
                                  readOnly={!isEditMode}
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
                                  value={
                                    isEditMode
                                      ? editData[
                                          `professorType${index + 1}Number`
                                        ]
                                      : originalData[
                                          `professorType${index + 1}Number`
                                        ]
                                  }
                                  onChange={(event) => {
                                    const newValue = event.target.value;
                                    switch (index) {
                                      case 0:
                                        setEditData({
                                          ...editData,
                                          professorType1Number: newValue,
                                        });
                                        break;
                                      case 1:
                                        setEditData({
                                          ...editData,
                                          professorType2Number: newValue,
                                        });
                                        break;
                                      case 2:
                                        setEditData({
                                          ...editData,
                                          professorType3Number: newValue,
                                        });
                                        break;
                                      case 3:
                                        setEditData({
                                          ...editData,
                                          professorType4Number: newValue,
                                        });
                                        break;
                                      case 4:
                                        setEditData({
                                          ...editData,
                                          professorType5Number: newValue,
                                        });
                                        break;
                                      default:
                                    }
                                  }}
                                  readOnly={!isEditMode}
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
                              value={editData.grandTotalProfessor}
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
                      {isEditMode && (
                        <>
                          {professorTypeCount < 5 && (
                            <Button
                              variant="success"
                              className="ml-5 mb-3 btn-budget-increase border-success"
                              onClick={increaseProfessorTypeCount}
                            >
                              <div style={{ fontSize: "14px" }}>
                                เพิ่มประเภท
                              </div>
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
                        </>
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
                                  value={
                                    isEditMode
                                      ? editData[`studentType${index + 1}Name`]
                                      : originalData[
                                          `studentType${index + 1}Name`
                                        ]
                                  }
                                  onChange={(event) => {
                                    const newValue = event.target.value;
                                    switch (index) {
                                      case 0:
                                        setEditData({
                                          ...editData,
                                          studentType1Name: newValue,
                                        });
                                        break;
                                      case 1:
                                        setEditData({
                                          ...editData,
                                          studentType2Name: newValue,
                                        });
                                        break;
                                      case 2:
                                        setEditData({
                                          ...editData,
                                          studentType3Name: newValue,
                                        });
                                        break;
                                      case 3:
                                        setEditData({
                                          ...editData,
                                          studentType4Name: newValue,
                                        });
                                        break;
                                      case 4:
                                        setEditData({
                                          ...editData,
                                          studentType5Name: newValue,
                                        });
                                        break;
                                      default:
                                      // Handle other cases if needed
                                    }
                                  }}
                                  readOnly={!isEditMode}
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
                                  value={
                                    isEditMode
                                      ? editData[
                                          `studentType${index + 1}Number`
                                        ]
                                      : originalData[
                                          `studentType${index + 1}Number`
                                        ]
                                  }
                                  onChange={(event) => {
                                    const newValue = event.target.value;
                                    switch (index) {
                                      case 0:
                                        setEditData({
                                          ...editData,
                                          studentType1Number: newValue,
                                        });
                                        break;
                                      case 1:
                                        setEditData({
                                          ...editData,
                                          studentType2Number: newValue,
                                        });
                                        break;
                                      case 2:
                                        setEditData({
                                          ...editData,
                                          studentType3Number: newValue,
                                        });
                                        break;
                                      case 3:
                                        setEditData({
                                          ...editData,
                                          studentType4Number: newValue,
                                        });
                                        break;
                                      case 4:
                                        setEditData({
                                          ...editData,
                                          studentType5Number: newValue,
                                        });
                                        break;
                                      default:
                                      // Handle other cases if needed
                                    }
                                  }}
                                  readOnly={!isEditMode}
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
                              value={editData.grandTotalStudent}
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
                      {isEditMode && (
                        <>
                          {studentTypeCount < 5 && (
                            <Button
                              variant="success"
                              className="ml-5 mb-3 btn-budget-increase border-success"
                              onClick={increaseStudentTypeCount}
                            >
                              <div style={{ fontSize: "14px" }}>
                                เพิ่มประเภท
                              </div>
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
                        </>
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
                                  value={
                                    isEditMode
                                      ? editData[`expertType${index + 1}Name`]
                                      : originalData[
                                          `expertType${index + 1}Name`
                                        ]
                                  }
                                  onChange={(event) => {
                                    const newValue = event.target.value;
                                    switch (index) {
                                      case 0:
                                        setEditData({
                                          ...editData,
                                          expertType1Name: newValue,
                                        });
                                        break;
                                      case 1:
                                        setEditData({
                                          ...editData,
                                          expertType2Name: newValue,
                                        });
                                        break;
                                      case 2:
                                        setEditData({
                                          ...editData,
                                          expertType3Name: newValue,
                                        });
                                        break;
                                      case 3:
                                        setEditData({
                                          ...editData,
                                          expertType4Name: newValue,
                                        });
                                        break;
                                      case 4:
                                        setEditData({
                                          ...editData,
                                          expertType5Name: newValue,
                                        });
                                        break;
                                      default:
                                      // Handle other cases if needed
                                    }
                                  }}
                                  readOnly={!isEditMode}
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
                                  value={
                                    isEditMode
                                      ? editData[`expertType${index + 1}Number`]
                                      : originalData[
                                          `expertType${index + 1}Number`
                                        ]
                                  }
                                  onChange={(event) => {
                                    const newValue = event.target.value;
                                    switch (index) {
                                      case 0:
                                        setEditData({
                                          ...editData,
                                          expertType1Number: newValue,
                                        });
                                        break;
                                      case 1:
                                        setEditData({
                                          ...editData,
                                          expertType2Number: newValue,
                                        });
                                        break;
                                      case 2:
                                        setEditData({
                                          ...editData,
                                          expertType3Number: newValue,
                                        });
                                        break;
                                      case 3:
                                        setEditData({
                                          ...editData,
                                          expertType4Number: newValue,
                                        });
                                        break;
                                      case 4:
                                        setEditData({
                                          ...editData,
                                          expertType5Number: newValue,
                                        });
                                        break;
                                      default:
                                      // Handle other cases if needed
                                    }
                                  }}
                                  readOnly={!isEditMode}
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
                              value={editData.grandTotalExpert}
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
                      {isEditMode && (
                        <>
                          {expertTypeCount < 5 && (
                            <Button
                              variant="success"
                              className="ml-5 mb-3 btn-budget-increase border-success"
                              onClick={increaseExpertTypeCount}
                            >
                              <div style={{ fontSize: "14px" }}>
                                เพิ่มประเภท
                              </div>
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
                        </>
                      )}
                    </div>
                  </td>
                </tr>

                {/* ยอดคนรวม */}
                <tr style={{ backgroundColor: "white" }}>
                  <td className="head-side-td" style={{ verticalAlign: "top" }}>
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
                        value={editData.grandTotalAll}
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
export default SD_person;
