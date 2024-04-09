import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook
import Axios from 'axios';
import { Card, Container, Row, Col, Button, InputGroup, Form } from "react-bootstrap";

function AllProject() {
    const storedUserData = sessionStorage.getItem('user');
    const storedUser = storedUserData ? JSON.parse(storedUserData) : {};

    const studentuser = storedUser.username
    const strcodebooksomeoutyear = storedUser.codebooksomeoutyear
    const strcodebooksome = storedUser.codebooksome

    const [projectList, setProjectList] = useState([]);
    const [id_student, setIDStudent] = useState(studentuser);
    const [codeclub, setCodeClub] = useState(strcodebooksome);
    const [codebooksomeoutyear, setCodebooksomeoutyear] = useState(strcodebooksomeoutyear);
    const history = useHistory(); // Initialize useHistory hook

    const getProjects = () => {
        Axios.get(`http://localhost:3001/student/project/getcodebooksomeoutyear/${codebooksomeoutyear}`).then((response) => {
            setProjectList(response.data);
            
        });
    };

    useEffect(() => {
        getProjects();
    }, []);

    useEffect(()=>{
        console.log("projectListadf")
        console.log(projectList)
    },[projectList])

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };
    const handleShowDetail = (id_project) => {
        history.push(`project-doc/${id_project}`);
    };

    return (
        <>
            <h1>allrpo</h1>
            <Container fluid>
                <Row>
                    <Col md="12">
                        <InputGroup className="mb-3" style={{ width: '20%' }}>
                            <Form.Control
                                placeholder="ค้นหา"
                                aria-describedby="basic-addon2"
                                onChange={(event) => console.log(event.target.value)}
                            />
                            <InputGroup.Text><i className="fa fa-search" aria-hidden="true"></i></InputGroup.Text>
                        </InputGroup>

                        <br />
                        {projectList.map((project, index) => (
                            <Card
                                key={index}
                                className={`card-with-border-${project.project_phase === "0" ? 'secondary' : 'warning'}`}
                                style={{ margin: '0% 0' }}
                            >
                                <Card.Body>
                                    <div className="status-tag">
                                        <span className={`badge badge-${project.project_phase === "0" ? 'secondary' : 'warning'}`}>ฉบับ ร่าง</span>
                                    </div>
                                    <Card.Title as="h4">{project.project_name}id {project.id}</Card.Title>
                                    <p className="card-category">{project.project_number}</p>
                                    <div className="stats">
                                        <i className="fas fa-history"></i>
                                        <span>สร้างเมื่อ {formatDate(project.created_at)}</span>
                                        <i className="fas fa-history"></i>
                                        <span>
                                            {project.updated_at === null ? (
                                                "update เมื่อ ----"
                                            ) : (
                                                `update เมื่อ ${formatDate(project.updated_at)}`
                                            )}
                                        </span>
                                        <span>  </span>
                                        <i className="fas fa-pencil-alt"></i>
                                        {project.id_student}
                                    </div>
                                    <Button
                                        variant={project.project_phase === "0" ? 'secondary' : 'warning'}
                                        className={`show-detail-button-${project.project_phase === "0" ? 'secondary' : 'warning'}`}
                                        onClick={() => handleShowDetail(project.id)}
                                    >
                                        Show Detail
                                    </Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </Col>

                    {/* <Col md="12">
                        <Card className='card-with-border-success ' style={{ "margin": "0% 0" }}>
                            <Card.Body>
                                <div className="status-tag">
                                    <span className="badge badge-success">In Progress</span>
                                </div>
                                <Card.Title as="h4">Project Title</Card.Title>
                                <p className="card-category">Project subtitle or category</p>
                                <div className="stats">
                                    <i className="fas fa-history"></i>
                                    Updated 3 minutes ago
                                </div>
                                <Button
                                    variant="success"
                                    className='show-detail-button-success'
                                >
                                    Show Detail
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col> */}

                </Row>
            </Container>
        </>
    );
}

export default AllProject;