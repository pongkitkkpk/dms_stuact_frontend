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
    const [principles_and_reasons1, setPrinciplesAndReasons1] = useState('');
    const [principles_and_reasons2, setPrinciplesAndReasons2] = useState('');
    const [principles_and_reasons3, setPrinciplesAndReasons3] = useState('');
    const [principles_and_reasons4, setPrinciplesAndReasons4] = useState('');
    const [principles_and_reasons5, setPrinciplesAndReasons5] = useState('');
    const [objective1, setObjective1] = useState('');
    const [objective2, setObjective2] = useState('');
    const [objective3, setObjective3] = useState('');
    const [objective4, setObjective4] = useState('');
    const [objective5, setObjective5] = useState('');
    const [project_type1, setProjectType1] = useState('');
    const [project_type2, setProjectType2] = useState('');
    const [project_type3, setProjectType3] = useState('');
    const [project_type4, setProjectType4] = useState('');
    const [project_type5, setProjectType5] = useState('');
    const [is_newproject, setIsNewProject] = useState(false);
    const [is_continueproject, setIsContinueProject] = useState(false);
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
            setPrinciplesAndReasons1(response.data[0].principles_and_reasons1)
            setPrinciplesAndReasons2(response.data[0].principles_and_reasons2)
            setPrinciplesAndReasons3(response.data[0].principles_and_reasons3)
            setPrinciplesAndReasons4(response.data[0].principles_and_reasons4)
            setPrinciplesAndReasons5(response.data[0].principles_and_reasons5)
            setObjective1(response.data[0].objective1)
            setObjective2(response.data[0].objective2)
            setObjective3(response.data[0].objective3)
            setObjective4(response.data[0].objective4)
            setObjective5(response.data[0].objective5)
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
                                        <li >
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder={`วัตถุประสงค์ ${4}`}
                                                value={isEditMode ? editData.objective4 : objective3}
                                                readOnly={!isEditMode}
                                                onChange={(event) => {
                                                    setEditData({ ...editData, objective4: event.target.value });
                                                }}
                                            />
                                        </li>
                                        <li >
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder={`วัตถุประสงค์ ${5}`}
                                                value={isEditMode ? editData.objective5 : objective3}
                                                readOnly={!isEditMode}
                                                onChange={(event) => {
                                                    setEditData({ ...editData, objective5: event.target.value });
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
