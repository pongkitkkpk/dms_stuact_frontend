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

function CSD_detail2({ id_projects, switchToCSDPerson }) {
    const [projectList, setProjectList] = useState([]);
    const [principles_and_reasons1, setPrinciplesAndReasons1] = useState('');
    const [principles_and_reasons2, setPrinciplesAndReasons2] = useState('');
    const [principles_and_reasons3, setPrinciplesAndReasons3] = useState('');
    const [principles_and_reasons4, setPrinciplesAndReasons4] = useState('');
    const [principles_and_reasons5, setPrinciplesAndReasons5] = useState('');
    const [objective1, setObjective1] = useState('');
    const [objective2, setObjective2] = useState('');
    const [objective3, setObjective3] = useState('');
    const [objective4, setObjective4] = useState('');
    const [objective5, setObjective5] = useState('');
    const [project_type1, setProjectType1] = useState('');
    const [project_type2, setProjectType2] = useState('');
    const [project_type3, setProjectType3] = useState('');
    const [project_type4, setProjectType4] = useState('');
    const [project_type5, setProjectType5] = useState('');
    const [is_newproject, setIsNewProject] = useState(false); // Assuming is_newproject is a boolean
    const [is_continueproject, setIsContinueProject] = useState(false); // Assuming is_continueproject is a boolean

    const [problem1, setProblem1] = useState('');
    const [result1, setResult1] = useState('');
    const [problem2, setProblem2] = useState('');
    const [result2, setResult2] = useState('');
    const [problem3, setProblem3] = useState('');
    const [result3, setResult3] = useState('');


    //
    const minDate = new Date();

    // หลักการและเหตุผล
    const [PrinciplesAndReasonsCount, setPrinciplesAndReasonsount] = useState(1);
    const increasePrinciplesAndReasons = () => {
        if (PrinciplesAndReasonsCount < 5) {
            setPrinciplesAndReasonsount(PrinciplesAndReasonsCount + 1);
        }
    };
    const decreasePrinciplesAndReasons = () => {
        if (PrinciplesAndReasonsCount > 1) {
            setPrinciplesAndReasonsount(PrinciplesAndReasonsCount - 1);
            // Reset corresponding studentTypeNumber state variables to 0
            switch (PrinciplesAndReasonsCount) {
                case 4:
                    setPrinciplesAndReasons5('');
                    break;
                case 3:
                    setPrinciplesAndReasons4('');
                    break;
                case 2:
                    setPrinciplesAndReasons3('');
                    break;
                case 1:
                    setPrinciplesAndReasons2('');
                    break;
                case 0:
                    setPrinciplesAndReasons1('');
                    break;
                default:
                // Handle other cases if needed
            }
        }
    };

    // วัตถุประสงค์
    const [itemCount, setItemCount] = useState(1);
    const increaseItemCount = () => {
        if (itemCount < 5) {
            setItemCount(itemCount + 1);
        }
    };
    const decreaseItemCount = () => {
        if (itemCount > 1) {
            setItemCount(itemCount - 1);
            // Reset corresponding studentTypeNumber state variables to 0
            switch (itemCount) {
                case 4:
                    setObjective5('');
                    break;
                case 3:
                    setObjective4('');
                    break;
                case 2:
                    setObjective3('');
                    break;
                case 1:
                    setObjective2('');
                    break;
                case 0:
                    setObjective1('');
                    break;
                default:
                // Handle other cases if needed
            }
        }
    };

    // เพิ่มลักษณะรูปแบบโครงการ
    const [project_typeCount, setProjectTypeCount] = useState(1);
    const increaseProjectTypeCount = () => {
        if (project_typeCount < 5) {
            setProjectTypeCount(project_typeCount + 1);
        }
    };
    const decreaseProjectTypeCount = () => {
        if (project_typeCount > 1) {
            setProjectTypeCount(project_typeCount - 1);
            // Reset corresponding studentTypeNumber state variables to 0
            switch (project_typeCount) {
                case 4:
                    setProjectType5('');
                    break;
                case 3:
                    setProjectType4('');
                    break;
                case 2:
                    setProjectType3('');
                    break;
                case 1:
                    setProjectType2('');
                    break;
                case 0:
                    setProjectType1('');
                    break;
                default:
                // Handle other cases if needed
            }
        }
    };

    const createProject = (yearlyCountsketch) => {
        Axios.put(`http://localhost:3001/student/project/create2/${id_projects}`, {
            principles_and_reasons1: principles_and_reasons1,
            principles_and_reasons2: principles_and_reasons2,
            principles_and_reasons3: principles_and_reasons3,
            principles_and_reasons4: principles_and_reasons4,
            principles_and_reasons5: principles_and_reasons5,
            objective1: objective1,
            objective2: objective2,
            objective3: objective3,
            objective4: objective4,
            objective5: objective5,
            project_type1: project_type1,
            project_type2: project_type2,
            project_type3: project_type3,
            project_type4: project_type4,
            project_type5: project_type5,
            is_newproject: is_newproject,
            is_continueproject: is_continueproject,
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
                    principles_and_reasons1: principles_and_reasons1,
                    principles_and_reasons2: principles_and_reasons2,
                    principles_and_reasons3: principles_and_reasons3,
                    principles_and_reasons4: principles_and_reasons4,
                    principles_and_reasons5: principles_and_reasons5,
                    objective1: objective1,
                    objective2: objective2,
                    objective3: objective3,
                    objective4: objective4,
                    objective5: objective5,
                    project_type1: project_type1,
                    project_type2: project_type2,
                    project_type3: project_type3,
                    project_type4: project_type4,
                    project_type5: project_type5,
                    is_newproject: is_newproject,
                    is_continueproject: is_continueproject,
                    problem1: problem1,
                    result1: result1,
                    problem2: problem2,
                    result2: result2,
                    problem3: problem3,
                    result3: result3,

                }
            ]);
        });
        switchToCSDPerson();


    }



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
                                        <Button variant="primary" className="ml-5 mb-3" onClick={increasePrinciplesAndReasons}>
                                            เพิ่มหลักการและเหตุผล
                                        </Button>
                                    )}
                                    {PrinciplesAndReasonsCount > 1 && (
                                        <Button variant="danger" className="ml-5 mb-3" onClick={decreasePrinciplesAndReasons}>
                                            ลดหลักการและเหตุผล
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
                                                            case 3:
                                                                setObjective4(event.target.value);
                                                                break;
                                                            case 4:
                                                                setObjective5(event.target.value);
                                                                break;
                                                            default:
                                                            // Handle other cases if needed
                                                        }
                                                    }}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                    {itemCount < 5 && (
                                        <Button variant="primary" className="ml-5 mb-3" onClick={increaseItemCount}>
                                            เพิ่มวัตถุประสงค์
                                        </Button>
                                    )}
                                    {itemCount > 1 && (
                                        <Button variant="danger" className="ml-5 mb-3" onClick={decreaseItemCount}>
                                            ลดวัตถุประสงค์
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
                                        <Button variant="primary" className="ml-5 mb-3" onClick={increaseProjectTypeCount}>
                                            เพิ่มลักษณะรูปแบบโครงการ
                                        </Button>
                                    )}
                                    {project_typeCount > 1 && (
                                        <Button variant="danger" className="ml-5 mb-3" onClick={decreaseProjectTypeCount}>
                                            ลดลักษณะรูปแบบโครงการ
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



                        </tbody>
                    </Table>
                    <div>

                        <Button onClick={createProject} type="submit" variant="info">อัพขึ้นสู่ระบบ</Button>
                    </div>
                </Card>
            </Col>
        </>
    );
}
export default CSD_detail2