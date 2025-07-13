import CostTrackingMethod from "./Step4Fields/CostTracking";
import ResourceAllocation from "./Step4Fields/ResourceAllocation";
import TotalBudget from "./Step4Fields/TotalBudget";

interface step4Props {
  purpose: string;
  subtext: string;
};

const Step4 = ({purpose, subtext}: step4Props) => {
  return (
    <div className='mt-10'>
      <h3 className="font-bold text-xl">{purpose}</h3>
      <p className="text-sm text-gray-500">{subtext}</p>
      <div className="grid grid-cols-2 mt-[86px] gap-4 mb-14">
        <TotalBudget />
        <CostTrackingMethod/>
      </div>
      <ResourceAllocation/>
    </div>
  )
}

export default Step4;