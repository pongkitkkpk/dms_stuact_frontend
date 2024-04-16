import React, { useState, useEffect } from "react";
import { Button, Card, Form, Col, Table } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { CardBody, CardFooter } from "reactstrap";
import Axios from "axios";
import Swal from "sweetalert2";

import DASplitBudgetAdmin from "./DASplitBudget";
function DListSplitBudget() {
  const storedUserData = sessionStorage.getItem("user");
  const storedUser = storedUserData ? JSON.parse(storedUserData) : {};
  const id_student = storedUser.username;
  const strcodebooksomeoutyear = storedUser.codebooksomeoutyear;
  const [codeclub, setCodeclub] = useState("");
  const [yearly_countsketch, setYearlyCountSketch] = useState("");
  const [NetList, setNetList] = useState("");
  
  useEffect(() => {
    getNetProject()
  }),[];

  const getNetProject = () => {
      Axios.get('http://localhost:3001/admin/getallNetProject').then((response) => {
        setNetList(response.data);
      });
    };
  return (
    <>
    <DASplitBudget/>
      
    </>
  );
}

export default DASplitBudgetAdmin;
