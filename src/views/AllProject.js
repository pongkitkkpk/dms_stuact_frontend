import React, { useState } from 'react';
import Axios from 'axios';
import { Card, Container, Row, Col, Button, InputGroup, Form } from "react-bootstrap";

function AllProject() {

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
                        <Card className='card-with-border-warning ' style={{ "margin": "0% 0" }}>
                            <Card.Body>
                                <div className="status-tag">
                                    <span className="badge badge-warning">In Progress</span>
                                </div>
                                <Card.Title as="h4">Project Title</Card.Title>
                                <p className="card-category">Project subtitle or category</p>
                                <div className="stats">
                                    <i className="fas fa-history"></i>

                                    Updated 3 minutes ago
                                </div>
                                <Button
                                    variant="warning"
                                    className='show-detail-button-warning'
                                >
                                    Show Detail
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md="12">
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
                    </Col>

                </Row>
            </Container>
        </>
    );
}

export default AllProject;