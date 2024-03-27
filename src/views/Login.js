// Login.js
import React, { useState } from "react";
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { useAuth } from "Auth/AuthContext";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { handleLogin } = useAuth();
    const history = useHistory();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(username, password, history);
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={10}>
                    <Card>
                        <Card.Header className="bg-dark text-white">
                            <Card.Title as="h4" className="text-center text-white mb-2">
                                <i className="nc-icon nc-attach-87"></i> Please Enter Your Credentials
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form className="mx-5 py-2" onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                </Form.Group>

                                <div style={{ position: "relative" }}>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
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
