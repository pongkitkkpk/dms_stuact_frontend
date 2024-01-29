import React, { useState } from 'react';

// react-bootstrap components
import {
    Badge,
    Button,
    Card,
    Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
    Form
} from "react-bootstrap";
import setCode from "./setCode.json"

function TableAdd() {
    // Bangkok Prachin Rayong
    // พอเชื่อม database มอแล้ว จะได้ 
    // name,campus,department
    // year
    const [campus, setCampus] = useState("Prachin");
    return (
        <>
            <Container fluid>
                <Card className="strpied-tabled-with-hover">
                    <Card.Header>
                        <Card.Title as="h4">area เพิ่ม role ของบุคคล(นศ.+กองกิจ+ที่ปรึกษา)</Card.Title>
                        <p className="card-category">
                            Here is a subtitle for this table
                        </p>
                    </Card.Header>
                    <Card.Body>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="IDCode">
                                ID Code :
                            </Form.Label>
                            <Form.Control type="text" placeholder="Enter ID Code" />

                            <p>ตำแหน่งแสดงชื่อ รายละเอียด ของนศ. ชั้นปีการศึกษา วิทยาเขต</p>

                            <Form.Label htmlFor="position" className="form-label">
                                ตำแหน่ง :
                            </Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option value="S">นักศึกษาประสานงาน</option>
                                <option value="SC-P">ประธานสภา</option>
                                <option value="SO-P">นายกองค์การ</option>
                                <option value="C-P">ประธานชมรม</option>
                                <option value="Ad">อาจารย์ที่ปรึกษา</option>
                                <option value="6">บุคลการกองกิจการนักศึกษา</option>
                            </Form.Select>

                            <Form.Label htmlFor="position" className="form-label">
                                ชมรม/หน่วยงาน/องค์กร:
                            </Form.Label>
                            <Form.Select aria-label="Default select example">
                                {setCode.Divison.D04.Agency.map((agencyGroup, index) => {
                                    const campusData = agencyGroup[campus]; // Get data for the selected campus
                                    return (
                                        campusData && (
                                            <optgroup key={index} label={agencyGroup.name}>
                                                {Object.keys(campusData).map((agencyKey) => (
                                                    agencyKey !== 'name' && (
                                                        <option key={agencyKey} value={agencyKey}>
                                                            {`${agencyKey} : ${campusData[agencyKey]}`}
                                                        </option>
                                                    )
                                                ))}
                                            </optgroup>
                                        )
                                    );
                                })}
                            </Form.Select>


                        </Form.Group>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default TableAdd;
