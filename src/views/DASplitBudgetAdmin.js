import React, { useState, useEffect } from "react";
import { Button, Card, Form, Col, Table } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { CardBody, CardFooter } from "reactstrap";
import Axios from "axios";
import Swal from "sweetalert2";
import DAddSplitBudget from "./DAddSplitBudget";
import setCode from "./setCode.json";

function DASplitBudgetAdmin() {
  const storedUserData = sessionStorage.getItem("user");
  const storedUser = storedUserData ? JSON.parse(storedUserData) : {};
  const id_student = storedUser.username;
  const strcodebooksomeoutyear = storedUser.codebooksomeoutyear;
  const ClubGroup = storedUser.ClubGroup;

  useEffect(() => {
    console.log(storedUser)
  }, [storedUser])

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
    Axios.get('http://localhost:3001/admin/getallNetProject').then((response) => {
      setNetList(response.data);
    });
  };

  useEffect(() => {
    getNetProject();
  }, []);



  const handleDelete = (id) => {
    Axios.delete(`http://localhost:3001/admin/deleteNetProject/${id}`).then((response) => {
      setNetList(
        NetList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };
  return (
    <>
      <DAddSplitBudget />
      <div>
        <h1>งบประมาณของโครงการทั้งหมด</h1>
        <span>
          <select
            onChange={(event) => {
              setCampus(event.target.value); // Update the selected campus
              setClubname("");
            }}
            className="form-select"
            style={{ width: "100%" }}
          >
            <option value="Bangkok">
              <div>กรุงเทพ</div>
            </option>
            <option value="Prachin">
              <div>ปราจีนบุรี</div>
            </option>
            <option value="Rayong">
              {" "}
              <div>ระยอง</div>
            </option>
            {/* Add more options as needed */}
          </select>
        </span>
        <span>
          <select
            onChange={(event) => {
              setCodedivision("D04");
              setCodeagency(event.target.value);

              const selectedText =
                event.target.options[event.target.selectedIndex]
                  .text;
              setClubname(selectedText);
            }}
            required
            className="form-select"
            style={{ width: "100%" }}
          >
            <option value="">
              <div>กรุณาเลือก ชมรม/หน่วยงาน/องค์กร</div>
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
        </span>
      </div>
      <Table striped="columns">
        <thead
          style={{ backgroundColor: "rgba(255, 139, 19, 0)" }}
        >
          <tr
            style={{ backgroundColor: "rgba(255, 139, 19, 1)" }}
          >
            <th style={{ width: "5%" }}></th>
            <th
              style={{
                width: "50%",
                color: "white",
                fontWeight: "bold",
              }}
            >
              ชื่อโครงการ
            </th>
            <th
              style={{
                width: "20%",
                color: "white",
                fontWeight: "bold",
              }}
            >
              หน่วยงาน
            </th>
            <th
              style={{
                width: "15%",
                color: "white",
                fontWeight: "bold",
              }}
            >
              ปีการศึกษา
            </th>
            <th
              style={{
                width: "20%",
                color: "white",
                fontWeight: "bold",
              }}
            >
              งบประมาณสุทธิ
            </th>
            <th style={{ width: "5%" }}></th>
            <th style={{ width: "15%" }}></th>

          </tr>
        </thead>
        <tbody>


          {NetList.map((project, index) => {
            if (!clubName && (project.campus === campus)) {
              return (
                <tr key={index} style={{ backgroundColor: "white" }}>
                  <td>{project.id}</td>
                  <td>{project.project_name}</td>
                  <td>{project.responsible_agency}</td>
                  <td>{project.yearly}</td>
                  <td>{project.net_budget}</td>
                  <td>บาท</td>
                  <td>
                    <button onClick={() => handleDelete(project.id)}>Delete</button>
                  </td>
                </tr>
              );
            } else if (clubGroup === "องค์กรนักศึกษาส่วนกลาง") {
              const allowedClubs = ["องค์การนักศึกษา มจพ.กรุงเทพฯ", "สภานักศึกษา มจพ.กรุงเทพฯ"];
              if (allowedClubs.includes(project.responsible_agency)) {
                return (
                  <tr key={index} style={{ backgroundColor: "white" }}>
                    <td>{project.id}</td>
                    <td>{project.project_name}</td>
                    <td>{project.responsible_agency}</td>
                    <td>{project.yearly}</td>
                    <td>{project.net_budget}</td>
                    <td>บาท</td>
                    <td>
                      <button onClick={() => handleDelete(project.id)}>Delete</button>
                    </td>
                  </tr>
                );
              } else {
                return null;
              }
            } else if (project.responsible_agency === clubName) {
              return (
                <tr key={index} style={{ backgroundColor: "white" }}>
                  <td>{project.id}</td>
                  <td>{project.project_name}</td>
                  <td>{project.responsible_agency}</td>
                  <td>{project.yearly}</td>
                  <td>{project.net_budget}</td>
                  <td>บาท</td>
                  <td>
                    <button onClick={() => handleDelete(project.id)}>Delete</button>
                  </td>
                </tr>
              );
            } else {
              return null;
            }
          })}





        </tbody>
      </Table>
    </>
  );
}

export default DASplitBudgetAdmin;
