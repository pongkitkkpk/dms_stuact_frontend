import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import Axios from 'axios';
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
    Table
} from "react-bootstrap";

function SD_detail({ id_project }) {

    const storedUserData = sessionStorage.getItem("user");
    const storedUser = storedUserData ? JSON.parse(storedUserData) : {};
    const studentuser = storedUser.username;
    const strcodebooksomeoutyear = storedUser.codebooksomeoutyear

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

    const [is_1side, setIs_1side] = useState(false);
    const [is_2side, setIs_2side] = useState(false);
    const [is_3side, setIs_3side] = useState(false);
    const [is_4side, setIs_4side] = useState(false);
    const [is_5side, setIs_5side] = useState(false);

    const [originalData, setOriginalData] = useState({});
    const [editData, setEditData] = useState({});
    const [isEditMode, setIsEditMode] = useState(false);
    const [showdeadline, setShowDeadLine] = useState('');
    const getProjectData = () => {
        Axios.get(`http://localhost:3001/student/project/getidproject/${id_project}`).then((response) => {
            setOriginalData(response.data[0]);
            setEditData(response.data[0]);
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
            setIs_1side(response.data[0].is_1side)
            setIs_2side(response.data[0].is_2side)
            setIs_3side(response.data[0].is_3side)
            setIs_4side(response.data[0].is_4side)
            setIs_5side(response.data[0].is_5side)
        });
    };

    useEffect(() => {
        getProjectData();
    }, [id_project]);


    const handleEditClick = () => {
        setIsEditMode(true);
    };

    const handleSaveClick = () => {
        // Save data here
        setIsEditMode(false);
        if (window.confirm("Do you want to save changes?")) {

            Axios.put(`http://localhost:3001/student/project/edit/${id_project}`, editData)
                .then(response => {
                    console.log("Data saved successfully:", response.data);
                    window.location.reload();
                })
                .catch(error => {
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
                            ข้อมูลพื้นฐานโครงการ
                        </div>
                    </CardHeader>
                    <CardBody>
                        <Table striped="columns">
                            <tbody>
                                {/* ชื่อโครงการ */}
                                <tr style={{ backgroundColor: "white" }}>
                                    <td className='head-side-td' style={{ verticalAlign: "top" }}>
                                        <div>ชื่อโครงการ</div>
                                    </td>
                                    <td style={{ verticalAlign: "middle" }}>
                                        <Form.Control
                                            className="font-form-control"
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
                                    <td
                                        className="head-side-td-swp"
                                        style={{ verticalAlign: "top" }}
                                    >
                                        <div>หน่วยงานที่รับผิดชอบ</div>
                                    </td>
                                    <td style={{ verticalAlign: "middle" }}>
                                        <Form.Control
                                            className="font-form-control"
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
                                    <td className="head-side-td" style={{ verticalAlign: "top" }}>
                                        <div>ปีการศึกษา</div>
                                    </td>
                                    <td style={{ verticalAlign: "middle" }}>
                                        <Form.Control
                                            className="font-form-control"
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
                                {/* 5 ด้าน */}
                                <tr style={{ backgroundColor: "white" }}>
                                    <td
                                        className="head-side-td-swp"
                                        style={{ verticalAlign: "top" }}
                                    >
                                        <div>
                                            แผนยุทธศาสตร์
                                        </div>
                                        <div>การพัฒนา</div>
                                    </td>
                                    <td style={{ verticalAlign: "middle" }}>
                                        <label style={{ marginLeft: "10px", fontSize: "14px", color: "black" }}>
                                            <input
                                                type="checkbox"
                                                value="1"
                                                checked={isEditMode ? editData.is_1side : is_1side}
                                                readOnly={!isEditMode}
                                                disabled={!isEditMode}
                                                onChange={(event) => {
                                                    setEditData({ ...editData, is_1side: !editData.is_1side });
                                                }}

                                            />
                                            {`    `}ด้านวิชาการที่ส่งเสริมคุณลักษณะบัณฑิตที่พึงประสงค์
                                        </label>
                                        <br />
                                        <label style={{ marginLeft: "10px", fontSize: "14px", color: "black" }}>
                                            <input
                                                type="checkbox"
                                                value="1"
                                                checked={isEditMode ? editData.is_2side : is_2side}
                                                readOnly={!isEditMode}
                                                disabled={!isEditMode}
                                                onChange={(event) => {
                                                    setEditData({ ...editData, is_2side: !editData.is_2side });
                                                }}

                                            />

                                            {`    `}ด้านกีฬาหรือการส่งเสริมสุขภาพ
                                        </label>
                                        <br />
                                        <label style={{ marginLeft: "10px", fontSize: "14px", color: "black" }}>
                                            <input
                                                type="checkbox"
                                                value="1"
                                                checked={isEditMode ? editData.is_3side : is_3side}
                                                readOnly={!isEditMode}
                                                disabled={!isEditMode}
                                                onChange={(event) => {
                                                    setEditData({ ...editData, is_3side: !editData.is_3side });
                                                }}

                                            />

                                            {`    `}ด้านบำเพ็ญประโยชน์หรือรักษาสิ่งแวดล้อม
                                        </label>
                                        <br />
                                        <label style={{ marginLeft: "10px", fontSize: "14px", color: "black" }}>
                                            <input
                                                type="checkbox"
                                                value="1"
                                                checked={isEditMode ? editData.is_4side : is_4side}
                                                readOnly={!isEditMode}
                                                disabled={!isEditMode}
                                                onChange={(event) => {
                                                    setEditData({ ...editData, is_4side: !editData.is_4side });
                                                }}
                                            />

                                            {`    `}ด้านเสริมสร้างคุณธรรมและจริยธรรม
                                        </label>
                                        <br />
                                        <label style={{ marginLeft: "10px", fontSize: "14px", color: "black" }}>
                                            <input
                                                type="checkbox"
                                                value="1"
                                                checked={isEditMode ? editData.is_5side : is_5side}
                                                readOnly={!isEditMode}
                                                disabled={!isEditMode}
                                                onChange={(event) => {
                                                    setEditData({ ...editData, is_5side: !editData.is_5side });
                                                }}

                                            />
                                            {`    `}ด้านส่งเสริมศิลปะและวัฒนธรรม
                                        </label>
                                        {/* Add more checkboxes as needed */}
                                    </td>
                                </tr>
                            </tbody>

                        </Table>
                    </CardBody>
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
