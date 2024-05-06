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
  Modal,
} from "react-bootstrap";
import setCode from "./setCode.json";
import Axios from "axios";
// กด เพิ่มแล้ว ให้รีเฟชหน้า ยังไม่ได้ทำ 3/4/2024
function TableAddPersonel() {
  const [userList, setUserList] = useState([]);

  const [is_personel, setIs_personel] = useState(false); //แก้ตรงนี้
  const [is_centeragency, setIs_centeragency] = useState(false);
  const [positionagency, setPositionagency] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const [id_student, setId_student] = useState("");
  const [fusername, setFusername] = useState("");
  const [department, setDepartment] = useState("BBB");
  const [position, setPosition] = useState("");
  const [clubName, setClubname] = useState("");

  const [campus, setCampus] = useState("Bangkok"); //รอเชื่อม api
  const [yearly, setYearly] = useState(2667); // เวลา
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
  const [WorkGroup, setWorkGroup] = useState("");
  const [ClubGroup, setClubGroup] = useState("");

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
    console.log(username);
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

  useEffect(() => {
    if (getuserapi !== null && getuserapi.message) {
      if (getuserapi.message.account_type === "personel") {
        setIs_personel(true);
      } else {
        setIs_personel(false);
        alert("ICIT Account นี้ไม่ใช่บุคลากร");
      }
    }
  }, [getuserapi]);
  const addUser = () => {
    const campusAbbreviation = campus.substring(0, 1);
    const numericCodedivision = codedivision.replace(/\D/g, "");
    const numericCodeagency = codeagency.replace(/\D/g, "");
    const numericCodeworkgroup = codeworkgroup.replace(/\D/g, "");

    const newCodebooksome = `${campusAbbreviation}${yearly}${numericCodedivision}${numericCodeagency}${numericCodeworkgroup}`;
    const newCodebooksomeoutyear = `${campusAbbreviation}${"yy"}${numericCodedivision}${numericCodeagency}${numericCodeworkgroup}`;
    setCodebooksome(newCodebooksome);
    setCodebooksomeoutyear(newCodebooksomeoutyear);
    Axios.post("http://localhost:3001/admin/user/createUser", {
      id_student: username,
      name_student: name_student,
      department: "",
      position: position,
      clubName: clubName,
      WorkGroup: WorkGroup,
      ClubGroup: ClubGroup,
      campus: CAMPUS_NAME,
      email: email,
      account_type: account_type,
      STU_STATUS_DESC: STU_STATUS_DESC,
      LEVEL_DESC: LEVEL_DESC,
      yearly: yearly,
      codedivision: codedivision,
      codeagency: codeagency,
      codeworkgroup: codeworkgroup,
      codebooksome: newCodebooksome,
      codebooksomeoutyear:newCodebooksomeoutyear
    })
      .then(() => {
        setUserList([
          ...userList,
          {
            id_student: username,
            name_student: name_student,
            department: "",
            position: position,
            clubName: clubName,
            WorkGroup: WorkGroup,
            ClubGroup: ClubGroup,
            campus: CAMPUS_NAME,
            email: email,
            account_type: account_type,
            STU_STATUS_DESC: STU_STATUS_DESC,
            LEVEL_DESC: LEVEL_DESC,
            yearly: yearly,
            codedivision: codedivision,
            codeagency: codeagency,
            codeworkgroup: codeworkgroup,
            codebooksome: newCodebooksome,
            codebooksomeoutyear:newCodebooksomeoutyear
          },
        ]);
        // Reload the page after adding a user
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  };
  return (
    <>
      <Container fluid>
        <Card className="strpied-tabled-with-hover">
          <Card.Header>
            <Card.Title as="h4">เพิ่มบทบาทของบุคลากร</Card.Title>
            <p className="card-category">Here is a subtitle for this table</p>
          </Card.Header>
          <Card.Body>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="IDCode">Username :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter ID Code"
                onChange={(event) => {
                  setFusername(event.target.value);
                }}
              />
              <Button
                onClick={checkuserinfoapi}
                type="submit"
                variant="info"
                style={{ marginTop: "1%" }}
              >
                ค้นหารหัส icit
              </Button>
              {/* is_personel */}
              {true && (
                <Modal
                  show={showModal}
                  onHide={() => setShowModal(false)}
                  style={{ top: "-20%", maxHeight: "100vh" }}
                  dialogClassName="custom-modal"
                >
                  <Modal.Header>
                    <Modal.Title>
                      ข้อมูลรายละเอียดของ icit account 
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
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
                            <td style={{ border: "none" }}>{account_type}</td>
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
                            <td style={{ border: "none" }}>{name_student}</td>
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
                            <td style={{ border: "none" }}>{FAC_NAME_THAI}</td>
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
                            <td style={{ border: "none" }}>{CAMPUS_NAME}</td>
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

                    <div>
                      ตำแหน่งแสดงชื่อ รายละเอียด ของนศ. ชั้นปีการศึกษา วิทยาเขต
                      xxxxxxxxxxxxxxxx
                    </div>

                    <Table>
                      <tbody>
                        <tr>
                          <td>
                            <div>ตำแหน่ง</div>
                          </td>
                          <td>
                            <select
                              aria-label="Default select example"
                              onChange={(event) => {
                                setPosition(event.target.value);
                              }}
                              required
                              style={{ width: "70%" }}
                            >
                              <option>เลือกบลาๆ</option>
                              <option value="Stuact">
                                บุคลการกองกิจการนักศึกษา
                              </option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div>ฝ่าย</div>
                          </td>
                          <td>
                            <select
                              aria-label="Default select example"
                              onChange={(event) => {
                                setCodedivision(event.target.value);
                                console.log(codedivision);
                                const selectedText =
                                  event.target.options[
                                    event.target.selectedIndex
                                  ].text;
                                setClubname(selectedText);
                              }}
                              required
                              style={{ width: "70%" }}
                            >
                              <option>กรุณาเลือก</option>
                              {Object.keys(setCode.Divison).map(
                                (divisionKey) =>
                                  (divisionKey === "D01" ||
                                    divisionKey === "D02" ||
                                    divisionKey === "D03" ||
                                    divisionKey === "D05") && (
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
                        {codedivision === "D01" && (
                          <tr>
                            <td>
                              <div>หน่วยงาน </div>
                            </td>
                            <td>
                              <select
                                aria-label="Default select example"
                                onChange={(event) => {
                                  setCodedivision("D01");
                                  setCodeagency(event.target.value);
                                  const selectedText =
                                    event.target.options[
                                      event.target.selectedIndex
                                    ].text;
                                  setClubname(selectedText);
                                }}
                                required
                                style={{ width: "70%" }} // Set the width to fit the container
                              >
                                <option>กรุณาเลือก</option>
                                {setCode.Divison.D01.Agency.map(
                                  (agencyGroup, index) => (
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
                                              {index === 1
                                                ? ` ${agencyGroup[agencyKey]}`
                                                : agencyGroup[agencyKey].name}
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
                        {codedivision === "D02" && (
                          <tr>
                            <td>
                              <div>หน่วยงาน</div>
                            </td>
                            <td>
                              <select
                                aria-label="Default select example"
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
                                style={{ width: "70%" }}
                              >
                                <option>กรุณาเลือก</option>
                                {setCode.Divison.D02.Agency.map(
                                  (agencyGroup, index) =>
                                    agencyGroup.name !==
                                      "สโมสรนักศึกษาคณะ/วิทยาลัย" && (
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
                                                {`${agencyGroup[agencyKey].name}`}
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
                        {codedivision === "D03" && (
                          <tr>
                            <td>
                              <div>หน่วยงาน</div>
                            </td>
                            <td>
                              <select
                                aria-label="Default select example"
                                onChange={(event) => {
                                  setCodedivision("D03");
                                  setCodeagency(event.target.value);
                                  const selectedText =
                                    event.target.options[
                                      event.target.selectedIndex
                                    ].text;
                                  setClubname(selectedText);
                                }}
                                required
                                style={{ width: "70%" }}
                              >
                                <option>กรุณาเลือก</option>
                                {setCode.Divison.D03.Agency.map(
                                  (agencyGroup, index) => (
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
                        {codedivision === "D05" && (
                          <tr>
                            <td>
                              <div>หน่วยงาน</div>
                            </td>
                            <td>
                              <select
                                aria-label="Default select example"
                                onChange={(event) => {
                                  setCodedivision("D05");
                                  setCodeagency(event.target.value);
                                  const selectedText =
                                    event.target.options[
                                      event.target.selectedIndex
                                    ].text;
                                  setClubname(selectedText);
                                }}
                                required
                                style={{ width: "70%" }}
                              >
                                <option>กรุณาเลือก</option>
                                {Object.keys(setCode.Divison.D05.Agency).map(
                                  (agencyKey) => (
                                    <option key={agencyKey} value={agencyKey}>
                                      {`${setCode.Divison.D05.Agency[agencyKey]}`}
                                    </option>
                                  )
                                )}
                              </select>
                            </td>
                          </tr>
                        )}
                        {/* WorkGroup Dropdown */}
                        {codeagency &&
                          codedivision !== "D05" &&
                          setCode.Divison[codedivision].Agency.map(
                            (agencyGroup, index) =>
                              agencyGroup[codeagency]?.WorkGroup && (
                                <tr key={index}>
                                  <td>
                                    <div>กลุ่มงาน </div>
                                  </td>
                                  <td>
                                    <select
                                      onChange={(e) => {
                                        handleWorkGroupChange(e.target.value);
                                        setCodeworkgroup(e.target.value);
                                        const selectedText =
                                          e.target.options[
                                            e.target.selectedIndex
                                          ].text;
                                        setWorkGroup(selectedText);
                                        console.log("workgrop" + codeworkgroup);
                                      }}
                                      required
                                      style={{ width: "70%" }} // Set the width to fit the container
                                    >
                                      <option value="">กรุณาเลือก</option>
                                      {Object.keys(
                                        agencyGroup[codeagency].WorkGroup
                                      ).map((workGroupKey) => (
                                        <option
                                          key={workGroupKey}
                                          value={workGroupKey}
                                        >
                                          {`${agencyGroup[codeagency].WorkGroup[workGroupKey]}`}
                                        </option>
                                      ))}
                                    </select>
                                  </td>
                                </tr>
                              )
                          )}
                        {codedivision === "D01" && codeworkgroup === "G01" && (
                          <tr>
                            <td>
                              <div>ฝ่ายงาน</div>
                            </td>
                            <td>
                              <select
                                onChange={(e) => {
                                  const selectedText =
                                    e.target.options[e.target.selectedIndex]
                                      .text;
                                  setClubGroup(selectedText);
                                }}
                                required
                                style={{ width: "70%" }} // Set the width to fit the container
                              >
                                <option>กรุณาเลือก</option>
                                <option value="องค์กรนักศึกษาส่วนกลาง">
                                  องค์กรนักศึกษาส่วนกลาง
                                </option>
                                <option value="ชมรมฝ่ายวิชาการ">
                                  ชมรมฝ่ายวิชาการ
                                </option>
                                <option value="ชมรมฝ่ายศิลปวัฒนธรรม">
                                  ชมรมฝ่ายศิลปวัฒนธรรม
                                </option>
                                <option value="ชมรมฝ่ายอาสาพัฒนาและบำเพ็ญประโยชน์">
                                  ชมรมฝ่ายอาสาพัฒนาและบำเพ็ญประโยชน์
                                </option>
                                <option value="ชมรมฝ่ายกีฬา">
                                  ชมรมฝ่ายกีฬา
                                </option>
                              </select>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </Table>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </Button>
                    <Button variant="primary" onClick={addUser}>
                      Save changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              )}
            </Form.Group>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default TableAddPersonel;
