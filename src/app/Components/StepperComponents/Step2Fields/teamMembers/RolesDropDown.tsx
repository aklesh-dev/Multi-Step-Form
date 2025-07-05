"use client";
import { useState } from "react";
import { rolesArray, User } from "../Step2Data";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { FaArrowDown } from "react-icons/fa";

const RolesDropDown = ({ user }: { user: User }) => {
  const [roles] = useState(() => {
    // Map over the rolesArray to create a new array of roles with the isChecked property set
    return rolesArray.map((role) => {
      // Check if the current role's name matches the role of the user
      if (role.name === user.role) {
        // If they match, return the role object with isChecked set to true
        return { ...role, isChecked: true };
      }
      // If they don't match, return the role object with isChecked set to false
      return { ...role, isChecked: false };
    });
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"}>
          {user.role}
          <FaArrowDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-36 poppins">
        {roles.map((role, index) => (
          <DropdownMenuCheckboxItem
            key={index}
            className={`${
              role.isChecked ? "font-bold" : "text-slate-700"
            } h-10`}
            checked={role.isChecked}
          >
            {role.name}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default RolesDropDown;
