import React, { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { FiZoomIn, FiZoomOut } from "react-icons/fi"; // Assuming you have zoom in and zoom out icons

function Sidebar({ color, image, routes }) {
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };

  const [zoomed, setZoomed] = useState(false);

  const handleMouseEnter = () => {
    setZoomed(true);
  };

  const handleMouseLeave = () => {
    setZoomed(false);
  };

  const sidebarStyle = {
    width: zoomed ? "250px" : "75px",
    transition: "width 0.3s ease",
    overflow: "hidden"
  };

  const iconStyle = {
    transform: zoomed ? "scale(1)" : "scale(1.2)",
    transition: "transform 0.3s ease",
  };

  return (
    <div
      className={`sidebar ${zoomed ? "zoomed" : ""}`}
      style={sidebarStyle }
      data-color={color}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="sidebar-background"
        style={{
          backgroundImage: "url(" + image + ")",
          width: zoomed ? "250px" : "75px", // Adjust background width
        }}
      />
      <div className="sidebar-wrapper">

        <div className="logo d-flex align-items-center justify-content-start">
          <a
            href="https://www.creative-tim.com?ref=lbd-sidebar"
            className="simple-text logo-mini mx-1"
          >
            <div className="logo-img">
              <img src={require("assets/img/reactlogo.png")} alt="..." />
            </div>
          </a>
          <a className="simple-text" href="http://www.creative-tim.com">
            dms stuact
          </a>
        </div>
        <Nav>
          {routes.map((prop, key) => {
            if (!prop.redirect)
              return (
                <li
                  className={
                    prop.upgrade
                      ? "active active-pro"
                      : activeRoute(prop.layout + prop.path)
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className={prop.icon} style={iconStyle} />
                    <p>{prop.name}</p>
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