import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import Axios from "axios";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { CardBody, CardFooter } from "reactstrap";
// react-bootstrap components
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
  Nav,
  Table,
} from "react-bootstrap";
import Swal from 'sweetalert2';

function SD_nottoday({ id_project, currentStepProject }) {
  return (
    <>
      <Col md="9">
        <Card>

         

          <CardHeader
            style={{
              backgroundColor: "#535353",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                marginRight: "auto",
                marginBottom: "10px",
                fontSize: "16px",
                color: "white",
              }}
            >
              ยังไม่ถึงสถานะที่จะทำงานตรงนี้
            </div>
          </CardHeader>
         
        </Card>
      </Col>
    </>
  );
}

export default SD_nottoday;
