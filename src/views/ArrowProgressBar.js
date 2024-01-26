import React, { useState } from 'react';
import './ArrowProgressBar.css';

const ArrowProgressBar = ({ steps, currentStep }) => {
    const calculateStepWidth = () => {
        return (currentStep / steps) * 100;
    };

    const stepTitles = [
        ' จัดทำโครงการ',
        ' อนุมัติจัดโครงการ',
        ' ร่างคำขอปิดฯ',
        ' ประธานโครงการ',
        ' ประธานหน่วยงาน',
        'Running',   // New: Running status
        'Finished',  // New: Finished status
        // Add more titles as needed
    ];

    const [stepStates, setStepStates] = useState(Array.from({ length: steps }, (_, index) => false));

    const handleStepClick = (index) => {
        const newStepStates = [...stepStates];
        newStepStates[index] = !newStepStates[index];
        setStepStates(newStepStates);
    };

    return (
        <div className="multi-step-progress-bar">
            <div className="progress" style={{ width: `100-${calculateStepWidth()}%` }}></div>
            {Array.from({ length: steps }, (_, index) => (
                <div
                    className={`step ${index+1 < currentStep ? 'completed' : ''} ${stepStates[index] ? 'active' : ''} ${index === currentStep - 1 ? 'current' : ''}`}
                    style={{ width: `${100 / steps}%` }}
                    // style={{ width: `${100 / steps}%` }}
                    onClick={() => handleStepClick(index)}
                >
                    {index < currentStep - 1 ? (
                        // Display an icon for completed steps✅
                        <i className="nc-icon nc-check-2"></i>
                    ) : <i className="nc-icon nc-settings-gear-64"></i>}
                    {stepTitles[index]}
                </div>
            ))}
        </div>
    );
};

export default ArrowProgressBar;
