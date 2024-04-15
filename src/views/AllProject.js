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
} from "react-bootstrap";
import Admin from "layouts/Admin";

function AllProject() {
  const storedUserData = sessionStorage.getItem("user");
  const storedUser = storedUserData ? JSON.parse(storedUserData) : {};

  const studentuser = storedUser.username;
  const strcodebooksomeoutyear = storedUser.codebooksomeoutyear;
  const strcodebooksome = storedUser.codebooksome;
  useEffect(()=>{
    console.log(storedUser.account_type)
  },[storedUser])

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
      (project.responsible_agency &&
        project.responsible_agency
          .toLowerCase()
          .includes(searchQuery.toLowerCase())) ||
      (yearlyString && yearlyString.includes(searchQuery.toLowerCase())) // Include yearly in the search
    );
  });
  const getProjects = () => {
    console.log("asdsa")
    if (storedUser.account_type == 'admin') {

      console.log("asdsa")
      console.log("asdsa"+storedUser.account_type)
      Axios.get(
        `http://localhost:3001/admin/allprojects`
      ).then((response) => {
        setProjectList(response.data);
      });
    } else {
      Axios.get(
        `http://localhost:3001/student/project/getcodebooksomeoutyear/${codebooksomeoutyear}`
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
    const confirmDelete = window.confirm(`คุณต้องการลบ ${project_name}`);

    if (confirmDelete) {
      Axios.delete(`http://localhost:3001/student/deleteProject/${id_project}`)
        .then((response) => {
          if (response.status === 200) {
            // Filter out the deleted project from the project list
            const updatedProjectList = projectList.filter(
              (project) => project.id !== id_project
            );
            setProjectList(updatedProjectList);

            // Show alert after successful deletion
            alert("Project deleted successfully!");
          } else {
            console.error("Failed to delete project");
          }
        })
        .catch((error) => {
          console.error("Error deleting project:", error);
        });
    } else {
      // User canceled deletion, do nothing
    }
  };

  const stepTitles = [
    " ร่างคำขออนุมัติ",
    " ดำเนินการขออนุมัติ",
    " โครงการอนุมัติ",
    " เงินโครงการอนุมัติ",
    " ร่างสรุปผลโครงการ",
    " ดำเนินการสรุปผล",
    " ปิดโครงการ"
  ];
  const stepColors = {
    " ร่างคำขออนุมัติ": "#7AC6FF",
    " ดำเนินการขออนุมัติ": "#8E4E41",
    " โครงการอนุมัติ": "#44C827",
    " เงินโครงการอนุมัติ": "#39934F",
    " ร่างสรุปผลโครงการ": "#0E9E93",
    " ดำเนินการสรุปผล": "#0E4D9E",
    " ปิดโครงการ": "#5C7AD6"
  };
  return (
    <>

      <Container fluid>
        <Row>
          <Col md="12">
            <InputGroup className="mb-3" style={{ width: "100%" }}>
              <Form.Control
                placeholder="ค้นหา"
                type="text"
                aria-describedby="basic-addon2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <InputGroup.Text>
                <i className="fa fa-search" aria-hidden="true"></i>
              </InputGroup.Text>
            </InputGroup>

            <br />
            {filterProjectList.map((val, index) => {
              return (
                <Card
                key={index}
                className={`card-with-border-${
                  val.project_phase === "ร่างคำขออนุมัติ" ? "draft" :
                  val.project_phase === "ดำเนินการขออนุมัติ" ? "progress" :
                  val.project_phase === "โครงการอนุมัติ" ? "approved" :
                  val.project_phase === "เงินโครงการอนุมัติ" ? "approved-budget" :
                  val.project_phase === "ร่างสรุปผลโครงการ" ? "summary-draft" :
                  val.project_phase === "ดำเนินการสรุปผล" ? "summary-progress" :
                  val.project_phase === "ปิดโครงการ" ? "closed" : ""
                }`}
                style={{ margin: "0% 0" }}
              >
                  <Card.Body>
                    <div className="status-tag">
                      <span
                          className={`badge badge-${val.project_phase === "ร่างคำขออนุมัติ" ? "draft" :
                            val.project_phase === "ดำเนินการขออนุมัติ" ? "progress" :
                            val.project_phase === "โครงการอนุมัติ" ? "approved" :
                            val.project_phase === "เงินโครงการอนุมัติ" ? "approved-budget" :
                            val.project_phase === "ร่างสรุปผลโครงการ" ? "summary-draft" :
                            val.project_phase === "ดำเนินการสรุปผล" ? "summary-progress" :
                            val.project_phase === "ปิดโครงการ" ? "closed" : ""
                          }`}
                          style={{ marginRight: "1%", backgroundColor: stepColors[val.project_phase] }}
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
                    <Card.Title as="h4">
                      {val.project_name}id {val.id} 
                    </Card.Title>
                    <p className="card-category">{val.project_number}</p>
                    <div
                      className="d-flex justify-content-between align-items-center"
                      style={{ backgroundColor: "#f0f0f0" }}
                    >
                      <div>
                        <Button onClick={() => handleShowDetail(val.id)}>
                          Show Detail
                        </Button>
                        {/* You can place additional elements here */}
                      </div>
                      <div>
                        <Button
                          onClick={() =>
                            handleDeleteProject(val.id, val.project_name)
                          }
                        >
                          ลบ
                        </Button>
                        {/* This is the button you want on the right side */}
                      </div>
                    </div>
                    <div className="stats">
                      <i className="fas fa-history"></i>
                      <span>สร้างเมื่อ {formatDate(val.created_at)}</span>
                      <i className="fas fa-history"></i>

                      <span>
                        {val.updated_at === null
                          ? "update เมื่อ ----"
                          : `update เมื่อ ${formatDate(val.updated_at)}`}
                      </span>
                      <span> </span>
                      <i className="fas fa-pencil-alt"></i>
                      {val.id_student}
                    </div>
                  </Card.Body>
                </Card>
              );
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AllProject;
