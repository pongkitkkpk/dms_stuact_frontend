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

function SD_locationtime({ id_project }) {
    const [location1, setLocation1] = useState('');
    const [location2, setLocation2] = useState('');
    const [location3, setLocation3] = useState('');
    const [location4, setLocation4] = useState('');
    const [location5, setLocation5] = useState('');
    const [start_prepare, setStartPrepare] = useState('');
    const [end_prepare, setEndPrepare] = useState('');
    const [start_event, setStartEvent] = useState('');
    const [end_event, setEndEvent] = useState('');
    const [deadline, setDeadLine] = useState('');
    const [created_at, setCreated_At] = useState()



    const [originalData, setOriginalData] = useState({});
    const [editData, setEditData] = useState({});
    const [isEditMode, setIsEditMode] = useState(false);
    const [showdeadline, setShowDeadLine] = useState('');
    const getProjectData = () => {
        Axios.get(`http://localhost:3001/student/project/getidproject/${id_project}`).then((response) => {
            setOriginalData(response.data[0]);
            setEditData(response.data[0]);
            setLocation1(response.data[0].location1)
            setLocation2(response.data[0].location2)
            setLocation3(response.data[0].location3)
            setLocation4(response.data[0].location4)
            setLocation5(response.data[0].location5)
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
    useEffect(() => {
        if (editData.end_event) {
            const endReportDate = new Date(editData.end_event);
            endReportDate.setDate(endReportDate.getDate() + 30);

            const day = endReportDate.getDate().toString().padStart(2, '0');
            const month = (endReportDate.getMonth() + 1).toString().padStart(2, '0');
            const year = endReportDate.getFullYear();

            setDeadLine(`${year}-${month}-${day}`);
            setShowDeadLine(`${day}/${month}/${year}`);
        }
    }, [editData.end_event]);

    useEffect(()=>{
        setEditData({ ...editData, deadline: deadline });
    },[deadline])

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
                                        <li>
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder={`สถานที่จัดโครงการ ${4}`}
                                                value={isEditMode ? editData.location4 : location4}
                                                readOnly={!isEditMode}
                                                onChange={(event) => {
                                                    setEditData({ ...editData, location4: event.target.value });
                                                }}
                                            />
                                        </li>
                                        <li>
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder={`สถานที่จัดโครงการ ${5}`}
                                                value={isEditMode ? editData.location5 : location5}
                                                readOnly={!isEditMode}
                                                onChange={(event) => {
                                                    setEditData({ ...editData, location5: event.target.value });
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


                                        <input
                                            type="text"
                                            value={showdeadline}
                                            className="form-control"
                                            readOnly
                                        />
                                    </div>
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

export default SD_locationtime;
