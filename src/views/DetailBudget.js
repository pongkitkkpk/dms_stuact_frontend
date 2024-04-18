import React, { useState, useEffect } from "react";
import { Button, Card, Form, Col, Table } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { CardBody, CardFooter } from "reactstrap";
import Axios from "axios";
import Swal from "sweetalert2";

import setCode from "./setCode.json";


function DetailBudget() {
  const storedUserData = sessionStorage.getItem("user");
  const storedUser = storedUserData ? JSON.parse(storedUserData) : {};
  const id_student = storedUser.username;
  const strcodebooksomeoutyear = storedUser.codebooksomeoutyear;
  const ClubGroup = storedUser.ClubGroup;
  const account_type = storedUser.account_type;
  const clubName = storedUser.clubName;



  const [clubGroup, setClubGroup] = useState(ClubGroup); //องค์กรนักศึกษาส่วนกลาง
  const [codeclub, setCodeclub] = useState("");
  const [yearly_countsketch, setYearlyCountSketch] = useState("");
  const [ProjectList, setProjectList] = useState([]);
  const [responsible_agency, setResponsibleAgency] = useState(clubName);
  const [campus, setCampus] = useState("Bangkok");
  const [codedivision, setCodedivision] = useState("");
  const [codeagency, setCodeagency] = useState("");
  const [totalNetBudget, setTotalNetBudget] = useState(0);
  const [totalAllowBudget, setTotalAllowBudget] = useState(0);

  const getDetailProject = () => {
    if (storedUser.account_type == "admin") {
      Axios.get(`http://localhost:3001/admin/allprojects`).then((response) => {
        setProjectList(response.data);
      });
    } else if (storedUser.position === "Stuact") {
      Axios.get(
        `http://localhost:3001/stuact/stuactallprojects/${clubGroup}`
      ).then((response) => {
        setProjectList(response.data);
      });
    } else {
      Axios.get(
        `http://localhost:3001/student/project/getcodebooksomeoutyear/${strcodebooksomeoutyear}`
      ).then((response) => {
        setProjectList(response.data);
      });
    }
  };

  useEffect(() => {
    getDetailProject();
  }, []);

  useEffect(() => {
    console.log("storedUser")
    console.log(storedUser)
    console.log("ProjectList")
    console.log(ProjectList)
  }, [storedUser, ProjectList])



  return (
    <>



      <h1>{`งบประมาณของ ${responsible_agency}`}</h1>
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
              งบประมาณที่อนุมัติ
            </th>
            <th
              style={{
                width: "20%",
                color: "white",
                fontWeight: "bold",
              }}
            >
              งบประมาณที่ใช้จริง
            </th>

          </tr>
        </thead>
        <tbody>
          {ProjectList.map((project, index) => (
            <tr key={index} style={{ backgroundColor: "white" }}>
              <td>{project.project_number}</td>
              <td>{project.project_name}</td>
              <td>{project.responsible_agency}</td>
              <td>{project.yearly}</td>
              <td>{project.net_budget}</td> 
              <td>{project.allow_budget}</td>
            </tr>
          ))}

        </tbody>
      </Table>
    </>
  );
}


export default DetailBudget;


// {account_type === "admin" && (
//   <div>
//     <span>
//       <select
//         onChange={(event) => {
//           setCampus(event.target.value); // Update the selected campus
//           setClubname("");
//         }}
//         className="form-select"
//         style={{ width: "100%" }}
//       >
//         <option value="Bangkok">
//           <div>กรุงเทพ</div>
//         </option>
//         <option value="Prachin">
//           <div>ปราจีนบุรี</div>
//         </option>
//         <option value="Rayong">
//           {" "}
//           <div>ระยอง</div>
//         </option>
//         {/* Add more options as needed */}
//       </select>
//     </span>
//     <span>
//       <select
//         onChange={(event) => {
//           setCodedivision("D04");
//           setCodeagency(event.target.value);

//           const selectedText =
//             event.target.options[event.target.selectedIndex]
//               .text;
//           setClubname(selectedText);
//         }}
//         required
//         className="form-select"
//         style={{ width: "100%" }}
//       >
//         <option value="">
//           <div>กรุณาเลือก ชมรม/หน่วยงาน/องค์กร</div>
//         </option>

//         {setCode.Divison.D04.Agency.map(
//           (agencyGroup, index) => {
//             const campusData = agencyGroup[campus]; // Get data for the selected campus
//             return (
//               campusData && (
//                 <optgroup
//                   key={index}
//                   label={agencyGroup.name}
//                 >

//                   {Object.keys(campusData).map(
//                     (agencyKey) =>
//                       agencyKey !== "name" && (
//                         <option
//                           key={agencyKey}
//                           value={agencyKey}
//                         >
//                           {` ${campusData[agencyKey]}`}
//                         </option>
//                       )
//                   )}
//                 </optgroup>
//               )
//             );
//           }
//         )}
//       </select>
//     </span>
//   </div>
// )}
// {account_type === "Stuact" && (
//   <div>
//     <span>
//       <select
//         onChange={(event) => {
//           setCodedivision("D04");
//           setCodeagency(event.target.value);

//           const selectedText =
//             event.target.options[event.target.selectedIndex]
//               .text;
//           setClubname(selectedText);
//         }}
//         required
//         className="form-select"
//         style={{ width: "100%" }}
//       >
//         <option value="">
//           <div>กรุณาเลือก ชมรม/หน่วยงาน/องค์กร</div>
//         </option>

//         {setCode.Divison.D04.Agency.map(
//           (agencyGroup, index) => {
//             if (agencyGroup.name === clubGroup) {
//               const campusData = agencyGroup[campus]; // Get data for the selected campus
//               return (
//                 campusData && (
//                   <optgroup
//                     key={index}
//                     label={agencyGroup.name}
//                   >
//                     {Object.keys(campusData).map(
//                       (agencyKey) =>
//                         agencyKey !== "name" && (
//                           <option
//                             key={agencyKey}
//                             value={agencyKey}
//                           >
//                             {` ${campusData[agencyKey]}`}
//                           </option>
//                         )
//                     )}
//                   </optgroup>
//                 )
//               );
//             }
//             return null; // If agencyGroup.name doesn't match clubGroup, return null
//           }
//         )}
//       </select>
//     </span>
//   </div>
// )}