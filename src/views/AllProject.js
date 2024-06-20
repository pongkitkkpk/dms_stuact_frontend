import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"; // Import useHistory hook
import Axios from "axios";
import {
  Card,
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  Form,
  Dropdown,
} from "react-bootstrap";
import Admin from "layouts/Admin";
import Swal from "sweetalert2";

function AllProject() {
  const storedUserData = sessionStorage.getItem("user");
  const storedUser = storedUserData ? JSON.parse(storedUserData) : {};

  const studentuser = storedUser.username;
  const strcodebooksomeoutyear = storedUser.codebooksomeoutyear;
  const strcodebooksome = storedUser.codebooksome;
  
  // useEffect(() => {
  //   console.log(storedUser);
  //   console.log(storedUser.account_type);
  //   console.log(storedUser.position);
  // }, [storedUser]);

  const [projectList, setProjectList] = useState([]);
  const [id_student, setIDStudent] = useState(studentuser);
  const [codeclub, setCodeClub] = useState(strcodebooksome);
  const [codebooksomeoutyear, setCodebooksomeoutyear] = useState(
    strcodebooksomeoutyear
  );
  const history = useHistory(); // Initialize useHistory hook
  const [searchQuery, setSearchQuery] = useState("");

  const filterProjectList = projectList.filter((project) => {
    const yearlyString = project.yearly ? project.yearly.toString() : ""; // Convert yearly to string, handle null case
    return (
      (project.id_student &&
        project.id_student.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (project.project_name &&
        project.project_name
          .toLowerCase()
          .includes(searchQuery.toLowerCase())) ||
      (project.campus &&
        project.campus.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (project.clubName &&
        project.clubName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (project.codeclub &&
        project.codeclub.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (project.project_phase &&
        project.project_phase
          .toLowerCase()
          .includes(searchQuery.toLowerCase())) ||
      (project.responsible_agency &&
        project.responsible_agency
          .toLowerCase()
          .includes(searchQuery.toLowerCase())) ||
      (project.project_number &&
        project.project_number
          .toLowerCase()
          .includes(searchQuery.toLowerCase())) ||
      (yearlyString && yearlyString.includes(searchQuery.toLowerCase())) // Include yearly in the search
    );
  });


  const getProjects = () => {
    if (storedUser.position == "Admin") {
      Axios.get(`${process.env.REACT_APP_API_URL}/admin/allprojects`).then((response) => {
        setProjectList(response.data);
      });
    } else if (storedUser.position === "Stuact") {
      Axios.get(
        `${process.env.REACT_APP_API_URL}/stuact/stuactallprojects/${storedUser.ClubGroup}`
      ).then((response) => {
        setProjectList(response.data);
      });
    } else {
      Axios.get(
        `${process.env.REACT_APP_API_URL}/student/project/getcodebooksomeoutyear/${codebooksomeoutyear}`
      ).then((response) => {
        setProjectList(response.data);
      });
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };
  const handleShowDetail = (id_project) => {
    history.push(`project-doc/${id_project}`);
  };

  const handleDeleteProject = (id_project, project_name) => {
    // const confirmDelete = window.confirm();
    Swal.fire({
      className: "title",
      title: `คุณต้องการลบ ${project_name} ใช่หรือไม่?`,
      text: "การบันทึกข้อมูลจะไม่สามารถยกเลิกได้",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.delete(
          `${process.env.REACT_APP_API_URL}/student/deleteProject/${id_project}`
        )
          .then((response) => {
            if (response.status === 200) {
              // Filter out the deleted project from the project list
              const updatedProjectList = projectList.filter(
                (project) => project.id !== id_project
              );
              setProjectList(updatedProjectList);
            } else {
              console.error("Failed to delete project");
            }
          })
          .catch((error) => {
            console.error("Error deleting project:", error);
          });
      }
    });
  };

  const stepTitles = [
    " ร่างคำขออนุมัติ",
    " ดำเนินการขออนุมัติ",
    " โครงการอนุมัติ",
    " เงินโครงการอนุมัติ",
    " รอสรุปผลโครงการ",
    " ร่างสรุปผลโครงการ",
    " ดำเนินการสรุปผล",
    " ปิดโครงการ",
  ];
  const stepColors = {
    " ร่างคำขออนุมัติ": "#ff0000",
    " ดำเนินการขออนุมัติ": "#ff8000",
    " รออนุมัติโครงการ": "#ff8000",
    " โครงการอนุมัติ": "#fff000",
    " รอเงินโครงการอนุมัติ": "#00ff00",
    " เงินโครงการอนุมัติ": "#00ff00",
    " รอสรุปผลโครงการ": "#00ffff",
    " ร่างสรุปผลโครงการ": "#0001ff",
    " ดำเนินการสรุปผล": "#00008f",
    " ปิดโครงการ": "#8000ff",
  };

  const [selectedStatus, setSelectedStatus] = useState("");

  const uniqueStatusList = [
    ...new Set(filterProjectList.map((val) => val.project_phase)),
  ];
  uniqueStatusList.reverse();

  const statusCounts = {};

  filterProjectList.forEach((val) => {
    statusCounts[val.project_phase] =
      (statusCounts[val.project_phase] || 0) + 1;
  });
  const totalProjectCount = filterProjectList.length;
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <div className="d-flex justify-content-center align-items-center" style={{ marginTop: "-5px" }}>
              <Dropdown className="align-items-center">
                <Dropdown.Toggle
                  variant="secondary"
                  id="dropdown-status"
                  className="btn-all-projects"
                >
                  {selectedStatus
                    ? selectedStatus
                    : `โครงการทั้งหมด (${totalProjectCount})`}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {/* Render dropdown item to show all projects */}
                  <Dropdown.Item onClick={() => setSelectedStatus("")}>
                    <div>แสดงโครงการทั้งหมด</div>
                  </Dropdown.Item>

                  {/* Render dropdown items with status and count */}
                  {uniqueStatusList.map((status, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={() => setSelectedStatus(status)}
                      disabled={!statusCounts[status]}
                    >
                      {/* Render badge and count */}
                      <div className="d-flex justify-content-between align-items-center">
                        <span
                          className={`badge badge-${status === "ร่างคำขออนุมัติ"
                              ? "draft"
                              : status === "ดำเนินการขออนุมัติ"
                                ? "progress"
                                : status === "รออนุมัติ"
                                  ? "wait-progress"
                                  : status === "โครงการอนุมัติ"
                                    ? "approved"
                                    : status === "รอเงินโครงการอนุมัติ"
                                      ? "wait-approved-budget"
                                      : status === "เงินโครงการอนุมัติ"
                                        ? "approved-budget"
                                        : status === "รอสรุปผลโครงการ"
                                          ? "wait-summary-draft"
                                          : status === "ร่างสรุปผลโครงการ"
                                            ? "summary-draft"
                                            : status === "ดำเนินการสรุปผล"
                                              ? "summary-progress"
                                              : status === "ปิดโครงการ"
                                                ? "closed"
                                                : ""
                            }`}
                          style={{
                            marginRight: "1%",
                            backgroundColor: stepColors[status],
                          }}
                        >
                          {status}
                        </span>
                        <span>({statusCounts[status] || 0})</span>
                      </div>
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>

              <InputGroup className="align-items-center" style={{ width: "100%", marginLeft: "10px" }}>
                <Form.Control
                  placeholder="ค้นหา"
                  type="text"
                  aria-describedby="basic-addon2"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <InputGroup.Text>
                  <i className="fa fa-search" aria-hidden="true" style={{ marginTop: "4.5px", marginBottom: "4.5px" }}></i>
                </InputGroup.Text>
              </InputGroup>
            </div>
            <br />
            <div></div>
            {filterProjectList.map((val, index) => {
              if (
                val.project_phase === selectedStatus ||
                selectedStatus === ""
              ) {
                return (
                  <Card
                    style={{ marginBottom: "5px" }}
                    key={index}
                    className={`card-with-border-${val.project_phase === "ร่างคำขออนุมัติ"
                        ? "draft"
                        : val.project_phase === "ดำเนินการขออนุมัติ"
                          ? "progress"
                          : val.project_phase === "รออนุมัติโครงการ"
                            ? "wait-progress"
                            : val.project_phase === "โครงการอนุมัติ"
                              ? "approved"
                              : val.project_phase === "รอเงินโครงการอนุมัติ"
                                ? "wait-approved-budget"
                                : val.project_phase === "เงินโครงการอนุมัติ"
                                  ? "approved-budget"
                                  : val.project_phase === "รอสรุปผลโครงการ"
                                    ? "wait-summary-draft"
                                    : val.project_phase === "ร่างสรุปผลโครงการ"
                                      ? "summary-draft"
                                      : val.project_phase === "ดำเนินการสรุปผล"
                                        ? "summary-progress"
                                        : val.project_phase === "ปิดโครงการ"
                                          ? "closed"
                                          : ""
                      }`}
                  >
                    <Card.Body>
                      <div className="status-tag">
                        <span
                          className={`badge badge-${val.project_phase === "ร่างคำขออนุมัติ"
                              ? "draft"
                              : val.project_phase === "ดำเนินการขออนุมัติ"
                                ? "progress"
                                : val.project_phase === "รออนุมัติ"
                                  ? "wait-progress"
                                  : val.project_phase === "โครงการอนุมัติ"
                                    ? "approved"
                                    : val.project_phase === "รอเงินโครงการอนุมัติ"
                                      ? "wait-approved-budget"
                                      : val.project_phase === "เงินโครงการอนุมัติ"
                                        ? "approved-budget"
                                        : val.project_phase === "รอสรุปผลโครงการ"
                                          ? "wait-summary-draft"
                                          : val.project_phase === "ร่างสรุปผลโครงการ"
                                            ? "summary-draft"
                                            : val.project_phase === "ดำเนินการสรุปผล"
                                              ? "summary-progress"
                                              : val.project_phase === "ปิดโครงการ"
                                                ? "closed"
                                                : ""
                            }`}
                          style={{
                            marginRight: "1%",
                            backgroundColor: stepColors[val.project_phase],
                          }}
                        >
                          {val.project_phase}
                        </span>
                        <span
                          className={`badge badge-"warning"`}
                        // className={`badge badge-"warning"`} ดำขาว
                        >
                          {val.responsible_agency}
                        </span>
                      </div>

                      <div className="d-flex flex-column">
                        <div className="d-flex justify-content-between align-items-center">
                          <div
                            className="align-items-center"
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                          >
                            {val.project_name}
                            {/* id {val.id} */}
                            <p className="card-category">
                              {val.project_number}
                            </p>
                          </div>

                          <div className="d-flex justify-content-end">
                            <div className="d-inline-flex align-items-end">
                              <Button
                                className="btn-details"
                                variant="warning"
                                onClick={() => handleShowDetail(val.id)}
                              >
                                แสดงรายละเอียด
                              </Button>
                              {val.project_phase === "ร่างคำขออนุมัติ" && (
                                <Button
                                  style={{ marginLeft: "5px" }}
                                  className="btn-decrease"
                                  variant="danger"
                                  onClick={() =>
                                    handleDeleteProject(val.id, val.project_name)
                                  }
                                >
                                  ลบ
                                </Button>
                                )} 
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="stats">
                        <i className="fas fa-history"></i>
                        <span> สร้าง {formatDate(val.created_at)} </span>

                        <i
                          className="fas fa-history"
                          style={{ marginLeft: "10px" }}
                        ></i>
                        <span>
                          {val.updated_at === null
                            ? " อัพเดท ----"
                            : ` อัพเดท ${formatDate(val.updated_at)}`}
                        </span>
                        <span> </span>

                        <i
                          className="fas fa-pencil-alt"
                          style={{ marginLeft: "10px" }}
                        ></i>
                        <span> {val.id_student}</span>
                      </div>
                    </Card.Body>
                  </Card>
                );
              } else {
                // If the project's phase does not match the selectedStatus, return null
                return null;
              }
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AllProject;
