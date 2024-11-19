import React from "react";
import ""; // Ваши стили

const Progress = ({ stepsCount, activeStep }) => {
  const steps = Array.from({ length: stepsCount }, (_, index) => index + 1);

  return (
    <div className="indicator__progressbar">
      {steps.map((step) => (
        <div
          key={step}
          className={`indicator__unit ${
            step <= activeStep ? "_active" : ""
          }`}
        ></div>
      ))}
    </div>
  );
};

export default Progress;
