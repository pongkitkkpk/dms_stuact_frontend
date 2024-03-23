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
    const [principles_and_reasons1, setPrinciplesAndReasons1] = useState('');
    const [principles_and_reasons2, setPrinciplesAndReasons2] = useState('');
    const [principles_and_reasons3, setPrinciplesAndReasons3] = useState('');
    const [principles_and_reasons4, setPrinciplesAndReasons4] = useState('');
    const [principles_and_reasons5, setPrinciplesAndReasons5] = useState('');
    const [objective1, setObjective1] = useState('');
    const [objective2, setObjective2] = useState('');
    const [objective3, setObjective3] = useState('');
    const [project_type1, setProjectType1] = useState('');
    const [project_type2, setProjectType2] = useState('');
    const [project_type3, setProjectType3] = useState('');
    const [project_type4, setProjectType4] = useState('');
    const [project_type5, setProjectType5] = useState('');
    const [is_newproject, setIsNewProject] = useState(false);
    const [is_continueproject, setIsContinueProject] = useState(false);
    const [location1, setLocation1] = useState('');
    const [location2, setLocation2] = useState('');
    const [location3, setLocation3] = useState('');
    const [start_prepare, setStartPrepare] = useState('');
    const [end_prepare, setEndPrepare] = useState('');
    const [start_event, setStartEvent] = useState('');
    const [end_event, setEndEvent] = useState('');
    const [deadline, setDeadLine] = useState('');
    const [created_at, setCreated_At] = useState()

    const [problem1, setProblem1] = useState('');
    const [result1, setResult1] = useState('');
    const [problem2, setProblem2] = useState('');
    const [result2, setResult2] = useState('');
    const [problem3, setProblem3] = useState('');
    const [result3, setResult3] = useState('');


    const [originalData, setOriginalData] = useState({});
    const [editData, setEditData] = useState({});
    const [isEditMode, setIsEditMode] = useState(false);

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
            setPrinciplesAndReasons1(response.data[0].principles_and_reasons1)
            setPrinciplesAndReasons2(response.data[0].principles_and_reasons2)
            setPrinciplesAndReasons3(response.data[0].principles_and_reasons3)
            setPrinciplesAndReasons4(response.data[0].principles_and_reasons4)
            setPrinciplesAndReasons5(response.data[0].principles_and_reasons5)
            setObjective1(response.data[0].objective1)
            setObjective2(response.data[0].objective2)
            setObjective3(response.data[0].objective3)
            setProjectType1(response.data[0].project_type1)
            setProjectType2(response.data[0].project_type2)
            setProjectType3(response.data[0].project_type3)
            setProjectType4(response.data[0].project_type4)
            setProjectType5(response.data[0].project_type5)
            setIsNewProject(response.data[0].is_newproject)
            setIsContinueProject(response.data[0].is_continueproject)
            setProblem1(response.data[0].problem1)
            setResult1(response.data[0].result1)
            setProblem2(response.data[0].problem2)
            setResult2(response.data[0].result2)
            setProblem3(response.data[0].problem3)
            setResult3(response.data[0].result3)
            setLocation1(response.data[0].location1)
            setLocation2(response.data[0].location2)
            setLocation3(response.data[0].location3)
            setStartPrepare(response.data[0].start_prepare)
            setEndPrepare(response.data[0].end_prepare)
            setStartEvent(response.data[0].start_event)
            setEndEvent(response.data[0].end_event)
            setDeadLine(response.data[0].deadline)
            setCreated_At(response.data[0].created_at)
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
        setEditData({ ...editData, deadline: deadline });
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
                    {isEditMode ? (
                        <>
                            <Button variant="success" onClick={handleSaveClick}>Save</Button>
                            <Button variant="danger" onClick={handleBackClick}>Back</Button>
                        </>
                    ) : null}
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ข้อมูลพื้นฐานโครงการ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* ชื่อโครงการ */}
                            <tr>
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
                            {/* หลักการและเหตุผล */}
                            <tr style={{ backgroundColor: "white" }}>
                                <td className='head-side-td'>หลักการและเหตุผล</td>
                                <td className='back-side-td'>
                                    <ul>
                                        <li >
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder={`เพิ่มหลักการและเหตุผล ${1}`}
                                                value={isEditMode ? editData.principles_and_reasons1 : principles_and_reasons1}
                                                readOnly={!isEditMode}
                                                onChange={(event) => {
                                                    setEditData({ ...editData, principles_and_reasons1: event.target.value });
                                                }}
                                            />
                                        </li>
                                        <li >
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder={`เพิ่มหลักการและเหตุผล ${2}`}
                                                value={isEditMode ? editData.principles_and_reasons2 : principles_and_reasons2}
                                                readOnly={!isEditMode}
                                                onChange={(event) => {
                                                    setEditData({ ...editData, principles_and_reasons2: event.target.value });
                                                }}
                                            />
                                        </li>
                                        <li >
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder={`เพิ่มหลักการและเหตุผล ${3}`}
                                                value={isEditMode ? editData.principles_and_reasons3 : principles_and_reasons3}
                                                readOnly={!isEditMode}
                                                onChange={(event) => {
                                                    setEditData({ ...editData, principles_and_reasons3: event.target.value });
                                                }}
                                            />
                                        </li>
                                        <li >
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder={`เพิ่มหลักการและเหตุผล ${4}`}
                                                value={isEditMode ? editData.principles_and_reasons4 : principles_and_reasons4}
                                                readOnly={!isEditMode}
                                                onChange={(event) => {
                                                    setEditData({ ...editData, principles_and_reasons4: event.target.value });
                                                }}
                                            />
                                        </li>
                                        <li >
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder={`เพิ่มหลักการและเหตุผล ${5}`}
                                                value={isEditMode ? editData.principles_and_reasons5 : principles_and_reasons5}
                                                readOnly={!isEditMode}
                                                onChange={(event) => {
                                                    setEditData({ ...editData, principles_and_reasons5: event.target.value });
                                                }}
                                            />
                                        </li>
                                    </ul>

                                </td>
                            </tr>
                            {/* วัตถุประสงค์ */}
                            <tr>
                                <td className='head-side-td'>วัตถุประสงค์</td>
                                <td className='back-side-td'>
                                    <ul>
                                        <li >
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder={`วัตถุประสงค์ ${1}`}
                                                value={isEditMode ? editData.objective1 : objective1}
                                                readOnly={!isEditMode}
                                                onChange={(event) => {
                                                    setEditData({ ...editData, objective1: event.target.value });
                                                }}
                                            />
                                        </li>
                                        <li >
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder={`วัตถุประสงค์ ${2}`}
                                                value={isEditMode ? editData.objective2 : objective2}
                                                readOnly={!isEditMode}
                                                onChange={(event) => {
                                                    setEditData({ ...editData, objective2: event.target.value });
                                                }}
                                            />
                                        </li>
                                        <li >
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder={`วัตถุประสงค์ ${3}`}
                                                value={isEditMode ? editData.objective3 : objective3}
                                                readOnly={!isEditMode}
                                                onChange={(event) => {
                                                    setEditData({ ...editData, objective3: event.target.value });
                                                }}
                                            />
                                        </li>

                                    </ul>

                                </td>
                            </tr>
                            {/* ลักษณะรูปแบบโครงการ */}
                            <tr>
                                <td className='head-side-td'>ลักษณะรูปแบบโครงการ</td>
                                <td className='back-side-td'>
                                    <ul>
                                        <li >
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder={`ลักษณะรูปแบบโครงการ ข้อที่${1}`}
                                                value={isEditMode ? editData.project_type1 : project_type1}
                                                readOnly={!isEditMode}
                                                onChange={(event) => {
                                                    setEditData({ ...editData, project_type1: event.target.value });
                                                }}
                                            />
                                        </li>
                                        <li >
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder={`ลักษณะรูปแบบโครงการ ข้อที่${2}`}
                                                value={isEditMode ? editData.project_type2 : project_type2}
                                                readOnly={!isEditMode}
                                                onChange={(event) => {
                                                    setEditData({ ...editData, project_type2: event.target.value });
                                                }}
                                            />
                                        </li>
                                        <li >
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder={`ลักษณะรูปแบบโครงการ ข้อที่${3}`}
                                                value={isEditMode ? editData.project_type3 : project_type3}
                                                readOnly={!isEditMode}
                                                onChange={(event) => {
                                                    setEditData({ ...editData, project_type3: event.target.value });
                                                }}
                                            />
                                        </li>
                                        <li >
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder={`ลักษณะรูปแบบโครงการ ข้อที่${4}`}
                                                value={isEditMode ? editData.project_type4 : project_type4}
                                                readOnly={!isEditMode}
                                                onChange={(event) => {
                                                    setEditData({ ...editData, project_type4: event.target.value });
                                                }}
                                            />
                                        </li>
                                        <li >
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder={`ลักษณะรูปแบบโครงการ ข้อที่${5}`}
                                                value={isEditMode ? editData.project_type5 : project_type5}
                                                readOnly={!isEditMode}
                                                onChange={(event) => {
                                                    setEditData({ ...editData, project_type5: event.target.value });
                                                }}
                                            />
                                        </li>

                                    </ul>

                                </td>
                            </tr>
                            {/* ลักษณะโครงการ */}
                            <tr style={{ backgroundColor: "white" }}>
                                <td className='head-side-td'>ลักษณะโครงการ</td>
                                <td className='back-side-td' >
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <div style={{ flex: '1', marginRight: '5%' }}>
                                            <Form.Check
                                                type="radio"
                                                id="newProjectRadio"
                                                name="projectType"
                                                label="โครงการใหม่"
                                                checked={isEditMode ? editData.is_newproject : is_newproject}
                                                readOnly={!isEditMode}
                                                disabled={!isEditMode}
                                                onChange={(event) => {
                                                    setEditData({ ...editData, is_newproject: true, is_continueproject: false, problem1: null, result1: null, problem2: null, result2: null, problem3: null, result3: null });
                                                }}
                                            />
                                        </div>
                                        <div style={{ flex: '1', marginRight: '20%' }}>
                                            <Form.Check
                                                type="radio"
                                                id="continueProjectRadio"
                                                name="projectType"
                                                label="โครงการต่อเนื่อง"
                                                checked={isEditMode ? editData.is_continueproject : is_continueproject}
                                                readOnly={!isEditMode}
                                                disabled={!isEditMode}
                                                onChange={(event) => {
                                                    setEditData({ ...editData, is_newproject: false, is_continueproject: event.target.checked });
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {editData.is_continueproject && (

                                        <Table striped="columns">
                                            <thead>
                                                <tr>
                                                    <th>ปัญหาและอุปสรรคในปีที่ผ่านมา</th>
                                                    <th>แนวทางการปรับปรุงแก้ไขปัญหา และอุปสรรคในครั้งนี้</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* ข้อ 1 */}
                                                <tr style={{ backgroundColor: "white" }}>
                                                    {/* ปัญหาข้อ 1  */}
                                                    <td style={{ verticalAlign: "middle" }}>
                                                        <Form.Control
                                                            size="sm"
                                                            type="text"
                                                            placeholder="ปัญหาข้อ 1"
                                                            value={isEditMode ? editData.problem1 : problem1}
                                                            readOnly={!isEditMode}
                                                            onChange={(event) => {
                                                                setEditData({ ...editData, problem1: event.target.value });
                                                            }}
                                                        />
                                                    </td>
                                                    {/* แนวทางข้อ 1 */}
                                                    <td style={{ verticalAlign: "middle" }}>
                                                        <Form.Control
                                                            size="sm"
                                                            type="text"
                                                            placeholder="แนวทางข้อ 1 "
                                                            value={isEditMode ? editData.result1 : result1}
                                                            readOnly={!isEditMode}
                                                            onChange={(event) => {
                                                                setEditData({ ...editData, result1: event.target.value });
                                                            }}
                                                        />
                                                    </td>
                                                </tr>
                                                {/* ข้อ 2 */}
                                                <tr style={{ backgroundColor: "white" }}>
                                                    {/* ปัญหาข้อ 2  */}
                                                    <td style={{ verticalAlign: "middle" }}>
                                                        <Form.Control
                                                            size="sm"
                                                            type="text"
                                                            placeholder="ปัญหาข้อ 2"
                                                            value={isEditMode ? editData.problem2 : problem2}
                                                            readOnly={!isEditMode}
                                                            onChange={(event) => {
                                                                setEditData({ ...editData, problem2: event.target.value });
                                                            }}
                                                        />
                                                    </td>
                                                    {/* แนวทางข้อ 2 */}
                                                    <td style={{ verticalAlign: "middle" }}>
                                                        <Form.Control
                                                            size="sm"
                                                            type="text"
                                                            placeholder="แนวทางข้อ 2 "
                                                            value={isEditMode ? editData.result2 : result2}
                                                            readOnly={!isEditMode}
                                                            onChange={(event) => {
                                                                setEditData({ ...editData, result2: event.target.value });
                                                            }}
                                                        />
                                                    </td>
                                                </tr>
                                                {/* ข้อ 3 */}
                                                <tr style={{ backgroundColor: "white" }}>
                                                    {/* ปัญหาข้อ 3  */}
                                                    <td style={{ verticalAlign: "middle" }}>
                                                        <Form.Control
                                                            size="sm"
                                                            type="text"
                                                            placeholder="ปัญหาข้อ 3"
                                                            value={isEditMode ? editData.problem3 : problem3}
                                                            readOnly={!isEditMode}
                                                            onChange={(event) => {
                                                                setEditData({ ...editData, problem3: event.target.value });
                                                            }}
                                                        />
                                                    </td>
                                                    {/* แนวทางข้อ 3 */}
                                                    <td style={{ verticalAlign: "middle" }}>
                                                        <Form.Control
                                                            size="sm"
                                                            type="text"
                                                            placeholder="แนวทางข้อ 3 "
                                                            value={isEditMode ? editData.result3 : result3}
                                                            readOnly={!isEditMode}
                                                            onChange={(event) => {
                                                                setEditData({ ...editData, result3: event.target.value });
                                                            }}
                                                        />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>

                                    )}

                                </td>
                            </tr>
                            {/* สถานที่จัดโครงการ */}
                            <tr>
                                <td className='head-side-td'>สถานที่จัดโครงการ</td>
                                <td className='back-side-td'>
                                    <ul>
                                        <li>
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder={`สถานที่จัดโครงการ ${1}`}
                                                value={isEditMode ? editData.location1 : location1}
                                                readOnly={!isEditMode}
                                                onChange={(event) => {
                                                    setEditData({ ...editData, location1: event.target.value });
                                                }}
                                            />
                                        </li>
                                        <li>
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder={`สถานที่จัดโครงการ ${2}`}
                                                value={isEditMode ? editData.location2 : location2}
                                                readOnly={!isEditMode}
                                                onChange={(event) => {
                                                    setEditData({ ...editData, location2: event.target.value });
                                                }}
                                            />
                                        </li>
                                        <li>
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder={`สถานที่จัดโครงการ ${3}`}
                                                value={isEditMode ? editData.location3 : location3}
                                                readOnly={!isEditMode}
                                                onChange={(event) => {
                                                    setEditData({ ...editData, location3: event.target.value });
                                                }}
                                            />
                                        </li>

                                    </ul>

                                </td>
                            </tr>
                            {/* ช่วงจัดเตรียมโครงการ */}
                            <tr>
                                <td className='head-side-td'>
                                    วันจัดเตรียมโครงการ
                                    <p className='detail-prodoc'>
                                        ระบุช่วงเวลาเตรียมงาน
                                    </p>
                                </td>
                                <td className='back-side-td'>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <div style={{ marginRight: '20px' }}>
                                            <Form.Label>วันเริ่มต้น(จัดเตรียม) :</Form.Label>
                                            <DatePicker
                                                selected={editData.start_prepare}
                                                dateFormat="dd/MM/yyyy"
                                                placeholderText="เลือกวันเริ่มต้น"
                                                className="form-control"
                                                minDate={created_at}
                                                popperPlacement="top-start"
                                                isClearable
                                                selectsStart
                                                startDate={editData.start_prepare}
                                                endDate={editData.end_prepare}
                                                disabled={!isEditMode}
                                                onChange={(date) => {
                                                    if (date) {
                                                        const selectedDate = new Date(date);
                                                        // Adjust date to UTC+8
                                                        selectedDate.setHours(selectedDate.getHours() + 8);
                                                        setEditData({ ...editData, start_prepare: selectedDate });
                                                    }
                                                }}
                                            />

                                        </div>
                                        <div>
                                            <Form.Label>วันสิ้นสุด(จัดเตรียม) :</Form.Label>
                                            <DatePicker
                                                selected={editData.end_prepare}
                                                dateFormat="dd/MM/yyyy"
                                                placeholderText="เลือกวันสิ้นสุด"
                                                className="form-control"
                                                minDate={start_prepare}
                                                popperPlacement="top-start"
                                                isClearable
                                                selectsEnd
                                                startDate={editData.start_prepare}
                                                endDate={editData.end_prepare}
                                                disabled={!isEditMode}
                                                onChange={(date) => {
                                                    if (date) {
                                                        const selectedDate = new Date(date);
                                                        // Adjust date to UTC+8
                                                        selectedDate.setHours(selectedDate.getHours() + 8);
                                                        setEditData({ ...editData, end_prepare: selectedDate });
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>
                                </td>

                            </tr>
                            {/* วันดำเนินโครงการ */}
                            <tr>
                                <td className='head-side-td'>
                                    วันดำเนินโครงการ
                                    <p className='detail-prodoc'>
                                        กรณีจัดโครงการเพียงหนึ่งวันให้เลือกวันเริ่มต้นและวันสิ้นสุดเป็นวันเดียวกัน
                                    </p>
                                </td>
                                <td className='back-side-td'>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <div style={{ marginRight: '20px' }}>
                                            <Form.Label>วันเริ่มต้น(ดำเนิน) : </Form.Label>
                                            <DatePicker
                                                selected={editData.start_event}
                                                dateFormat="dd/MM/yyyy"
                                                placeholderText="เลือกวันเริ่มต้น"
                                                className="form-control"
                                                minDate={editData.end_prepare}
                                                popperPlacement="top-start"
                                                isClearable
                                                selectsStart
                                                startDate={editData.start_event}
                                                endDate={editData.end_event}
                                                disabled={!isEditMode}
                                                onChange={(date) => {
                                                    if (date) {
                                                        const selectedDate = new Date(date);
                                                        // Adjust date to UTC+8
                                                        selectedDate.setHours(selectedDate.getHours() + 8);
                                                        setEditData({ ...editData, start_event: selectedDate });
                                                    }
                                                }}
                                            />

                                        </div>
                                        <div>
                                            <Form.Label>วันสิ้นสุด(ดำเนิน) : </Form.Label>
                                            <DatePicker
                                                selected={editData.end_event}
                                                dateFormat="dd/MM/yyyy"
                                                placeholderText="เลือกวันสิ้นสุด"
                                                className="form-control"
                                                minDate={editData.start_event}
                                                popperPlacement="top-start"
                                                isClearable
                                                selectsEnd
                                                startDate={editData.start_event}
                                                endDate={editData.end_event}
                                                disabled={!isEditMode}
                                                onChange={(date) => {
                                                    if (date) {
                                                        const selectedDate = new Date(date);
                                                        // Adjust date to UTC+8
                                                        selectedDate.setHours(selectedDate.getHours() + 8);
                                                        setEditData({ ...editData, end_event: selectedDate });
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>
                                </td>

                            </tr>
                            {/* วันกำหนดส่งโครงการ */}
                            <tr style={{ backgroundColor: "white" }}>
                                <td className='head-side-td'>
                                    วันกำหนดส่งโครงการ
                                    <p className='detail-prodoc'>
                                        กำหนด 30 วัน หลังจากวันดำเนินงาน
                                    </p>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <Form.Label className="mr-2">วันส่งรายงาน:</Form.Label>

                                        <DatePicker
                                            selected={editData.deadline}
                                            dateFormat="dd/MM/yyyy"
                                            placeholderText="เลือกวันสิ้นสุด"
                                            className="form-control"
                                            maxDate={editData.end_event}
                                            minDate={editData.end_event}
                                            popperPlacement="top-start"
                                            isClearable
                                            selectsEnd
                                            startDate={editData.end_event}
                                            endDate={editData.end_event}
                                            disabled
                                            onChange={(date) => {
                                                if (date) {
                                                    const selectedDate = new Date(date);
                                                    // Adjust date to UTC+8
                                                    let deadline = new Date(selectedDate);
                                                    deadline.setDate(deadline.getDate() + 30);
                                                    const deadlineFormatted = `${deadline.getDate()}/${deadline.getMonth() }/${deadline.getFullYear()}`;
                                                    setEditData({ ...editData, deadline: deadlineFormatted });
                                                }
                                            }}
                                        />
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </Table>
                </Card>
            </Col>
        </>
    );
}

export default SD_detail;
