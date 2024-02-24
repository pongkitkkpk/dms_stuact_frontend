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

function CSD_detail() {
    const [projectList, setProjectList] = useState([]);
    const divition = "สภา"
    const years = "ปีการศึกษา 2566"
    const ad_name = "aaaaaaaaaaaa"
    //ตัวแปรรับค่าจาก database


    // ตัวแปรส่งค่าไปยัง database
    const [id_student, setId_student] = useState('s6303051613149');
    const [project_name, setProjectName] = useState('');
    const [project_number, setProjectNumber] = useState('B');
    const [codeclub, setCodeClub] = useState('A');
    const [yearly, setYearly] = useState(66); // Assuming yearly is a number
    const [yearly_count, setYearlyCount] = useState(0); // Assuming yearly_count is a number
    const [responsible_agency, setResponsibleAgency] = useState('');
    const [academic_year, setAcademicYear] = useState('');
    const [advisor_name, setAdvisorName] = useState('');
    const [person1_name, setPerson1Name] = useState('');
    const [person1_contact, setPerson1Contact] = useState('');
    const [person2_name, setPerson2Name] = useState('');
    const [person2_contact, setPerson2Contact] = useState('');
    const [person3_name, setPerson3Name] = useState('');
    const [person3_contact, setPerson3Contact] = useState('');
    const [principles_and_reasons1, setPrinciplesAndReasons1] = useState('');
    const [principles_and_reasons2, setPrinciplesAndReasons2] = useState('');
    const [principles_and_reasons3, setPrinciplesAndReasons3] = useState('');
    const [objective1, setObjective1] = useState('');
    const [objective2, setObjective2] = useState('');
    const [objective3, setObjective3] = useState('');
    const [project_type1, setProjectType1] = useState('');
    const [project_type2, setProjectType2] = useState('');
    const [project_type3, setProjectType3] = useState('');
    const [project_type4, setProjectType4] = useState('');
    const [project_type5, setProjectType5] = useState('');
    const [is_newproject, setIsNewProject] = useState(false); // Assuming is_newproject is a boolean
    const [is_continueproject, setIsContinueProject] = useState(false); // Assuming is_continueproject is a boolean
    const [location1, setLocation1] = useState('');
    const [location2, setLocation2] = useState('');
    const [location3, setLocation3] = useState('');
    const [start_prepare, setStartPrepare] = useState('');
    const [end_prepare, setEndPrepare] = useState('');
    const [start_event, setStartEvent] = useState('');
    const [end_event, setEndEvent] = useState('');
    const [deadline, setDeadLine] = useState('');

    const [problem1, setProblem1] = useState('');
    const [result1, setResult1] = useState('');
    const [problem2, setProblem2] = useState('');
    const [result2, setResult2] = useState('');
    const [problem3, setProblem3] = useState('');
    const [result3, setResult3] = useState('');

    //
    const minDate = new Date();

    // *********************************************************
    const [userList, setUserList] = useState([]);
    const getUsers = () => {
        Axios.get('http://localhost:3001/users').then((response) => {
            setUserList(response.data);
        });
    };

    useEffect(() => {
        getUsers();
    }, []);

    useEffect(() => {
        const user = userList.find(user => user.id_student === id_student);
        if (user) {
            setProjectNumber(user.codebooksome);
        }
    }, [userList, id_student]);
    // *********************************************************

    // วัตถุประสงค์
    const [PrinciplesAndReasonsCount, setPrinciplesAndReasonsount] = useState(1);
    const increasePrinciplesAndReasons = () => {
        if (PrinciplesAndReasonsCount < 5) {
            setPrinciplesAndReasonsount(PrinciplesAndReasonsCount + 1);
        }
    };
    // 
    const [itemCount, setItemCount] = useState(1);
    const increaseItemCount = () => {
        if (itemCount < 3) {
            setItemCount(itemCount + 1);
        }
    };
    // เพิ่มสถานที่
    const [locationCount, setLocationCount] = useState(1);
    const increaseLocationCount = () => {
        if (locationCount < 3) {
            setLocationCount(locationCount + 1);
        }
    };
    // เพิ่มลักษณะรูปแบบโครงการ
    const [project_typeCount, setProjectTypeCount] = useState(1);
    const increaseProjectTypeCount = () => {
        if (project_typeCount < 5) {
            setProjectTypeCount(project_typeCount + 1);
        }
    };
    // เพิ่มปัญหา ไม่ใช่ดีกว่า
    // const [problemCount, setProblemCount] = useState(1);
    // const increaseProblemCount = () => {
    //     if (project_typeCount < 3) {
    //         setProblemCount(problemCount + 1);
    //     }
    // };


    const addBasicProject = () => {
        Axios.post('http://localhost:3001/createProject', {
            id_student: id_student,
            project_name: project_name,
            project_number: project_number,
            codeclub: codeclub,
            yearly: yearly,
            yearly_count: yearly_count,
            responsible_agency: responsible_agency,
            academic_year: academic_year,
            advisor_name: advisor_name,
            person1_name: person1_name,
            person1_contact: person1_contact,
            person2_name: person2_name,
            person2_contact: person2_contact,
            person3_name: person3_name,
            person3_contact: person3_contact,
            principles_and_reasons1: principles_and_reasons1,
            principles_and_reasons2: principles_and_reasons2,
            principles_and_reasons3: principles_and_reasons3,
            objective1: objective1,
            objective2: objective2,
            objective3: objective3,
            project_type1: project_type1,
            project_type2: project_type2,
            project_type3: project_type3,
            project_type4: project_type4,
            project_type5: project_type5,
            is_newproject: is_newproject,
            is_continueproject: is_continueproject,
            location1: location1,
            location2: location2,
            location3: location3,
            start_prepare: start_prepare,
            end_prepare: end_prepare,
            start_event: start_event,
            end_event: end_event,
            deadline: deadline,
            problem1: problem1,
            result1: result1,
            problem2: problem2,
            result2: result2,
            problem3: problem3,
            result3: result3,
        }).then(() => {
            // Assuming setProjectList is a state setter function for your projectList state
            setProjectList([
                ...projectList,
                {
                    id_student: id_student,
                    project_name: project_name,
                    project_number: project_number,
                    codeclub: codeclub,
                    yearly: yearly,
                    yearly_count: yearly_count,
                    responsible_agency: responsible_agency,
                    academic_year: academic_year,
                    advisor_name: advisor_name,
                    person1_name: person1_name,
                    person1_contact: person1_contact,
                    person2_name: person2_name,
                    person2_contact: person2_contact,
                    person3_name: person3_name,
                    person3_contact: person3_contact,
                    principles_and_reasons1: principles_and_reasons1,
                    principles_and_reasons2: principles_and_reasons2,
                    principles_and_reasons3: principles_and_reasons3,
                    objective1: objective1,
                    objective2: objective2,
                    objective3: objective3,
                    project_type1: project_type1,
                    project_type2: project_type2,
                    project_type3: project_type3,
                    project_type4: project_type4,
                    project_type5: project_type5,
                    is_newproject: is_newproject,
                    is_continueproject: is_continueproject,
                    location1: location1,
                    location2: location2,
                    location3: location3,
                    start_prepare: start_prepare,
                    end_prepare: end_prepare,
                    start_event: start_event,
                    end_event: end_event,
                    deadline: deadline,
                    problem1: problem1,
                    result1: result1,
                    problem2: problem2,
                    result2: result2,
                    problem3: problem3,
                    result3: result3,
                }
            ]);
        });
        setStartPrepare('');
        setEndPrepare('');
        setStartEvent('');
        setEndEvent('');
    }


    // Calculate end date for วันส่งรายงาน
    useEffect(() => {
        if (end_event) {
            const endReportDate = new Date(end_event);
            endReportDate.setDate(endReportDate.getDate() + 30);

            const day = endReportDate.getDate().toString().padStart(2, '0');
            const month = (endReportDate.getMonth() + 1).toString().padStart(2, '0');
            const year = endReportDate.getFullYear();

            setDeadLine(`${day}/${month}/${year}`);
        }
    }, [end_event]);


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
                                        size="sm"
                                        type="text"
                                        placeholder="ชื่อโครงการ"
                                        onChange={(event) => {
                                            setProjectName(event.target.value)
                                        }}
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
                                        size="sm"
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
                                        size="sm"
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
                                                        size="sm"
                                                        type="text"
                                                        placeholder="ชื่อ ผู้รับผิดชอบโครงการ คนที่ 1"
                                                        onChange={(event) => {
                                                            setPerson1Name(event.target.value)
                                                        }}
                                                    />
                                                </td>
                                                {/* เบอร์ คนที่ 1 */}
                                                <td style={{ verticalAlign: "middle" }}>
                                                    <Form.Control
                                                        size="sm"
                                                        type="text"
                                                        placeholder="เบอร์ติดต่อ ผู้รับผิดชอบโครงการ คนที่ 1"
                                                        onChange={(event) => {
                                                            setPerson1Contact(event.target.value)
                                                        }}
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
                                                        onChange={(event) => {
                                                            setPerson2Name(event.target.value)
                                                        }}
                                                    />
                                                </td>
                                                {/* เบอร์ คนที่ 2 */}
                                                <td style={{ verticalAlign: "middle" }}>
                                                    <Form.Control
                                                        size="sm"
                                                        type="text"
                                                        placeholder="เบอร์ติดต่อ ผู้รับผิดชอบโครงการ คนที่ 2"
                                                        onChange={(event) => {
                                                            setPerson2Contact(event.target.value)
                                                        }}
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
                                                        onChange={(event) => {
                                                            setPerson3Name(event.target.value)
                                                        }}
                                                    />
                                                </td>
                                                {/* เบอร์ คนที่ 3 */}
                                                <td style={{ verticalAlign: "middle" }}>
                                                    <Form.Control
                                                        size="sm"
                                                        type="text"
                                                        placeholder="เบอร์ติดต่อ ผู้รับผิดชอบโครงการ คนที่ 3"
                                                        onChange={(event) => {
                                                            setPerson3Contact(event.target.value)
                                                        }}
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>

                                    </Table>
                                </td>
                            </tr>
                            {/* อารจารย์ผู้ดูแลโครงการ */}
                            <tr >
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
                            </tr>
                            {/* หลักการและเหตุผล */}
                            <tr style={{ backgroundColor: "white" }}>
                                <td className='head-side-td'>หลักการและเหตุผล</td>
                                <td className='back-side-td'>
                                    <ul>
                                        {Array.from({ length: PrinciplesAndReasonsCount }).map((_, index) => (
                                            <li key={index}>
                                                <Form.Control
                                                    size="sm"
                                                    type="text"
                                                    placeholder={`เพิ่มหลักการและเหตุผล ${index + 1}`}
                                                    onChange={(event) => {
                                                        switch (index) {
                                                            case 0:
                                                                setPrinciplesAndReasons1(event.target.value);
                                                                break;
                                                            case 1:
                                                                setPrinciplesAndReasons2(event.target.value);
                                                                break;
                                                            case 2:
                                                                setPrinciplesAndReasons3(event.target.value);
                                                                break;
                                                            case 3:
                                                                setPrinciplesAndReasons4(event.target.value);
                                                                break;
                                                            case 4:
                                                                setPrinciplesAndReasons5(event.target.value);
                                                                break;
                                                            default:
                                                            // Handle other cases if needed
                                                        }
                                                    }}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                    {PrinciplesAndReasonsCount < 5 && (
                                        <Button variant="primary" onClick={increasePrinciplesAndReasons}>
                                            เพิ่มหลักการและเหตุผล
                                        </Button>
                                    )}
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
                                                    size="sm"
                                                    type="text"
                                                    placeholder={`วัตถุประสงค์ ${index + 1}`}
                                                    onChange={(event) => {
                                                        switch (index) {
                                                            case 0:
                                                                setObjective1(event.target.value);
                                                                break;
                                                            case 1:
                                                                setObjective2(event.target.value);
                                                                break;
                                                            case 2:
                                                                setObjective3(event.target.value);
                                                                break;
                                                            default:
                                                            // Handle other cases if needed
                                                        }
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
                            {/* ลักษณะรูปแบบโครงการ */}
                            <tr>
                                <td className='head-side-td'>ลักษณะรูปแบบโครงการ</td>
                                <td className='back-side-td'>
                                    <ul>
                                        {Array.from({ length: project_typeCount }).map((_, index) => (
                                            <li key={index}>
                                                <Form.Control
                                                    size="sm"
                                                    type="text"
                                                    placeholder={`ลักษณะรูปแบบโครงการ ข้อที่${index + 1}`}
                                                    onChange={(event) => {
                                                        switch (index) {
                                                            case 0:
                                                                setProjectType1(event.target.value);
                                                                break;
                                                            case 1:
                                                                setProjectType2(event.target.value);
                                                                break;
                                                            case 2:
                                                                setProjectType3(event.target.value);
                                                                break;
                                                            case 3:
                                                                setProjectType4(event.target.value);
                                                                break;
                                                            case 4:
                                                                setProjectType5(event.target.value);
                                                                break;

                                                            default:
                                                            // Handle other cases if needed
                                                        }
                                                    }}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                    {project_typeCount < 5 && (
                                        <Button variant="primary" onClick={increaseProjectTypeCount}>
                                            เพิ่มลักษณะรูปแบบโครงการ
                                        </Button>
                                    )}
                                </td>
                            </tr>
                            {/* ลักษณะโครงการ */}
                            <tr style={{ backgroundColor: "white" }}>
                                <td className='head-side-td'>ลักษณะโครงการ</td>
                                <td className='back-side-td' >
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <div style={{ flex: '1', marginRight: '5%' }}>
                                            <Form.Check
                                                type="radio"
                                                id="newProjectRadio"
                                                label="โครงการใหม่"
                                                checked={is_newproject}
                                                onChange={() => {
                                                    setIsNewProject(true);
                                                    setIsContinueProject(false);
                                                }}
                                            />
                                        </div>
                                        <div style={{ flex: '1', marginRight: '20%' }}>
                                            <Form.Check
                                                type="radio"
                                                id="continueProjectRadio"
                                                label="โครงการต่อเนื่อง"
                                                checked={is_continueproject}
                                                onChange={() => {
                                                    setIsNewProject(false);
                                                    setIsContinueProject(true);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {is_continueproject && (
                                        <>
                                            <Table striped="columns">
                                                <thead>
                                                    <tr>
                                                        <th>ปัญหาและอุปสรรคในปีที่ผ่านมา</th>
                                                        <th>แนวทางการปรับปรุงแก้ไขปัญหา และอุปสรรคในครั้งนี้</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {/* ข้อ 1 */}
                                                    <tr style={{ backgroundColor: "white" }}>
                                                        {/* ปัญหาข้อ 1  */}
                                                        <td style={{ verticalAlign: "middle" }}>
                                                            <Form.Control
                                                                size="sm"
                                                                type="text"
                                                                placeholder="ปัญหาข้อ 1"
                                                                onChange={(event) => {
                                                                    setProblem1(event.target.value)
                                                                }}
                                                            />
                                                        </td>
                                                        {/* แนวทางข้อ 1 */}
                                                        <td style={{ verticalAlign: "middle" }}>
                                                            <Form.Control
                                                                size="sm"
                                                                type="text"
                                                                placeholder="แนวทางข้อ 1 "
                                                                onChange={(event) => {
                                                                    setResult1(event.target.value)
                                                                }}
                                                            />
                                                        </td>
                                                    </tr>
                                                    {/* ข้อ 2 */}
                                                    <tr style={{ backgroundColor: "white" }}>
                                                        {/* ปัญหาข้อ 2  */}
                                                        <td style={{ verticalAlign: "middle" }}>
                                                            <Form.Control
                                                                size="sm"
                                                                type="text"
                                                                placeholder="ปัญหาข้อ 2"
                                                                onChange={(event) => {
                                                                    setProblem2(event.target.value)
                                                                }}
                                                            />
                                                        </td>
                                                        {/* แนวทางข้อ 2 */}
                                                        <td style={{ verticalAlign: "middle" }}>
                                                            <Form.Control
                                                                size="sm"
                                                                type="text"
                                                                placeholder="แนวทางข้อ 2 "
                                                                onChange={(event) => {
                                                                    setResult2(event.target.value)
                                                                }}
                                                            />
                                                        </td>
                                                    </tr>
                                                    {/* ข้อ 3 */}
                                                    <tr style={{ backgroundColor: "white" }}>
                                                        {/* ปัญหาข้อ 3  */}
                                                        <td style={{ verticalAlign: "middle" }}>
                                                            <Form.Control
                                                                size="sm"
                                                                type="text"
                                                                placeholder="ปัญหาข้อ 3"
                                                                onChange={(event) => {
                                                                    setProblem3(event.target.value)
                                                                }}
                                                            />
                                                        </td>
                                                        {/* แนวทางข้อ 3 */}
                                                        <td style={{ verticalAlign: "middle" }}>
                                                            <Form.Control
                                                                size="sm"
                                                                type="text"
                                                                placeholder="แนวทางข้อ 3 "
                                                                onChange={(event) => {
                                                                    setResult3(event.target.value)
                                                                }}
                                                            />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </>
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
                                                    size="sm"
                                                    type="text"
                                                    placeholder={`สถานที่จัดโครงการ ${index + 1}`}
                                                    onChange={(event) => {
                                                        switch (index) {
                                                            case 0:
                                                                setLocation1(event.target.value);
                                                                break;
                                                            case 1:
                                                                setLocation2(event.target.value);
                                                                break;
                                                            case 2:
                                                                setLocation3(event.target.value);
                                                                break;
                                                            default:
                                                            // Handle other cases if needed
                                                        }
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
                            {/* ช่วงจัดเตรียมโครงการ */}
                            <tr>
                                <td className='head-side-td'>
                                    วันจัดเตรียมโครงการ
                                    <p className='detail-prodoc'>
                                        ระบุช่วงเวลาเตรียมงาน
                                    </p>
                                </td>
                                <td className='back-side-td'>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <div style={{ marginRight: '20px' }}>
                                            <Form.Label>วันเริ่มต้น(จัดเตรียม) :</Form.Label>
                                            <DatePicker
                                                selected={start_prepare}
                                                onChange={(date) => setStartPrepare(date)}
                                                dateFormat="dd/MM/yyyy"
                                                placeholderText="เลือกวันเริ่มต้น"
                                                className="form-control"
                                                minDate={minDate}
                                            />
                                        </div>
                                        <div>
                                            <Form.Label>วันสิ้นสุด(จัดเตรียม) :</Form.Label>
                                            <DatePicker
                                                selected={end_prepare}
                                                onChange={(date) => setEndPrepare(date)}
                                                dateFormat="dd/MM/yyyy"
                                                placeholderText="เลือกวันสิ้นสุด"
                                                className="form-control"
                                                minDate={start_prepare}
                                            />
                                        </div>
                                    </div>
                                </td>

                            </tr>
                            {/* วันดำเนินโครงการ */}
                            <tr>
                                <td className='head-side-td'>
                                    วันดำเนินโครงการ
                                    <p className='detail-prodoc'>
                                        กรณีจัดโครงการเพียงหนึ่งวันให้เลือกวันเริ่มต้นและวันสิ้นสุดเป็นวันเดียวกัน
                                    </p>
                                </td>
                                <td className='back-side-td'>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <div style={{ marginRight: '20px' }}>
                                            <Form.Label>วันเริ่มต้น(ดำเนิน) : </Form.Label>
                                            <DatePicker
                                                selected={start_event}
                                                onChange={(date) => setStartEvent(date)}
                                                dateFormat="dd/MM/yyyy"
                                                placeholderText="เลือกวันเริ่มต้น"
                                                className="form-control"
                                                minDate={end_prepare}
                                            />

                                        </div>
                                        <div>
                                            <Form.Label>วันสิ้นสุด(ดำเนิน) : </Form.Label>
                                            <DatePicker
                                                selected={end_event}
                                                onChange={(date) => setEndEvent(date)}
                                                dateFormat="dd/MM/yyyy"
                                                placeholderText="เลือกวันสิ้นสุด"
                                                className="form-control"
                                                minDate={start_event}
                                            />
                                        </div>
                                    </div>
                                </td>

                            </tr>
                            {/* วันกำหนดส่งโครงการ */}
                            <tr style={{ backgroundColor: "white" }}>
                                <td className='head-side-td'>
                                    วันกำหนดส่งโครงการ
                                    <p className='detail-prodoc'>
                                        กำหนด 30 วัน หลังจากวันดำเนินงาน
                                    </p>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <Form.Label className="mr-2">วันส่งรายงาน:</Form.Label>


                                        <input
                                            type="text"
                                            value={deadline}
                                            className="form-control"
                                            readOnly
                                        />
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </Table>
                    <Button
                        onClick={addBasicProject}
                        type="submit"
                        variant="info"
                    >
                        อัพขึ้นสู่ระบบ
                    </Button>
                </Card>
            </Col>
        </>
    );
}
export default CSD_detail