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

function CSD_person({ id_projects,switchToCSDTimestep }) {
    const [codeclub, setCodeClub] = useState('');
    const [yearly_countsketch, setYearlyCountSketch] = useState('');

    const [pPersonData, setPPersonData] = useState([]);
    const [pPersonid, setPPersonID] = useState([]);

    const getpPersonData = () => {
        Axios.get('http://localhost:3001/p_person').then((response) => {
            setPPersonData(response.data);
        });
    };

    useEffect(() => {
        getpPersonData();
    }, []);

    useEffect(() => {
        const idinperson = pPersonData.filter(person => person.id_projects === id_projects);
        console.log("id" + id_projects);
      
        // Assuming idinperson is an array and you want to get data from the first element
        if (idinperson.length > 0) {
          const { codeclub, yearly_countsketch } = idinperson[0];
          setCodeClub(codeclub);
          setYearlyCountSketch(yearly_countsketch);
        }
      
      }, [id_projects, pPersonData]);
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
    const [grandTotalExecutive, setGrandTotalExecutive] = useState(0);

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

    useEffect(()=>{
        console.log(executiveType1Name)
    },[executiveType1Name]);
    useEffect(() => {
        // Calculate total for executive category
        const totalExecutiveCount = Number(executiveType1Number) + Number(executiveType2Number) + Number(executiveType3Number) + Number(executiveType4Number) + Number(executiveType5Number);

        // Update the grand total state for executive
        setGrandTotalExecutive(totalExecutiveCount);
    }, [executiveType1Number, executiveType2Number, executiveType3Number, executiveType4Number, executiveType5Number]);
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
    const [grandTotalProfessor, setGrandTotalProfessor] = useState(0);
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

    useEffect(() => {
        // Calculate total for professor category
        const totalProfessorCount = Number(professorType1Number) + Number(professorType2Number) + Number(professorType3Number) + Number(professorType4Number) + Number(professorType5Number);

        // Update the grand total state for professor
        setGrandTotalProfessor(totalProfessorCount);
    }, [professorType1Number, professorType2Number, professorType3Number, professorType4Number, professorType5Number]);
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
    const [grandTotalStudent, setGrandTotalStudent] = useState(0);
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

    useEffect(() => {
        // Calculate total for student category
        const totalStudentCount = Number(studentType1Number) + Number(studentType2Number) + Number(studentType3Number) + Number(studentType4Number) + Number(studentType5Number);

        // Update the grand total state for student
        setGrandTotalStudent(totalStudentCount);
    }, [studentType1Number, studentType2Number, studentType3Number, studentType4Number, studentType5Number]);
    // ********************************************** นักศึกษา *********************************************

    // ********************************************** วิทยากร *********************************************

    const [expertType1Name, setExpertType1Name] = useState('');
    const [expertType1Number, setExpertType1Number] = useState('');
    const [expertType2Name, setExpertType2Name] = useState('');
    const [expertType2Number, setExpertType2Number] = useState('');
    const [expertType3Name, setExpertType3Name] = useState('');
    const [expertType3Number, setExpertType3Number] = useState('');
    const [expertType4Name, setExpertType4Name] = useState('');
    const [expertType4Number, setExpertType4Number] = useState('');
    const [expertType5Name, setExpertType5Name] = useState('');
    const [expertType5Number, setExpertType5Number] = useState('');

    const [expertTypeCount, setExpertTypeCount] = useState(1);
    const [grandTotalExpert, setGrandTotalExpert] = useState(0);
    const increaseExpertTypeCount = () => {
        if (expertTypeCount < 5) {
            setExpertTypeCount(expertTypeCount + 1);
        }
    };
    const decreaseExpertTypeCount = () => {
        if (expertTypeCount > 1) {
            setExpertTypeCount(expertTypeCount - 1);
            // Reset corresponding studentTypeNumber state variables to 0
            switch (studentTypeCount) {
                case 5:
                    setExpertType5Number(0);
                    break;
                case 4:
                    setExpertType4Number(0);
                    break;
                case 3:
                    setExpertType3Number(0);
                    break;
                case 2:
                    setExpertType2Number(0);
                    break;
                case 1:
                    setExpertType1Number(0);
                    break;
                default:
                // Handle other cases if needed
            }
        }
    };

    useEffect(() => {
        const totalExpertCount = Number(expertType1Number) + Number(expertType2Number) + Number(expertType3Number) + Number(expertType4Number) + Number(expertType5Number);

        setGrandTotalExpert(totalExpertCount);
    }, [expertType1Number, expertType2Number, expertType3Number, expertType4Number, expertType5Number]);

    // ********************************************** วิทยากร *********************************************

    const [grandTotalAll, setGrandTotalAll] = useState('')
    useEffect(() => {
        const totalAll = Number(grandTotalExecutive) + Number(grandTotalProfessor) + Number(grandTotalStudent) + Number(grandTotalExpert) + Number(expertType5Number);

        setGrandTotalAll(totalAll);

    }, [grandTotalExecutive, , grandTotalProfessor, grandTotalStudent, grandTotalExpert]);

    const createPerson = () => {
        Axios.post('http://localhost:3001/createperson_project', {
            id_projects,
            codeclub,
            yearly_countsketch,
            executiveType1Name,
            executiveType1Number,
            executiveType2Name,
            executiveType2Number,
            executiveType3Name,
            executiveType3Number,
            executiveType4Name,
            executiveType4Number,
            executiveType5Name,
            executiveType5Number,
            grandTotalExecutive,
            professorType1Name,
            professorType1Number,
            professorType2Name,
            professorType2Number,
            professorType3Name,
            professorType3Number,
            professorType4Name,
            professorType4Number,
            professorType5Name,
            professorType5Number,
            grandTotalProfessor,
            studentType1Name,
            studentType1Number,
            studentType2Name,
            studentType2Number,
            studentType3Name,
            studentType3Number,
            studentType4Name,
            studentType4Number,
            studentType5Name,
            studentType5Number,
            grandTotalStudent,
            expertType1Name,
            expertType1Number,
            expertType2Name,
            expertType2Number,
            expertType3Name,
            expertType3Number,
            expertType4Name,
            expertType4Number,
            expertType5Name,
            expertType5Number,
            grandTotalExpert,
            grandTotalAll
        })
            .then(response => {
                console.log(response.data);
                // Handle success, if needed
            })
            .catch(error => {
                console.error('There was an error!', error);
                // Handle error, if needed
            });
            switchToCSDTimestep();
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
export default CSD_person