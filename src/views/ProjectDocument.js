import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import SD_detail from "./Compo_ProjectDoc/ShowDetailP/SD_detail";
import SD_detail2 from "./Compo_ProjectDoc/ShowDetailP/SD_detail2";
import SD_person from "./Compo_ProjectDoc/ShowDetailP/SD_person";
import SD_locationtime from "./Compo_ProjectDoc/ShowDetailP/SD_locationtime";
import SD_timestep from "./Compo_ProjectDoc/ShowDetailP/SD_timestep";
import SD_budget from "./Compo_ProjectDoc/ShowDetailP/SD_budget";
import SD_indicator from "./Compo_ProjectDoc/ShowDetailP/SD_indicator";
import SD_addfile from "./Compo_ProjectDoc/ShowDetailP/SD_addfile";

import SD_showedit from "./Compo_ProjectDoc/ShowDetailP/SD_showedit";
import SD_showlogstatus from "./Compo_ProjectDoc/ShowDetailP/SD_showlogstatus";
import SD_studentgetmoney from "./Compo_ProjectDoc/ShowDetailP/SD_studentgetmoney";
import SD_nottoday from "./Compo_ProjectDoc/ShowDetailP/SD_nottoday";

import ArrowProgressBar from "./Compo_ProjectDoc/ArrowProgressBar";
import Swal from "sweetalert2";
import Axios from "axios";


