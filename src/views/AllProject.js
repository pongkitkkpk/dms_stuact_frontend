import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook
import Axios from 'axios';
import { Card, Container, Row, Col, Button, InputGroup, Form } from "react-bootstrap";

function AllProject() {
    const [projectList, setProjectList] = useState([]);
    const [id_student, setIDStudent] = useState('s6');
    const [codeclub, setCodeClub] = useState('B660420200');
    const history = useHistory(); // Initialize useHistory hook

    const getProjects = () => {
        Axios.get(`http://localhost:3001/student/project/getallcodeclub/${codeclub}`).then((response) => {
            setProjectList(response.data);
        });
    };

    useEffect(() => {
        getProjects();
    }, []);

    useEffect(() => {
        console.log(projectList)
        console.log(id_student)
        console.log(codeclub)
    }, [projectList, id_student, codeclub]);

    const handleShowDetail = (id_project) => {
        // Redirect to ProjectDocument component with id_project as parameter
        
        history.push(`project-doc/${id_project}`);
    };

    return (
        <>
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
                                className={`card-with-border-${project.yearly_count === "" ? 'secondary' : 'warning'}`}
                                style={{ margin: '0% 0' }}
                            >
                                <Card.Body>
                                    <div className="status-tag">
                                        <span className={`badge badge-${project.yearly_count === "" ? 'secondary' : 'warning'}`}>ฉบับ ร่าง</span>
                                    </div>
                                    <Card.Title as="h4">{project.project_name}</Card.Title>
                                    <p className="card-category">{project.project_number}</p>
                                    <div className="stats">
                                        <i className="fas fa-history"></i>
                                        {new Date(project.created_at).toLocaleDateString('en-GB')}
                                        <span>  </span>
                                        <i className="fas fa-pencil-alt"></i>
                                        {project.id_student}
                                    </div>
                                    <Button
                                        variant={project.yearly_count === "" ? 'secondary' : 'warning'}
                                        className={`show-detail-button-${project.yearly_count === "" ? 'secondary' : 'warning'}`}
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