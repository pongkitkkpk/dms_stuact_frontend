import React, { useState, useEffect } from "react";
import { Button, Card, Form, Col, Table } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { CardBody, CardFooter } from "reactstrap";
import Axios from "axios";
import Swal from "sweetalert2";
import DAddSplitBudget from "./DAddSplitBudget";
import setCode from "./setCode.json";

function DetailBudget() {
  const storedUserData = sessionStorage.getItem("user");
  const storedUser = storedUserData ? JSON.parse(storedUserData) : {};
  const id_student = storedUser.username;
  const strcodebooksomeoutyear = storedUser.codebooksomeoutyear;
  const [NetList, setNetList] = useState([]);
  const [ProjectList, setProjectList] = useState([]);
  const getNetProject = () => {
    Axios.get('http://localhost:3001/admin/getallNetProject').then((response) => {
      setNetList(response.data);
    });
  };
  
  const getDetailProject = () => {
    Axios.get('http://localhost:3001/admin/allprojects/').then((response) => {
      setProjectList(response.data);
    });
  };


  useEffect(() => {
    getNetProject();
    getDetailProject();
  }, []);

  useEffect(() => {
    console.log(NetList)
  }, [NetList]);
  return (
    <>
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
                width: "30%",
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


          {/* {NetList.map((project, index) => {
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
          })} */}





        </tbody>
      </Table>
    </>
  );
}

export default DetailBudget;
