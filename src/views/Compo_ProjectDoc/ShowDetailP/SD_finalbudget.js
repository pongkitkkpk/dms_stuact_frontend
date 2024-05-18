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

function SD_finalbudget({ id_project, currentStepProject }) {

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
      `http://localhost:3001/student/project/finalbudget/getidproject/${id_project}`
    ).then((response) => {
      setOriginalData(response.data[0]);
      setEditData(response.data[0]);
      setListSSA(response.data[0].listSSA); 
      // if response.data[0].listSSA == 
      setListSSB(response.data[0].listSSB);
      setListSSC(response.data[0].listSSC);
      setListSSAll(response.data[0].listSSAll);
    });

    Axios.get(
      `http://localhost:3001/student/project/getidproject/${id_project}`
    ).then((response) => {
      
      setAllowBudget(response.data[0].allow_budget);



    });
  };

  useEffect(() => {
    getProjectData();
  }, [id_project]);

  useEffect(() => {
    console.log("editDAta")
    console.log(editData)
  }, [editData])

  const handleEditClick = () => {
    setIsEditMode(true);
  };


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
        Swal.fire("save เรียบร้อย!", "Your changes have been reverted.", "success");
      }
    });
  };

  const handleBackClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "คุณต้องการยกเลิกกลับไปเป็นข้อมูลเดิมใช่ไหม ข้อมูลที่คุณกรอกไปจะไม่บันทึกลงระบบ",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, proceed",
      cancelButtonText: "No, cancel",
      // reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        setIsEditMode(false);
        setEditData(originalData);
        window.location.reload();

        Swal.fire("Cancelled!", "Your changes have been reverted.", "success");
      }
    });
  };


  // ********************************************** ผู้บริหาร *********************************************
  const [listSSA, setListSSA] = useState("");
  const [listSSB, setListSSB] = useState("");

  const [listSSC, setListSSC] = useState("");
  const [listSSAll, setListSSAll] = useState("");
  const [allow_budget, setAllowBudget] = useState("");
  const [Refundtotal, setRefundtotal] = useState(0);


  useEffect(() => {
    const NumberSSA = listSSA ? parseFloat(listSSA.toString().replace(/,/g, '')) : 0;
    const NumberSSB = listSSB ? parseFloat(listSSB.toString().replace(/,/g, '')) : 0;
    const NumberSSC = listSSC ? parseFloat(listSSC.toString().replace(/,/g, '')) : 0;
  
    if (!isNaN(NumberSSA) && !isNaN(NumberSSB) && !isNaN(NumberSSC)) {
      const total = NumberSSA + NumberSSB + NumberSSC;
      setListSSAll(total);
  
      // Calculate Refundtotal
      const Refundtotal = allow_budget - total;
      // Update Refundtotal state or perform any other action with it
      console.log("Refundtotal:", Refundtotal);
    }
  }, [listSSA, listSSB, listSSC, allow_budget]);
  




  return (
    <>

      <Col md="9">
        <Card>

          <Button
            type="submit"
            className="btn-dataupdate"
            style={{ fontSize: "14px", margin: "1%" }}
            variant="primary"
            onClick={handleEditClick}
          >
            แก้ไขข้อมูล
          </Button>

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
                {/*  ยอดเบิกเงิน */}
                <tr>
                  <td className="head-side-td" style={{ verticalAlign: "top" }}>
                    <div>ยอดเบิกเงิน</div>
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
                              width: "100%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            <div style={{ fontSize: "14px" }}>
                              ยอดเบิกเงิน
                            </div>
                          </th>

                        </tr>
                      </thead>

                      <tbody>

                        <tr style={{ backgroundColor: "white" }}>
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            value={Number(allow_budget).toLocaleString("en-US")}
                            placeholder={`ด้านปริมาณข้อที่ ${1}`}
                            readOnly
                          />
                        </tr>


                      </tbody>
                    </Table>

                  </td>

                </tr>
                {/*  ค่าตอบแทน */}
                <tr>
                  <td className="head-side-td" style={{ verticalAlign: "top" }}>
                    <div>ค่าตอบแทน</div>
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
                              width: "100%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            <div style={{ fontSize: "14px" }}>
                              ค่าตอบแทน
                            </div>
                          </th>

                        </tr>
                      </thead>

                      <tbody>

                        <tr style={{ backgroundColor: "white" }}>
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            value={listSSA}
                            placeholder={`ด้านปริมาณข้อที่ ${1}`}
                            onChange={(event) => {
                              setListSSA(event.target.value);
                            }}
                            readOnly={!isEditMode}
                          />
                        </tr>


                      </tbody>
                    </Table>

                  </td>

                </tr>
                {/* ค่าใช้สอย */}
                <tr>
                  <td className="head-side-td" style={{ verticalAlign: "top" }}>
                    <div>ค่าใช้สอย</div>
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
                              width: "100%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            <div style={{ fontSize: "14px" }}>
                              ค่าใช้สอย
                            </div>
                          </th>

                        </tr>
                      </thead>

                      <tbody>

                        <tr style={{ backgroundColor: "white" }}>
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            value={listSSB}
                            placeholder={`ด้านปริมาณข้อที่ ${1}`}
                            onChange={(event) => {
                              setListSSB(event.target.value);
                            }}
                            readOnly={!isEditMode}
                          />
                        </tr>


                      </tbody>
                    </Table>

                  </td>

                </tr>
                {/* ค่าวัสดุ */}
                <tr>
                  <td className="head-side-td" style={{ verticalAlign: "top" }}>
                    <div>ค่าวัสดุ</div>
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
                              width: "100%",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            <div style={{ fontSize: "14px" }}>
                              ค่าวัสดุ
                            </div>
                          </th>

                        </tr>
                      </thead>

                      <tbody>

                        <tr style={{ backgroundColor: "white" }}>
                          <Form.Control
                            className="table-margin"
                            size="sm"
                            type="text"
                            value={listSSC}
                            placeholder={`ด้านปริมาณข้อที่ ${1}`}
                            onChange={(event) => {
                              setListSSC(event.target.value);
                            }}
                            readOnly={!isEditMode}
                          />
                        </tr>


                      </tbody>
                    </Table>

                  </td>

                </tr>





                {/* ยอดคนรวม */}
                <tr style={{ backgroundColor: "white" }}>
                  <td className="head-side-td" style={{ verticalAlign: "top" }}>
                    <div>ยอดเงินเหลือจ่ายคืน</div>
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
                        }}
                        size="sm"
                        type="text"
                        value={editData.listSAll}
                        disabled
                      />
                      <div
                        style={{
                          color: "#FF8B13",
                          fontWeight: "bold",
                          width: "40%",
                        }}
                      >
                        บาท
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
export default SD_finalbudget;
