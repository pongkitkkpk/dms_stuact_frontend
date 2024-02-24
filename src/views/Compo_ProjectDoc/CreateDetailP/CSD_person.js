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
    const [studentType4Name,setStudentType4Name]= useState('');
    const [studentType4Number,setStudentType4Number]= useState('');
    const [studentType5Name,setStudentType5Name]= useState('');
    const [studentType5Number,setStudentType5Number]= useState('');
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
                                    <label>จำนวนนักศึกษา   ป   คน</label>
                                    <Table striped="columns">
                                        <thead>
                                            <tr>
                                                <th>ประเภทนักศึกษา</th>
                                                <th>จำนวน</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* ประเภทที่ 1 */}
                                            <tr style={{ backgroundColor: "white" }}>
                                                {/* ประเภทที่ 1 ของนักศึกษา  */}
                                                <td style={{ verticalAlign: "middle" }}>
                                                    <Form.Control
                                                        size="sm"
                                                        type="text"
                                                        placeholder="ประเภทที่ 1 ของนักศึกษา "
                                                        onChange={(event) => {
                                                            setStudentType1Name(event.target.value)
                                                        }}
                                                    />
                                                </td>
                                                {/* จำนวนนักศึกษาของ ประเภทที่ 1 */}
                                                <td style={{ verticalAlign: "middle" }}>
                                                    <Form.Control
                                                        size="sm"
                                                        type="text"
                                                        placeholder="จำนวนนักศึกษาของ ประเภทที่ 1 "
                                                        onChange={(event) => {
                                                            setStudentType1Number(event.target.value)
                                                        }}
                                                    />
                                                </td>
                                            </tr>

                                             {/* ประเภทที่ 2 */}
                                             <tr style={{ backgroundColor: "white" }}>
                                                {/* ประเภทที่ 2 ของนักศึกษา  */}
                                                <td style={{ verticalAlign: "middle" }}>
                                                    <Form.Control
                                                        size="sm"
                                                        type="text"
                                                        placeholder="ประเภทที่ 2 ของนักศึกษา "
                                                        onChange={(event) => {
                                                            setStudentType2Name(event.target.value)
                                                        }}
                                                    />
                                                </td>
                                                {/* จำนวนนักศึกษาของ ประเภทที่ 2 */}
                                                <td style={{ verticalAlign: "middle" }}>
                                                    <Form.Control
                                                        size="sm"
                                                        type="text"
                                                        placeholder="จำนวนนักศึกษาของ ประเภทที่ 2 "
                                                        onChange={(event) => {
                                                            setStudentType2Number(event.target.value)
                                                        }}
                                                    />
                                                </td>
                                            </tr>

                                            {/* ประเภทที่ 3 */}
                                            <tr style={{ backgroundColor: "white" }}>
                                                {/* ประเภทที่ 3 ของนักศึกษา  */}
                                                <td style={{ verticalAlign: "middle" }}>
                                                    <Form.Control
                                                        size="sm"
                                                        type="text"
                                                        placeholder="ประเภทที่ 3 ของนักศึกษา "
                                                        onChange={(event) => {
                                                            setStudentType3Name(event.target.value)
                                                        }}
                                                    />
                                                </td>
                                                {/* จำนวนนักศึกษาของ ประเภทที่ 3 */}
                                                <td style={{ verticalAlign: "middle" }}>
                                                    <Form.Control
                                                        size="sm"
                                                        type="text"
                                                        placeholder="จำนวนนักศึกษาของ ประเภทที่ 3 "
                                                        onChange={(event) => {
                                                            setStudentType3Number(event.target.value)
                                                        }}
                                                    />
                                                </td>
                                            </tr>

                                             {/* ประเภทที่ 4 */}
                                             <tr style={{ backgroundColor: "white" }}>
                                                {/* ประเภทที่ 4 ของนักศึกษา  */}
                                                <td style={{ verticalAlign: "middle" }}>
                                                    <Form.Control
                                                        size="sm"
                                                        type="text"
                                                        placeholder="ประเภทที่ 4 ของนักศึกษา "
                                                        onChange={(event) => {
                                                            setStudentType4Name(event.target.value)
                                                        }}
                                                    />
                                                </td>
                                                {/* จำนวนนักศึกษาของ ประเภทที่ 4 */}
                                                <td style={{ verticalAlign: "middle" }}>
                                                    <Form.Control
                                                        size="sm"
                                                        type="text"
                                                        placeholder="จำนวนนักศึกษาของ ประเภทที่ 4 "
                                                        onChange={(event) => {
                                                            setStudentType4Number(event.target.value)
                                                        }}
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                        </Table>
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