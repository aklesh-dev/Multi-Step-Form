import React, { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";
import { UseFormReturn } from "react-hook-form";


// Union type for form methods
// export type FormMethods =
//   | UseFormReturn<stepOneFormData>
//   | UseFormReturn<stepTwoFormData>
//   | UseFormReturn<stepThreeFormData>
//   | UseFormReturn<StepFourFormData>;


export type Step = {
  purpose: string;
  subtext: string;
  icon: IconType;
  label: string;
  content: React.ReactNode;
  // content: ({
  //   methods,
  //   users,
  //   setUsers,
  //   allTasks,
  //   setAllTasks,
  //   combinedFormData,
  // }:{
  //   methods: FormMethods; // Use the union type
  //   users?: User[] | undefined;
  //   setUsers?: Dispatch<SetStateAction<User[]>> | undefined;
  //   //
  //   allTasks?: Task[] | undefined;
  //   setAllTasks?: Dispatch<SetStateAction<Task[]>> | undefined;
  //   comindedFormData?: CombinedFormData``;
  // }) => React.ReactNode;
};