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
function CSD_person() {
    // ********************************************** ผู้บริหาร *********************************************
    const [executiveType1Name, setExecutiveType1Name] = useState('');
    const [executiveType1Number, setExecutiveType1Number] = useState('');
    const [executiveType2Name, setExecutiveType2Name] = useState('');
    const [executiveType2Number, setExecutiveType2Number] = useState('');
    const [executiveType3Name, setExecutiveType3Name] = useState('');
    const [executiveType3Number, setExecutiveType3Number] = useState('');
    const [executiveType4Name, setExecutiveType4Name] = useState('');
    const [executiveType4Number, setExecutiveType4Number] = useState('');
    const [executiveType5Name, setExecutiveType5Name] = useState('');
    const [executiveType5Number, setExecutiveType5Number] = useState('');

    const [executiveTypeCount, setExecutiveTypeCount] = useState(1);
    const increaseExecutiveTypeCount = () => {
        if (executiveTypeCount < 5) {
            setExecutiveTypeCount(executiveTypeCount + 1);
        }
    };
    const decreaseExecutiveTypeCount = () => {
        if (executiveTypeCount > 1) {
            setExecutiveTypeCount(executiveTypeCount - 1);
            switch (executiveTypeCount) {
                case 5:
                    setExecutiveType5Number(0);
                    break;
                case 4:
                    setExecutiveType4Number(0);
                    break;
                case 3:
                    setExecutiveType3Number(0);
                    break;
                case 2:
                    setExecutiveType2Number(0);
                    break;
                case 1:
                    setExecutiveType1Number(0);
                    break;
                default:
                // Handle other cases if needed
            }
        }
    };
    const totalExecutiveCount = Number(executiveType1Number) + Number(executiveType2Number) + Number(executiveType3Number) + Number(executiveType4Number) + Number(executiveType5Number);

    // ********************************************** ผู้บริหาร *********************************************

    // ********************************************** คณาจารย์ / บุคลากร *********************************************
    const [professorType1Name, setProfessorType1Name] = useState('');
    const [professorType1Number, setProfessorType1Number] = useState('');
    const [professorType2Name, setProfessorType2Name] = useState('');
    const [professorType2Number, setProfessorType2Number] = useState('');
    const [professorType3Name, setProfessorType3Name] = useState('');
    const [professorType3Number, setProfessorType3Number] = useState('');
    const [professorType4Name, setProfessorType4Name] = useState('');
    const [professorType4Number, setProfessorType4Number] = useState('');
    const [professorType5Name, setProfessorType5Name] = useState('');
    const [professorType5Number, setProfessorType5Number] = useState('');

    const [professorTypeCount, setProfessorTypeCount] = useState(1);
    const increaseProfessorTypeCount = () => {
        if (professorTypeCount < 5) {
            setProfessorTypeCount(professorTypeCount + 1);
        }
    };
    const decreaseProfessorTypeCount = () => {
        if (professorTypeCount > 1) {
            setProfessorTypeCount(professorTypeCount - 1);
            // Reset corresponding professorTypeNumber state variables to 0
            switch (professorTypeCount) {
                case 5:
                    setProfessorType5Number(0);
                    break;
                case 4:
                    setProfessorType4Number(0);
                    break;
                case 3:
                    setProfessorType3Number(0);
                    break;
                case 2:
                    setProfessorType2Number(0);
                    break;
                case 1:
                    setProfessorType1Number(0);
                    break;
                default:
                    // Handle other cases if needed
            }
        }
    };
    
    const totalProfessorCount = Number(professorType1Number) + Number(professorType2Number) + Number(professorType3Number) + Number(professorType4Number) + Number(professorType5Number);

    // ********************************************** คณาจารย์ / บุคลากร *********************************************

    // ********************************************** นักศึกษา *********************************************

    const [studentType1Name, setStudentType1Name] = useState('');
    const [studentType1Number, setStudentType1Number] = useState('');
    const [studentType2Name, setStudentType2Name] = useState('');
    const [studentType2Number, setStudentType2Number] = useState('');
    const [studentType3Name, setStudentType3Name] = useState('');
    const [studentType3Number, setStudentType3Number] = useState('');
    const [studentType4Name, setStudentType4Name] = useState('');
    const [studentType4Number, setStudentType4Number] = useState('');
    const [studentType5Name, setStudentType5Name] = useState('');
    const [studentType5Number, setStudentType5Number] = useState('');

    const [studentTypeCount, setStudentTypeCount] = useState(1);
    const increaseStudentTypeCount = () => {
        if (studentTypeCount < 5) {
            setStudentTypeCount(studentTypeCount + 1);
        }
    };
    const decreaseStudentTypeCount = () => {
        if (studentTypeCount > 1) {
            setStudentTypeCount(studentTypeCount - 1);
            // Reset corresponding studentTypeNumber state variables to 0
            switch (studentTypeCount) {
                case 5:
                    setStudentType5Number(0);
                    break;
                case 4:
                    setStudentType4Number(0);
                    break;
                case 3:
                    setStudentType3Number(0);
                    break;
                case 2:
                    setStudentType2Number(0);
                    break;
                case 1:
                    setStudentType1Number(0);
                    break;
                default:
                    // Handle other cases if needed
            }
        }
    };
    
    const totalStudentCount = Number(studentType1Number) + Number(studentType2Number) + Number(studentType3Number) + Number(studentType4Number) + Number(studentType5Number);

    // ********************************************** นักศึกษา *********************************************

    // ********************************************** วิทยากร *********************************************


    // ********************************************** วิทยากร *********************************************

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
                                    <label>ผู้บริหาร จำนวน {totalExecutiveCount} คน</label>

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
                                                            type="text"
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
                                    <label>คณาจารย์ / บุคลากร จำนวน {totalProfessorCount} คน</label>
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
                                                            type="text"
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
                                    <label>นักศึกษา จำนวน  {totalStudentCount}   คน</label>
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
                                                            type="text"
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
                                        <Button variant="primary"className="ml-5 mb-3"  onClick={increaseStudentTypeCount}>
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

                        </tbody>
                    </Table>
                    <Button
                        // onClick={addBasicProject}
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
export default CSD_person