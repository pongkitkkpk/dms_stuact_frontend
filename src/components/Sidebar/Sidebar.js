import React, { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import logo from "assets/img/reactlogo.png";

function Sidebar({ color, image, routes }) {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const [leftPosition, setLeftPosition] = useState("15%");

  useEffect(() => {
    const handleResize = () => {
      const isBigScreen = window.innerWidth >= 991;
      setLeftPosition(isBigScreen ? (isHovered ? "0%" : "-10%") : "65%");
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
            kkpk
          </a>
        </div>
        <Nav>
          {routes.map((prop, key) => {
            if (!prop.redirect)
              return (
                <li
                  className={prop.upgrade ? "active active-pro" : ""}
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span>{prop.name}</span>

                    <i className={prop.icon} />

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
