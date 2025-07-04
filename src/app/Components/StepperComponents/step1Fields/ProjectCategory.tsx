import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { IconType } from "react-icons";
import { FaChartLine, FaCode, FaGraduationCap, FaHardHat, FaHeart } from "react-icons/fa";

type category = | "Marketing" | "Software Development" | "Construction" |"Education" | "Healthcare";

type selectedItemType = {
  label: category;
  icon: IconType;
};

export const selectedItems: selectedItemType[] = [
  {
    label: "Marketing",
    icon: FaChartLine
  },
  {
    label: "Software Development",
    icon: FaCode
  },
  {
    label: "Construction",
    icon: FaHardHat
  },
  {
    label: "Education",
    icon: FaGraduationCap
  },
  {
    label: "Healthcare",
    icon: FaHeart
  }
];

const ProjectCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState<category>("Software Development");

  // Update the selected category state
  function onValueChange(value:string) {
    // see if the value is a valid category
    const selectedItem = selectedItems.find(item => item.label === value);
    // If it is a valid category, update the state
    if(selectedItem) {
      setSelectedCategory(selectedItem.label)
    }
  };
  
  return (
    <div className="">
      <Label className="text-gray-600 mb-2">Project Category</Label>
      <Select value={selectedCategory} onValueChange={onValueChange}>
        <SelectTrigger className="h-[52px] mt-1 w-full">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent className="poppins">
          {selectedItems.map(item => (
            <SelectItem key={item.label} value={item.label}>
              <div className="flex items-center gap-2">
                {/* Icon */}
                <div className="bg-primary/10 rounded-md flex items-center justify-center">
                  <item.icon className="text-primary/40" />
                </div>
                {/* Label */}
                <span>{item.label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default ProjectCategory;