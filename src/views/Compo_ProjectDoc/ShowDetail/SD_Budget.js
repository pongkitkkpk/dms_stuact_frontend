import React, { useState } from 'react';

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

function SD_Budget() {
    return (
        <>
            <Col md="9">
                <Card>
                    <Table striped="columns">
                        <thead>
                            <tr>
                                <th>ข้อมูลงบประมาณ</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <div>
                                
                            </div>
                            <tr>
                                <td className='head-side-td'>ชื่อโครงการ</td>
                                <td className='back-side-td'>Mark</td>
                            </tr>
                            <tr>
                                <td className='head-side-td'>หน่วยงานที่รับผิดชอบ</td>
                                <td className='back-side-td'>Mark</td>
                            </tr>
                            <tr>
                                <td className='head-side-td'>ปีการศึกษา</td>
                                <td className='back-side-td'>Mark</td>
                            </tr>
                            <tr>
                                <td className='head-side-td'>ที่ปรึกษา<p className='detail-prodoc'>ข้อมูลอัตโนมัติจากหน่วยงานที่รับผิดชอบ</p></td>
                                <td className='back-side-td'>Mark</td>
                            </tr>
                            <tr>
                                <td className='head-side-td'>ประธานโครงการ</td>
                                <td className='back-side-td'>Mark</td>
                            </tr>
                            <tr>
                                <td className='head-side-td'>ผู้ประสานงานโครงการ</td>
                                <td className='back-side-td'>
                                    <Table striped="columns">
                                        <thead>
                                            <tr>
                                                <th>ชื่อ-สกุล</th>
                                                <th>โทรศัพท์</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Mark</td>
                                                <td>789456</td>
                                            </tr>
                                            <tr>
                                                <td>Mark</td>
                                                <td>789456</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </td>
                            </tr>
                            <tr>
                                <td className='head-side-td'>อารจารย์ผู้ดูแลโครงการ<p className='detail-prodoc'>กรณีที่ผู้ดูแลโครงการไม่ใช่อาจารย์ที่ปรึกษา</p></td>
                                <td className='back-side-td'>Mark</td>
                            </tr>
                            <tr>
                                <td className='head-side-td'>หลักการและเหตุผล</td>
                                <td className='back-side-td'>Mark</td>
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
export default SD_Budget