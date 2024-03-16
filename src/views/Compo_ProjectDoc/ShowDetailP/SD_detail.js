import React, { useState, useEffect } from 'react';
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

    const [originalData, setOriginalData] = useState({});
    const [editData, setEditData] = useState({});
    const [isEditMode, setIsEditMode] = useState(false);

    const getProjectData = () => {
        Axios.get(`http://localhost:3001/projects/${id_project}`).then((response) => {
            setOriginalData(response.data);
            setEditData(response.data);
            setId_student(response.data[0].id_student)
            setProjectName(response.data[0].project_name);
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
        alert("Do you want to save changes?");
    };

    const handleBackClick = () => {
        setIsEditMode(false);
        // Reset editData to originalData
        setEditData(originalData);
    };
// รอแก้
    // useEffect(() => {
    //     console.log("ori", originalData);
    //     console.log("edit", editData);
    // }, [originalData, editData]);

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
                    <Table striped="columns">
                        <thead>
                            <tr>
                                <th>ข้อมูลพื้นฐานโครงการ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ backgroundColor: "white" }}>
                                <td className="head-side-td">
                                    ชื่อโครงการ
                                </td>
                                <td style={{ verticalAlign: "middle" }}>
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
                        </tbody>
                    </Table>
                </Card>
            </Col>
        </>
    );
}

export default SD_detail;
