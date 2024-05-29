import React, { useEffect, useState } from "react";
import { useLocation, Route, Switch } from "react-router-dom";

import AdminNavbar from "components/Navbars/AdminNavbar";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import { AdviserRoutes } from "routes.js"; 

import sidebarImage from "assets/img/sidebar-3.jpg";

function Adviser() {
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("black");
  const [hasImage, setHasImage] = React.useState(true);

  const [isMainpanelHovered, setIsMainpanelHovered] = useState(false);
  const [isMainpanelNormal, setIsMainpanelNormal] = useState(false);
  const location = useLocation();
  const mainPanel = React.useRef(null);

  const getRoutes = () => { 
    return AdviserRoutes.map((prop, key) => { 
      if (prop.layout === "/adviser") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;

    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);


  const handleMainpanelMouseEnter = () => {

    setIsMainpanelHovered(true);
    setIsMainpanelNormal(false);
  };
  
  const handleMainpanelMouseLeave = () => {

    setIsMainpanelHovered(false);
    setIsMainpanelNormal(false);
  };
  

  return (
    <>
      <Sidebar
        color={color}
        image={hasImage ? image : ""}
        routes={AdviserRoutes} 

      />
      <div className="wrapper" style={{ overflow: "hidden" }}>
        <div
          className="main-panel"
          ref={mainPanel}
          style={{
            transition: "margin-left 0.5s ease, width 0.5s ease",
            width: isMainpanelHovered && !isMainpanelNormal ? "96%" :
            !isMainpanelHovered && isMainpanelNormal ? "83%" :
            "96%"
          }}
          onMouseEnter={handleMainpanelMouseEnter}
          onMouseLeave={handleMainpanelMouseLeave}
        >

          <AdminNavbar />
          <div className="content">
            <Switch>{getRoutes()}</Switch>
          </div>
          <Footer />
        </div>
      </div>
      <FixedPlugin
        hasImage={hasImage}
        setHasImage={() => setHasImage(!hasImage)}
        color={color}
        setColor={(color) => setColor(color)}
        image={image}
        setImage={(image) => setImage(image)}
      />
    </>
  );
}

export default Adviser;
