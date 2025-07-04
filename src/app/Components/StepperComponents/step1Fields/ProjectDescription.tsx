"use client"

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { MdError } from "react-icons/md";

const ProjectDescription = () => {
  const [description, setDescription] = useState("");
  const maxLength = 135;
  
  return (
    <div className='mb-6 mt-4'>
      <Label htmlFor="projectDescription" className="text-gray-600">Project Description</Label>
      <Textarea
        id="projectDescription"
        value={description}
        className="h-12 mt-2 resize-none"
        placeholder="Enter a brief description of your project"
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="flex justify-between mt-1">
        {/* error */}
        <div className="text-red-500 text-xs flex items-center gap-2">
          <MdError />
          <span>error</span>
        </div>
        {/* character count */}
        <div className="text-gray-600 text-xs">
          {description.length}/{maxLength} characters
        </div>
      </div>
      
    </div>
  )
}

export default ProjectDescription;