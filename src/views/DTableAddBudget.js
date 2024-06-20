import React, { useState, useEffect } from "react";
import { Button, Card, Form, Col, Table, Row } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { CardBody, CardFooter } from "reactstrap";
import Axios from "axios";
import Swal from "sweetalert2";
import DAddSplitBudget from "./DAddSplitBudget";
import setCode from "./setCode.json";

function DTableAddBudget() {
  const storedUserData = sessionStorage.getItem("user");
  const storedUser = storedUserData ? JSON.parse(storedUserData) : {};
  const id_student = storedUser.username;
  const strcodebooksomeoutyear = storedUser.codebooksomeoutyear;
  const ClubGroup = storedUser.ClubGroup;

  // useEffect(() => {
  //   console.log(storedUser);
  // }, [storedUser]);

  const [clubGroup, setClubGroup] = useState(ClubGroup); //องค์กรนักศึกษาส่วนกลาง
  const [codeclub, setCodeclub] = useState("");
  const [yearly_countsketch, setYearlyCountSketch] = useState("");
  const [NetList, setNetList] = useState([]);

  const [campus, setCampus] = useState("Bangkok");
  const [codedivision, setCodedivision] = useState("");
  const [codeagency, setCodeagency] = useState("");
  const [clubName, setClubname] = useState("");

  // if (clubName === 'องค์การนักศึกษา มจพ.กรุงเทพฯ' || clubName === 'สภานักศึกษา มจพ.กรุงเทพฯ') {
  //   setAgencyGroupName("องค์กรนักศึกษาส่วนกลาง");
  // } else if (clubName === 'องค์การนักศึกษา มจพ.ปราจีนบุรี' || clubName === 'สภานักศึกษา มจพ.ปราจีนบุรี') {
  //   setAgencyGroupName("องค์กรนักศึกษาส่วนกลาง");
  // } else if (clubName === 'องค์การนักศึกษา มจพ.ระยอง' || clubName === 'สภานักศึกษา มจพ.ระยอง') {
  //   setAgencyGroupName("องค์กรนักศึกษาส่วนกลาง");
  // } else if (clubName === 'ชมรมวิทยุสมัครเล่น' || clubName === 'ชมรมถ่ายภาพ' || clubName === 'ชมรมคอมพิวเตอร์' || clubName === 'ชมรมภาษาต่างประเทศ' || clubName === 'ชมรมสื่อสิ่งพิมพ์') {
  //   setAgencyGroupName("ชมรมฝ่ายวิชาการ");
  // } else if (clubName === 'ชมรมพุทธศาสน์' || clubName === 'ชมรมมุสลิม' || clubName === 'ชมรมคริสต์' || clubName === 'ชมรมดนตรีสากล' || clubName === 'ชมรมดนตรีไทยมงกุฎวดี' || clubName === 'ชมรมศิลปการแสดง' || clubName === 'ชมรมสันทนาการ' || clubName === 'ชมรมดนตรีไทย-สากล' || clubName === 'ชมรมท่องเที่ยว') {
  //   setAgencyGroupName("ชมรมฝ่ายศิลปวัฒนธรรม");
  // }  else if (clubName === 'ชมรมชาวเหนือ' || clubName === 'ชมรมปาล์มทักษิณ' || clubName === 'ชมรมอีสาน' || clubName === 'ชมรมอาสาพัฒนา' || clubName === 'ชมรมอนุรักษ์พัฒนา' || clubName === 'ชมรมชีวิตและสุขภาพ') {
  //   setAgencyGroupName("ชมรมฝ่ายอาสาพัฒนาและบำเพ็ญประโยชน์");
  // } else if (clubName === 'ชมรมฟุตบอล' || clubName === 'ชมรมรักบี้ฟุตบอล' || clubName === 'ชมรมวอลเลย์บอล' || clubName === 'ชมรมบาสเกตบอล' || clubName === 'ชมรมตะกร้อ' || clubName === 'ชมรมฟันดาบ' || clubName === 'ชมรมแบตมินตัน' || clubName === 'ชมรมซอฟท์บอล' || clubName === 'ชมรมเทควันโด' || clubName === 'ชมรมยูโด' || clubName === 'ชมรมเทเบิลเทนนิส' || clubName === 'ชมรมเปตอง' || clubName === 'ชมรมบริดจ์' || clubName === 'ชมรมหมากกระดาน' || clubName === 'ชมรมยิงปืน' || clubName === 'ชมรมกรีฑา' || clubName === 'ชมรมเทนนิส' || clubName === 'ชมรมกอล์ฟ' || clubName === 'ชมรมว่ายน้ำ' || clubName === 'ชมรมเพาะกาย' || clubName === 'ชมรมมวยสากลสมัครเล่น') {
  //   setAgencyGroupName("ชมรมฝ่ายกีฬา");
  // } else if (clubName === 'ชมรมลูกหนัง' || clubName === 'ชมรมจักรยานเพื่อสุขภาพ') {
  //   setAgencyGroupName("ชมรมฝ่ายกีฬา");
  const getNetProject = () => {
    Axios.get(`${process.env.REACT_APP_API_URL}/admin/getallNetProject`).then(
      (response) => {
        const sortedData = response.data.sort((a, b) => {
          if (a.AgencyGroupName < b.AgencyGroupName) return 1;
          if (a.AgencyGroupName > b.AgencyGroupName) return -1;

          if (a.responsible_agency < b.responsible_agency) return 1;
          if (a.responsible_agency > b.responsible_agency) return -1;

          return a.yearly - b.yearly;
        });
        setNetList(sortedData);
      }
    );
  };

  useEffect(() => {
    getNetProject();
  }, []);

  // const handleDelete = (id) => {
  //   Axios.delete(`http://localhost:3001/admin/deleteNetProject/${id}`).then((response) => {
  //     setNetList(
  //       NetList.filter((val) => {
  //         return val.id !== id;
  //       })
  //     );
  //   });
  // };

  const handleDeleteProject = (id, project_name) => {
    Swal.fire({
      className: "title",
      title: `คุณต้องการลบงบประมาณโครงการ "${project_name}" ใช่หรือไม่?`,
      text: "การบันทึกข้อมูลจะไม่สามารถยกเลิกได้",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.delete(`${process.env.REACT_APP_API_URL}/admin/deleteNetProject/${id}`)
          .then((response) => {
            setNetList(
              NetList.filter((val) => {
                return val.id !== id;
              })
            );
          })
          .catch((error) => {
            console.error("Error deleting project:", error);
          });
          Swal.fire({
            className: "title",
            title: `ลบงบประมาณโครงการ "${project_name}" สำเร็จ!`,
            text: "",
            icon: "success",
          });
      }
      
    });
    
  };
  const currentYear = new Date().getFullYear() + 543;
  const startYear = currentYear - 10;
  const endYear = currentYear;
  const years = [];
  const [yearselect, setYearselect] = useState("");
  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setYearselect(selectedValue);
  };
  return (
    <>
      <DAddSplitBudget />
      <div style={{ marginLeft: "15px", marginTop: "2%", marginBottom: "1%" }}>
        <Row>
          <Col md="2" style={{alignContent:"space-around"}}>
            <div style={{fontSize:"15px"}}>งบประมาณของโครงการทั้งหมด</div>
          </Col>

          <Col md="2">
            <Form.Group>
              <Form.Control
                as="select"
                className="font-form-control"
                size="sm"
                onChange={handleChange}
              >
                <option value="">กรุณาเลือก ปีการศึกษา</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>

          <Col md="2">
            <Form.Control
              as="select"
              onChange={(event) => {
                setCampus(event.target.value); // Update the selected campus
                setClubname("");
              }}
              className="form-select"
              style={{ width: "100%" }}
              size="sm"
            >
              <option value="">
                <div>กรุณาเลือก วิทยาเขต</div>
              </option>
              <option value="Bangkok">
                <div>กรุงเทพฯ</div>
              </option>
              <option value="Prachin">
                <div>ปราจีนบุรี</div>
              </option>
              <option value="Rayong">
                {" "}
                <div>ระยอง</div>
              </option>
              {/* Add more options as needed */}
            </Form.Control>
          </Col>

          <Col md="2">
            <Form.Control
              as="select"
              onChange={(event) => {
                setCodedivision("D04");
                setCodeagency(event.target.value);

                const selectedText =
                  event.target.options[event.target.selectedIndex].text;
                setClubname(selectedText);
                const selectedIndex = event.target.selectedIndex;

                // console.log(selectedText);
              }}
              required
              className="form-select"
              style={{ width: "100%" }}
              size="sm"
            >
              <option value="all">
                <div>กรุณาเลือก หน่วยงาน</div>
              </option>

              {setCode.Divison.D04.Agency.map((agencyGroup, index) => {
                const campusData = agencyGroup[campus]; // Get data for the selected campus
                return (
                  campusData && (
                    <optgroup key={index} label={agencyGroup.name}>
                      {Object.keys(campusData).map(
                        (agencyKey) =>
                          agencyKey !== "name" && (
                            <option key={agencyKey} value={agencyKey}>
                              {` ${campusData[agencyKey]}`}
                            </option>
                          )
                      )}
                    </optgroup>
                  )
                );
              })}
            </Form.Control>
          </Col>
        </Row>
      </div>
      <Col md="12">
        <Table striped="columns">
          <thead style={{ backgroundColor: "rgba(255, 139, 19, 0)" }}>
            <tr style={{ backgroundColor: "rgba(255, 139, 19, 1)" }}>
              {/* <th style={{ width: "5%" }}></th> */}
              <th
                style={{
                  width: "60%",
                  color: "white",
                  // fontWeight: "bold",
                }}
              >
                ชื่อโครงการ
              </th>
              <th
                style={{
                  width: "20%",
                  color: "white",
                  // fontWeight: "bold",
                }}
              >
                หน่วยงาน
              </th>
              <th
                style={{
                  width: "8%",
                  color: "white",
                  // fontWeight: "bold",
                }}
              >
                ปีการศึกษา
              </th>
              <th
                style={{
                  width: "7%",
                  color: "white",
                  // fontWeight: "bold",
                }}
              >
                งบประมาณสุทธิ
              </th>
              <th style={{ width: "5%"}}></th>
              <th style={{ width: "20%"}}></th>
            </tr>
          </thead>
          <tbody>
            {NetList.map((project, index) => {
              // อันนี้ไม่ได้เลือกอะไรเลย
              if (
                !clubName &&
                project.campus === campus &&
                (!yearselect || yearselect === project.yearly)
              ) {
                return (
                  <tr key={index} style={{ backgroundColor: "white" }}>
                    {/* <td>{project.id}</td> */}
                    <td><div>{project.project_name}</div></td>
                    <td><div>{project.responsible_agency}</div></td>
                    <td><div>{project.yearly}</div></td>
                    <td><div>{project.net_budget}</div></td>
                    <td className="font-alert" style={{justifyItems:"start"}}>บาท</td>
                    <td>
                      <Button
                        variant="danger"
                        style={{ borderColor: "#F33E3E" }}
                        className="btn btn-budget-decrease"
                        onClick={() =>
                          handleDeleteProject(project.id, project.project_name)
                        }
                      >
                        <div style={{fontSize:"14px"}}>ลบ</div>
                      </Button>
                      {/* <Button
                      onClick={() => handleDelete(project.id)}
                      type="submit"
                      variant="success"
                      className="btn-budget-increase"
                      style={{ fontSize: "14px" }}
                    >
                      ลบ
                    </Button> */}
                    </td>
                  </tr>
                );
              }
              // อันนี้เลือกทั้ง 2 ทั้งปี และ ชมรม
              else if (
                project.responsible_agency === clubName &&
                yearselect === project.yearly
              ) {
                return (
                  <tr key={index} style={{ backgroundColor: "white" }}>
                    <td>{project.id}</td>
                    <td>{project.project_name}</td>
                    <td>{project.responsible_agency}</td>
                    <td>{project.yearly}</td>
                    <td>{project.net_budget}</td>
                    <td style={{backgroundColor:"red"}}>บาท</td>
                    <td>
                      <Button
                        onClick={() => handleDelete(project.id)}
                        type="submit"
                        variant="success"
                        className="btn-budget-increase"
                        style={{ fontSize: "14px" }}
                      >
                        ลบ
                      </Button>
                    </td>
                  </tr>
                );
              }
              // อันนี้เลือกแค่ปี
              else if (
                "เลือกทั้งหมด ชมรม/หน่วยงาน/องค์กร" === clubName &&
                (!yearselect || yearselect === project.yearly)
              ) {
                return (
                  <tr key={index} style={{ backgroundColor: "white" }}>
                    <td>{project.id}</td>
                    <td>{project.project_name}</td>
                    <td>{project.responsible_agency}</td>
                    <td>{project.yearly}</td>
                    <td>{project.net_budget}</td>
                    <td>บาท</td>
                    <td>
                      <Button
                        onClick={() => handleDelete(project.id)}
                        type="submit"
                        variant="success"
                        className="btn-budget-increase"
                        style={{ fontSize: "14px" }}
                      >
                        ลบ
                      </Button>
                    </td>
                  </tr>
                );
              } else {
                return null;
              }
            })}
          </tbody>
        </Table>
      </Col>
    </>
  );
}

export default DTableAddBudget;
