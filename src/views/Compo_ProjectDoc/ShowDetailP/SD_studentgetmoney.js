import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import Axios from "axios";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { CardBody, CardFooter } from "reactstrap";
// react-bootstrap components
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

function SD_studentgetmoney({ id_project, currentStepProject }) {
    const storedUserData = sessionStorage.getItem("user");
    const storedUser = storedUserData ? JSON.parse(storedUserData) : {};
    const id_student = storedUser.username;
    const strcodebooksomeoutyear = storedUser.codebooksomeoutyear;

    const [project_name, setProjectName] = useState("");


    const [originalData, setOriginalData] = useState({});
    const [responsible_agency, setResponsibleAgency] = useState("");
    const [editData, setEditData] = useState({});
    const [isEditMode, setIsEditMode] = useState(false);
    const [codeclub, setCodeclub] = useState("");
    const [yearly, setYearly] = useState("");

    const [namestudent_receive, setNameStudent_receive] = useState("");
    const [numberstudent_receive, setNumberStudent_receive] = useState(0);



    const [personList, setPersonList] = useState([]);

    const getProjectData = () => {
        Axios.get(
            `http://localhost:3001/student/project/getidproject/${id_project}`
        ).then((response) => {
            setOriginalData(response.data[0]);
            setProjectName(response.data[0].project_name);
            setYearly(response.data[0].yearly);
            setResponsibleAgency(response.data[0].responsible_agency);
            const newPersonList = [
                response.data[0].person1_name,
                response.data[0].person2_name,
                response.data[0].person3_name
            ].filter(personName => personName !== null && personName !== '');
            setPersonList(newPersonList);
        });

    };

    const [net_budget, setNet_budget] = useState("");
    const getProjectNetData = () => {
        Axios.get(
            `http://localhost:3001/student/project/getBudgetProjectName/${project_name}`
        )
            .then((response) => {
                setNet_budget(response.data[0].net_budget);
            })
            .catch((error) => {
                console.error("Error fetching project net data:", error);
                setNet_budget(0);

            });
    };

    useEffect(() => {
        getProjectData();
    }, [id_project]);

    useEffect(() => {
        getProjectNetData();
    }, [project_name]);

    // useEffect(() => {
    //     console.log("Personlist");
    //     console.log(personList);
    // }, [personList]);

    const calculateRemainingBudget = () => {
        // Ensure net_budget is a string before trying to remove commas
        const netBudgetString = typeof net_budget === 'string' ? net_budget : net_budget.toString();
        // Remove commas and convert net_budget to a number
        const netbudget = parseFloat(netBudgetString.replace(/,/g, ''));
        // Convert numberstudent_receive to a number without commas
        const receivedBudget = parseFloat(numberstudent_receive.replace(/,/g, ''));
        console.log("net_budget after conversion:", netbudget); 
        console.log("receivedBudget:", receivedBudget);
        return (netbudget - receivedBudget).toLocaleString("en-US");
    };
    
    
    
    
    

    const handleSaveClick = () => {
        const editpage = "ข้อมูลพื้นฐานโครงการ";
        Swal.fire({
            title: "คุณต้องการบันทึกข้อมูลใช่ไหม?",
            text: "การบันทึกข้อมูลจะไม่สามารถยกเลิกได้",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "บันทึก",
            cancelButtonText: "ยกเลิก",
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                // Your Axios PUT request code goes here
                Axios.put(
                    `http://localhost:3001/student/project/edit/${id_project}`,
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
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                setIsEditMode(false);
                setEditData(originalData);
                window.location.reload();

                Swal.fire("Cancelled!", "Your changes have been reverted.", "success");
            }
        });
    };






    return (
        <>

            <Col md="9">
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
                            รายละเอียดนักศึกษารับเงิน
                        </div>
                    </CardHeader>
                    <CardBody>
                        <div>
                            <h1>ยอดทั้งหมด {net_budget}</h1>
                        </div>
                        <Table striped="columns">
                            <tbody>

                                {/* นศ.รับเงิน */}
                                <tr style={{ backgroundColor: "white" }}>
                                    <td className="head-side-td" style={{ verticalAlign: "top" }}>
                                        <div>นักศึกษารับเงิน</div>
                                    </td>
                                    <td className="back-side-td">
                                        <Table striped="columns">
                                            <thead style={{ backgroundColor: "rgba(255, 139, 19, 0)" }}>
                                                <tr style={{ backgroundColor: "rgba(255, 139, 19, 1)" }}>
                                                    <th style={{ color: "white", fontSize: "14px", fontWeight: "bold" }}>รายชื่อนักศึกษารับเงิน</th>
                                                    <th style={{ color: "white", fontSize: "14px", fontWeight: "bold" }}>หน่วยงาน</th>
                                                    <th style={{ color: "white", fontSize: "14px", fontWeight: "bold" }}>จำนวนเงิน</th>
                                                    <th style={{ color: "white", fontSize: "14px", fontWeight: "bold" }}></th>
                                                    <th style={{ color: "white", fontSize: "14px", fontWeight: "bold" }}>คงเหลือ</th>
                                                    <th style={{ color: "white", fontSize: "14px", fontWeight: "bold" }}></th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                <tr style={{ backgroundColor: "white" }}>

                                                    <td style={{ verticalAlign: "middle" }}>
                                                        <Form.Control
                                                            as="select"
                                                            className="font-form-control"
                                                            size="sm"
                                                            onChange={(event) => {
                                                                const selectedValue = event.target.value;
                                                                setNameStudent_receive(selectedValue);
                                                            }}
                                                        >
                                                            <option value="">เลือกนักศึกษารับเงิน</option>
                                                            {personList.map((personName, index) => (
                                                                <option key={index} value={personName}>
                                                                    {personName}
                                                                </option>
                                                            ))}

                                                        </Form.Control>


                                                    </td>

                                                    <td style={{ verticalAlign: "middle" }}>
                                                        <Form.Control
                                                            size="sm"
                                                            type="text"
                                                            className="font-form-control"
                                                            placeholder="เบอร์ติดต่อ ผู้รับผิดชอบโครงการ คนที่ 1"
                                                            value={
                                                                responsible_agency
                                                            }
                                                            readOnly
                                                        />
                                                    </td>

                                                    {/* <td style={{ verticalAlign: "middle" }}>
                                                        <Form.Control
                                                            size="sm"
                                                            type="text"
                                                            className="font-form-control"
                                                            placeholder="เบอร์ติดต่อ ผู้รับผิดชอบโครงการ คนที่ 1"
                                                            value={
                                                                yearly
                                                            }
                                                            readOnly
                                                        />
                                                    </td> */}

                                                    <td style={{ verticalAlign: "middle" }}>
                                                        <Form.Control
                                                            size="sm"
                                                            type="text"
                                                            className="font-form-control"
                                                            placeholder="จำนวนเงิน"
                                                            value={numberstudent_receive}
                                                            onChange={(event) => {
                                                                const value = Number(
                                                                    event.target.value.replace(/,/g, "")
                                                                );
                                                                setNumberStudent_receive(value.toLocaleString("en-US"));
                                                            }}

                                                        />
                                                    </td>
                                                    <td>
                                                        <div>บาท</div>
                                                    </td>

                                                    <td style={{ verticalAlign: "middle" }}>
                                                        <Form.Control
                                                            size="sm"
                                                            type="text"
                                                            className="font-form-control"
                                                            placeholder="จำนวนเงิน"
                                                            value={calculateRemainingBudget()}
                                                            readOnly

                                                        />
                                                    </td>
                                                    <td>
                                                        <div>บาท</div>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </Table>
                                    </td>
                                </tr>
                                {/* บุคลากรรับเรื่อง */}
                                <tr style={{ backgroundColor: "white" }}>
                                    <td className="head-side-td" style={{ verticalAlign: "top" }}>
                                        <div>บุคลากรรับเรื่อง</div>
                                    </td>
                                    <td className="back-side-td">
                                        <Table striped="columns">
                                            <thead style={{ backgroundColor: "rgba(255, 139, 19, 0)" }}>
                                                <tr style={{ backgroundColor: "rgba(255, 139, 19, 1)" }}>
                                                    <th style={{ color: "white", fontSize: "14px", fontWeight: "bold" }}>รายชื่อนักศึกษารับเงิน</th>
                                                    <th style={{ color: "white", fontSize: "14px", fontWeight: "bold" }}>หน่วยงาน</th>

                                                </tr>
                                            </thead>
                                            <tbody>

                                                <tr style={{ backgroundColor: "white" }}>

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
                                                            <option value="">เลือกนักศึกษารับเงิน</option>
                                                            {personList.map((personName, index) => (
                                                                <option key={index} value={personName}>
                                                                    {personName}
                                                                </option>
                                                            ))}

                                                        </Form.Control>


                                                    </td>

                                                    <td style={{ verticalAlign: "middle" }}>
                                                        <Form.Control
                                                            size="sm"
                                                            type="text"
                                                            className="font-form-control"
                                                            placeholder="เบอร์ติดต่อ ผู้รับผิดชอบโครงการ คนที่ 1"
                                                            value={
                                                                responsible_agency
                                                            }
                                                            readOnly
                                                        />

                                                    </td>

                                                    {/* <td style={{ verticalAlign: "middle" }}>
                                                        <Form.Control
                                                            size="sm"
                                                            type="text"
                                                            className="font-form-control"
                                                            placeholder="เบอร์ติดต่อ ผู้รับผิดชอบโครงการ คนที่ 1"
                                                            value={
                                                                yearly
                                                            }
                                                            readOnly
                                                        />
                                                    </td> */}

                                                    <td style={{ verticalAlign: "middle" }}>
                                                        <Form.Control
                                                            size="sm"
                                                            type="text"
                                                            className="font-form-control"
                                                            placeholder="จำนวนเงิน"
                                                        // value={student_receive}
                                                        // onChange={(event) => {
                                                        //     const value = Number(
                                                        //         event.target.value.replace(/,/g, "")
                                                        //     );
                                                        //     setStudent_receive(value.toLocaleString("en-US"));
                                                        // }}

                                                        />
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </Table>
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

export default SD_studentgetmoney;
