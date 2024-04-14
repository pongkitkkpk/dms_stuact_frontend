import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// react-bootstrap components
import CardHeader from "react-bootstrap/esm/CardHeader";
import { CardBody, CardFooter } from "reactstrap";
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
import Axios from "axios";

function SD_addfile({ id_project }) {
  // State to hold file data
  const [files, setFiles] = useState([]);

  // Function to handle file upload
  const handleFileUpload = (event, index) => {
    const newFiles = [...files];
    newFiles[index] = event.target.files[0];
    setFiles(newFiles);
  };

  // Function to increase file count
  const increaseFileCount = () => {
    if (files.length < 5) {
      setFiles([...files, null]);
    }
  };

  // Function to decrease file count
  const decreaseFileCount = () => {
    if (files.length > 1) {
      const newFiles = [...files];
      newFiles.pop();
      setFiles(newFiles);
    }
  };

  // Function to handle file upload
  const handleFileUploadtoDB = async (index) => {
    console.log("Attempting to upload file...");
    console.log(index);
    const file = files[0];
    if (!file) {
      console.log("No file selected.");
      return; // No file selected
    }

    try {
      console.log("File selected:", file.name);
      console.log("Project ID:", id_project);

      const formData = new FormData();
      formData.append("pdfFile", file);
      formData.append("projectId", id_project);

      const response = await Axios.post(
        "http://localhost:3001/student/upload-pdf",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("File upload response:", response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  
  useEffect(() => {
    // console.log(files[1].name)
    console.log("Selected files:", files);
  }, [files]);

  return (
    <>
      <Col md="9">
        <Card>
          <Button
            type="submit"
            className="btn-dataupdate"
            style={{ fontSize: "14px", margin: "1%" }}
            variant="primary"
            onClick={handleFileUploadtoDB}
          >
            อัพโหลดไฟล์เอกสาร
          </Button>
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
              เพิ่มเอกสารเพิ่มเติม
            </div>
          </CardHeader>

          <CardBody>
            <Table striped>
              <tbody>
                {/* ตัวชี้วัด(ด้านปริมาณ) */}

                {files.map((file, index) => (
                  <>
                    <tr style={{ backgroundColor: "white" }}>
                      <td
                        className="head-side-td"
                        style={{ verticalAlign: "top" }}
                      >
                        <div>ไฟล์เอกสารเพิ่มเติม {index + 1}</div>
                      </td>
                      <td className="back-side-td">
                        {/* File upload input for quantity metrics */}
                        <input
                          type="file"
                          className="form-control-file"
                          id={`fileInput${index}`} // Add a unique ID for accessibility and targeting
                          onChange={(event) => handleFileUpload(event, index)}
                          style={{ display: "none" }} // Hide the default file input
                        />
                        {files[index] ? (
                          // If a file has been uploaded, show an icon
                          <>
                            <div>
                              <i className="fas fa-file"></i>{" "}
                              {files[index].name}
                            </div>
                            <label
                              htmlFor={`fileInput${index}`}
                              className="btn btn-dataupdate"
                              style={{
                                fontSize: "14px",
                                margin: "1%",
                                padding: "2%",
                              }}
                              variant="primary"
                            >
                              เปลี่ยนไฟล์
                            </label>
                          </>
                        ) : (
                          // If no file has been uploaded, show the button to choose file
                          <label
                            htmlFor={`fileInput${index}`}
                            className="btn btn-dataupdate"
                            style={{
                              fontSize: "14px",
                              margin: "1%",
                              padding: "2%",
                            }}
                            variant="primary"
                          >
                            เพิ่มไฟล์
                          </label>
                        )}
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </Table>
          </CardBody>

          <CardFooter
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {files.length < 5 && (
                <Button
                  variant="success"
                  className="ml-5 mb-3 btn-budget-increase border-success"
                  onClick={increaseFileCount}
                >
                  <div style={{ fontSize: "14px" }}>เพิ่มเอกสาร</div>
                </Button>
              )}
              {files.length > 1 && (
                <Button
                  variant="danger"
                  className="ml-5 mb-3 btn-budget-decrease border-danger"
                  onClick={decreaseFileCount}
                >
                  <div style={{ fontSize: "14px" }}>ลดเอกสาร</div>
                </Button>
              )}
            </div>
          </CardFooter>
        </Card>
      </Col>
    </>
  );
}

export default SD_addfile;
