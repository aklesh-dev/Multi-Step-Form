"use client"
import { steps } from "@/app/Components/StepperData";
import { useState } from "react";
import Stepper from "./Components/Stepper/Stepper";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";


const BUTTON_LABELS = {
  BACK: "Back",
  NEXT: "Next Step",
  SUBMIT: "Launch Project"
};

export default function Home() {

  const [currentStep, setCurrentStep] = useState(0);

  console.log(currentStep);

  // * Helper function for the navigation
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep < steps.length - 1;

  // *Function to handle the next step and previous step
  const handleNext = () => {
    // *Check if current step is less than the total number of steps
    if(currentStep < steps.length) {
      setCurrentStep(currentStep + 1);  // ?Increment the current step by 1
    }
  };

  const handleBack = () => {
    // ?Check if the current step is greater then 1 (since we start from 1)
    if(currentStep >= 0) {
      setCurrentStep(currentStep - 1);  // ?Decrement the current step by 1
    }
  };
  
  return (
    <>
      <section className="poppins px-20">
        {/* The Stepper */}
        <Stepper steps={steps} currentStep={currentStep} />

        {/* Render the Step Component depending on the current step */}
        <div className="step-content">{steps[currentStep].content}</div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-end p-4 gap-4">
          {/* Back Button */}
          <Button 
            variant={"ghost"}
            disabled={isFirstStep}
            className="p-7"
            onClick={handleBack}
          >
            <ArrowLeft />
            <span>{BUTTON_LABELS.BACK}</span>
          </Button>

          {/* Next Button */}
          {/* Render the next button or the submit button depending on the isLastStep constant */}
          {isLastStep ? (
            <Button className="p-7" onClick={handleNext}>
              {BUTTON_LABELS.NEXT}
            </Button>
          ) : (
            <Button className="p-7" onClick={() => alert("Form submitted")}>
              {BUTTON_LABELS.SUBMIT}
            </Button>
          )}
          
        </div>
      </section>
    </>
  );
}
