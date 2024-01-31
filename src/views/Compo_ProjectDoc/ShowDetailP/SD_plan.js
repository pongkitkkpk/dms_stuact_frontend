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

function SD_plan() {
    return (
        <>
            <Col md="9">
                <Card>
                    <Table striped="columns">
                        <thead>
                            <tr>
                                <th>แผนการดำเนินงาน</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            <tr>
                                <td>กิจกรรมที่ 1</td>
                                <td>หัวข้อ ฐการประชุมครั้งที่ 1 (รูปแบบออนไซต์)ฐ
                                    <br/>
                                    18/4/2566 - 21/4/2566
                                </td>
                                <td><br/>ผู้รับผิดชอบ  นายMark</td>
                            </tr>

                        </tbody>
                    </Table>
                </Card>
            </Col>
        </>
    );
}
export default SD_plan