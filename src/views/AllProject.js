import React, { useState } from 'react';
import Axios from 'axios';
import { Card, Container, Row, Col } from "react-bootstrap";

function AllProject() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md="12">
                        <Card style={{ borderLeft: '4px solid red' }}>
                            {/* <div style="background-color: tomato; border: dotted 2px greenyellow; color: white; font-weight: bold;">
                                Hello Devdit
                            </div> */}

                            <Card.Body>
                                <Card.Title as="h4">Project Title</Card.Title>
                                <p className="card-category">Project subtitle or category</p>
                                <div className="stats">
                                    <i className="fas fa-history"></i>
                                    Updated 3 minutes ago
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container >
        </>
    );
}

export default AllProject;
