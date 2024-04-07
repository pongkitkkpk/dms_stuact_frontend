import React, { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import logo from "assets/img/reactlogo.png";

function Sidebar({ color, image, routes }) {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const [leftPosition, setLeftPosition] = useState("");
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Get the screen width
      const screenWidth = window.innerWidth;
      console.log(screenWidth)

      // Check if the screen width is less than or equal to 768px (iPad portrait mode width)
      if (screenWidth <= 374) {
        setLeftPosition(isHovered ? "-75%" : "-135%");
        setIsTablet(true);
      }
      else if (screenWidth >= 375 && screenWidth <= 380) {
        setLeftPosition(isHovered ? "-75%" : "-130.5%");
        setIsTablet(true);
      }
      else if (screenWidth >= 381 && screenWidth <= 410) {
        setLeftPosition(isHovered ? "-70%" : "-127%");
        setIsTablet(true);
      }
      else if (screenWidth >= 411 && screenWidth <= 429) {
        setLeftPosition(isHovered ? "-65%" : "-120%");
        setIsTablet(true);
      }
      else if (screenWidth >= 430 && screenWidth <= 539) {
        setLeftPosition(isHovered ? "-65%" : "-115%");
        setIsTablet(true);
      }
      else if (screenWidth >= 540 && screenWidth <= 670) {
        setLeftPosition(isHovered ? "-40%" : "-75%");
        setIsTablet(true);
      }
      else if (screenWidth >= 661 && screenWidth <= 768) {
        setLeftPosition(isHovered ? "-35%" : "-61.5%");
        setIsTablet(true);
      }
      else if (screenWidth >= 770 && screenWidth <= 800) {
        setLeftPosition(isHovered ? "0%" : "-19.5%");
        setIsTablet(true);
      }
      else if (screenWidth >= 801 && screenWidth <= 845) {
        setLeftPosition(isHovered ? "-33%" : "-55.5%");
        setIsTablet(true);
      }
      else if (screenWidth >= 846 && screenWidth <= 870) {
        setLeftPosition(isHovered ? "-30%" : "-50.5%");
        setIsTablet(true);
      }
      else if (screenWidth >= 871 && screenWidth <= 999) {
        setLeftPosition(isHovered ? "-30%" : "-52.5%");
        setIsTablet(true);
      }
      else if (screenWidth >= 1000 && screenWidth <= 1024) {
        setLeftPosition(isHovered ? "0%" : "-20.5%");
        setIsTablet(true);
      }
      else if (screenWidth >= 1101 && screenWidth <= 1200) {
        setLeftPosition(isHovered ? "0%" : "-17%");
        setIsTablet(true);
      }
      else if (screenWidth >= 1201 && screenWidth <= 1400) {
        setLeftPosition(isHovered ? "0%" : "-15%");
        setIsTablet(true);
      }
      else if (screenWidth >= 1401 && screenWidth <= 1680) {
        setLeftPosition(isHovered ? "0%" : "-13%");
        setIsTablet(true);
      }

      else {
        // Adjust sidebar position for desktop view
        setLeftPosition(isHovered ? "0%" : "-9.6%");
        setIsTablet(false);
      }
    };

    handleResize(); // Initial position based on screen size

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };

  return (
    <div
      className="sidebar"
      data-image={image}
      data-color={color}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        overflowX: "hidden",
        left: leftPosition,
        transition: "left 0.5s ease",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <div
        className="sidebar-background"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="sidebar-wrapper" style={{ overflowY: "hidden" }}>
        <div className="logo d-flex align-items-center justify-content-start">
          <a
            href="https://www..com?ref=lbd-sidebar"
            className="simple-text logo-mini mx-1"
          >
            <div className="logo-img">
              <img src={logo} alt="..." />
            </div>
          </a>
          <a className="simple-text" href="http://www..com">
            DMS KMUTNB
          </a>
        </div>
        <Nav>
          {routes.map((prop, key) => {
            if (!prop.redirect && prop.name)
              return (
                <li
                  className={prop.upgrade ? "active active-pro" : ""}
                  key={key}
                  style={{borderRight: `4px solid ${prop.color}`,position: "relative"}}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontWeight: "light",
                    }}
                  >
                    
                      <span style={{ fontWeight: "light" }}>{prop.name}</span>


                      <div style={{ marginRight: "-13%" }}>
                        <i className={prop.icon} />
                      </div>
                    

                  </NavLink>
                </li>
              );
            return null;
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
