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

function CSD_timestep({ startMonth }) {
    const [id_projects, setIDproject] = useState('1')
    const [codeClub, setCodeClub] = useState('');
    const [yearlyCountSketch, setYearlyCountSketch] = useState('');


    const [table1Id, setTable1Id] = useState('');
    const [table1Topic, setTable1Topic] = useState('');
    const [startDurationTable1, setStartDurationTable1] = useState('');
    const [endDurationTable1, setEndDurationTable1] = useState('');
    const [responsibleTable1, setResponsibleTable1] = useState([]);
    const handleresponsibleTable1Change = (event) => {
        const name = event.target.value;
        if (responsibleTable1.includes(name)) {
            setResponsibleTable1(responsibleTable1.filter(person => person !== name));
        } else {
            setResponsibleTable1([...responsibleTable1, name]);
        }
    };

    const [table2Id, setTable2Id] = useState('');
    const [table2Topic, setTable2Topic] = useState('');
    const [startDurationTable2, setStartDurationTable2] = useState(null);
    const [endDurationTable2, setEndDurationTable2] = useState(null);
    const [responsibleTable2, setResponsibleTable2] = useState('');
    const handleresponsibleTable2Change = (event) => {
        const name = event.target.value;
        if (responsibleTable2.includes(name)) {
            setResponsibleTable2(responsibleTable2.filter(person => person !== name));
        } else {
            setResponsibleTable2([...responsibleTable2, name]);
        }
    };

    const [table3Id, setTable3Id] = useState('');
    const [table3Topic, setTable3Topic] = useState('');
    const [startDurationTable3, setStartDurationTable3] = useState(null);
    const [endDurationTable3, setEndDurationTable3] = useState(null);
    const [responsibleTable3, setResponsibleTable3] = useState('');
    const handleresponsibleTable3Change = (event) => {
        const name = event.target.value;
        if (responsibleTable3.includes(name)) {
            setResponsibleTable3(responsibleTable3.filter(person => person !== name));
        } else {
            setResponsibleTable3([...responsibleTable3, name]);
        }
    };

    const [table4Id, setTable4Id] = useState('');
    const [table4Topic, setTable4Topic] = useState('');
    const [startDurationTable4, setStartDurationTable4] = useState(null);
    const [endDurationTable4, setEndDurationTable4] = useState(null);
    const [responsibleTable4, setResponsibleTable4] = useState('');
    const handleresponsibleTable4Change = (event) => {
        const name = event.target.value;
        if (responsibleTable4.includes(name)) {
            setResponsibleTable4(responsibleTable4.filter(person => person !== name));
        } else {
            setResponsibleTable4([...responsibleTable4, name]);
        }
    };

    const [table5Id, setTable5Id] = useState('');
    const [table5Topic, setTable5Topic] = useState('');
    const [startDurationTable5, setStartDurationTable5] = useState(null);
    const [endDurationTable5, setEndDurationTable5] = useState(null);
    const [responsibleTable5, setResponsibleTable5] = useState('');
    const handleresponsibleTable5Change = (event) => {
        const name = event.target.value;
        if (responsibleTable5.includes(name)) {
            setResponsibleTable5(responsibleTable5.filter(person => person !== name));
        } else {
            setResponsibleTable5([...responsibleTable5, name]);
        }
    };

    const [table6Id, setTable6Id] = useState('');
    const [table6Topic, setTable6Topic] = useState('');
    const [startDurationTable6, setStartDurationTable6] = useState(null);
    const [endDurationTable6, setEndDurationTable6] = useState(null);
    const [responsibleTable6, setResponsibleTable6] = useState('');
    const handleresponsibleTable6Change = (event) => {
        const name = event.target.value;
        if (responsibleTable6.includes(name)) {
            setResponsibleTable6(responsibleTable6.filter(person => person !== name));
        } else {
            setResponsibleTable6([...responsibleTable6, name]);
        }
    };

    const [table7Id, setTable7Id] = useState('');
    const [table7Topic, setTable7Topic] = useState('');
    const [startDurationTable7, setStartDurationTable7] = useState(null);
    const [endDurationTable7, setEndDurationTable7] = useState(null);
    const [responsibleTable7, setResponsibleTable7] = useState('');
    const handleresponsibleTable7Change = (event) => {
        const name = event.target.value;
        if (responsibleTable7.includes(name)) {
            setResponsibleTable7(responsibleTable7.filter(person => person !== name));
        } else {
            setResponsibleTable7([...responsibleTable7, name]);
        }
    };

    const [table8Id, setTable8Id] = useState('');
    const [table8Topic, setTable8Topic] = useState('');
    const [startDurationTable8, setStartDurationTable8] = useState(null);
    const [endDurationTable8, setEndDurationTable8] = useState(null);
    const [responsibleTable8, setResponsibleTable8] = useState('');
    const handleresponsibleTable8Change = (event) => {
        const name = event.target.value;
        if (responsibleTable8.includes(name)) {
            setResponsibleTable8(responsibleTable8.filter(person => person !== name));
        } else {
            setResponsibleTable8([...responsibleTable8, name]);
        }
    };

    const [table9Id, setTable9Id] = useState('');
    const [table9Topic, setTable9Topic] = useState('');
    const [startDurationTable9, setStartDurationTable9] = useState(null);
    const [endDurationTable9, setEndDurationTable9] = useState(null);
    const [responsibleTable9, setResponsibleTable9] = useState('');
    const handleresponsibleTable9Change = (event) => {
        const name = event.target.value;
        if (responsibleTable9.includes(name)) {
            setResponsibleTable9(responsibleTable9.filter(person => person !== name));
        } else {
            setResponsibleTable9([...responsibleTable9, name]);
        }
    };

    const [table10Id, setTable10Id] = useState('');
    const [table10Topic, setTable10Topic] = useState('');
    const [startDurationTable10, setStartDurationTable10] = useState(null);
    const [endDurationTable10, setEndDurationTable10] = useState(null);
    const [responsibleTable10, setResponsibleTable10] = useState('');
    const handleresponsibleTable10Change = (event) => {
        const name = event.target.value;
        if (responsibleTable10.includes(name)) {
            setResponsibleTable10(responsibleTable10.filter(person => person !== name));
        } else {
            setResponsibleTable10([...responsibleTable10, name]);
        }
    };

    const [table11Id, setTable11Id] = useState('');
    const [table11Topic, setTable11Topic] = useState('');
    const [startDurationTable11, setStartDurationTable11] = useState(null);
    const [endDurationTable11, setEndDurationTable11] = useState(null);
    const [responsibleTable11, setResponsibleTable11] = useState('');
    const handleresponsibleTable11Change = (event) => {
        const name = event.target.value;
        if (responsibleTable11.includes(name)) {
            setResponsibleTable11(responsibleTable11.filter(person => person !== name));
        } else {
            setResponsibleTable11([...responsibleTable11, name]);
        }
    };

    const [table12Id, setTable12Id] = useState('');
    const [table12Topic, setTable12Topic] = useState('');
    const [startDurationTable12, setStartDurationTable12] = useState(null);
    const [endDurationTable12, setEndDurationTable12] = useState(null);
    const [responsibleTable12, setResponsibleTable12] = useState('');
    const handleresponsibleTable12Change = (event) => {
        const name = event.target.value;
        if (responsibleTable12.includes(name)) {
            setResponsibleTable12(responsibleTable12.filter(person => person !== name));
        } else {
            setResponsibleTable12([...responsibleTable12, name]);
        }
    };

    const [table13Id, setTable13Id] = useState('');
    const [table13Topic, setTable13Topic] = useState('');
    const [startDurationTable13, setStartDurationTable13] = useState(null);
    const [endDurationTable13, setEndDurationTable13] = useState(null);
    const [responsibleTable13, setResponsibleTable13] = useState('');
    const handleresponsibleTable13Change = (event) => {
        const name = event.target.value;
        if (responsibleTable13.includes(name)) {
            setResponsibleTable13(responsibleTable13.filter(person => person !== name));
        } else {
            setResponsibleTable13([...responsibleTable13, name]);
        }
    };

    const [table14Id, setTable14Id] = useState('');
    const [table14Topic, setTable14Topic] = useState('');
    const [startDurationTable14, setStartDurationTable14] = useState(null);
    const [endDurationTable14, setEndDurationTable14] = useState(null);
    const [responsibleTable14, setResponsibleTable14] = useState('');
    const handleresponsibleTable14Change = (event) => {
        const name = event.target.value;
        if (responsibleTable14.includes(name)) {
            setResponsibleTable14(responsibleTable14.filter(person => person !== name));
        } else {
            setResponsibleTable14([...responsibleTable14, name]);
        }
    };

    const [table15Id, setTable15Id] = useState('');
    const [table15Topic, setTable15Topic] = useState('');
    const [startDurationTable15, setStartDurationTable15] = useState(null);
    const [endDurationTable15, setEndDurationTable15] = useState(null);
    const [responsibleTable15, setResponsibleTable15] = useState('');
    const handleresponsibleTable15Change = (event) => {
        const name = event.target.value;
        if (responsibleTable15.includes(name)) {
            setResponsibleTable15(responsibleTable15.filter(person => person !== name));
        } else {
            setResponsibleTable15([...responsibleTable15, name]);
        }
    };

    const [start_prepare, setStartPrepare] = useState('');
    const [end_prepare, setEndPrepare] = useState('');
    const [start_event, setStartEvent] = useState('');
    const [end_event, setEndEvent] = useState('');
    const [deadline, setDeadLine] = useState('');
    const [projectData, setProjectData] = useState('');

    const [personNames, setPersonNames] = useState([]);
    const [person1, setPerson1] = useState([]);
    const [person2, setPerson2] = useState([]);
    const [person3, setPerson3] = useState([]);





    const getProjectData = () => {
        Axios.get(`http://localhost:3001/student/project/getidproject/${id_projects}`).then((response) => {
            setProjectData(response.data);

            setPerson1(response.data[0].person1_name)
            setPerson2(response.data[0].person2_name)
            setPerson3(response.data[0].person3_name)

            const startPrepare = new Date(response.data[0].start_prepare);
            const endPrepare = new Date(response.data[0].end_prepare);
            const startEvent = new Date(response.data[0].start_event);
            const endEvent = new Date(response.data[0].end_event);
            const deadline = new Date(response.data[0].deadline);

            // Adding one day to each date
            startPrepare.setDate(startPrepare.getDate());
            endPrepare.setDate(endPrepare.getDate());
            startEvent.setDate(startEvent.getDate());
            endEvent.setDate(endEvent.getDate());
            deadline.setDate(deadline.getDate());

            // Logging modified dates
            setStartPrepare(startPrepare)
            setEndPrepare(endPrepare)
            setStartEvent(startEvent)
            setEndEvent(endEvent)
            setDeadLine(deadline)

        });
    };

    useEffect(() => {
        // 'person1', 'person2', 'person3' will have the updated values here
        const names = [
            person1 !== '' ? person1 : null,
            person2 !== '' ? person2 : null,
            person3 !== '' ? person3 : null,
        ].filter(name => name !== null);

        setPersonNames(names);
    }, [person1]);

    useEffect(() => {
        getProjectData();
    }, []);
    // useEffect(() => {
    //     console.log("Start1"+startDurationTable1)
    //     console.log("en1"+endDurationTable1)
    //     console.log("res1"+responsibleTable1)
    // }, [startDurationTable1,endDurationTable1,responsibleTable1]);
    // useEffect(() => {
    //     console.log("Star2"+startDurationTable2)
    //     console.log("en2"+endDurationTable2)
    //     console.log("res2"+responsibleTable2)
    // }, [startDurationTable2,endDurationTable2,responsibleTable2]);
    return (
        <>
            <Col md="9">

                <Card>
                    <Table striped="columns">
                        <thead>
                            <tr>
                                <th>ขั้นตอนการและแผนการดำเนินโครงการ</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* หัวข้อ1 */}
                            <tr style={{ backgroundColor: "white" }}>
                                <td className='head-side-td'>หัวข้อที่ 1 </td>
                                <td className='back-side-td'>
                                    <Form.Label>การดำเนินงาน : </Form.Label>
                                    <Form.Control
                                        onChange={(event) => setTable1Topic(event.target.value)}
                                        value={table1Topic}
                                        size="sm"
                                        type="text"
                                        placeholder={`การดำเนินงาน ${1}`}
                                    />
                                    <div style={{ marginTop: '2%', display: 'flex', alignItems: 'center' }}>
                                        <Form.Label>ระยะเวลา : </Form.Label>
                                        <div>

                                            <DatePicker
                                                selected={startDurationTable1}
                                                onChange={(date) => setStartDurationTable1(date)}
                                                dateFormat="dd/MM/yyyy"
                                                placeholderText="เลือกวันเริ่มต้น"
                                                className="form-control"
                                                minDate={start_prepare}
                                                maxDate={deadline}
                                                popperPlacement="top-start"
                                                isClearable
                                                selectsStart
                                                startDate={startDurationTable1}
                                                endDate={endDurationTable1}
                                            />
                                        </div>
                                        <span style={{ marginLeft: '1%', marginRight: '1%' }}>-</span>
                                        <div>
                                            <DatePicker
                                                selected={endDurationTable1}
                                                onChange={(date) => setEndDurationTable1(date)}
                                                dateFormat="dd/MM/yyyy"
                                                placeholderText="เลือกวันสิ้นสุด"
                                                className="form-control"
                                                minDate={startDurationTable1}
                                                maxDate={deadline}
                                                popperPlacement="top-start"
                                                isClearable
                                                selectsEnd
                                                startDate={startDurationTable1}
                                                endDate={endDurationTable1}
                                            />
                                        </div>


                                    </div>
                                    <br></br>
                                    <div style={{ display: 'inline-block' }}>
                                        <Form.Label style={{ marginRight: '10px' }}>ผู้รับผิดชอบ : </Form.Label>
                                        {personNames.map((name, index) => (
                                            <div key={index} style={{ display: 'inline-block', marginRight: '10px' }}>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        value={name}
                                                        checked={responsibleTable1.includes(name)}
                                                        onChange={handleresponsibleTable1Change}
                                                    />
                                                    {` ` + name}
                                                </label>
                                            </div>
                                        ))}
                                    </div>

                                </td>
                            </tr>
                            {/* หัวข้อ2 */}
                            <tr style={{ backgroundColor: "white" }}>
                                <td className='head-side-td'>หัวข้อที่ 2 </td>
                                <td className='back-side-td'>
                                    <Form.Label>การดำเนินงาน : </Form.Label>
                                    <Form.Control
                                        onChange={(event) => setTable2Topic(event.target.value)}
                                        value={table2Topic}
                                        size="sm"
                                        type="text"
                                        placeholder={`การดำเนินงาน ${2}`}
                                    />
                                    <div style={{ marginTop: '2%', display: 'flex', alignItems: 'center' }}>
                                        <Form.Label>ระยะเวลา : </Form.Label>
                                        <div>
                                            <DatePicker
                                                selected={startDurationTable2}
                                                onChange={(date) => setStartDurationTable2(date)}
                                                dateFormat="dd/MM/yyyy"
                                                placeholderText="เลือกวันเริ่มต้น"
                                                className="form-control"
                                                minDate={start_prepare}
                                                maxDate={deadline}
                                                popperPlacement="top-start"
                                                isClearable
                                                selectsStart
                                                startDate={startDurationTable2}
                                                endDate={endDurationTable2}
                                            />
                                        </div>
                                        <span style={{ marginLeft: '1%', marginRight: '1%' }}>-</span>
                                        <div>
                                            <DatePicker
                                                selected={endDurationTable2}
                                                onChange={(date) => setEndDurationTable2(date)}
                                                dateFormat="dd/MM/yyyy"
                                                placeholderText="เลือกวันสิ้นสุด"
                                                className="form-control"
                                                minDate={startDurationTable2}
                                                maxDate={deadline}
                                                popperPlacement="top-start"
                                                isClearable
                                                selectsEnd
                                                startDate={startDurationTable2}
                                                endDate={endDurationTable2}
                                            />
                                        </div>
                                    </div>
                                    <br></br>
                                    <div style={{ display: 'inline-block' }}>
                                        <Form.Label style={{ marginRight: '10px' }}>ผู้รับผิดชอบ : </Form.Label>
                                        {personNames.map((name, index) => (
                                            <div key={index} style={{ display: 'inline-block', marginRight: '10px' }}>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        value={name}
                                                        checked={responsibleTable2.includes(name)}
                                                        onChange={handleresponsibleTable2Change}
                                                    />
                                                    {` ` + name}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </td>
                            </tr>
                            {/* หัวข้อที่ 3 */}
                            <tr style={{ backgroundColor: "white" }}>
                                <td className='head-side-td'>หัวข้อที่ 3 </td>
                                <td className='back-side-td'>
                                    <Form.Label>การดำเนินงาน : </Form.Label>
                                    <Form.Control
                                        onChange={(event) => setTable3Topic(event.target.value)}
                                        value={table3Topic}
                                        size="sm"
                                        type="text"
                                        placeholder={`การดำเนินงาน ${3}`}
                                    />
                                    <div style={{ marginTop: '2%', display: 'flex', alignItems: 'center' }}>
                                        <Form.Label>ระยะเวลา : </Form.Label>
                                        <div>
                                            <DatePicker
                                                selected={startDurationTable3}
                                                onChange={(date) => setStartDurationTable3(date)}
                                                dateFormat="dd/MM/yyyy"
                                                placeholderText="เลือกวันเริ่มต้น"
                                                className="form-control"
                                                minDate={start_prepare}
                                                maxDate={deadline}
                                                popperPlacement="top-start"
                                                isClearable
                                                selectsStart
                                                startDate={startDurationTable3}
                                                endDate={endDurationTable3}
                                            />
                                        </div>
                                        <span style={{ marginLeft: '1%', marginRight: '1%' }}>-</span>
                                        <div>
                                            <DatePicker
                                                selected={endDurationTable3}
                                                onChange={(date) => setEndDurationTable3(date)}
                                                dateFormat="dd/MM/yyyy"
                                                placeholderText="เลือกวันสิ้นสุด"
                                                className="form-control"
                                                minDate={startDurationTable3}
                                                maxDate={deadline}
                                                popperPlacement="top-start"
                                                isClearable
                                                selectsEnd
                                                startDate={startDurationTable3}
                                                endDate={endDurationTable3}
                                            />
                                        </div>
                                    </div>
                                    <br></br>
                                    <div style={{ display: 'inline-block' }}>
                                        <Form.Label style={{ marginRight: '10px' }}>ผู้รับผิดชอบ : </Form.Label>
                                        {personNames.map((name, index) => (
                                            <div key={index} style={{ display: 'inline-block', marginRight: '10px' }}>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        value={name}
                                                        checked={responsibleTable3.includes(name)}
                                                        onChange={handleresponsibleTable3Change}
                                                    />
                                                    {` ` + name}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </td>
                            </tr>





                        </tbody>
                    </Table>
                    <Button
                        // onClick={}
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