
import React, { Component, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useAuth } from "Auth/AuthContext";

import { Navbar, Container, Nav, Dropdown, Button } from "react-bootstrap";
import routes from "routes.js";

function Header() {
  const location = useLocation();
  const history = useHistory();
  const { isAuthenticated, handleLogout } = useAuth();
  const [screenWidth, setScreenWidth] = useState();

  const storedUserData = sessionStorage.getItem('user');
  const storedUser = storedUserData ? JSON.parse(storedUserData) : {};
  const storedUserRole = storedUser.account_type; // Accessing the account_type property

  useEffect(() => {
    const screenWidth = window.innerWidth;
    setScreenWidth(screenWidth)
  }, [window.innerWidth])
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
      <Navbar bg="light" expand="lg">
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
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {/* Your Nav.Link components */}
            </Nav>
            <Nav className="ml-auto" style={{ marginRight: "3%" }}>
              <Nav.Item style={{ marginTop: "1%" }}>
                {/* Your Account Nav.Link */}
                <Nav.Link
                  className="m-0"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  {screenWidth < 1000 ? (
                    // ในมือถือ
                    // style={{ position: "relative", left: "0%", width: "300px",marginTop:"-5%" }}
                    <span className="no-icon" >
                      {storedUser.displayname}
                    </span>
                  ) : (
                    <span className="no-icon">{storedUser.displayname}</span>
                  )}

                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                {/* Your Dropdown or Login Button */}
                {isAuthenticated ? (
                  <Dropdown as={Nav.Item} style={{ marginTop: "1%", position: "relative", }} drop="down">

                    {screenWidth < 1000 ? (
                      // ในมือถือ
                      <Dropdown.Toggle
                        aria-expanded={false}
                        aria-haspopup={true}
                        as={Nav.Link}
                        data-toggle="dropdown"
                        id="navbarDropdownMenuLink"
                        variant="default"
                        className="m-0 no-iconx"
                      >
                        <span className="" >
                          menu
                        </span>
                      </Dropdown.Toggle>
                    ) : (
                      <Dropdown.Toggle
                        aria-expanded={false}
                        aria-haspopup={true}
                        as={Nav.Link}
                        data-toggle="dropdown"
                        id="navbarDropdownMenuLink"
                        variant="default"
                        className="m-0"
                      >
                        <span className="no-icon">menu</span>
                      </Dropdown.Toggle>
                    )}

                    {screenWidth < 1000 ? (
                      <Dropdown.Menu aria-labelledby="navbarDropdownMenuLink"
                      >

                        {/* icon sex */}
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
                          style={{ marginTop: "-5%" }}
                          disabled // Disable this item
                          className="text-center" // Add this class to center the text
                        >
                          {storedUser.account_type}
                        </Dropdown.Item>
                        {/* username */}
                        <Dropdown.Item
                          href="#pablo"
                          style={{ marginTop: "-5%" }}
                          disabled // Disable this item
                          className="text-center" // Add this class to center the text
                        >
                          {storedUser.username}
                        </Dropdown.Item>
                        {/* username_eng */}
                        <Dropdown.Item
                          href="#pablo"
                          style={{ marginTop: "-5%" }}
                          disabled // Disable this item
                          className="text-center" // Add this class to center the text
                        >
                          {storedUser.firstname_en} {storedUser.lastname_en}
                        </Dropdown.Item>
                        {/* ------------------------ */}
                        <Dropdown.Divider />
                        {/* campus */}
                        <Dropdown.Item
                          href="#pablo"
                          style={{ marginTop: "0%" }}
                          disabled // Disable this item
                          className="text-center" // Add this class to center the text
                        >
                          {storedUser.CAMPUS_NAME}
                        </Dropdown.Item>
                        {/* หน่วยงาน */}
                        <Dropdown.Item
                          href="#pablo"
                          style={{ marginTop: "0%" }}
                          disabled // Disable this item
                          className="text-center" // Add this class to center the text
                        >
                          {storedUser.clubName}
                        </Dropdown.Item>
                        {/* ------------------------ */}
                        <Dropdown.Divider />
                        {/* logout */}
                        <Dropdown.Item
                          href="#pablo"
                          onClick={logout}
                          className="text-center" // Add this class to center the text
                        >
                          ออกจากระบบ
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    ) : (
                      <Dropdown.Menu aria-labelledby="navbarDropdownMenuLink"
                        style={{
                          marginTop: "-8px",
                          position: "absolute",
                          left: "-30%",
                          transform: "translateX(-50%)",

                        }} >

                        {/* icon sex */}
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
                          style={{ marginTop: "-5%" }}
                          disabled // Disable this item
                          className="text-center" // Add this class to center the text
                        >
                          {storedUser.account_type}
                        </Dropdown.Item>
                        {/* username */}
                        <Dropdown.Item
                          href="#pablo"
                          style={{ marginTop: "-5%" }}
                          disabled // Disable this item
                          className="text-center" // Add this class to center the text
                        >
                          {storedUser.username}
                        </Dropdown.Item>
                        {/* username_eng */}
                        <Dropdown.Item
                          href="#pablo"
                          style={{ marginTop: "-5%" }}
                          disabled // Disable this item
                          className="text-center" // Add this class to center the text
                        >
                          {storedUser.firstname_en} {storedUser.lastname_en}
                        </Dropdown.Item>
                        {/* ------------------------ */}
                        <Dropdown.Divider />
                        {/* campus */}
                        <Dropdown.Item
                          href="#pablo"
                          style={{ marginTop: "0%" }}
                          disabled // Disable this item
                          className="text-center" // Add this class to center the text
                        >
                          {storedUser.CAMPUS_NAME}
                        </Dropdown.Item>
                        {/* หน่วยงาน */}
                        <Dropdown.Item
                          href="#pablo"
                          style={{ marginTop: "0%" }}
                          disabled // Disable this item
                          className="text-center" // Add this class to center the text
                        >
                          {storedUser.clubName}
                        </Dropdown.Item>
                        {/* ------------------------ */}
                        <Dropdown.Divider />
                        {/* logout */}
                        <Dropdown.Item
                          href="#pablo"
                          onClick={logout}
                          className="text-center" // Add this class to center the text
                        >
                          ออกจากระบบ
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    )}
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
