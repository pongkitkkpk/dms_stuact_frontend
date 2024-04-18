import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Axios from "axios";

function DetailBudgetStudent() {
    const storedUserData = sessionStorage.getItem("user");
    const storedUser = storedUserData ? JSON.parse(storedUserData) : {};
    const strcodebooksomeoutyear = storedUser.codebooksomeoutyear;

    const [ProjectList, setProjectList] = useState([]);
    const [yearly, setYearly] = useState("");
    const [filteredProjects, setFilteredProjects] = useState([]);

    useEffect(() => {
        const getDetailProject = () => {
            Axios.get(
                `http://localhost:3001/student/project/getcodebooksomeoutyear/${strcodebooksomeoutyear}`
            ).then((response) => {
                setProjectList(response.data);
            });

        };
        getDetailProject();
    }, []);




    useEffect(() => {
        console.log("AAAAAAAAAAAAAAAAAAA")
        console.log(ProjectList)
    }, [ProjectList])

    return (
        <>
        <h1>ASdfasdfasdfasddddddddddd</h1>
            <div>
                <Table striped="columns">
                    <tbody>
                        {filteredProjects.map((project, index) => (
                            <tr key={index} style={{ backgroundColor: "white" }}>
                                <td>{project.project_number}</td>
                                <td>{project.project_name}</td>
                                <td>{project.responsible_agency}</td>
                                <td>{project.yearly}</td>
                                <td>{project.net_budget ? formatNumber(project.net_budget) : ''}</td>
                                <td>{project.allow_budget ? formatNumber(project.allow_budget) : ''}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );


}

export default DetailBudgetStudent;




{/* <thead
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
        </thead> */}




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