import { Label } from "@/components/ui/label";

interface step3Props {
  purpose: string;
  subtext: string;
}

const Step3 = ({ purpose, subtext }: step3Props) => {
  return (
    <div className="mt-10">
      <h3 className="font-bold text-xl">{purpose}</h3>
      <p className="text-sm text-gray-500">{subtext}</p>

      <div className="mt-20 mb-36">
        <div className="flex flex-col">
          <Label htmlFor="tasks" className="text-gray-600 text-[14px]">
            Tasks
          </Label>
          <span className="text-gray-600 text-[12px]">
            Choose the tasks to add in the project.
          </span>
        </div>

        <div className="flex flex-wrap p-3 rounded-lg border mt-7">
          {/* Todo: Add tasks */}
        </div>
      </div>
    </div>
  );
};

export default Step3;
