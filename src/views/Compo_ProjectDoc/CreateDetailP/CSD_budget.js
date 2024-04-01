import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
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
import Axios from 'axios';

function CSD_budget({}) {
    
    return (
        <>
            {/* วนค่าจากdatabase  */}
            <Col md="9">
                <Card>
                    <Table striped="columns">
                        <thead>
                            <tr>
                                <th>งบประมาณของโครงการ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* ชื่อโครงการ */}
                            <tr style={{ backgroundColor: "white" }}>
                                <td className="head-side-td">
                                    ชื่อโครงการ
                                </td>
                                <td style={{ verticalAlign: "middle" }}>
                                    <Form.Control
                                        size="sm"
                                        type="text"
                                        placeholder="ชื่อโครงการ"
                                       
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
                                      
                                        disabled
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
                                        
                                        disabled
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
                                        
                                        disabled
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
                                                       
                                                    />
                                                </td>
                                                {/* เบอร์ คนที่ 1 */}
                                                <td style={{ verticalAlign: "middle" }}>
                                                    <Form.Control
                                                        size="sm"
                                                        type="text"
                                                        placeholder="เบอร์ติดต่อ ผู้รับผิดชอบโครงการ คนที่ 1"
                                                     
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
                                                      
                                                    />
                                                </td>
                                                {/* เบอร์ คนที่ 2 */}
                                                <td style={{ verticalAlign: "middle" }}>
                                                    <Form.Control
                                                        size="sm"
                                                        type="text"
                                                        placeholder="เบอร์ติดต่อ ผู้รับผิดชอบโครงการ คนที่ 2"
                                                       
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
                                                       
                                                    />
                                                </td>
                                                {/* เบอร์ คนที่ 3 */}
                                                <td style={{ verticalAlign: "middle" }}>
                                                    <Form.Control
                                                        size="sm"
                                                        type="text"
                                                        placeholder="เบอร์ติดต่อ ผู้รับผิดชอบโครงการ คนที่ 3"
                                                       
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>

                                    </Table>
                                </td>
                            </tr>
                            {/* อารจารย์ผู้ดูแลโครงการ */}
                            {/* <tr >
                                <td className='head-side-td'>อารจารย์ผู้ดูแลโครงการ<p className='detail-prodoc'>กรณีที่ผู้ดูแลโครงการไม่ใช่อาจารย์ที่ปรึกษา</p></td>
                                <td style={{ verticalAlign: "middle" }}>
                                    <Form.Control
                                        size="sm"
                                        type="text"
                                        placeholder="ชื่ออาจารย์ผู้ดูแลโครงการ"
                                        onChange={(event) => {
                                            setAdvisorName(event.target.value)
                                        }}
                                    />
                                </td>
                            </tr> */}
                           

                        </tbody>
                    </Table>
                    <div>

                        <Button type="submit" variant="info">อัพขึ้นสู่ระบบ</Button>
                    </div>
                </Card>
            </Col>
        </>
    );
}
export default CSD_budget