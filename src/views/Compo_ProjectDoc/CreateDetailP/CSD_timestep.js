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

function CSD_timestep({ id_projects,startMonth }) {
   

    return (
        <>
            <Col md="9">

                <Card>
                    <Table striped="columns">
                        <thead>
                            <tr>
                                <th>ข้อมูลผู้เข้าร่วมโครงการ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* ผู้บริหาร executive */}
                            <tr>
                                <td className='head-side-td'>ประเภทผู้บริหาร</td>
                                <td className='back-side-td'>
                                    <label>ผู้บริหาร จำนวน {grandTotalExecutive} คน</label>

                                    <Table striped="columns">
                                        <thead>
                                            <tr>
                                                <th>ประเภทของผู้บริหาร</th>
                                                <th>จำนวน</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Array.from({ length: executiveTypeCount }).map((_, index) => (
                                                <tr style={{ backgroundColor: "white" }}>
                                                    {/* ประเภทที่ i ของผู้บริหาร  */}
                                                    <td style={{ verticalAlign: "middle" }}>
                                                        <Form.Control
                                                            size="sm"
                                                            type="text"
                                                            placeholder={`ผู้บริหารประเภทที่  ${index + 1}`}
                                                            onChange={(event) => {
                                                                switch (index) {
                                                                    case 0:
                                                                        setExecutiveType1Name(event.target.value);
                                                                        break;
                                                                    case 1:
                                                                        setExecutiveType2Name(event.target.value);
                                                                        break;
                                                                    case 2:
                                                                        setExecutiveType3Name(event.target.value);
                                                                        break;
                                                                    case 3:
                                                                        setExecutiveType4Name(event.target.value);
                                                                        break;
                                                                    case 4:
                                                                        setExecutiveType5Name(event.target.value);
                                                                        break;
                                                                    default:
                                                                    // Handle other cases if needed
                                                                }

                                                            }}
                                                        />
                                                    </td>
                                                    {/* จำนวนผู้บริหารของ ประเภทที่ i */}
                                                    <td style={{ verticalAlign: "middle", width: "30%" }}>
                                                        <Form.Control
                                                            size="sm"
                                                            type="number"
                                                            placeholder={`จำนวนผู้บริหาร ประเภทที่  ${index + 1}`}
                                                            onChange={(event) => {
                                                                switch (index) {
                                                                    case 0:
                                                                        setExecutiveType1Number(event.target.value);
                                                                        break;
                                                                    case 1:
                                                                        setExecutiveType2Number(event.target.value);
                                                                        break;
                                                                    case 2:
                                                                        setExecutiveType3Number(event.target.value);
                                                                        break;
                                                                    case 3:
                                                                        setExecutiveType4Number(event.target.value);
                                                                        break;
                                                                    case 4:
                                                                        setExecutiveType5Number(event.target.value);
                                                                        break;
                                                                    default:
                                                                    // Handle other cases if needed
                                                                }

                                                            }}
                                                        />
                                                    </td>
                                                </tr>

                                            ))}
                                        </tbody>
                                    </Table>
                                    {executiveTypeCount < 5 && (
                                        <Button variant="primary" className="ml-5 mb-3" onClick={increaseExecutiveTypeCount}>
                                            เพิ่มประเภทผู้บริหาร
                                        </Button>

                                    )}
                                    {executiveTypeCount > 1 && (
                                        <Button variant="danger" className="ml-5 mb-3" onClick={decreaseExecutiveTypeCount}>
                                            ลดประเภทผู้บริหาร
                                        </Button>
                                    )}

                                </td>
                            </tr>
                            {/* คณาจารย์ / บุคลากร  / */}
                            <tr>
                                <td className='head-side-td'>ประเภท คณาจารย์ / บุคลากร</td>
                                <td className='back-side-td'>
                                    <label>คณาจารย์ / บุคลากร จำนวน {grandTotalProfessor} คน</label>
                                    <Table striped="columns">
                                        <thead>
                                            <tr>
                                                <th>ประเภทของคณาจารย์ / บุคลากร</th>
                                                <th>จำนวน</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Array.from({ length: professorTypeCount }).map((_, index) => (
                                                <tr style={{ backgroundColor: "white" }} key={index}>
                                                    {/* ประเภทที่ i ของคณาจารย์ / บุคลากร  */}
                                                    <td style={{ verticalAlign: "middle" }}>
                                                        <Form.Control
                                                            size="sm"
                                                            type="text"
                                                            placeholder={`คณาจารย์ / บุคลากรประเภทที่ ${index + 1}`}
                                                            onChange={(event) => {
                                                                switch (index) {
                                                                    case 0:
                                                                        setProfessorType1Name(event.target.value);
                                                                        break;
                                                                    case 1:
                                                                        setProfessorType2Name(event.target.value);
                                                                        break;
                                                                    case 2:
                                                                        setProfessorType3Name(event.target.value);
                                                                        break;
                                                                    case 3:
                                                                        setProfessorType4Name(event.target.value);
                                                                        break;
                                                                    case 4:
                                                                        setProfessorType5Name(event.target.value);
                                                                        break;
                                                                    default:
                                                                    // Handle other cases if needed
                                                                }
                                                            }}
                                                        />
                                                    </td>
                                                    {/* จำนวนคณาจารย์ / บุคลากรของ ประเภทที่ i */}
                                                    <td style={{ verticalAlign: "middle", width: "30%" }}>
                                                        <Form.Control
                                                            size="sm"
                                                            type="number"
                                                            placeholder={`จำนวนคณาจารย์ / บุคลากร ประเภทที่ ${index + 1}`}
                                                            onChange={(event) => {
                                                                switch (index) {
                                                                    case 0:
                                                                        setProfessorType1Number(event.target.value);
                                                                        break;
                                                                    case 1:
                                                                        setProfessorType2Number(event.target.value);
                                                                        break;
                                                                    case 2:
                                                                        setProfessorType3Number(event.target.value);
                                                                        break;
                                                                    case 3:
                                                                        setProfessorType4Number(event.target.value);
                                                                        break;
                                                                    case 4:
                                                                        setProfessorType5Number(event.target.value);
                                                                        break;
                                                                    default:
                                                                    // Handle other cases if needed
                                                                }
                                                            }}
                                                        />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                    {professorTypeCount < 5 && (
                                        <Button variant="primary" className="ml-5 mb-3" onClick={increaseProfessorTypeCount}>
                                            เพิ่มประเภทคณาจารย์ / บุคลากร
                                        </Button>
                                    )}
                                    {professorTypeCount > 1 && (
                                        <Button variant="danger" className="ml-5 mb-3" onClick={decreaseProfessorTypeCount}>
                                            ลดประเภทคณาจารย์ / บุคลากร
                                        </Button>
                                    )}
                                </td>
                            </tr>
                            {/* ประเภทนักศึกษา */}
                            <tr>
                                <td className='head-side-td'>ประเภทนักศึกษา</td>
                                <td className='back-side-td'>
                                    <label>นักศึกษา จำนวน  {grandTotalStudent}   คน</label>
                                    <Table striped="columns">
                                        <thead>
                                            <tr>
                                                <th colSpan={2}>ประเภทนักศึกษา</th>
                                                <th>จำนวน</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Array.from({ length: studentTypeCount }).map((_, index) => (
                                                <tr style={{ backgroundColor: "white" }}>
                                                    {/* ประเภทที่ i ของนักศึกษา  */}
                                                    <td colSpan={2} style={{ verticalAlign: "middle" }}>
                                                        <Form.Control
                                                            size="sm"
                                                            type="text"
                                                            placeholder={`นักศึกษาประเภทที่  ${index + 1}`}
                                                            onChange={(event) => {
                                                                switch (index) {
                                                                    case 0:
                                                                        setStudentType1Name(event.target.value);
                                                                        break;
                                                                    case 1:
                                                                        setStudentType2Name(event.target.value);
                                                                        break;
                                                                    case 2:
                                                                        setStudentType3Name(event.target.value);
                                                                        break;
                                                                    case 3:
                                                                        setStudentType4Name(event.target.value);
                                                                        break;
                                                                    case 4:
                                                                        setStudentType5Name(event.target.value);
                                                                        break;
                                                                    default:
                                                                    // Handle other cases if needed
                                                                }

                                                            }}
                                                        />
                                                    </td>
                                                    {/* จำนวนนักศึกษาของ ประเภทที่ i */}
                                                    <td style={{ verticalAlign: "middle", width: "30%" }}>
                                                        <Form.Control
                                                            size="sm"
                                                            type="number"
                                                            placeholder={`จำนวนนักศึกษาประเภทที่  ${index + 1}`}
                                                            onChange={(event) => {
                                                                switch (index) {
                                                                    case 0:
                                                                        setStudentType1Number(event.target.value);
                                                                        break;
                                                                    case 1:
                                                                        setStudentType2Number(event.target.value);
                                                                        break;
                                                                    case 2:
                                                                        setStudentType3Number(event.target.value);
                                                                        break;
                                                                    case 3:
                                                                        setStudentType4Number(event.target.value);
                                                                        break;
                                                                    case 4:
                                                                        setStudentType5Number(event.target.value);
                                                                        break;
                                                                    default:
                                                                    // Handle other cases if needed
                                                                }

                                                            }}
                                                        />
                                                    </td>
                                                </tr>

                                            ))}
                                        </tbody>
                                    </Table>
                                    {studentTypeCount < 5 && (
                                        <Button variant="primary" className="ml-5 mb-3" onClick={increaseStudentTypeCount}>
                                            เพิ่มประเภทนักศึกษา
                                        </Button>
                                    )}
                                    {studentTypeCount > 1 && (
                                        <Button variant="danger" className="ml-5 mb-3" onClick={decreaseStudentTypeCount}>
                                            ลดประเภทนักศึกษา
                                        </Button>
                                    )}
                                </td>
                            </tr>
                            {/* ประเภทวิทยากร */}
                            <tr>
                                <td className='head-side-td'>ประเภทวิทยากร</td>
                                <td className='back-side-td'>
                                    <label>วิทยากร จำนวน  {grandTotalExpert}   คน</label>
                                    <Table striped="columns">
                                        <thead>
                                            <tr>
                                                <th colSpan={2}>ประเภทวิทยากร</th>
                                                <th>จำนวน</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Array.from({ length: expertTypeCount }).map((_, index) => (
                                                <tr style={{ backgroundColor: "white" }}>
                                                    {/* ประเภทที่ i ของวิทยากร  */}
                                                    <td colSpan={2} style={{ verticalAlign: "middle" }}>
                                                        <Form.Control
                                                            size="sm"
                                                            type="text"
                                                            placeholder={`วิทยากรประเภทที่  ${index + 1}`}
                                                            onChange={(event) => {
                                                                switch (index) {
                                                                    case 0:
                                                                        setExpertType1Name(event.target.value);
                                                                        break;
                                                                    case 1:
                                                                        setExpertType2Name(event.target.value);
                                                                        break;
                                                                    case 2:
                                                                        setExpertType3Name(event.target.value);
                                                                        break;
                                                                    case 3:
                                                                        setExpertType4Name(event.target.value);
                                                                        break;
                                                                    case 4:
                                                                        setExpertType5Name(event.target.value);
                                                                        break;
                                                                    default:
                                                                    // Handle other cases if needed
                                                                }

                                                            }}
                                                        />
                                                    </td>
                                                    {/* จำนวนวิทยากรของ ประเภทที่ i */}
                                                    <td style={{ verticalAlign: "middle", width: "30%" }}>
                                                        <Form.Control
                                                            size="sm"
                                                            type="number"
                                                            placeholder={`จำนวนวิทยากรประเภทที่  ${index + 1}`}
                                                            onChange={(event) => {

                                                                switch (index) {
                                                                    case 0:
                                                                        setExpertType1Number(event.target.value);
                                                                        break;
                                                                    case 1:
                                                                        setExpertType2Number(event.target.value);
                                                                        break;
                                                                    case 2:
                                                                        setExpertType3Number(event.target.value);
                                                                        break;
                                                                    case 3:
                                                                        setExpertType4Number(event.target.value);
                                                                        break;
                                                                    case 4:
                                                                        setExpertType5Number(event.target.value);
                                                                        break;
                                                                    default:
                                                                    // Handle other cases if needed
                                                                }

                                                            }}
                                                        />
                                                    </td>
                                                </tr>

                                            ))}
                                        </tbody>
                                    </Table>
                                    {expertTypeCount < 3 && (
                                        <Button variant="primary" className="ml-5 mb-3" onClick={increaseExpertTypeCount}>
                                            เพิ่มประเภทวิทยากร
                                        </Button>
                                    )}
                                    {expertTypeCount > 1 && (
                                        <Button variant="danger" className="ml-5 mb-3" onClick={decreaseExpertTypeCount}>
                                            ลดประเภทวิทยากร
                                        </Button>
                                    )}
                                </td>
                            </tr>

                        </tbody>
                    </Table>
                    <Button
                        onClick={createPerson}
                        type="submit"
                        variant="info"
                    >
                        Update Profile
                    </Button>
                </Card>
            </Col>
        </>

    );
}
export default CSD_timestep