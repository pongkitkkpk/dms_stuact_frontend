import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
// react-bootstrap components
import {
  Alert,
  Badge,
  Button,
  Card,
  Modal,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import DASplitBudget from "./DASplitBudget";
function DListSplitBudget() {
  const storedUserData = sessionStorage.getItem("user");
  const storedUser = storedUserData ? JSON.parse(storedUserData) : {};
  const id_student = storedUser.username;
  const strcodebooksomeoutyear = storedUser.codebooksomeoutyear;
  const [codeclub, setCodeclub] = useState("");
  const [yearly_countsketch, setYearlyCountSketch] = useState("");
  useEffect(() => {
    console.log(net_budget);
    console.log(yearly);
  }),
    [net_budget];
  return (
    <>
    <DASplitBudget/>
      
    </>
  );
}

export default DListSplitBudget;
