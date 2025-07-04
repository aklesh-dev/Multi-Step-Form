import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MdError } from "react-icons/md";

const ProjectName = () => {
  return (
    <div className='mb-6'>
      <Label htmlFor="projectName " className="text-gray-600">Project Name</Label>
      <Input id="projectName" className="h-12 mt-1" placeholder="Enter project name"/>
      <div className="text-red-600 text-sm mt-2 flex items-center gap-2">
        <MdError />
        <span>error</span>
      </div>
    </div>
  )
}

export default ProjectName;