import React, { useState } from 'react';

// react-bootstrap components
import {
    Badge,
    Button,
    Card,
    Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
    Form
} from "react-bootstrap";
import setCode from "./setCode.json"
import Axios from 'axios';

function TableAdd() {
    const [userList, setUserList] = useState([]);

    const [is_student, setIs_student] = useState(true);//รอตรวจจาก api
    const [is_centeragency, setIs_centeragency] = useState(false);
    const [positionagency, setPositionagency] = useState(false);


    const [id_student, setId_student] = useState("");
    const [name_student, setName_student] = useState("ชื่อค้าบบบ");
    const [department, setDepartment] = useState("BBB");
    const [position, setPosition] = useState("");
    const [clubName, setClubname] = useState("");

    const [campus, setCampus] = useState("Bangkok");//รอเชื่อม api
    const [yearly, setYearly] = useState(66); // เวลา
    const [codedivision, setCodedivision] = useState("");
    const [codeagency, setCodeagency] = useState("");
    const [codeworkgroup, setCodeworkgroup] = useState("00");
    const [codebooksome, setCodebooksome] = useState("");


    const handleDivisionChange = (division) => {
        setCodedivision(division);
        setCodeagency(null);
        setCodeworkgroup(null);
    };

    const handleAgencyChange = (agency) => {
        setCodeagency(agency);
        setCodeworkgroup(null);
    };

    const handleWorkGroupChange = (workGroup) => {
        setCodeworkgroup(workGroup);
    };

    const addUser = () => {
        const campusAbbreviation = campus.substring(0, 1);
        const numericCodedivision = codedivision.replace(/\D/g, '');
        const numericCodeagency = codeagency.replace(/\D/g, '');
        const numericCodeworkgroup = codeworkgroup.replace(/\D/g, '');

        const newCodebooksome = `${campusAbbreviation}${yearly}${numericCodedivision}${numericCodeagency}${numericCodeworkgroup}`;
        setCodebooksome(newCodebooksome);
        Axios.post('http://localhost:3001/createUser', {
            id_student: id_student,
            name_student: name_student,
            department: department,
            position: position,
            clubName: clubName, // Change to match the column name in the table
            campus: campus,
            yearly: yearly, // Ensure all required fields are included
            codedivision: codedivision,
            codeagency: codeagency,
            codeworkgroup: codeworkgroup,
            codebooksome: newCodebooksome
        }).then(() => {
            setUserList([
                ...userList,
                {
                    id_student: id_student,
                    name_student: name_student,
                    department: department,
                    position: position,
                    clubName: clubName, // Change to match the column name in the table
                    campus: campus,
                    yearly: yearly, // Ensure all required fields are included
                    codedivision: codedivision,
                    codeagency: codeagency,
                    codeworkgroup: codeworkgroup,
                    codebooksome: newCodebooksome
                }
            ])
        })
    }


    return (
        <>
            <Container fluid>
                <Card className="strpied-tabled-with-hover">
                    <Card.Header>
                        <Card.Title as="h4">area เพิ่ม role ของบุคคลนศ</Card.Title>
                        <p className="card-category">
                            Here is a subtitle for this table
                        </p>
                    </Card.Header>
                    <Card.Body>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="IDCode">
                                ID Code :
                            </Form.Label>
                            <Form.Control type="text" placeholder="Enter ID Code" onChange={(event) => {
                                setId_student(event.target.value)
                            }} />

                            <p>ตำแหน่งแสดงชื่อ รายละเอียด ของนศ. ชั้นปีการศึกษา วิทยาเขต</p>

                            <Form.Label htmlFor="position" className="form-label">
                                ตำแหน่ง :
                            </Form.Label>

                            {/* เป็นนศ. */}
                            {is_student && (
                                <>
                                    <Form.Select aria-label="Default select example" onChange={(event) => {
                                        setPosition(event.target.value)
                                    }} required>
                                        <option value="">โปรดเลือกตำแหน่ง</option>
                                        <option value="S">นักศึกษาประสานงาน</option>
                                        <option value="SH">ประธานสภา/นายกองค์การ/ประธานชมรม</option>
                                    </Form.Select>
                                    <Form.Label htmlFor="positionagency" className="form-label">
                                        เป็นหน่วยงาน :
                                    </Form.Label>
                                    <Form.Select aria-label="Default select example" onChange={(event) => {
                                        setPositionagency(event.target.value)
                                    }} required>
                                        <option value="">โปรดเลือกหน่วยงาน</option>
                                        <option value="center">หน่วยงานกลาง</option>
                                        <option value="smo">สโมสรนักศึกษา</option>
                                        <option value="etc">อื่นๆ</option>
                                    </Form.Select>
                                    {positionagency === "center" && (
                                        // Render something when "หน่วยงานกลาง" is selected
                                        <>
                                            <Form.Label htmlFor="position" className="form-label">
                                                ชมรม/หน่วยงาน/องค์กร:
                                            </Form.Label>
                                            <Form.Select aria-label="Default select example" onChange={(event) => {
                                                setCodedivision("D04")
                                                setCodeagency(event.target.value)

                                                const selectedText = event.target.options[event.target.selectedIndex].text;
                                                setClubname(selectedText)
                                            }} required>
                                                <option value="">กรุณาเลือก ชมรม/หน่วยงาน/องค์กร</option>
                                                {setCode.Divison.D04.Agency.map((agencyGroup, index) => {
                                                    const campusData = agencyGroup[campus]; // Get data for the selected campus
                                                    return (
                                                        campusData && (
                                                            <optgroup key={index} label={agencyGroup.name}>
                                                                {Object.keys(campusData).map((agencyKey) => (
                                                                    agencyKey !== 'name' && (
                                                                        <option key={agencyKey} value={agencyKey}>
                                                                            {/* แบบแสดงรหัส */}
                                                                            {` ${agencyKey} ${campusData[agencyKey]}`}
                                                                            {` ${campusData[agencyKey]}`}
                                                                        </option>
                                                                    )
                                                                ))}
                                                            </optgroup>
                                                        )
                                                    );
                                                })}
                                            </Form.Select>
                                        </>
                                    )}
                                    {positionagency === "smo" && (
                                        // Render something when "หน่วยงานกลาง" is selected
                                        <>
                                            <Form.Label htmlFor="position" className="form-label">
                                                สโมสรนักศึกษา:
                                            </Form.Label>
                                            <Form.Select aria-label="Default select example" onChange={(event) => {
                                                setCodedivision("D02")
                                                setCodeagency(event.target.value)
                                                const selectedText = event.target.options[event.target.selectedIndex].text;
                                                setClubname(selectedText)
                                            }} required>
                                                <option value="">กรุณาเลือก สโมสรนักศึกษา</option>
                                                {setCode.Divison.D02.Agency.map((agencyGroup, index) => (
                                                    agencyGroup.name != 'คณะ/วิทยาลัย' && (
                                                        <optgroup key={index} label={agencyGroup.name}>
                                                            {Object.keys(agencyGroup).map((agencyKey) => (
                                                                agencyKey !== 'name' && (
                                                                    <option key={agencyKey} value={agencyKey}>
                                                                        {/* แบบแสดงรหัส */}
                                                                        {`${agencyKey}  ${agencyGroup[agencyKey]}`}
                                                                        {` ${agencyGroup[agencyKey]}`}

                                                                    </option>
                                                                )
                                                            ))}
                                                        </optgroup>
                                                    )))}
                                            </Form.Select>
                                        </>

                                    )}
                                    {positionagency === "etc" && (
                                        // Render something when "หน่วยงานกลาง" is selected
                                        <>
                                            <Form.Label htmlFor="position" className="form-label">
                                                ชมรม/หน่วยงาน/องค์กร:
                                            </Form.Label>
                                            <Form.Select aria-label="Default select example" onChange={(event) => {
                                                setCodedivision(event.target.value)
                                                setCodeagency("001")
                                                const selectedText = event.target.options[event.target.selectedIndex].text;
                                                setClubname(selectedText)
                                            }} required>
                                                <option value="">กรุณาเลือก</option>
                                                {Object.keys(setCode.Divison).map((divisionKey) => (
                                                    (divisionKey === 'D06' || divisionKey === 'D07' || divisionKey === 'D08' || divisionKey === 'D09' || divisionKey === 'D10' || divisionKey === 'D11' || divisionKey === 'D12') && (
                                                        <option key={divisionKey} value={divisionKey}>
                                                            {/* แบบแสดงรหัส */}
                                                            {`${divisionKey}  ${setCode.Divison[divisionKey].name}`}
                                                            {/* {`${setCode.Divison[divisionKey].name}`} */}
                                                        </option>
                                                    )
                                                ))}
                                            </Form.Select>
                                        </>
                                    )}
                                </>
                            )}
                            {!is_student && (
                                <>
                                    <Form.Select aria-label="Default select example" onChange={(event) => {
                                        setPosition(event.target.value)
                                    }} required>
                                        <option >เลือกบลาๆ</option>
                                        <option value="Ad">อาจารย์ที่ปรึกษา</option>
                                        <option value="Stuact">บุคลการกองกิจการนักศึกษา</option>
                                    </Form.Select>
                                    <Form.Label htmlFor="position" className="form-label">
                                        ฝ่าย:
                                    </Form.Label>
                                    <Form.Select aria-label="Default select example" onChange={(event) => {
                                        setCodedivision(event.target.value)
                                        console.log(codedivision)
                                        const selectedText = event.target.options[event.target.selectedIndex].text;
                                        setClubname(selectedText)
                                    }} required>
                                        <option>กรุณาเลือก</option>
                                        {Object.keys(setCode.Divison).map((divisionKey) => (
                                            (divisionKey === 'D01' || divisionKey === 'D02' || divisionKey === 'D03' || divisionKey === 'D05') && (
                                                <option key={divisionKey} value={divisionKey}>
                                                    {/* แบบแสดงรหัส */}
                                                    {`${divisionKey}  ${setCode.Divison[divisionKey].name}`}
                                                    {/* {`${setCode.Divison[divisionKey].name}`} */}
                                                </option>
                                            )
                                        ))}
                                    </Form.Select>


                                    {codedivision === 'D01' && (
                                        <>
                                            <Form.Label htmlFor="position" className="form-label">
                                                หน่วยงาน:
                                            </Form.Label>
                                            <Form.Select aria-label="Default select example" onChange={(event) => {
                                                setCodedivision("D01")
                                                setCodeagency(event.target.value)
                                                const selectedText = event.target.options[event.target.selectedIndex].text;
                                                setClubname(selectedText)
                                            }} required>
                                                <option>กรุณาเลือก</option>
                                                {setCode.Divison.D01.Agency.map((agencyGroup, index) => (
                                                    <optgroup key={index} label={agencyGroup.name}>
                                                        {Object.keys(agencyGroup).map((agencyKey) => (
                                                            agencyKey !== 'name' && (
                                                                <option key={agencyKey} value={agencyKey}>
                                                                    {index === 1 ? ` ${agencyGroup[agencyKey]}` : agencyGroup[agencyKey].name}
                                                                </option>
                                                            )
                                                        ))}
                                                    </optgroup>
                                                ))}
                                            </Form.Select>
                                        </>
                                    )}
                                    {codedivision === 'D02' && (
                                        <>
                                            <Form.Label htmlFor="position" className="form-label">
                                                หน่วยงาน:
                                            </Form.Label>
                                            <Form.Select aria-label="Default select example" onChange={(event) => {
                                                setCodedivision("D02")
                                                setCodeagency(event.target.value)
                                                const selectedText = event.target.options[event.target.selectedIndex].text;
                                                setClubname(selectedText)
                                            }} required>
                                                <option>กรุณาเลือก</option>
                                                {setCode.Divison.D02.Agency.map((agencyGroup, index) => (
                                                    agencyGroup.name != 'สโมสรนักศึกษาคณะ/วิทยาลัย' && (
                                                        <optgroup key={index} label={agencyGroup.name}>
                                                            {Object.keys(agencyGroup).map((agencyKey) => (
                                                                agencyKey !== 'name' && (
                                                                    <option key={agencyKey} value={agencyKey}>
                                                                        {/* แบบแสดงรหัส */}
                                                                        {`${agencyKey} ${agencyGroup[agencyKey].name}`}
                                                                        {/* {`${agencyGroup[agencyKey].name}`} */}
                                                                    </option>
                                                                )
                                                            ))}
                                                        </optgroup>
                                                    )))}
                                            </Form.Select>
                                        </>
                                    )}
                                    {codedivision === 'D03' && (
                                        <>
                                            <Form.Label htmlFor="position" className="form-label">
                                                หน่วยงาน:
                                            </Form.Label>
                                            <Form.Select aria-label="Default select example" onChange={(event) => {
                                                setCodedivision("D03")
                                                setCodeagency(event.target.value)
                                                const selectedText = event.target.options[event.target.selectedIndex].text;
                                                setClubname(selectedText)
                                            }} required>
                                                <option>กรุณาเลือก</option>
                                                {
                                                    setCode.Divison.D03.Agency.map((agencyGroup, index) => (
                                                        <optgroup key={index} label={agencyGroup.name}>
                                                            {Object.keys(agencyGroup).map((agencyKey) => (
                                                                agencyKey !== 'name' && (
                                                                    <option key={agencyKey} value={agencyKey}>
                                                                        {/* แบบแสดงรหัส */}
                                                                        {`${agencyKey}  ${agencyGroup[agencyKey]}`}
                                                                        {/* {` ${agencyGroup[agencyKey]}`} */}
                                                                    </option>
                                                                )
                                                            ))}
                                                        </optgroup>
                                                    ))
                                                }
                                            </Form.Select>
                                        </>
                                    )}
                                    {codedivision === 'D05' && (
                                        <>
                                            <Form.Label htmlFor="position" className="form-label">
                                                หน่วยงาน:
                                            </Form.Label>
                                            <Form.Select aria-label="Default select example" onChange={(event) => {
                                                setCodedivision("D05")
                                                setCodeagency(event.target.value)
                                                const selectedText = event.target.options[event.target.selectedIndex].text;
                                                setClubname(selectedText)
                                            }} required>
                                                <option>กรุณาเลือก</option>
                                                {Object.keys(setCode.Divison.D05.Agency).map((agencyKey) => (
                                                    <option key={agencyKey} value={agencyKey}>
                                                        {/* แบบแสดงรหัส */}
                                                        {`${agencyKey} ${setCode.Divison.D05.Agency[agencyKey]}`}
                                                        {/* {`${setCode.Divison.D05.Agency[agencyKey]}`} */}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                        </>
                                    )}
                                    {/* WorkGroup Dropdown */}
                                    {codeagency && codedivision !== 'D05'&& setCode.Divison[codedivision].Agency.map((agencyGroup, index) => (
                                        agencyGroup[codeagency]?.WorkGroup && (
                                            <select key={index} onChange={(e) => handleWorkGroupChange(e.target.value)}>
                                                <option value="">Select WorkGroup</option>
                                                {Object.keys(agencyGroup[codeagency].WorkGroup).map((workGroupKey) => (
                                                    <option key={workGroupKey} value={workGroupKey}>
                                                        {/* แบบแสดงรหัส */}
                                                        {/* {`${agencyKey} ${setCode.Divison.D05.Agency[agencyKey]}`} */}
                                                        {/* {`${setCode.Divison.D05.Agency[agencyKey]}`} */}
                                                        {`${workGroupKey} ${agencyGroup[codeagency].WorkGroup[workGroupKey]}`}
                                                    </option>
                                                ))}
                                            </select>
                                        )
                                    ))}

                                </>


                            )}



                            <Button
                                onClick={addUser}
                                type="submit"
                                variant="info"
                            >
                                Update Profile
                            </Button>

                        </Form.Group>
                    </Card.Body>
                </Card>
            </Container >
        </>
    );
}

export default TableAdd;
