import Step1 from "@/app/Components/StepperComponents/Step1";
import Step2 from "@/app/Components/StepperComponents/Step2";
import Step3 from "@/app/Components/StepperComponents/Step3";
import Step4 from "@/app/Components/StepperComponents/Step4";
import Step5 from "@/app/Components/StepperComponents/Step5";
import { Step } from "./Stepper/types";
import { FaMoneyBillWave, FaProjectDiagram } from "react-icons/fa";
import { RiShapesFill, RiTeamFill } from "react-icons/ri";
import { LuMilestone } from "react-icons/lu";

export const steps: Step[] = [
  {
    icon: FaProjectDiagram,
    label: "Project Overview",
    content: <Step1 />
  },
  {
    icon: RiTeamFill,
    label: "Team & Roles",
    content: <Step2 />
  },
  {
    icon: LuMilestone,
    label: "Tasks & Milestones",
    content: <Step3 />
  },
  {
    icon: FaMoneyBillWave,
    label: "Budget & Resources",
    content: <Step4 />
  },
  {
    icon: RiShapesFill,
    label: "Review",
    content: <Step5 />
  },
]