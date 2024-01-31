import React, { useState } from 'react';

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

function CSD_detail() {
    const divition = "สภา"
    const years = "ปีการศึกษา 2566"
    const ad_name = "asdfasdfasdf "
    return (
        <>
            {/* วนค่าจากdatabase  */}
            <Col md="9">

                <Card>
                    <Table striped="columns">
                        <thead>
                            <tr>
                                <th>ข้อมูลพื้นฐานโครงการ</th>
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
                                        size="lg"
                                        type="text"
                                        placeholder="ชื่อโครงการ"
                                        onChange={(event) => {
                                            // setIdStudent(event.target.value)
                                        }}
                                    />
                                </td>
                            </tr>
                            {/* หน่วยงานที่รับผิดชอบ db */}
                            <tr style={{ backgroundColor: "white" }}>
                                <td className='head-side-td'>หน่วยงานที่รับผิดชอบ</td>
                                <td style={{ verticalAlign: "middle" }}>
                                    <Form.Control
                                        size="lg"
                                        type="text"
                                        placeholder="Enter ID Code"
                                        value={divition}
                                        disabled
                                    />
                                </td>
                            </tr>
                            {/* ปีการศึกษา db */}
                            <tr style={{ backgroundColor: "white" }}>
                                <td className='head-side-td'>ปีการศึกษา</td>
                                <td style={{ verticalAlign: "middle" }}>
                                    <Form.Control
                                        size="lg"
                                        type="text"
                                        placeholder="Enter ID Code"
                                        value={years}
                                        disabled
                                    />
                                </td>
                            </tr>
                            {/* ที่อาจารย์ปรึกษา  db */}
                            <tr style={{ backgroundColor: "white" }}>
                                <td className='head-side-td'>อาจารย์ปรึกษา<p className='detail-prodoc'>ข้อมูลอัตโนมัติจากหน่วยงานที่รับผิดชอบ</p></td>
                                <td style={{ verticalAlign: "middle" }}>
                                    <Form.Control
                                        size="lg"
                                        type="text"
                                        placeholder="Enter ID Code"
                                        value={ad_name}
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
                                                        size="lg"
                                                        type="text"
                                                        placeholder="ชื่อ ผู้รับผิดชอบโครงการ คนที่ 1"
                                                        onChange={(event) => {
                                                            // setIdStudent(event.target.value)
                                                        }}
                                                    />
                                                </td>
                                                {/* เบอร์ คนที่ 1 */}
                                                <td style={{ verticalAlign: "middle" }}>
                                                    <Form.Control
                                                        size="lg"
                                                        type="text"
                                                        placeholder="เบอร์ติดต่อ ผู้รับผิดชอบโครงการ คนที่ 1"
                                                        onChange={(event) => {
                                                            // setIdStudent(event.target.value)
                                                        }}
                                                    />
                                                </td>
                                            </tr>
                                            {/* คนที่ 2 */}
                                            <tr>
                                                {/* ชื่อ คนที่ 2 */}
                                                <td style={{ verticalAlign: "middle" }}>
                                                    <Form.Control
                                                        size="lg"
                                                        type="text"
                                                        placeholder="ชื่อ ผู้รับผิดชอบโครงการ คนที่ 2"
                                                        onChange={(event) => {
                                                            // setIdStudent(event.target.value)
                                                        }}
                                                    />
                                                </td>
                                                {/* เบอร์ คนที่ 2 */}
                                                <td style={{ verticalAlign: "middle" }}>
                                                    <Form.Control
                                                        size="lg"
                                                        type="text"
                                                        placeholder="เบอร์ติดต่อ ผู้รับผิดชอบโครงการ คนที่ 2"
                                                        onChange={(event) => {
                                                            // setIdStudent(event.target.value)
                                                        }}
                                                    />
                                                </td>
                                            </tr>
                                            {/* คนที่ 3 */}
                                            <tr style={{ backgroundColor: "white" }}>
                                                {/* ชื่อ คนที่ 3 */}
                                                <td style={{ verticalAlign: "middle" }}>
                                                    <Form.Control
                                                        size="lg"
                                                        type="text"
                                                        placeholder="ชื่อ ผู้รับผิดชอบโครงการ คนที่ 3"
                                                        onChange={(event) => {
                                                            // setIdStudent(event.target.value)
                                                        }}
                                                    />
                                                </td>
                                                {/* เบอร์ คนที่ 3 */}
                                                <td style={{ verticalAlign: "middle" }}>
                                                    <Form.Control
                                                        size="lg"
                                                        type="text"
                                                        placeholder="เบอร์ติดต่อ ผู้รับผิดชอบโครงการ คนที่ 3"
                                                        onChange={(event) => {
                                                            // setIdStudent(event.target.value)
                                                        }}
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>

                                    </Table>
                                </td>
                            </tr>

                            <tr >
                                <td className='head-side-td'>อารจารย์ผู้ดูแลโครงการ<p className='detail-prodoc'>กรณีที่ผู้ดูแลโครงการไม่ใช่อาจารย์ที่ปรึกษา</p></td>
                                <td style={{ verticalAlign: "middle" }}>
                                    <Form.Control
                                        size="lg"
                                        type="text"
                                        placeholder="ชื่ออาจารย์ผู้ดูแลโครงการ"
                                        onChange={(event) => {
                                            // setIdStudent(event.target.value)
                                        }}
                                    />
                                </td>
                            </tr>
                            
                            <tr style={{ backgroundColor: "white" }}>
                                <td className='head-side-td'>หลักการและเหตุผล</td>
                                <td style={{ verticalAlign: "middle" }}>
                                    <Form.Control
                                        size="lg"
                                        type="text"
                                        placeholder="ชื่อโครงการ"
                                        onChange={(event) => {
                                            // setIdStudent(event.target.value)
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className='head-side-td'>วัตถุประสงค์</td>
                                <td className='back-side-td'>Mark</td>
                            </tr>
                            <tr>
                                <td className='head-side-td'>สถานที่จัดโครงการ</td>
                                <td className='back-side-td'>Mark</td>
                            </tr>
                            <tr>
                                <td className='head-side-td'>วันจัดโครงการ<p className='detail-prodoc'>กรณีจัดโครงการเพียงหนึ่งวันให้เลือกวันเริ่มต้นและวันสิ้นสุดเป็นวันเดียวกัน</p></td>
                                <td className='back-side-td'>Mark</td>
                            </tr>
                            <tr>
                                <td className='head-side-td'>ผู้เข้าร่วมโครงการ</td>
                                <td className='back-side-td'>
                                    <li>Mark</li>
                                    <li>Mark</li>
                                    <li>Mark</li>
                                </td>
                            </tr>
                            <tr>
                                <td className='head-side-td'>สถานที่จัดโครงการ</td>
                                <td className='back-side-td'>Mark</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>
            </Col>
        </>
    );
}
export default CSD_detail