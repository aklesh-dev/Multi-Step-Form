"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";

// *
function getNextDay () {
  // Step 1: Find out what's todays date is
  const today = new Date();

  // Step 2: Make a copy of today date so, that we can change it
  const nextDay = new Date(today);  // nextDay is a copy of today, so we can modify it

  // Step 3: Add 1 day to today date to get tomorrow date
  nextDay.setDate(nextDay.getDate() + 1);

  nextDay.setHours(0,0,0,0); 

  return nextDay;
};

const ProjectEndDate = () => {
  // State to manage the selected start date
  const [startDate, setStartDate] = useState<Date | undefined>(getNextDay());

  // function to disable the older dates comparasion to the current date
  const isDateDisable = (date: Date) => {
    const nextDay = getNextDay();
    // Remove time part to compare only dates

    return date < nextDay;  //  Disable the dates before today
  };

  // *function to handle date selection
  function handleSelectedDate (date: Date | undefined) {
    // Only update the startDate if a valid date is selected
    if(date) {
      setStartDate(date);
    }
    // If date is undefined (user tries to unselect the date), do nothing
  };
  
  return (
    <div className='mt-6'>
      <Label className="text-gray-600 mb-2">End Date</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className="w-full justify-start text-left font-normal h-12"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {startDate ? (
              format(startDate, "PPP")
            ) : (
              <span>Pick a end date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 poppins">
            <Calendar 
              className="w-full"
              mode="single"
              selected={startDate}
              disabled={isDateDisable}
              onSelect={handleSelectedDate}
            />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default ProjectEndDate;