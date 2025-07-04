import Step1 from "@/app/Components/StepperComponents/Step1";
import Step2 from "@/app/Components/StepperComponents/Step2";
import Step3 from "@/app/Components/StepperComponents/Step3";
import Step4 from "@/app/Components/StepperComponents/Step4";
import Step5 from "@/app/Components/StepperComponents/Step5";
import { Step } from "./Stepper/types";
import { FaMoneyBillWave, FaProjectDiagram } from "react-icons/fa";
import { RiShapesFill, RiTeamFill } from "react-icons/ri";
import { LuMilestone } from "react-icons/lu";

export const stepData = {
  step1: {
    purpose: "Define the basic details of the project",
    subtext:
      "Provide a clear and concise overview of your project to help your team understand its scope and objectives.",
  },
  step2: {
    purpose: "Assign team members and define their roles",
    subtext:
      "Add team members and assign roles to ensure everyone knows their responsibilities. You can also invite external collaborators if needed.",
  },
  step3: {
    purpose: "Break down the project into tasks and milestones",
    subtext:
      "Create a detailed task list with deadlines and priorities to keep your project on track. Add milestones to mark key achievements.",
  },
  step4: {
    purpose: "Plan the project's financial and resource allocation",
    subtext:
      "Outline your budget and allocate resources effectively to avoid overspending and ensure smooth project execution.",
  },
  step5: {
    purpose: "Finalize and launch the project",
    subtext:
      "Review all the details you’ve entered to ensure everything is accurate. Once confirmed, launch your project and get started!",
  },
};

export const steps: Step[] = [
  {
    purpose: stepData.step1.purpose,
    subtext: stepData.step1.subtext,
    icon: FaProjectDiagram,
    label: "Project Overview",
    content:  (
      <Step1 
        purpose={stepData.step1.purpose}
        subtext={stepData.step1.subtext}
      />
    )
  },
  {
    purpose: stepData.step2.purpose,
    subtext: stepData.step2.subtext,
    icon: RiTeamFill,
    label: "Team & Roles",
    content: (
      <Step2 
        purpose={stepData.step2.purpose}
        subtext={stepData.step2.subtext}
      />
    )
  },
  {
    purpose: stepData.step3.purpose,
    subtext: stepData.step3.subtext,
    icon: LuMilestone,
    label: "Tasks & Milestones",
    content: (
      <Step3 
        purpose={stepData.step3.purpose}
        subtext={stepData.step3.subtext}
      />
    )
  },
  {
    purpose: stepData.step4.purpose,
    subtext: stepData.step4.subtext,
    icon: FaMoneyBillWave,
    label: "Budget & Resources",
    content: (
      <Step4 
        purpose={stepData.step4.purpose}
        subtext={stepData.step4.subtext}
        />
    )
  },
  {
    purpose: stepData.step5.purpose,
    subtext: stepData.step5.subtext,
    icon: RiShapesFill,
    label: "Review",
    content: (
      <Step5 
        purpose={stepData.step5.purpose}
        subtext={stepData.step5.subtext}
      />
    )
  },
]