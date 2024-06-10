import React, { useEffect, useState } from "react";
import { useLocation, Route, Switch } from "react-router-dom";

import AdminNavbar from "components/Navbars/AdminNavbar";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes,{GuestRoutes} from "routes.js";

import sidebarImage from "assets/img/sidebar-3.jpg";

function Guest() {
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("black");
  const [hasImage, setHasImage] = React.useState(false);
  const [isSidebarHovered, setIsSidebarHovered] = useState(false); 
  const [isMainpanelHovered, setIsMainpanelHovered] = useState(false); 
  const [isMainpanelNormal, setIsMainpanelNormal] = useState(false);
  const location = useLocation();
  const mainPanel = React.useRef(null);
 

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/guest") {
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

  const handleSidebarMouseEnter = () => {
    setIsSidebarHovered(true);

  };

  const handleSidebarMouseLeave = () => {
    setIsSidebarHovered(false);

  };
  const handleMainpanelMouseEnter = () => {
    setIsMainpanelHovered(true);

  };

  const handleMainpanelMouseLeave = () => {
    setIsMainpanelHovered(false);

  };

  return (
    <>
      <Sidebar
        color={color}
        image={hasImage ? image : ""}
        routes={GuestRoutes}
        onMouseEnter={handleSidebarMouseEnter}
        onMouseLeave={handleSidebarMouseLeave}
      />
      <div className="wrapper" style={{ overflow: "hidden" }}>
        <div
          className="main-panel"
          ref={mainPanel}
          style={{
            transition: "margin-left 0.5s ease, width 0.5s ease",
            width: isMainpanelHovered && !isMainpanelNormal ? "96%" :
            // isMainpanelHovered && isMainpanelNormal ? "90%" :
            !isMainpanelHovered && isMainpanelNormal ? "83%" :
            "96%"

            // width: isMainpanelHovered ? "96%" : (isMainpanelNormal ? "83%" : "96%"),  //work for the first time that open website but when use after that it's not work at all.
            // width: isMainpanelHovered ? "83%" : (isMainpanelNormal ? "96%" : "83%"), //not work for the first time but after use it's work 
            // width: isMainpanelNormal ? "83%" : (isMainpanelHovered ? "96%" : "83%"), //work for the first time that open website but when use after that it's not work at all.
            // width: isMainpanelNormal ? "96%" : (isMainpanelHovered ? "83%" : "96%"), //not work for the first time but after use it's work 
          }}
          onMouseEnter={handleMainpanelMouseEnter}
          onMouseLeave={handleMainpanelMouseLeave}
        >
          <AdminNavbar />
          <div className="content">
            <Switch>{getRoutes(GuestRoutes)}</Switch>
          </div>
          <Footer />
        </div>
      </div>
      {/* <FixedPlugin
        hasImage={hasImage}
        setHasImage={() => setHasImage(!hasImage)}
        color={color}
        setColor={(color) => setColor(color)}
        image={image}
        setImage={(image) => setImage(image)}
      /> */}
    </>
  );
}

export default Guest;
