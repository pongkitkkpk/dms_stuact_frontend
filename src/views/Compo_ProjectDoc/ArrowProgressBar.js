import React, { useState } from "react";
import "./ArrowProgressBar.css";

const ArrowProgressBar = ({ steps, currentStepProject }) => {
  const calculateStepWidth = () => {
    return (currentStepProject / steps) * 100;
  };

  const stepTitles = [
    " ร่างคำขออนุมัติ",
    " ดำเนินการขออนุมัติ",
    " โครงการอนุมัติ",
    " เงินโครงการอนุมัติ",
    " ร่างสรุปผลโครงการ",
    " ดำเนินการสรุปผล",
    " ปิดโครงการ",
  ];

  const [stepStates, setStepStates] = useState(
    Array.from({ length: steps }, (_, index) => false)
  );

  const handleStepClick = (index) => {
    const newStepStates = [...stepStates];
    newStepStates[index] = !newStepStates[index];
    setStepStates(newStepStates);
  };

  return (
    // padding ปรับความหนา
      <div className="multi-step-progress-bar" style={{justifyItems: "start",marginBottom:"5px", width: "100%",marginLeft:"17px"}}>
        <div
          className="progress"
          style={{ width: `100-${calculateStepWidth()}%`}}
        ></div>
        {Array.from({ length: steps }, (_, index) => (
          <div
            className={`step ${
              index + 1 < currentStepProject ? "completed" : ""
            } ${stepStates[index] ? "active" : ""} ${
              index === currentStepProject - 1 ? "current" : ""
            }`}
            style={{ width: `${117 / steps}%` , height:"40px", paddingRight:"20px", fontSize:"15px", color: "white"}}
            // style={{ width: `${100 / steps}%` }}
            onClick={() => handleStepClick(index)}
          >
            {index < currentStepProject - 1 ? (
              // Display an icon for completed steps✅
              <i className="nc-icon nc-check-2" style={{ width: "20px", height: "12px", color: "white", fontWeight:"bold" }}></i>
            ) : (
              <i className="nc-icon nc-settings-gear-64" style={{ width: "20px", height: "12px", color: "white", fontWeight:"bold"}}></i>
            )}
            {stepTitles[index]}
          </div>
        ))}
      </div>
    
  );
};

export default ArrowProgressBar;
