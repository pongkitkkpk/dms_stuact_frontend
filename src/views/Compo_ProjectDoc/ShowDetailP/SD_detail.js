import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import Axios from 'axios';
// react-bootstrap components
import {
    Button,
    Card,
    Form,
    Container,
    Row,
    Col,
    Nav,
    Table
} from "react-bootstrap";

function SD_detail({ id_project }) {
    const [id_student, setId_student] = useState('s6');
    const [project_name, setProjectName] = useState('');
    const [responsible_agency, setResponsibleAgency] = useState('');
    const [academic_year, setAcademicYear] = useState('');
    const [advisor_name, setAdvisorName] = useState('');
    const [person1_name, setPerson1Name] = useState('');
    const [person1_contact, setPerson1Contact] = useState('');
    const [person2_name, setPerson2Name] = useState('');
    const [person2_contact, setPerson2Contact] = useState('');
    const [person3_name, setPerson3Name] = useState('');
    const [person3_contact, setPerson3Contact] = useState('');


    const [originalData, setOriginalData] = useState({});
    const [editData, setEditData] = useState({});
    const [isEditMode, setIsEditMode] = useState(false);
    const [showdeadline, setShowDeadLine] = useState('');
    const getProjectData = () => {
        Axios.get(`http://localhost:3001/student/project/getidproject/${id_project}`).then((response) => {
            setOriginalData(response.data[0]);
            setEditData(response.data[0]);
            setId_student(response.data[0].id_student)
            setProjectName(response.data[0].project_name)
            setResponsibleAgency(response.data[0].responsible_agency)
            setAcademicYear(response.data[0].academic_year)
            setAdvisorName(response.data[0].advisor_name)
            setPerson1Name(response.data[0].person1_name)
            setPerson1Contact(response.data[0].person1_contact)
            setPerson2Name(response.data[0].person2_name)
            setPerson2Contact(response.data[0].person2_contact)
            setPerson3Name(response.data[0].person3_name)
            setPerson3Contact(response.data[0].person3_contact)
        });
    };

    useEffect(() => {
        getProjectData();
    }, [id_project]);

    useEffect(() => {
        console.log(editData.is_continueproject)
    }, [editData]);

    const handleEditClick = () => {
        setIsEditMode(true);
    };

    const handleSaveClick = () => {
        // Save data here
        setIsEditMode(false);
        if (window.confirm("Do you want to save changes?")) {

            Axios.put(`http://localhost:3001/student/project/edit/${id_project}`, editData)
                .then(response => {
                    // Handle success
                    console.log("Data saved successfully:", response.data);
                    window.location.reload();
                })
                .catch(error => {
                    // Handle error
                    console.error("Error saving data:", error);
                });
        }
    };

    const handleBackClick = () => {
        const confirmBack = window.confirm(
            "คุณต้องการยกเลิกกลับไปเป็นข้อมูลเดิมใช่ไหม ข้อมูลที่คุณกรอกไปจะไม่บันทึกลงระบบ"
        );

        if (confirmBack) {
            setIsEditMode(false);
            setEditData(originalData);
        }
    };




    return (
        <>
            <Col md="9">
                <Card>
                    {!isEditMode && (
                        <Button variant="primary" onClick={handleEditClick}>Edit</Button>
                    )}
                    
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ข้อมูลพื้นฐานโครงการ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* ชื่อโครงการ */}
                            <tr style={{ backgroundColor: "white" }}>
                                <td className='head-side-td'>ชื่อโครงการ</td>
                                <td>
                                    <Form.Control
                                        size="sm"
                                        type="text"
                                        placeholder="ชื่อโครงการ"
                                        value={isEditMode ? editData.project_name : project_name}
                                        readOnly={!isEditMode}
                                        onChange={(event) => {
                                            setEditData({ ...editData, project_name: event.target.value });
                                        }}
                                    />
                                </td>
                            </tr>
                            {/* หน่วยงานที่รับผิดชอบ db */}
                            <tr style={{ backgroundColor: "white" }}>
                                <td className='head-side-td'>หน่วยงานที่รับผิดชอบ</td>
                                <td style={{ verticalAlign: "middle" }}>
                                    <Form.Control
                                        size="sm"
                                        type="text"
                                        placeholder="Enter ID Code"
                                        value={isEditMode ? editData.responsible_agency : responsible_agency}
                                        readOnly
                                        onChange={(event) => {
                                            setEditData({ ...editData, responsible_agency: event.target.value });
                                        }}
                                    />
                                </td>
                            </tr>
                            {/* ปีการศึกษา db */}
                            <tr style={{ backgroundColor: "white" }}>
                                <td className='head-side-td'>ปีการศึกษา</td>
                                <td style={{ verticalAlign: "middle" }}>
                                    <Form.Control
                                        size="sm"
                                        type="text"
                                        placeholder="Enter ID Code"
                                        value={isEditMode ? editData.academic_year : academic_year}
                                        readOnly
                                        onChange={(event) => {
                                            setEditData({ ...editData, academic_year: event.target.value });
                                        }}
                                    />
                                </td>
                            </tr>
                            {/* ที่อาจารย์ปรึกษา  db */}
                            <tr style={{ backgroundColor: "white" }}>
                                <td className='head-side-td'>อาจารย์ปรึกษา<p className='detail-prodoc'>ข้อมูลอัตโนมัติจากหน่วยงานที่รับผิดชอบ</p></td>
                                <td style={{ verticalAlign: "middle" }}>
                                    <Form.Control
                                        size="sm"
                                        type="text"
                                        placeholder="Enter ID Code"
                                        value={isEditMode ? editData.advisor_name : advisor_name}
                                        readOnly={!isEditMode}
                                        onChange={(event) => {
                                            setEditData({ ...editData, advisor_name: event.target.value });
                                        }}
                                    />
                                </td>
                            </tr>
                            {/* ผู้รับผิดชอบโครงการ */}
                            <tr style={{ backgroundColor: "white" }}>
                                <td className='head-side-td'>ผู้รับผิดชอบโครงการ</td>
                                <td className='back-side-td'>
                                    <Table striped="columns">
                                        <thead>
                                            <tr>
                                                <th>ชื่อ-สกุล</th>
                                                <th>โทรศัพท์</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* คนที่ 1 */}
                                            <tr style={{ backgroundColor: "white" }}>
                                                {/* ชื่อ คนที่ 1  */}
                                                <td style={{ verticalAlign: "middle" }}>
                                                    <Form.Control
                                                        size="sm"
                                                        type="text"
                                                        placeholder="ชื่อ ผู้รับผิดชอบโครงการ คนที่ 1"
                                                        value={isEditMode ? editData.person1_name : person1_name}
                                                        readOnly={!isEditMode}
                                                        onChange={(event) => {
                                                            setEditData({ ...editData, person1_name: event.target.value });
                                                        }}
                                                    />
                                                </td>
                                                {/* เบอร์ คนที่ 1 */}
                                                <td style={{ verticalAlign: "middle" }}>
                                                    <Form.Control
                                                        size="sm"
                                                        type="text"
                                                        placeholder="เบอร์ติดต่อ ผู้รับผิดชอบโครงการ คนที่ 1"
                                                        value={isEditMode ? editData.person1_contact : person1_contact}
                                                        readOnly={!isEditMode}
                                                        onChange={(event) => {
                                                            setEditData({ ...editData, person1_contact: event.target.value });
                                                        }}
                                                    />
                                                </td>
                                            </tr>
                                            {/* คนที่ 2 */}
                                            <tr>
                                                {/* ชื่อ คนที่ 2 */}
                                                <td style={{ verticalAlign: "middle" }}>
                                                    <Form.Control
                                                        size="sm"
                                                        type="text"
                                                        placeholder="ชื่อ ผู้รับผิดชอบโครงการ คนที่ 2"
                                                        value={isEditMode ? editData.person2_name : person2_name}
                                                        readOnly={!isEditMode}
                                                        onChange={(event) => {
                                                            setEditData({ ...editData, person2_name: event.target.value });
                                                        }}
                                                    />
                                                </td>
                                                {/* เบอร์ คนที่ 2 */}
                                                <td style={{ verticalAlign: "middle" }}>
                                                    <Form.Control
                                                        size="sm"
                                                        type="text"
                                                        placeholder="เบอร์ติดต่อ ผู้รับผิดชอบโครงการ คนที่ 2"
                                                        value={isEditMode ? editData.person2_contact : person2_contact}
                                                        readOnly={!isEditMode}
                                                        onChange={(event) => {
                                                            setEditData({ ...editData, person2_contact: event.target.value });
                                                        }}
                                                    />
                                                </td>
                                            </tr>
                                            {/* คนที่ 3 */}
                                            <tr style={{ backgroundColor: "white" }}>
                                                {/* ชื่อ คนที่ 3 */}
                                                <td style={{ verticalAlign: "middle" }}>
                                                    <Form.Control
                                                        size="sm"
                                                        type="text"
                                                        placeholder="ชื่อ ผู้รับผิดชอบโครงการ คนที่ 3"
                                                        value={isEditMode ? editData.person3_name : person3_name}
                                                        readOnly={!isEditMode}
                                                        onChange={(event) => {
                                                            setEditData({ ...editData, person3_name: event.target.value });
                                                        }}
                                                    />
                                                </td>
                                                {/* เบอร์ คนที่ 3 */}
                                                <td style={{ verticalAlign: "middle" }}>
                                                    <Form.Control
                                                        size="sm"
                                                        type="text"
                                                        placeholder="เบอร์ติดต่อ ผู้รับผิดชอบโครงการ คนที่ 3"
                                                        value={isEditMode ? editData.person3_contact : person3_contact}
                                                        readOnly={!isEditMode}
                                                        onChange={(event) => {
                                                            setEditData({ ...editData, person3_contact: event.target.value });
                                                        }}
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>

                                    </Table>
                                </td>
                            </tr>
                        </tbody>

                    </Table>
                    {isEditMode ? (
                        <>
                            <Button variant="success" onClick={handleSaveClick}>Save</Button>
                            <Button variant="danger" onClick={handleBackClick}>Back</Button>
                        </>
                    ) : null}
                </Card>
            </Col>
        </>
    );
}

export default SD_detail;
