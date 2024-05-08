import React, { useState, useEffect } from "react";
import axios from "axios";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import setCode from "./setCode.json";
import Axios from "axios";
// กด เพิ่มแล้ว ให้รีเฟชหน้า ยังไม่ได้ทำ 3/4/2024
function TableAddStudent() {
  const [userList, setUserList] = useState([]);

  const [is_student, setIs_student] = useState(false); //รอตรวจจาก api
  const [is_centeragency, setIs_centeragency] = useState(false);
  const [positionagency, setPositionagency] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const [id_student, setId_student] = useState("");
  const [fusername, setFusername] = useState("");
  const [department, setDepartment] = useState("BBB");
  const [position, setPosition] = useState("");
  const [clubName, setClubname] = useState("องค์การนักศึกษา มจพ.กรุงเทพฯ");

  const [campus, setCampus] = useState("Bangkok"); //รอเชื่อม api
  const [yearly, setYearly] = useState(2567); // เวลา
  const [codedivision, setCodedivision] = useState("");
  const [codeagency, setCodeagency] = useState("");
  const [codeworkgroup, setCodeworkgroup] = useState("00");
  const [codebooksome, setCodebooksome] = useState("");
  const [codebooksomeoutyear, setCodebooksomeoutyear] = useState("");

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
  const [Phone, setPhone] = useState("");
  const [AgencyAdvisor, setAgencyAdvisor] = useState("");

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
    if (CAMPUS_NAME === "มจพ. กรุงเทพฯ") {
      setCampus("Bangkok");
    } else if (CAMPUS_NAME === "มจพ. ปราจีน") {
      setCampus("Prachin");
    } else if (CAMPUS_NAME === "มจพ. ระยอง") {
      setCampus("Rayong");
    }
  }, [CAMPUS_NAME]);

  const handleDivisionChange = (division) => {
    setCodedivision(division);
    setCodeagency(null);
    setCodeworkgroup(null);
  };

  const handleAgencyChange = (agency) => {
    setCodeagency(agency);
    setCodeworkgroup(null);
  };

  const handleWorkGroupChange = (workGroup) => {
    setCodeworkgroup(workGroup);
  };

  const checkuserinfoapi = () => {
    if (fusername) {
      // Make API call
      axios
        .post(
          "http://localhost:3001/api/userInfo",
          {
            username: fusername,
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
          if (response.data.status === "error") {
            alert("Error in API response: " + response.data.message);
          } else if (response.data.status === "success") {
            setShowModal(true);
            setGetuserapi(response.data);
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

  const addUser = () => {
    const campusAbbreviation = campus.substring(0, 1);
    const numericCodedivision = codedivision.replace(/\D/g, "");
    const numericCodeagency = codeagency.replace(/\D/g, "");
    const numericCodeworkgroup = codeworkgroup.replace(/\D/g, "");

    const yearlyString =
      typeof yearly === "string" ? yearly : yearly.toString();

    // Extract the last two characters of the string
    const lastTwoCharacters = yearlyString.slice(-2);

    // Construct newCodebooksome using the extracted characters
    const newCodebooksome = `${campusAbbreviation}${lastTwoCharacters}${numericCodedivision}${numericCodeagency}${numericCodeworkgroup}`;

    const newCodebooksomeoutyear = `${campusAbbreviation}${"yy"}${numericCodedivision}${numericCodeagency}${numericCodeworkgroup}`;
    setCodebooksome(newCodebooksome);
    setCodebooksomeoutyear(newCodebooksomeoutyear);

    if (
      clubName === "องค์การนักศึกษา มจพ.กรุงเทพฯ" ||
      clubName === "สภานักศึกษา มจพ.กรุงเทพฯ"
    ) {
      setAgencyGroupName("องค์กรนักศึกษาส่วนกลาง");
    } else if (
      clubName === "องค์การนักศึกษา มจพ.ปราจีนบุรี" ||
      clubName === "สภานักศึกษา มจพ.ปราจีนบุรี"
    ) {
      setAgencyGroupName("องค์กรนักศึกษาส่วนกลาง");
    } else if (
      clubName === "องค์การนักศึกษา มจพ.ระยอง" ||
      clubName === "สภานักศึกษา มจพ.ระยอง"
    ) {
      setAgencyGroupName("องค์กรนักศึกษาส่วนกลาง");
    } else if (
      clubName === "ชมรมวิทยุสมัครเล่น" ||
      clubName === "ชมรมถ่ายภาพ" ||
      clubName === "ชมรมคอมพิวเตอร์" ||
      clubName === "ชมรมภาษาต่างประเทศ" ||
      clubName === "ชมรมสื่อสิ่งพิมพ์"
    ) {
      setAgencyGroupName("ชมรมฝ่ายวิชาการ");
    } else if (
      clubName === "ชมรมพุทธศาสน์" ||
      clubName === "ชมรมมุสลิม" ||
      clubName === "ชมรมคริสต์" ||
      clubName === "ชมรมดนตรีสากล" ||
      clubName === "ชมรมดนตรีไทยมงกุฎวดี" ||
      clubName === "ชมรมศิลปการแสดง" ||
      clubName === "ชมรมสันทนาการ" ||
      clubName === "ชมรมดนตรีไทย-สากล" ||
      clubName === "ชมรมท่องเที่ยว"
    ) {
      setAgencyGroupName("ชมรมฝ่ายศิลปวัฒนธรรม");
    } else if (
      clubName === "ชมรมชาวเหนือ" ||
      clubName === "ชมรมปาล์มทักษิณ" ||
      clubName === "ชมรมอีสาน" ||
      clubName === "ชมรมอาสาพัฒนา" ||
      clubName === "ชมรมอนุรักษ์พัฒนา" ||
      clubName === "ชมรมชีวิตและสุขภาพ"
    ) {
      setAgencyGroupName("ชมรมฝ่ายอาสาพัฒนาและบำเพ็ญประโยชน์");
    } else if (
      clubName === "ชมรมฟุตบอล" ||
      clubName === "ชมรมรักบี้ฟุตบอล" ||
      clubName === "ชมรมวอลเลย์บอล" ||
      clubName === "ชมรมบาสเกตบอล" ||
      clubName === "ชมรมตะกร้อ" ||
      clubName === "ชมรมฟันดาบ" ||
      clubName === "ชมรมแบตมินตัน" ||
      clubName === "ชมรมซอฟท์บอล" ||
      clubName === "ชมรมเทควันโด" ||
      clubName === "ชมรมยูโด" ||
      clubName === "ชมรมเทเบิลเทนนิส" ||
      clubName === "ชมรมเปตอง" ||
      clubName === "ชมรมบริดจ์" ||
      clubName === "ชมรมหมากกระดาน" ||
      clubName === "ชมรมยิงปืน" ||
      clubName === "ชมรมกรีฑา" ||
      clubName === "ชมรมเทนนิส" ||
      clubName === "ชมรมกอล์ฟ" ||
      clubName === "ชมรมว่ายน้ำ" ||
      clubName === "ชมรมเพาะกาย" ||
      clubName === "ชมรมมวยสากลสมัครเล่น"
    ) {
      setAgencyGroupName("ชมรมฝ่ายกีฬา");
    } else if (
      clubName === "ชมรมลูกหนัง" ||
      clubName === "ชมรมจักรยานเพื่อสุขภาพ"
    ) {
      setAgencyGroupName("ชมรมฝ่ายกีฬา");
    }

    Axios.post("http://localhost:3001/admin/user/createUser", {
      id_student: username,
      name_student: name_student,
      Phone: Phone,
      AgencyAdvisor: AgencyAdvisor,
      department: FAC_NAME_THAI,
      position: position,
      clubName: clubName, // Change to match the column name in the table
      campus: CAMPUS_NAME,
      email: email,
      account_type: account_type,
      STU_STATUS_DESC: STU_STATUS_DESC,
      LEVEL_DESC: LEVEL_DESC,
      yearly: yearly, // Ensure all required fields are included
      codedivision: codedivision,
      codeagency: codeagency,
      codeworkgroup: codeworkgroup,
      codebooksome: newCodebooksome,
      codebooksomeoutyear: newCodebooksomeoutyear,
      agencyGroupName: agencyGroupName,
    })
      .then(() => {
        setUserList([
          ...userList,
          {
            id_student: username,
            name_student: name_student,
            department: FAC_NAME_THAI,
            position: position,
            clubName: clubName, // Change to match the column name in the table
            campus: CAMPUS_NAME,
            email: email,
            account_type: account_type,
            STU_STATUS_DESC: STU_STATUS_DESC,
            LEVEL_DESC: LEVEL_DESC,
            yearly: yearly, // Ensure all required fields are included
            codedivision: codedivision,
            codeagency: codeagency,
            codeworkgroup: codeworkgroup,
            codebooksome: newCodebooksome,
            codebooksomeoutyear: newCodebooksomeoutyear,
            agencyGroupName: agencyGroupName,
          },
        ]);
        // Reload the page after adding a user
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  };
  const [agencyGroupName, setAgencyGroupName] = useState("");

  useEffect(() => {
    if (
      clubName === "องค์การนักศึกษา มจพ.กรุงเทพฯ" ||
      clubName === "สภานักศึกษา มจพ.กรุงเทพฯ"
    ) {
      setAgencyGroupName("องค์กรนักศึกษาส่วนกลาง");
    } else if (
      clubName === "องค์การนักศึกษา มจพ.ปราจีนบุรี" ||
      clubName === "สภานักศึกษา มจพ.ปราจีนบุรี"
    ) {
      setAgencyGroupName("องค์กรนักศึกษาส่วนกลาง");
    } else if (
      clubName === "องค์การนักศึกษา มจพ.ระยอง" ||
      clubName === "สภานักศึกษา มจพ.ระยอง"
    ) {
      setAgencyGroupName("องค์กรนักศึกษาส่วนกลาง");
    } else if (
      clubName === "ชมรมวิทยุสมัครเล่น" ||
      clubName === "ชมรมถ่ายภาพ" ||
      clubName === "ชมรมคอมพิวเตอร์" ||
      clubName === "ชมรมภาษาต่างประเทศ" ||
      clubName === "ชมรมสื่อสิ่งพิมพ์"
    ) {
      setAgencyGroupName("ชมรมฝ่ายวิชาการ");
    } else if (
      clubName === "ชมรมพุทธศาสน์" ||
      clubName === "ชมรมมุสลิม" ||
      clubName === "ชมรมคริสต์" ||
      clubName === "ชมรมดนตรีสากล" ||
      clubName === "ชมรมดนตรีไทยมงกุฎวดี" ||
      clubName === "ชมรมศิลปการแสดง" ||
      clubName === "ชมรมสันทนาการ" ||
      clubName === "ชมรมดนตรีไทย-สากล" ||
      clubName === "ชมรมท่องเที่ยว"
    ) {
      setAgencyGroupName("ชมรมฝ่ายศิลปวัฒนธรรม");
    } else if (
      clubName === "ชมรมชาวเหนือ" ||
      clubName === "ชมรมปาล์มทักษิณ" ||
      clubName === "ชมรมอีสาน" ||
      clubName === "ชมรมอาสาพัฒนา" ||
      clubName === "ชมรมอนุรักษ์พัฒนา" ||
      clubName === "ชมรมชีวิตและสุขภาพ"
    ) {
      setAgencyGroupName("ชมรมฝ่ายอาสาพัฒนาและบำเพ็ญประโยชน์");
    } else if (
      clubName === "ชมรมฟุตบอล" ||
      clubName === "ชมรมรักบี้ฟุตบอล" ||
      clubName === "ชมรมวอลเลย์บอล" ||
      clubName === "ชมรมบาสเกตบอล" ||
      clubName === "ชมรมตะกร้อ" ||
      clubName === "ชมรมฟันดาบ" ||
      clubName === "ชมรมแบตมินตัน" ||
      clubName === "ชมรมซอฟท์บอล" ||
      clubName === "ชมรมเทควันโด" ||
      clubName === "ชมรมยูโด" ||
      clubName === "ชมรมเทเบิลเทนนิส" ||
      clubName === "ชมรมเปตอง" ||
      clubName === "ชมรมบริดจ์" ||
      clubName === "ชมรมหมากกระดาน" ||
      clubName === "ชมรมยิงปืน" ||
      clubName === "ชมรมกรีฑา" ||
      clubName === "ชมรมเทนนิส" ||
      clubName === "ชมรมกอล์ฟ" ||
      clubName === "ชมรมว่ายน้ำ" ||
      clubName === "ชมรมเพาะกาย" ||
      clubName === "ชมรมมวยสากลสมัครเล่น"
    ) {
      setAgencyGroupName("ชมรมฝ่ายกีฬา");
    } else if (
      clubName === "ชมรมลูกหนัง" ||
      clubName === "ชมรมจักรยานเพื่อสุขภาพ"
    ) {
      setAgencyGroupName("ชมรมฝ่ายกีฬา");
    }
    console.log("ASDASDFAS");
    console.log(clubName);
    console.log(agencyGroupName);
  }, [clubName]);
  return (
    <>
      <Container fluid>
        <Card className="strpied-tabled-with-hover">
          <Card.Header
            style={{
              marginBottom: "-2px",
              backgroundColor: "#535353",
              color: "white",
            }}
          >
            <div
              style={{
                fontSize: "16px",
                paddingBottom: "10px",
                paddingTop: "0px",
              }}
            >
              เพิ่มบทบาทของนักศึกษาและอาจารย์ที่ปรึกษา
            </div>
          </Card.Header>
          <Card.Body>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="IDCode">
                ICIT Account ( ชื่อผู้ใช้ ) :
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="ชื่อผู้ใช้ ICIT Account"
                onChange={(event) => {
                  setFusername(event.target.value);
                }}
              />
              <Button
                onClick={checkuserinfoapi}
                type="submit"
                variant="warning"
                style={{ marginTop: "1%" }}
                className="btn-details"
              >
                ค้นหา ICIT Account
              </Button>
              <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                style={{ top: "-20%", maxHeight: "100vh" }}
                dialogClassName="custom-modal"
              >
                <Modal.Header style={{backgroundColor:"#535353", paddingBottom:"15px", paddingTop:"15px", color:"white"}}>
                  <div>รายละเอียดของ ICIT Account</div>
                </Modal.Header>
                <Modal.Body>
                  <div>
                    <Table className="table table-bordered table-striped" >
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
                            <div>ประเภทของบัญชี</div>
                          </td>
                          <td style={{ border: "none" }}>
                            <div>{account_type}</div>
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
                            <div>ชื่อผู้ใช้</div>
                          </td>
                          <td style={{ border: "none" }}>
                            <div>{username}</div>
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
                            <div>ชื่อ-นามสกุล (ไทย)</div>
                          </td>
                          <td style={{ border: "none" }}>
                            <div>{name_student}</div>
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
                            <div>ชื่อ-นามสกุล (อังกฤษ)</div>
                          </td>
                          <td style={{ border: "none" }}>
                            <div>
                              {firstname_en} {lastname_en}
                            </div>
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
                            <div>อีเมลมหาวิทยาลัย</div>
                          </td>
                          <td style={{ border: "none" }}>
                            <Form.Control
                              className="font-form-control"
                              size="sm"
                              type="text"
                              placeholder="email"
                              value={email}
                              onChange={(event) => {
                                setEmail(event.target.value);
                              }}
                            />
                          </td>
                        </tr>
                        {account_type === "personel" && (
                          <>
                            <tr>
                              <td
                                style={{
                                  backgroundColor: "#FF8B13",
                                  border: "none",
                                  color: "#fff",
                                }}
                              >
                                <div>เบอร์โทรติดต่อ</div>
                              </td>
                              <td style={{ border: "none" }}>
                                <Form.Control
                                  className="font-form-control"
                                  size="sm"
                                  type="text"
                                  placeholder="0XXXXXXXXX"
                                  onChange={(event) => {
                                    setPhone(event.target.value);
                                  }}
                                />
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
                                <div>สังกัดหน่วยงาน</div>
                              </td>
                              <td style={{ border: "none" }}>
                                <Form.Control
                                  className="font-form-control"
                                  size="sm"
                                  type="text"
                                  placeholder="สังกัดหน่วยงาน"
                                  onChange={(event) => {
                                    setAgencyAdvisor(event.target.value);
                                  }}
                                />
                              </td>
                            </tr>
                          </>
                        )}
                        {account_type === "students" && (
                          <>
                            <tr>
                              <td
                                style={{
                                  backgroundColor: "#FF8B13",
                                  border: "none",
                                  color: "#fff",
                                }}
                              >
                                <div>สังกัด</div>
                              </td>
                              <td style={{ border: "none" }}>
                                <div>{FAC_NAME_THAI}</div>
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
                                <div>วิทยาเขต</div>
                              </td>
                              <td style={{ border: "none" }}>
                                <div>{CAMPUS_NAME}</div>
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
                                <div>สถานะ</div>
                              </td>
                              <td style={{ border: "none" }}>
                                <div>{STU_STATUS_DESC}</div>
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
                                <div>หลักสูตร</div>
                              </td>
                              <td style={{ border: "none" }}>
                                <div>{LEVEL_DESC}</div>
                              </td>
                            </tr>
                          </>
                        )}
                      </tbody>
                    </Table>
                  </div>
                  
                  <Table className="table table-bordered table-striped">
                    <thead style={{backgroundColor:"#535353"}}>
                      <tr>
                        <td style={{ border: "none" }}><div style={{color:"white"}}>กรุณากรอกรายละเอียดเพิ่มเติม</div></td>
                        <td style={{ border: "none" }}></td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{backgroundColor:"#FF8B13", color:"white", width:"40%"}}>
                          <div>ปีการศึกษาที่ดูแล</div>{" "}
                        </td>
                        <td>
                          <input
                            type="number"
                            id="yearly"
                            value={yearly}
                            onChange={(e) => setYearly(e.target.value)}
                            placeholder="กรอกปีการศึกษา"
                            style={{ width: "55%" }}
                            className="form-control font-form-control"
                          />
                        </td>
                      </tr>
                      {account_type === "students" && (
                        <tr>
                          <td style={{backgroundColor:"#FF8B13", color:"white"}}>
                            <div>ตำแหน่ง</div>{" "}
                          </td>
                          <td>
                            <select
                              onChange={(event) => {
                                setPosition(event.target.value);
                              }}
                              required
                              style={{ width: "70%", height:"37px" }}
                              className="form-select font-form-control"
                            >
                              <option value="">
                                <div>กรุณาเลือก ตำแหน่ง</div>
                              </option>
                              <option value="SH">
                                <div>ประธานสภา/นายกองค์การ/ประธานชมรม</div>
                              </option>
                              <option value="S">
                                <div>นักศึกษาประสานงาน</div>
                              </option>
                            </select>
                          </td>
                        </tr>
                      )}
                      {account_type === "personel" && (
                        <tr>
                          <td style={{backgroundColor:"#FF8B13", color:"white"}}>
                            <div>ตำแหน่ง</div>{" "}
                          </td>
                          <td>
                            <select
                              onChange={(event) => {
                                setPosition(event.target.value);
                              }}
                              required
                              style={{ width: "70%", height:"37px" }}
                              className="form-select font-form-control"
                            >
                              <option value="">
                                <div>กรุณาเลือก ตำแหน่ง</div>
                              </option>
                              <option value="AD">
                                <div>อาจารย์ที่ปรึกษา</div>
                              </option>
                            </select>
                          </td>
                        </tr>
                      )}
                      <tr>
                        <td style={{backgroundColor:"#FF8B13", color:"white"}}>
                          <div>หน่วยงาน</div>{" "}
                        </td>
                        <td>
                          <select
                            onChange={(event) => {
                              setPositionagency(event.target.value);
                            }}
                            required
                            style={{ width: "70%", height:"37px" }}
                            className="form-select font-form-control"
                          >
                            <option value="">
                              <div>กรุณาเลือก หน่วยงาน</div>
                            </option>
                            <option value="center">
                              <div>หน่วยงานกลาง</div>
                            </option>
                            <option value="smo">
                              <div>สโมสรนักศึกษา</div>
                            </option>
                            <option value="etc">
                              <div>อื่นๆ</div>
                            </option>
                          </select>
                        </td>
                      </tr>
                      {positionagency === "center" && (
                        // Render something when "หน่วยงานกลาง" is selected
                        <tr>
                          <td style={{backgroundColor:"#FF8B13", color:"white"}}>
                            <div>องค์กร</div>{" "}
                          </td>
                          <td>
                            <select
                              onChange={(event) => {
                                setCodedivision("D04");
                                setCodeagency(event.target.value);

                                const selectedText =
                                  event.target.options[
                                    event.target.selectedIndex
                                  ].text;
                                setClubname(selectedText);
                              }}
                              required
                              className="form-select font-form-control"
                              style={{ width: "70%", height:"37px"}}
                            >
                              <option value="">
                                กรุณาเลือก องค์กร
                              </option>
                              {setCode.Divison.D04.Agency.map(
                                (agencyGroup, index) => {
                                  const campusData = agencyGroup[campus]; // Get data for the selected campus
                                  return (
                                    campusData && (
                                      <optgroup
                                        key={index}
                                        label={agencyGroup.name}
                                      >
                                        {Object.keys(campusData).map(
                                          (agencyKey) =>
                                            agencyKey !== "name" && (
                                              <option
                                                key={agencyKey}
                                                value={agencyKey}
                                              >
                                                {` ${campusData[agencyKey]}`}
                                              </option>
                                            )
                                        )}
                                      </optgroup>
                                    )
                                  );
                                }
                              )}
                            </select>
                          </td>
                        </tr>
                      )}
                      {positionagency === "smo" && (
                        // Render something when "หน่วยงานกลาง" is selected
                        <tr>
                          <td style={{backgroundColor:"#FF8B13", color:"white"}}>
                            <div>สโมสรนักศึกษา</div>
                          </td>
                          <td>
                            <select
                              onChange={(event) => {
                                setCodedivision("D02");
                                setCodeagency(event.target.value);
                                const selectedText =
                                  event.target.options[
                                    event.target.selectedIndex
                                  ].text;
                                setClubname(selectedText);
                              }}
                              required
                              className="form-select font-form-control"
                              style={{ width: "70%", height:"37px" }}
                            >
                              <option value="">กรุณาเลือก สโมสรนักศึกษา</option>
                              {setCode.Divison.D02.Agency.map(
                                (agencyGroup, index) =>
                                  agencyGroup.name != "คณะ/วิทยาลัย" && (
                                    <optgroup
                                      key={index}
                                      label={agencyGroup.name}
                                    >
                                      {Object.keys(agencyGroup).map(
                                        (agencyKey) =>
                                          agencyKey !== "name" && (
                                            <option
                                              key={agencyKey}
                                              value={agencyKey}
                                            >
                                              {` ${agencyGroup[agencyKey]}`}
                                            </option>
                                          )
                                      )}
                                    </optgroup>
                                  )
                              )}
                            </select>
                          </td>
                        </tr>
                      )}
                      {positionagency === "etc" && (
                        // Render something when "หน่วยงานกลาง" is selected
                        <tr>
                          <td>
                            <div>หน่วยงาน</div>
                          </td>
                          <td>
                            <select
                              onChange={(event) => {
                                setCodedivision(event.target.value);
                                setCodeagency("001");
                                const selectedText =
                                  event.target.options[
                                    event.target.selectedIndex
                                  ].text;
                                setClubname(selectedText);
                              }}
                              required
                              className="form-select"
                              style={{ width: "70%" }}
                            >
                              <option value="">กรุณาเลือก</option>
                              {Object.keys(setCode.Divison).map(
                                (divisionKey) =>
                                  (divisionKey === "D06" ||
                                    divisionKey === "D07" ||
                                    divisionKey === "D08" ||
                                    divisionKey === "D09" ||
                                    divisionKey === "D10" ||
                                    divisionKey === "D11" ||
                                    divisionKey === "D12") && (
                                    <option
                                      key={divisionKey}
                                      value={divisionKey}
                                    >
                                      {`${setCode.Divison[divisionKey].name}`}
                                    </option>
                                  )
                              )}
                            </select>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="danger"
                    onClick={() => setShowModal(false)}
                    className="btn-decrease"
                  >
                    ยกเลิก
                  </Button>
                  <Button variant="success" onClick={addUser} className="btn-budget-increase">
                    บันทึก
                  </Button>
                </Modal.Footer>
              </Modal>
            </Form.Group>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default TableAddStudent;
