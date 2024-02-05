import React, { useState } from 'react';
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

function CSD_detail() {
    const divition = "สภา"
    const years = "ปีการศึกษา 2566"
    const ad_name = "asdfasdfasdf "

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const minDate = new Date();

    // วัตถุประสงค์
    const [itemCount, setItemCount] = useState(1);
    const increaseItemCount = () => {
        if (itemCount < 3) {
            setItemCount(itemCount + 1);
        }
    };

    const [locationCount, setLocationCount] = useState(1);
    const increaseLocationCount = () => {
        if (locationCount < 3) {
            setLocationCount(locationCount + 1);
        }
    };

    const [participants, setParticipants] = useState([
        { type: 'นักศึกษา', name: '', total: '' },
        { type: 'บุคลาการ', name: '', total: '' },

    ]);

    const addParticipantType = () => {
        if (participants.length < 5) {
            setParticipants([...participants, { type: '', name: '', total: '' }]);
        }
    };
    const handleTotalChange = (event, index) => {
        const updatedParticipants = [...participants];
        const value = event.target.value;

        // Check if the value is numeric (digits only)
        if (/^\d*$/.test(value)) {
            updatedParticipants[index].total = value;
            setParticipants(updatedParticipants);
        }
    };
    const participantInputs = participants.map((participant, index) => (
        <div key={index}>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>{`Input name for ${participant.type}`}</Form.Label>
                        <Form.Control
                            size="lg"
                            type="text"
                            placeholder={`Input name for ${participant.type}`}
                            value={participant.name}
                            onChange={(event) => {
                                const updatedParticipants = [...participants];
                                updatedParticipants[index].name = event.target.value;
                                setParticipants(updatedParticipants);
                            }}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>{`Total persons for ${participant.type}`}</Form.Label>
                        <Form.Control
                            size="lg"
                            type="text"
                            placeholder={`Total persons for ${participant.type}`}
                            value={participant.total}
                            onChange={(event) => handleTotalChange(event, index)}
                        />
                    </Form.Group>
                </Col>
            </Row>
        </div>
    ));
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
                            {/* หลักการและเหตุผล */}
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
                            {/* วัตถุประสงค์ */}
                            <tr>
                                <td className='head-side-td'>วัตถุประสงค์</td>
                                <td className='back-side-td'>
                                    <ul>
                                        {Array.from({ length: itemCount }).map((_, index) => (
                                            <li key={index}>
                                                <Form.Control
                                                    size="lg"
                                                    type="text"
                                                    placeholder={`วัตถุประสงค์ ${index + 1}`}
                                                    onChange={(event) => {
                                                        // Handle input change for objectives
                                                    }}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                    {itemCount < 3 && (
                                        <Button variant="primary" onClick={increaseItemCount}>
                                            เพิ่มวัตถุประสงค์
                                        </Button>
                                    )}
                                </td>
                            </tr>
                            {/* สถานที่จัดโครงการ */}
                            <tr>
                                <td className='head-side-td'>สถานที่จัดโครงการ</td>
                                <td className='back-side-td'>
                                    <ul>
                                        {Array.from({ length: locationCount }).map((_, index) => (
                                            <li key={index}>
                                                <Form.Control
                                                    size="lg"
                                                    type="text"
                                                    placeholder={`สถานที่จัดโครงการ ${index + 1}`}
                                                    onChange={(event) => {
                                                        // Handle input change for project locations
                                                    }}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                    {locationCount < 3 && (
                                        <Button variant="primary" onClick={increaseLocationCount}>
                                            เพิ่มสถานที่
                                        </Button>
                                    )}
                                </td>
                            </tr>
                            {/* วันจัดโครงการ */}
                            <tr>
                                <td className='head-side-td'>
                                    วันจัดโครงการ
                                    <p className='detail-prodoc'>
                                        กรณีจัดโครงการเพียงหนึ่งวันให้เลือกวันเริ่มต้นและวันสิ้นสุดเป็นวันเดียวกัน
                                    </p>
                                </td>
                                <td className='back-side-td'>
                                    <div>
                                        <Form.Label>วันเริ่มต้น:</Form.Label>
                                        <DatePicker
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            dateFormat="dd/MM/yyyy"
                                            placeholderText="เลือกวันเริ่มต้น"
                                            className="form-control"
                                            minDate={minDate} // Set max date to current date
                                        />
                                    </div>
                                    <div>
                                        <Form.Label>วันสิ้นสุด:</Form.Label>
                                        <DatePicker
                                            selected={endDate}
                                            onChange={(date) => setEndDate(date)}
                                            dateFormat="dd/MM/yyyy"
                                            placeholderText="เลือกวันสิ้นสุด"
                                            className="form-control"
                                            minDate={minDate} // Set max date to current date
                                        />
                                    </div>
                                </td>
                            </tr>
                            {/* ผู้เข้าร่วมโครงการ */}
                            <tr>
                                <td className='head-side-td'>ผู้เข้าร่วมโครงการ</td>
                                <td className='back-side-td'>
                                    {participantInputs}
                                    {participants.length < 5 && (
                                        <Button variant="primary" onClick={addParticipantType}>
                                            เพิ่มประเภทผู้เข้าร่วม
                                        </Button>
                                    )}
                                </td>
                            </tr>
                            
                        </tbody>
                    </Table>
                </Card>
            </Col>
        </>
    );
}
export default CSD_detail