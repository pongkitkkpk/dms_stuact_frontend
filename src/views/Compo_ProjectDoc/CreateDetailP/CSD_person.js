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
    const [studentType1Name,setStudentType1Name]= useState('');
    const [studentType1Number,setStudentType1Number]= useState('');
    const [studentType2Name,setStudentType2Name]= useState('');
    const [studentType2Number,setStudentType2Number]= useState('');
    const [studentType3Name,setStudentType3Name]= useState('');
    const [studentType3Number,setStudentType3Number]= useState('');
    const [studentTypeCount, setStudentTypeCount] = useState(1);
    const increaseStudentTypeCount = () => {
        if (studentTypeCount < 5) {
            setStudentTypeCount(studentTypeCount + 1);
        }
    };
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
                            {/* ประเภทนักศึกษา */}
                            <tr style={{ backgroundColor: "white" }}>
                                <td className='head-side-td'>ประเภทนักศึกษา</td>
                                <td className='back-side-td'>
                                    <ul>
                                        {Array.from({ length: studentTypeCount }).map((_, index) => (
                                            <li key={index}>
                                                <Form.Control
                                                    size="lg"
                                                    type="text"
                                                    placeholder={`เพิ่มหลักการและเหตุผล ${index + 1}`}
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
                                                                setStudentType1Name(event.target.value);
                                                                break;
                                                            case 4:
                                                                setStudentType1Name(event.target.value);
                                                                break;
                                                            default:
                                                            // Handle other cases if needed
                                                        }
                                                    }}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                    {studentTypeCount < 5 && (
                                        <Button variant="primary" onClick={increaseStudentTypeCount}>
                                            เพิ่มหลักการและเหตุผล
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