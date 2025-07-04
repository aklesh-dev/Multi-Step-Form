"use client"
import React from "react";
import { Step } from "./types";

const Stepper = ({steps, currentStep}: {steps: Step[], currentStep: number}) => {

  console.log("Current Step: ", currentStep);
  
  return (
    <section className="flex items-center justify-center p-7">
      <div className="border rounded-lg flex justify-center items-center p-2">
        {/* Step array */}
        {steps.map((step, index) => (
          // Step wrapper
          <div key={index} className="flex items-center p-3 gap-2">
            {/* Step Indicator */}
            <StepIndicator Icon={step.icon} isActive={currentStep === index} />
            {/* Step label (only show for the active step) */}
            {currentStep === index && <StepLabel label={step.label} stepNumber={index + 1} />}
          </div>
        ))}

      </div>
    </section>
  )
}

export default Stepper;

function StepLabel({
  label,
  stepNumber,
}: {
  label: string;
  stepNumber: number;
}) {
  return (
    <div className="flex flex-col  ">
      <span className="text-[13px] font-medium text-primary">
        STEP {stepNumber}
      </span>
      <span className="font-bold">{label}</span>
    </div>
  );
}

function StepIndicator({
  Icon,
  isActive,
}: {
  Icon: React.ComponentType<{className?:string}>,
  isActive: boolean;
}) {
  return (
    <div
      className={`  p-3 rounded-full ${
        isActive ? "bg-primary/10" : "bg-gray-100"
      }`}
    >
      <Icon className={`${isActive ? "text-primary" : "text-gray-400"}`} />
    </div>
  );
}