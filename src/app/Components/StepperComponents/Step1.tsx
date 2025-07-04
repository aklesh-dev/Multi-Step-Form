import ClientName from "./step1Fields/ClientName";
import ProjectCategory from "./step1Fields/ProjectCategory";
import ProjectDescription from "./step1Fields/ProjectDescription";
import ProjectEndDate from "./step1Fields/ProjectEndDate";
import ProjectName from "./step1Fields/ProjectName";
import ProjectStartDate from "./step1Fields/ProjectStartDate";

interface StepOneProps {
  purpose: string;
  subtext: string;
}

const Step1 = ({ purpose, subtext }: StepOneProps) => {
  return (
    <div className='mt-10'>
      <h3 className="font-bold text-xl">{purpose}</h3>
      <p className="text-sm text-gray-500">{subtext}</p>
      <div className="grid grid-cols-2 mt-5 gap-8">
        <div className="mt-4">
          <ProjectName />
          <ProjectDescription />
          <ProjectCategory />
        </div>
        <div className="mt-4">
          <ProjectStartDate />
          <ProjectEndDate />
          <ClientName />
        </div>
      </div>
    </div>
  )
}

export default Step1;