function ProjectDocument() {
  const storedUserData = sessionStorage.getItem("user");
  const storedUser = storedUserData ? JSON.parse(storedUserData) : {};
  const id_student = storedUser.username;
  const strcodebooksomeoutyear = storedUser.codebooksomeoutyear;

  useEffect(() => {
    setEditor_name(id_student);
  }, [id_student]);

  const { id_project } = useParams();
  const [currentStepSideBar, setCurrentStepSideBar] = useState("SD_Detail"); // Default step is SD_Detail
  const [project_name, setProjectName] = useState("");
  const [codeclub, setCodeclub] = useState("");
  const [yearly, setYearly] = useState("");
  const [editor_name, setEditor_name] = useState("");
  const [project_phase, setProject_phase] = useState("");
  const [AgnecyGroupName, setAgnecyGroupName] = useState("");
  const [DBproject_phase, setDBProject_phase] = useState("");
  const [originalData, setOriginalData] = useState({});
  const getProjectData = () => {
    Axios.get(
      `http://localhost:3001/student/project/getidproject/${id_project}`
    ).then((response) => {
      setOriginalData(response.data[0]);
      setCodeclub(response.data[0].codeclub);
      setYearly(response.data[0].yearly)
      setProjectName(response.data[0].project_name);
      setAgnecyGroupName(response.data[0].AgnecyGroupName)
    });
  };

  useEffect(() => {
    getProjectData();
    getStateData();
  }, [id_project]);

  const getStateData = () => {
    Axios.get(`http://localhost:3001/getState/${id_project}`).then(
      (response) => {
        setDBProject_phase(response.data[0].project_phase);
      }
    );
  };



  const toggleStep = (step) => {
    setCurrentStepSideBar(step);
  };

  const totalSteps = 7;
  const [currentStepProject, setCurrentStepProject] = useState(1);


  const [CountYear, setCountYear] = useState("");





  //ถ้าใช้function นี้จะเพิ่มproject number ของจริง ใช้ตอนโครงการอนุมัติ
  const handleNextStepPleaseAllow = () => {
    console.log("ADSFASDFAsd")
    Axios.get(
      `http://localhost:3001/student/project/getNameProjectYearly/${project_name}/${codeclub}/${yearly}`
    ).then((response) => {
      const allow_budget = response.data[0].allow_budget
      console.log(allow_budget)
      let maxYearlyCount = 0;
      response.data.forEach((project) => {
        const yearlyCount = parseInt(project.yearly_count);
        if (yearlyCount > maxYearlyCount) {
          maxYearlyCount = yearlyCount;
        }
      });

      const newYearlyCount = maxYearlyCount === 0 ? "01" : (maxYearlyCount + 1).toString().padStart(2, "0");

      const newProject_number = codeclub + newYearlyCount
      setCountYear(newYearlyCount);

      Swal.fire({
        title: "Are you sure?",
        text: "Do you want to proceed to the next step?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, proceed",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          setCurrentStepProject((prevStep) => Math.min(prevStep + 1, totalSteps));
          Axios.put(`http://localhost:3001/student/firstupdateState/${id_project}`, {
            project_name,
            codeclub,
            project_phase,
            CountYear: newYearlyCount,
            project_number: newProject_number
          }).then((response) => {
            console.log("response.data");
            console.log(response.data);
            // window.location.reload();
          }).catch((error) => {
            console.error("Error creating project:", error);
          });
          Axios.post(`http://localhost:3001/insertlogState/${id_project}`, {
            project_name,
            codeclub,
            project_phase,
            editor_name,
          })
            .then((response) => {
              console.log("response.data");
              console.log(response.data);
            })
            .catch((error) => {
              console.error("Error creating project:", error);
            });

          Axios.put(`http://localhost:3001/admin/updateusebudget/${project_name}`, {
            allow_budget: allow_budget
          })
            .then((response) => {
              console.log("response.data");
              console.log(response.data);
              // window.location.reload();
            })
            .catch((error) => {
              console.error("Error creating project:", error);
            });




          Swal.fire(
            "Success!",
            "You have proceeded to the next step.",
            "success"
          );
        }
      });
    });
  };


  useEffect(() => {
    const stepNames = [
      "ร่างคำขออนุมัติ",
      "ดำเนินการขออนุมัติ",
      "โครงการอนุมัติ",
      "เงินโครงการอนุมัติ",
      "ร่างสรุปผลโครงการ",
      "ดำเนินการสรุปผล",
      "ปิดโครงการ",
    ];
    const index = stepNames.indexOf(DBproject_phase);
    setCurrentStepProject(index + 1); // Adding 1 to match the step number
  }, [DBproject_phase]);

  useEffect(() => {
    const stepNames = [
      "ดำเนินการขออนุมัติ",
      "โครงการอนุมัติ",
      "เงินโครงการอนุมัติ",
      "ร่างสรุปผลโครงการ",
      "ดำเนินการสรุปผล",
      "ปิดโครงการ",
    ];
    console.log(currentStepProject);
    setProject_phase(stepNames[currentStepProject - 1] || "");
  }, [currentStepProject]);

  const handleNextStep = () => {
    Swal.fire({
      title: "Are you sure?",
      text: `คุณต้องการปลาๆใช่หรือไม่? ${project_phase}`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, proceed",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        setCurrentStepProject((prevStep) => Math.min(prevStep + 1, totalSteps));
        Axios.put(`http://localhost:3001/updateState/${id_project}`, {
          project_name,
          codeclub,
          project_phase,
          editor_name,
        })
          .then((response) => {
            console.log("response.data");
            console.log(response.data);
            // window.location.reload();
          })
          .catch((error) => {
            console.error("Error creating project:", error);
          });
        Axios.post(`http://localhost:3001/insertlogState/${id_project}`, {
          project_name,
          codeclub,
          project_phase,
          editor_name,
        })
          .then((response) => {
            console.log("response.data");
            console.log(response.data);
          })
          .catch((error) => {
            console.error("Error creating project:", error);
          });
        Axios.post("http://localhost:3001/sendEmail", {
          email: storedUser.email,
          subject: `อัพเดท สถานะโครงการ ${project_name} เป็น ${DBproject_phase}`,
          message: "Your project has proceeded to the next step.",
        })
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error("Error sending email:", error);
          });

        Swal.fire(
          "Success!",
          "You have proceeded to the next step.",
          "success"
        );
      }
    });
  };

  const handlePrevStep = () => {
    setCurrentStepProject((prevStep) => Math.max(prevStep - 1, 1));
  };

  return (
    <>
      <h1>{id_project}</h1>
      <ArrowProgressBar
        steps={totalSteps}
        currentStepProject={currentStepProject}
      />

      {/* Render buttons to handle next and previous steps */}
      {storedUser.account_type === "admin" && currentStepProject != 1 && (
        <div className="d-flex justify-content-end">
          <button onClick={handlePrevStep} disabled={currentStepProject === 1}>
            Previous Step
          </button>
          <button
            onClick={handleNextStep}
            disabled={currentStepProject === totalSteps}
            type="submit"
            className="btn-dataupdate"
          >
            Next Step
          </button>
        </div>
      )}
      {/* ร่างคำขออนุมัติ */}
      {storedUser.account_type === "students" && currentStepProject == 1 && (
        <div className="d-flex justify-content-end">
          <button
            onClick={handleNextStep}
            type="submit"
            className="btn-dataupdate px-4 py-2"
            style={{ margin: "1%" }}
            variant="warning"
          >
            <div style={{ fontSize: "14px" }}>เสนอพิจารณา</div>
          </button>
        </div>
      )}
      {/* ดำเนินการขออนุมัติ  */}
      {(storedUser.account_type === "admin" || (storedUser.position === "Stuact" && storedUser.ClubGroup == AgnecyGroupName)) && currentStepProject == 2 && (
        <div className="d-flex justify-content-end">
          <button
            onClick={handleNextStepPleaseAllow}
            type="submit"
            className="btn-dataupdate px-4 py-2"
            style={{ margin: "1%" }}
            variant="warning"
          >
            <div style={{ fontSize: "14px" }}>ยืนยัน</div>
          </button>


        </div>
      )}
      {/* โครงการอนุมัติ */}
      {(storedUser.account_type === "admin" || (storedUser.position === "Stuact" && storedUser.ClubGroup == AgnecyGroupName)) && currentStepProject == 3 && (
        <div className="d-flex justify-content-end">

          <button
            onClick={handleNextStep}
            type="submit"
            className="btn-dataupdate px-4 py-2"
            style={{ margin: "1%" }}
            variant="warning"
          >
            <div style={{ fontSize: "14px" }}>โครงการอนุมัติ</div>
          </button>


        </div>
      )}
      {/* เงินโครงการอนุมัติ */}
      {storedUser.account_type === "students" && currentStepProject == 4 && (
        <div className="d-flex justify-content-end">
          <button
            onClick={handleNextStep}
            type="submit"
            className="btn-dataupdate"
          // style={{ fontSize: "14px", margin: "1%" }}
          // variant="primary"
          >
            <div>ส่งร่างสรุปผลโครงการ</div>
          </button>
        </div>
      )}
      {/* ร่างสรุปผลโครงการ
 */}
      {(storedUser.account_type === "admin" || (storedUser.position === "Stuact" && storedUser.ClubGroup == AgnecyGroupName)) && currentStepProject == 5 && (
        <div className="d-flex justify-content-end">
          <button
            onClick={handleNextStep}
            type="submit"
            className="btn-dataupdate"
          // style={{ fontSize: "14px", margin: "1%" }}
          // variant="primary"
          >
            <div>ดำเนินการสรุปผล</div>
          </button>


        </div>
      )}
      {/* ปิดโครงการ */}
      {(storedUser.account_type === "admin" || (storedUser.position === "Stuact" && storedUser.ClubGroup == AgnecyGroupName)) && currentStepProject == 6 && (
        <div className="d-flex justify-content-end">
          <button
            onClick={handleNextStep}
            type="submit"
            className="btn-dataupdate"
          // style={{ fontSize: "14px", margin: "1%" }}
          // variant="primary"
          >
            <div>ปิดโครงการ</div>
          </button>


        </div>
      )}

      <Container fluid>
        <Row>
          <Col md="3">
            <Card>
              <Card.Header
                className="text-white"
                style={{ backgroundColor: "#535353", paddingBottom: "10px" }}
              >
                เมนูจัดการโครงการ
              </Card.Header>
              <Card.Body
                style={{ backgroundColor: "#d2d2d2", paddingBottom: "15px" }}
              >
                <table className="list-group">
                  <tr
                    className="list-group-item"
                    style={{ backgroundColor: "#535353" }}
                  >
                    <th>

                      <div
                        style={{ fontFamily: "Bai Jamjuree", color: "white" }}
                      >
                        <a><div>แบบขออนุมัติโครงการ</div></a>
                      </div>

                    </th>
                  </tr>
                  <tr
                    className={
                      currentStepSideBar === "SD_Detail"
                        ? "list-group-item active"
                        : "list-group-item"
                    }
                  >
                    <td>
                      <a
                        href="#"
                        onClick={() => toggleStep("SD_Detail")}
                        style={{ display: "inline-block", width: "100%" }}
                      >
                        <div
                          style={{ fontFamily: "Bai Jamjuree", color: "white" }}
                        >
                          1.1 ข้อมูลพื้นฐานโครงการ
                        </div>
                      </a>
                    </td>
                  </tr>
                  <tr
                    className={
                      currentStepSideBar === "SD_Detail2"
                        ? "list-group-item active"
                        : "list-group-item"
                    }
                  >
                    <td>
                      <a
                        href="#"
                        onClick={() => toggleStep("SD_Detail2")}
                        style={{ display: "inline-block", width: "100%" }}
                      >
                        <div
                          style={{ fontFamily: "Bai Jamjuree", color: "white" }}
                        >
                          1.2 ลักษณะโครงการ
                        </div>
                      </a>
                    </td>
                  </tr>
                  <tr
                    className={
                      currentStepSideBar === "SD_person"
                        ? "list-group-item active"
                        : "list-group-item "
                    }
                  >
                    <td>
                      <a
                        href="#"
                        onClick={() => toggleStep("SD_person")}
                        style={{ display: "inline-block", width: "100%" }}
                      >
                        <div
                          style={{ fontFamily: "Bai Jamjuree", color: "white" }}
                        >
                          1.3 กลุ่มเป้าหมายโครงการ
                        </div>
                      </a>
                    </td>
                  </tr>
                  <tr
                    className={
                      currentStepSideBar === "SD_locationtime"
                        ? "list-group-item active"
                        : "list-group-item "
                    }
                  >
                    <td>
                      <a
                        href="#"
                        onClick={() => toggleStep("SD_locationtime")}
                        style={{ display: "inline-block", width: "100%" }}
                      >
                        <div
                          style={{ fontFamily: "Bai Jamjuree", color: "white" }}
                        >
                          1.4 สถานที่และเวลาดำเนินการ
                        </div>
                      </a>
                    </td>
                  </tr>
                  <tr
                    className={
                      currentStepSideBar === "SD_timestep"
                        ? "list-group-item active"
                        : "list-group-item"
                    }
                  >
                    <td>
                      <a
                        href="#"
                        onClick={() => toggleStep("SD_timestep")}
                        style={{ display: "inline-block", width: "100%" }}
                      >
                        <div
                          style={{ fontFamily: "Bai Jamjuree", color: "white" }}
                        >
                          1.5 ขั้นตอนและแผนดำเนินงาน
                        </div>
                      </a>
                    </td>
                  </tr>
                  <tr
                    className={
                      currentStepSideBar === "SD_budget"
                        ? "list-group-item active"
                        : "list-group-item"
                    }
                  >
                    <td>
                      <a
                        href="#"
                        onClick={() => toggleStep("SD_budget")}
                        style={{ display: "inline-block", width: "100%" }}
                      >
                        <div
                          style={{ fontFamily: "Bai Jamjuree", color: "white" }}
                        >
                          1.6 งบประมาณโครงการ
                        </div>
                      </a>
                    </td>
                  </tr>
                  <tr
                    className={
                      currentStepSideBar === "SD_indicator"
                        ? "list-group-item active"
                        : "list-group-item"
                    }
                  >
                    <td>
                      <a
                        href="#"
                        onClick={() => toggleStep("SD_indicator")}
                        style={{ display: "inline-block", width: "100%" }}
                      >
                        <div
                          style={{ fontFamily: "Bai Jamjuree", color: "white" }}
                        >
                          1.7 ความคาดหวังของโครงการ
                        </div>
                      </a>
                    </td>
                  </tr>
                  {/* <tr className={currentStep === 'SD_addfile' ? "list-group-item active" : "list-group-item"}>
                    <td><a href="#" onClick={() => toggleStep('SD_addfile')}style={{ display: "inline-block", width: "100%" }}><div style={{fontFamily: 'Bai Jamjuree', color: "white"}}>1.8 เอกสารเพิ่มเติม</div></a></td>
                  </tr> */}
                  <tr
                    className="list-group-item"
                    style={{ backgroundColor: "#535353" }}
                  >
                    <th>

                      <div
                        style={{ fontFamily: "Bai Jamjuree", color: "white" }}
                      >
                        <a><div>ประวัติการแก้ไข/อัพเดทสถานะ</div></a>

                      </div>

                    </th>
                  </tr>
                  <tr
                    className={
                      currentStepSideBar === "SD_showedit"
                        ? "list-group-item active"
                        : "list-group-item"
                    }
                  >
                    <td>
                      <a
                        href="#"
                        onClick={() => toggleStep("SD_showedit")}
                        style={{ display: "inline-block", width: "100%" }}
                      >
                        <div
                          style={{ fontFamily: "Bai Jamjuree", color: "white" }}
                        >
                          2.1 รายการแก้ไข
                        </div>
                      </a>
                    </td>
                  </tr>
                  <tr
                    className={
                      currentStepSideBar === "SD_showlogstatus"
                        ? "list-group-item active"
                        : "list-group-item"
                    }
                  >
                    <td>
                      <a
                        href="#"
                        onClick={() => toggleStep("SD_showlogstatus")}
                        style={{ display: "inline-block", width: "100%" }}
                      >
                        <div
                          style={{ fontFamily: "Bai Jamjuree", color: "white" }}
                        >
                          2.2 แสดงสถานะการอัพเดต
                        </div>
                      </a>
                    </td>
                  </tr>
                  <tr
                    className="list-group-item"
                    style={{ backgroundColor: "#535353" }}
                  >
                    <th>
                      <div
                        style={{ fontFamily: "Bai Jamjuree", color: "white" }}
                      >
                        <a><div>รายละเอียดนักศึกษารับเงิน</div></a>
                      </div>
                    </th>
                  </tr>
                  <tr className={
                    currentStepSideBar === "SD_studentgetmoney"
                      ? "list-group-item active"
                      : "list-group-item"
                  }
                  >
                    <td>
                      <a
                        href="#"
                        onClick={() => {
                          // if (currentStepProject !== 4 && currentStepProject !== 5) {
                          if (currentStepProject <= 3 ) {
                            toggleStep("SD_nottoday");
                          } else {
                            toggleStep("SD_studentgetmoney");
                          }
                        }}
                        style={{ display: "inline-block", width: "100%" }}

                      >
                        <div
                          style={{ fontFamily: "Bai Jamjuree", color: "white" }}
                        >
                          3.1 รายละเอียดนักศึกษารับเงิน
                        </div>
                      </a>
                    </td>
                  </tr>

                  <tr
                    className="list-group-item"
                    style={{ backgroundColor: "#535353" }}
                  >
                    <th>
                      <div
                        style={{ fontFamily: "Bai Jamjuree", color: "white" }}
                      >
                        <a><div>ปิดโครงการ</div></a>
                      </div>
                    </th>
                  </tr>
                  <tr className={
                    currentStepSideBar === "SD_"
                      ? "list-group-item active"
                      : "list-group-item"
                  }
                  >
                    <td>
                      <a
                        href="#"
                        onClick={() => {
                          if (currentStepProject <= 4 ) {
                            toggleStep("SD_nottoday");
                          } else {
                            toggleStep("SD_");
                          }
                        }}
                        style={{ display: "inline-block", width: "100%" }}

                      >
                        <div
                          style={{ fontFamily: "Bai Jamjuree", color: "white" }}
                        >
                          4.1 ปิดโครงการ1
                        </div>
                      </a>
                    </td>
                  </tr>
                  <tr className={
                    currentStepSideBar === "SD_"
                      ? "list-group-item active"
                      : "list-group-item"
                  }
                  >
                    <td>
                      <a
                        href="#"
                        onClick={() => {
                          if (currentStepProject <= 4 ) {
                            toggleStep("SD_nottoday");
                          } else {
                            toggleStep("SD_");
                          }
                        }}
                        style={{ display: "inline-block", width: "100%" }}

                      >
                        <div
                          style={{ fontFamily: "Bai Jamjuree", color: "white" }}
                        >
                          4.2 ปิดโครงการ2
                        </div>
                      </a>
                    </td>
                  </tr>
                  <tr className={
                    currentStepSideBar === "SD_"
                      ? "list-group-item active"
                      : "list-group-item"
                  }
                  >
                    <td>
                      <a
                        href="#"
                        onClick={() => {
                          if (currentStepProject <= 4 ) {
                            toggleStep("SD_nottoday");
                          } else {
                            toggleStep("SD_");
                          }
                        }}
                        style={{ display: "inline-block", width: "100%" }}

                      >
                        <div
                          style={{ fontFamily: "Bai Jamjuree", color: "white" }}
                        >
                          4.3 ปิดโครงการ3
                        </div>
                      </a>
                    </td>
                  </tr>
                </table>
              </Card.Body>
            </Card>
          </Col>

          {/* แบบขออนุมัติโครงการ */}
          {currentStepSideBar === "SD_Detail" && (
            <SD_detail id_project={id_project} currentStepProject={currentStepProject} />
          )}
          {currentStepSideBar === "SD_Detail2" && (
            <SD_detail2 id_project={id_project} currentStepProject={currentStepProject} />
          )}
          {currentStepSideBar === "SD_person" && (
            <SD_person id_project={id_project} currentStepProject={currentStepProject} />
          )}
          {currentStepSideBar === "SD_locationtime" && (
            <SD_locationtime id_project={id_project} currentStepProject={currentStepProject} />
          )}
          {currentStepSideBar === "SD_timestep" && (
            <SD_timestep id_project={id_project} currentStepProject={currentStepProject} />
          )}
          {currentStepSideBar === "SD_budget" && (
            <SD_budget id_project={id_project} currentStepProject={currentStepProject} />
          )}
          {currentStepSideBar === "SD_indicator" && (
            <SD_indicator id_project={id_project} currentStepProject={currentStepProject} />
          )}
          {/* ประวัติการแก้ไข/อัพเดทสถานะ */}
          {currentStepSideBar === "SD_showedit" && (
            <SD_showedit id_project={id_project} currentStepProject={currentStepProject} />
          )}
          {currentStepSideBar === "SD_showlogstatus" && (
            <SD_showlogstatus id_project={id_project} currentStepProject={currentStepProject} />
          )}
          {/* รายละเอียดนักศึกษารับเงิน */}
          {currentStepSideBar === "SD_studentgetmoney" && (
            <SD_studentgetmoney id_project={id_project} currentStepProject={currentStepProject} />
          )}
          {/* ปิดโครงการ */}



          {/* นอกเหนือ */}
          {currentStepSideBar === "SD_nottoday" && (
            <SD_nottoday id_project={id_project} currentStepProject={currentStepProject} />
          )}
        </Row>
      </Container>
    </>
  );
}

export default ProjectDocument;
