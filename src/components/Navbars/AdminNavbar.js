
import React, { Component, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useAuth } from "Auth/AuthContext";

import { Navbar, Container, Nav, Dropdown, Button } from "react-bootstrap";
import routes from "routes.js";

function Header() {
  const location = useLocation();
  const history = useHistory();
  const { isAuthenticated, handleLogout } = useAuth();

  const storedUserData = sessionStorage.getItem('user');
  const storedUser = storedUserData ? JSON.parse(storedUserData) : {};
  const storedUserRole = storedUser.account_type; // Accessing the account_type property

  const logout = () => {
    handleLogout(); // Call handleLogout function
    history.push('/guest/login'); // Redirect to login page after logout
  };
  const mobileSidebarToggle = (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  };

  const getBrandText = () => {
    const currentRoute = routes.find(route => location.pathname.includes(route.path));
    return currentRoute ? currentRoute.name : "Home";
  };



  return (
    <>
      <Navbar bg="light" expand="lg" >
        <Container fluid>
          <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">

            <Navbar.Brand
              href="#home"
              onClick={(e) => e.preventDefault()}
              className="mr-2"
            >
              <div>ระบบขออนุมัติและจัดการกิจกรรม</div>
            </Navbar.Brand>
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav mr-auto" navbar>



            </Nav>
            <Nav className="ml-auto" navbar style={{ marginRight: "10%" }}>
              <Nav.Item style={{ marginTop: "1%" }}>
                <Nav.Link
                  className="m-0"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="no-icon">Account</span>
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                {isAuthenticated ? (
                    <Dropdown as={Nav.Item} style={{ marginTop: "1%" }}>
                    <Dropdown.Toggle
                      aria-expanded={false}
                      aria-haspopup={true}
                      as={Nav.Link}
                      data-toggle="dropdown"
                      id="navbarDropdownMenuLink"
                      variant="default"
                      className="m-0"
                    >
                      <span className="no-icon">{storedUser.displayname}</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu aria-labelledby="navbarDropdownMenuLink" style={{ marginTop: "-8px" }}>
                      
                      {/* account_type */}
                      <Dropdown.Item
                        href="#pablo"
                        disabled // Disable this item
                        className="text-center" // Add this class to center the text
                      >
                        
                        {storedUser.SEX === 'M' ? (
                          <span role="img" aria-label="Man" style={{ marginRight: "0.5rem" }}>👨</span>
                        ) : storedUser.SEX === 'W' ? (
                          <span role="img" aria-label="Woman" style={{ marginRight: "0.5rem" }}>👩</span>
                        ) : null}
                    
                      </Dropdown.Item>
                      {/* account_type */}
                      <Dropdown.Item
                        href="#pablo"
                        style={{marginTop:"-5%"}}
                        disabled // Disable this item
                        className="text-center" // Add this class to center the text
                      >
                      
                        {storedUser.account_type}
                      </Dropdown.Item>
                      {/* username */}
                      <Dropdown.Item
                        href="#pablo"
                        style={{marginTop:"-5%"}}
                        disabled // Disable this item
                        className="text-center" // Add this class to center the text
                      >
                        {storedUser.username}
                      </Dropdown.Item>
                      {/* username_eng */}
                      <Dropdown.Item
                        href="#pablo"
                        style={{marginTop:"-5%"}}
                        disabled // Disable this item
                        className="text-center" // Add this class to center the text
                      >
                        {storedUser.firstname_en} {storedUser.lastname_en}
                      </Dropdown.Item>
                      <div className="divider" style={{marginTop:"0%"}}></div>
                      <Dropdown.Item
                        href="#pablo"
                        style={{marginTop:"0%"}}
                        disabled // Disable this item
                        className="text-center" // Add this class to center the text
                      >
                        {storedUser.CAMPUS_NAME}
                      </Dropdown.Item>
                      <div className="divider"></div>
                      <Dropdown.Item
                        href="#pablo"
                        onClick={logout}
                        className="text-center" // Add this class to center the text
                      >
                        ออกจากระบบ
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                ) : (
                  <Button variant="primary" href="/guest/login">
                    เข้าสู่ระบบ
                  </Button>
                )}
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Navbar.Brand
          href="#home"
          onClick={(e) => e.preventDefault()}
          className="p-4"
        >
          Home <i className="nc-icon nc-stre-right" style={{ transform: "scale(0.)" }}></i> {getBrandText()}
        </Navbar.Brand>
      </div>
    </>
  );
}

export default Header;
