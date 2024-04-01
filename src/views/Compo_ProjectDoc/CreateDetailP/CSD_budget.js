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

function CSD_budget({ id_projects }) {
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





    return (
        <>
            {/* วนค่าจากdatabase  */}
            <Col md="9">
                <Card>
                    <Table striped="columns">
                        <thead>
                            <tr>
                                <th>งบประมาณ</th>
                            </tr>
                        </thead>
                        <tbody>

                            {/* หมวดค่าตอบแทน */}
                            <tr style={{ backgroundColor: "white" }}>
                                <td className='head-side-td'>หมวดค่าตอบแทน</td>
                                <td className='back-side-td'>
                                    <Table striped="columns">
                                        <thead>
                                            <tr>
                                                <th>รายการค่าใช้จ่าย</th>
                                                <th>จำนวน(คน)</th>
                                                <th></th>
                                                <th>จำนวน(ชั่วโมง)</th>
                                                <th></th>
                                                <th>ราคา(ต่อชั่วโมง)</th>
                                                <th>ราคาสุทธิ</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Array.from({ length: PrinciplesAndReasonsCount }).map((_, index) => (
                                                <tr>
                                                    {/* list_typeA */}
                                                    <td>
                                                        <Form.Control
                                                            size="sm"
                                                            type="text"
                                                            placeholder={`รายการหมวดค่าตอบแทนที่ ${index + 1}`}
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
                                                                    case 3:
                                                                        setLocation4(event.target.value);
                                                                        break;
                                                                    case 4:
                                                                        setLocation5(event.target.value);
                                                                        break;
                                                                    default:
                                                                    // Handle other cases if needed
                                                                }
                                                            }}
                                                            ></Form.Control>
                                                    </td>
                                                    <td>2</td>
                                                    <td>3</td>
                                                    <td>4</td>
                                                    <td>5</td>
                                                    <td>6</td>
                                                    <td>7</td>
                                                </tr>
                                                // <li key={index}>
                                                //     <Form.Control
                                                //         size="sm"
                                                //         type="text"
                                                //         placeholder={`เพิ่มหลักการและเหตุผล ${index + 1}`}
                                                //         onChange={(event) => {
                                                //             switch (index) {
                                                //                 case 0:
                                                //                     setPrinciplesAndReasons1(event.target.value);
                                                //                     break;
                                                //                 case 1:
                                                //                     setPrinciplesAndReasons2(event.target.value);
                                                //                     break;
                                                //                 case 2:
                                                //                     setPrinciplesAndReasons3(event.target.value);
                                                //                     break;
                                                //                 case 3:
                                                //                     setPrinciplesAndReasons4(event.target.value);
                                                //                     break;
                                                //                 case 4:
                                                //                     setPrinciplesAndReasons5(event.target.value);
                                                //                     break;
                                                //                 default:
                                                //                 // Handle other cases if needed
                                                //             }
                                                //         }}
                                                //     />
                                                // </li>
                                            ))}
                                        </tbody>
                                    </Table>

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




                        </tbody>
                    </Table>
                    <div>

                        <Button type="submit" variant="info">อัพขึ้นสู่ระบบ</Button>
                    </div>
                </Card>
            </Col>
        </>
    );
}
export default CSD_budget