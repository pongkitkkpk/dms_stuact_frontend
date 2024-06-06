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
import Swal from 'sweetalert2';
function CSD_detail({ setIdProjects, switchToCSDDetail2 }) {



  const [projectList, setProjectList] = useState([]);

  //ตัวแปรรับค่าจาก database
  const storedUserData = sessionStorage.getItem("user");
  const storedUser = storedUserData ? JSON.parse(storedUserData) : {};
  const studentuser = storedUser.username;
  const strcodebooksomeoutyear = storedUser.codebooksomeoutyear;
  const clubName = storedUser.clubName;
  const yearsession = storedUser.yearly;

useEffect(()=>{
  console.log(clubName)
  console.log(storedUser)
},[clubName])
  // ตัวแปรส่งค่าไปยัง database
  const [id_student, setId_student] = useState(studentuser);
  const [project_name, setProjectName] = useState("");
  const [customProjectName, setCustomProjectName] = useState("");
  const [project_phase, setProject_phase] = useState("ร่างคำขออนุมัติ");
  const [project_number, setProject_number] = useState("");
  const [codeclub, setCodeClub] = useState(""); //code_some
  const [codebooksomeoutyear, setCodebooksomeoutyear] = useState(strcodebooksomeoutyear);
  const [yearly, setYearly] = useState(yearsession); // Assuming yearly is a number
  const [yearly_count, setYearlyCount] = useState(""); // Assuming yearly_countsketch is a number
  const [yearly_countsketch, setYearlyCountSketch] = useState(""); // Assuming yearly_countsketch is a number
  const [responsible_agency, setResponsibleAgency] = useState(clubName);
  const [academic_year, setAcademicYear] = useState("");
  const [advisor_name, setAdvisorName] = useState("");
  const [person1_name, setPerson1Name] = useState("");
  const [person1_contact, setPerson1Contact] = useState("");
  const [person2_name, setPerson2Name] = useState("");
  const [person2_contact, setPerson2Contact] = useState("");
  const [person3_name, setPerson3Name] = useState("");
  const [person3_contact, setPerson3Contact] = useState("");

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [is_1side, setIs_1side] = useState(false);
  const [is_2side, setIs_2side] = useState(false);
  const [is_3side, setIs_3side] = useState(false);
  const [is_4side, setIs_4side] = useState(false);
  const [is_5side, setIs_5side] = useState(false);
  

  //==========================
  const [NetList, setNetList] = useState([])
  const [net_budget, setNet_budget] = useState("");
  const getNetProject = () => {
    try {
      Axios.get(`http://localhost:3001/student/project/getBudgetclubName/${responsible_agency}/${yearly}`)
        .then((response) => {
          setNetList(response.data);
          console.log("NetList")
          console.log(NetList)
        })
        .catch((error) => {
          console.error("Error fetching net project:", error);
          // Handle error state here if needed
        });
    } catch (error) {
      console.error("Error in getNetProject:", error);
      // Handle error state here if needed
    }
  };

  useEffect(() => {
    const netProject = NetList.find(item => item.project_name === project_name);
    if (netProject) {
      setNet_budget(netProject.net_budget);
    }
  }, [NetList, project_name]);
  
  useEffect(() => {
    getNetProject();
  }, [])

 

  const minDate = new Date();

  const [newpersonicit, setNewPersonICIT] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [personCount, setPersonCount] = useState(0);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    checkuserinfoapi();
  }, [newpersonicit]);

  const checkuserinfoapi = () => {
    if (newpersonicit) {
      // Make API call
      axios
        .post(
          "http://localhost:3001/api/userInfo",
          {
            username: newpersonicit,
          },
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            maxBodyLength: Infinity,
          }
        )
        .then((response) => {
          if (response.data.status === "success") {
            setGetuserapi(response.data);
          }
          if (
            response.message.displayname === person1_name ||
            response.message.displayname === person2_name
          ) {
            alert(
              "มีข้อมูลของนักศึกษารับผิดชอบโครงการในโครงการนี้เรียบร้อยแล้ว"
            );
            setNewPersonICIT(null);
            setShowModal(false);
          }
        })
        .catch((error) => {
          console.error("Error fetching user info:", error);
          if (
            error.response &&
            error.response.data &&
            error.response.data.message === "Invalid username or password"
          ) {
            console.error("Invalid username naa");
          } else {
            console.error("An unexpected error occurred.");
          }
        });
    }
  };

  const [getuserapi, setGetuserapi] = useState("");
  const [username, setUsername] = useState("");
  const [name_student, setName_student] = useState("");
  const [firstname_en, setFirstname_en] = useState("");
  const [lastname_en, setLastname_en] = useState("");
  const [email, setEmail] = useState("");
  const [account_type, setAccount_type] = useState("");

  const [CAMPUS_NAME, setCAMPUS_NAME] = useState("");
  const [STU_STATUS_DESC, setSTU_STATUS_DESC] = useState("");
  const [LEVEL_DESC, setLEVEL_DESC] = useState("");
  const [FAC_NAME_THAI, setFAC_NAME_THAI] = useState("");

  useEffect(() => {
    if (getuserapi && getuserapi.message) {
      setUsername(getuserapi.message.username); //s63030
      setName_student(getuserapi.message.displayname); //ชื่อไทย
      setFirstname_en(getuserapi.message.firstname_en); //ชื่อ eng
      setLastname_en(getuserapi.message.lastname_en); //นาม eng
      setEmail(getuserapi.message.email); //@kmutnb.ac.th
      setAccount_type(getuserapi.message.account_type); //
      // - personel หมำยถึง บุคลำกร
      // - student หมำยถึง นักศึกษำ
      // - templecturer หมำยถึง อำจำรย์พิเศษ
      // - retirement หมำยถึง ผู้เกษียณอำยุ
      // - exchange_student หมำยถึง นักศึกษำแลกเปลี่ยนชำวต่ำงประเทศ
      // - alumni หมำยถึง ศิษย์เก่ำ
      // - guest หมำยถึง ผู้ใช้งำนชั่วครำว
      // - kiosk หมำยถึง ผู้ใช้งำนที่ลงทะเบียนจำก KIOSK
      // - event หมำยถึง ผู้ใช้งำนส ำหรับงำน ประชุมวิชำกำร
    }
    if (getuserapi && getuserapi.message2) {
      setCAMPUS_NAME(getuserapi.message2.CAMPUS_NAME); //มจพ. กรุงเทพฯ
      setSTU_STATUS_DESC(getuserapi.message2.STU_STATUS_DESC); //ปกติ
      setLEVEL_DESC(getuserapi.message2.LEVEL_DESC); //ปริญญาตรี 4 ปี / 5 ปี
      setFAC_NAME_THAI(getuserapi.message2.FAC_NAME_THAI); //วิทยาลัยเทคโนโลยีอุตสาหกรรม
    }
  }, [getuserapi]);

  useEffect(() => {
    if (FAC_NAME_THAI === "มจพ. กรุงเทพฯ") {
      setCampus("Bangkok");
    } else if (FAC_NAME_THAI === "มจพ. ปราจีน") {
      setCampus("Prachin");
    } else if (FAC_NAME_THAI === "มจพ. ระยอง") {
      setCampus("Rayong");
    }
  }, [FAC_NAME_THAI]);

  useEffect(() => {
    setGetuserapi(null);
  }, [showModal]);

  const borrowtime = () => {
    if (!name_student) {
      setPersonCount(personCount - 1);
    }
    setShowModal(false);
  };

  const handleAddPerson = () => {
    switch (personCount) {
      case 1:
        setPerson1Name(name_student);
        break;
      case 2:
        setPerson2Name(name_student);
        break;
      case 3:
        setPerson3Name(name_student);
        break;
      default:
      // Handle other cases if needed
    }
    setShowModal(false); // Close the modal after adding the person's name
  };

  const increasePersonCount = () => {
    setShowModal(true);
    if (personCount < 4) {
      setPersonCount(personCount + 1);
    }
  };
  const decreasePersonCount = () => {
    if (personCount > 0) {
      setPersonCount(personCount - 1);
      switch (personCount) {
        case 3:
          setPerson3Name("");
          setPerson3Contact("");
          setName_student("")
          break;
        case 2:
          setPerson2Name("");
          setPerson2Contact("");
          setName_student("")
          break;
        case 1:
          setPerson1Name("");
          setPerson1Contact("");
          setName_student("")
          break;
        default:
        // Handle other cases if needed
      }
    }
  };


  // *********************************************************
  const [userList, setUserList] = useState([]);
  const [PhoneAdvisor, setPhoneAdvisor] = useState("");
  const [AgencyAdvisor, setAgencyAdvisor] = useState("");
  const [AgnecyGroupName, setAgnecyGroupName] = useState("");

  const getUsers = () => {
    Axios.get("http://localhost:3001/student/users").then((response) => {
      setUserList(response.data);
    });
  };
  useEffect(() => {
    getUsers();
  }, []);
  useEffect(() => {
    const user = userList.find((user) => user.id_student === id_student);
    if (user) {
      setYearly(user.yearly);
      setResponsibleAgency(user.clubName);
      setCodeClub(user.codebooksome);
      setAgnecyGroupName(user.agencyGroupName)
    }
  }, [userList, id_student]);

  // หาอาจารย์ที่ปรึกษา
  useEffect(() => {
    const user = userList.find(
      (user) =>
        user.clubName === storedUser.clubName &&
        user.yearly == storedUser.yearly &&
        user.position === "AD"
    );

    if (user) {
      setAdvisorName(user.name_student);
      setPhoneAdvisor(user.Phone)
      setAgencyAdvisor(user.AgencyAdvisor)
    } else {
      // If no matching user is found, you might want to reset the state variables
      // setYearly("");
      // setResponsibleAgency("");
      // setCodeClub("");
    }
  }, [userList, studentuser, storedUser]);

  // *********************************************************

  const addBasicProject = () => {
    
    Axios.get(
      `http://localhost:3001/student/project/getcodeclub/${codeclub}`
    ).then((response) => {
      console.log(response.data)
      const existingProject = response.data.find(
        (project) => project.codeclub === codeclub
      );
      if (existingProject) {
        const currentYearlyCount = parseInt(
          existingProject.yearly_countsketch,
          10
        );
        const updatedYearlyCount = currentYearlyCount + 1;
        const formattedYearlyCount = String(updatedYearlyCount).padStart(
          2,
          "0"
        );
        // setProjectNumber หลังกรอกครบทุกหน้าเรียบร้อยแล้ว
        // setProjectNumber(codeclub+formattedYearlyCount)
        const newProjectId = response.data[0].id; // Assuming the id is the correct property
        console.log("newProject")
        console.log(newProjectId + 1)
        setIdProjects(newProjectId + 1);
        createProject(formattedYearlyCount);
        
      } else {
        // If project_number doesn't exist, create a new project with yearly_count set to 1
        createProject("01");
      }
    });
  };

  const createProject = (yearlyCountsketch) => {
    const projectNameToUse = project_name === "etc" ? customProjectName : project_name;
    Axios.post("http://localhost:3001/student/project/create/", {
      id_student: id_student,
      project_name: projectNameToUse,
      project_number: project_number,
      codeclub: codeclub,
      codebooksomeoutyear: codebooksomeoutyear,
      project_phase: project_phase,
      yearly: yearly,
      yearly_count: yearly_count,
      yearly_countsketch: yearlyCountsketch,
      AgnecyGroupName:AgnecyGroupName,
      responsible_agency: responsible_agency,
      net_budget:net_budget,
      academic_year: academic_year,
      advisor_name: advisor_name,
      PhoneAdvisor:PhoneAdvisor,
      AgencyAdvisor:AgencyAdvisor,
      person1_name: person1_name,
      person1_contact: person1_contact,
      person2_name: person2_name,
      person2_contact: person2_contact,
      person3_name: person3_name,
      person3_contact: person3_contact,
      is_1side: is_1side,
      is_2side: is_2side,
      is_3side: is_3side,
      is_4side: is_4side,
      is_5side: is_5side,
    }).then(() => {
      // Assuming setProjectList is a state setter function for your projectList state
      setProjectList([
        ...projectList,
        {
          id_student: id_student,
          project_name: projectNameToUse,
          project_number: project_number,
          codeclub: codeclub,
          codebooksomeoutyear: codebooksomeoutyear,
          project_phase: project_phase,
          yearly: yearly,
          yearly_count: yearly_count,
          yearly_countsketch: yearly_countsketch,
          responsible_agency: responsible_agency,
          net_budget:net_budget,
          academic_year: academic_year,
          advisor_name: advisor_name,
          person1_name: person1_name,
          person1_contact: person1_contact,
          person2_name: person2_name,
          person2_contact: person2_contact,
          person3_name: person3_name,
          person3_contact: person3_contact,
          is_1side: is_1side,
          is_2side: is_2side,
          is_3side: is_3side,
          is_4side: is_4side,
          is_5side: is_5side,
        },
      ]);
    });
    Swal.fire({
      title: "บันทึกโครงการหน้า ข้อมูลพื้นฐานโครงการเสร็จเรียบร้อยแล้ว",
      text: "",
      icon: "success",
    })
    

    // Wait for the scroll animation to finish before navigating
    setTimeout(() => {
      switchToCSDDetail2();
    }, 500); // Adjust the delay if needed

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
              ข้อมูลพื้นฐานโครงการ
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
                      as="select"
                      className="font-form-control"
                      size="sm"
                      onChange={(event) => {
                        const selectedValue = event.target.value;

                          setProjectName(selectedValue);
      
                      }}
                    >
                      <option value="">เลือกโครงการ</option>
                      {NetList.map((project, index) => (
                        <option key={index} value={project.project_name}>
                          {project.project_name}
                        </option>
                      ))}
                      <option value="etc">อื่นๆ</option>
                    </Form.Control>
                    {/* Conditionally render the input field for custom project name */}
                    {project_name === "etc" && (
                      <Form.Control
                        className="font-form-control"
                        size="sm"
                        type="text"
                        placeholder="ชื่อโครงการ"
                        value={customProjectName}
                        onChange={(event) => {
                          setCustomProjectName(event.target.value);
                        }}
                      />
                    )}
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
                      value={"ปีการศึกษา" + yearly}
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
                {/* เบอร์ติดต่ออ.  db */}
                <tr style={{ backgroundColor: "white" }}>
                  <td
                    className="head-side-td"
                    style={{ verticalAlign: "top" }}
                  >
                    <div>เบอร์ติดต่อของอาจารย์ที่ปรึกษา</div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <Form.Control
                      className="font-form-control"
                      size="sm"
                      type="text"
                      placeholder="Enter ID Code"
                      value={PhoneAdvisor}
                      disabled
                    />
                  </td>
                </tr>
                {/* ผู้รับผิดชอบโครงการ */}
                <tr style={{ backgroundColor: "white" }}>
                  <td className="head-side-td-swp" style={{ verticalAlign: "top" }}>
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
                {showModal && (
                  <Modal
                    show={showModal}
                    onHide={() => borrowtime()}
                    style={{ top: "-20%", maxHeight: "100vh" }}
                    dialogClassName="custom-modal"
                  >
                    <Modal.Header>
                      <Modal.Title>เพิ่มนักศึกษารับผิดชอบโครงการ</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {/* Input fields for adding a new person */}
                      <Form.Control
                        className="font-form-control"
                        size="sm"
                        type="text"
                        placeholder={`ICIT ของนักศึกษา`}
                        style={{ marginBottom: "3%" }}
                        onChange={(event) =>
                          setNewPersonICIT(event.target.value)
                        }
                      />

                      {getuserapi && (
                        <div>
                          <Table className="table">
                            <tbody>
                              <tr>
                                <td
                                  style={{
                                    width: "25%",
                                    backgroundColor: "#FF8B13",
                                    border: "none",
                                    color: "#fff",
                                  }}
                                >
                                  Account Type
                                </td>
                                <td style={{ border: "none" }}>
                                  {account_type}
                                </td>
                              </tr>
                              <tr>
                                <td
                                  style={{
                                    backgroundColor: "#FF8B13",
                                    border: "none",
                                    color: "#fff",
                                  }}
                                >
                                  Username
                                </td>
                                <td style={{ border: "none" }}>{username}</td>
                              </tr>
                              <tr>
                                <td
                                  style={{
                                    backgroundColor: "#FF8B13",
                                    border: "none",
                                    color: "#fff",
                                  }}
                                >
                                  Display Name
                                </td>
                                <td style={{ border: "none" }}>
                                  {name_student}
                                </td>
                              </tr>
                              <tr>
                                <td
                                  style={{
                                    backgroundColor: "#FF8B13",
                                    border: "none",
                                    color: "#fff",
                                  }}
                                >
                                  First Name (English)
                                </td>
                                <td style={{ border: "none" }}>
                                  {firstname_en} {lastname_en}
                                </td>
                              </tr>
                              <tr>
                                <td
                                  style={{
                                    backgroundColor: "#FF8B13",
                                    border: "none",
                                    color: "#fff",
                                  }}
                                >
                                  Email
                                </td>
                                <td style={{ border: "none" }}>{email}</td>
                              </tr>
                              <tr>
                                <td
                                  style={{
                                    backgroundColor: "#FF8B13",
                                    border: "none",
                                    color: "#fff",
                                  }}
                                >
                                  คณะ
                                </td>
                                <td style={{ border: "none" }}>
                                  {FAC_NAME_THAI}
                                </td>
                              </tr>
                              <tr>
                                <td
                                  style={{
                                    backgroundColor: "#FF8B13",
                                    border: "none",
                                    color: "#fff",
                                  }}
                                >
                                  วิทยาเขต
                                </td>
                                <td style={{ border: "none" }}>
                                  {CAMPUS_NAME}
                                </td>
                              </tr>
                              <tr>
                                <td
                                  style={{
                                    backgroundColor: "#FF8B13",
                                    border: "none",
                                    color: "#fff",
                                  }}
                                >
                                  สถานะ
                                </td>
                                <td style={{ border: "none" }}>
                                  {STU_STATUS_DESC}
                                </td>
                              </tr>
                              <tr>
                                <td
                                  style={{
                                    backgroundColor: "#FF8B13",
                                    border: "none",
                                    color: "#fff",
                                  }}
                                >
                                  หลักสูตร
                                </td>
                                <td style={{ border: "none" }}>{LEVEL_DESC}</td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>
                      )}
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleCloseModal}>
                        ยกเลิก
                      </Button>
                      <Button variant="primary" onClick={handleAddPerson}>
                        เพิ่ม
                      </Button>
                    </Modal.Footer>
                  </Modal>
                )}

                {/* ข้อ 5 เลือก 5 ด้าน  db */}
                <tr style={{ backgroundColor: "white" }}>
                  <td
                    className="head-side-td"
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
export default CSD_detail;
