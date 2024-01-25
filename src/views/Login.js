import React, { useState } from "react";
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import { FiEye, FiEyeOff } from "react-icons/fi";

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card>
                        <Card.Header className="bg-dark text-white">
                            <Card.Title as="h4" className="text-center text-white mb-2">
                                <i className="nc-icon nc-attach-87"></i> กรุณาป้อน ICIT Account และรหัสผ่าน
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form className="mx-5 py-2">
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>ICIT Account</Form.Label>
                                    <Form.Control type="text" placeholder="sxxxxxxxxxxxxx" />
                                </Form.Group>

                                <div style={{ position: "relative" }}>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>รหัสผ่าน</Form.Label>
                                        <Form.Control
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Password"
                                        />
                                    </Form.Group>
                                    
                                    <Button
                                        variant="link"
                                        className="position-absolute"
                                        style={{ right: "0px", top: "70.5%", transform: "translateY(-50%)" }}
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                                    </Button>
                                </div>

                                <Form.Text className="text-muted">
                                    ฟหกดฟหกดฟหกด
                                </Form.Text>
                                <Form.Text className="text-muted">
                                    asdfsadfsdf
                                </Form.Text>

                                <Button variant="primary" type="submit">
                                    Login
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
