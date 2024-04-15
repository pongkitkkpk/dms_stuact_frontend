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
      <div className="multi-step-progress-bar" style={{right:"2%",padding:"0.5%" }}>
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
            style={{ width: `${117 / steps}%` }}
            // style={{ width: `${100 / steps}%` }}
            onClick={() => handleStepClick(index)}
          >
            {index < currentStepProject - 1 ? (
              // Display an icon for completed steps✅
              <i className="nc-icon nc-check-2"></i>
            ) : (
              <i className="nc-icon nc-settings-gear-64"></i>
            )}
            {stepTitles[index]}
          </div>
        ))}
      </div>
    
  );
};

export default ArrowProgressBar;
