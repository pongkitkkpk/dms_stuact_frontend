// Login.js
import React, { useState } from "react";
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { useAuth } from "Auth/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { handleLogin } = useAuth();
  const history = useHistory();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleLogin(username, password, history);
    } catch (error) {
      console.error('Error during login:', error);
      // Handle login error, e.g., show an alert to the user
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card>
            <Card.Header
              style={{
                backgroundColor: "#FF8B13",
                color: "white",
                paddingBottom: "5px",
                height: "63px",
              }}
            >
              <Card.Title as="h4" className="text-center text-white">
                <div style={{ fontWeight: "bold", alignContent: "center" }}>
                  <i
                    className="nc-icon nc-circle-09"
                    style={{ fontWeight: "bold", marginRight: "10px" }}
                  ></i>
                  กรุณาป้อน ICIT Account เพื่อเข้าสู่ระบบ
                </div>
                {/* <div> Please Enter Your Credentials</div>  */}
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Form className="mx-5 py-2" onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>ICIT Account</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="กรอก ICIT Account"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>

                <div style={{ position: "relative" , marginTop: "10px"}}>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>รหัสผ่าน</Form.Label>
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="กรอกรหัสผ่าน"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  <Button
                    variant="link"
                    className="position-absolute"
                    style={{
                      right: "0px",
                      top: "70.5%",
                      transform: "translateY(-50%)",
                    }}
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <FiEyeOff size={16} />
                    ) : (
                      <FiEye size={16} />
                    )}
                  </Button>
                </div>

                <div style={{ display: "flex", justifyContent: "center", marginTop: "15px"}}>
                  <Button variant="warning" type="submit" className="btn-login">
                    <div style={{fontSize:"14px"}}>เข้าสู่ระบบ</div>
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
