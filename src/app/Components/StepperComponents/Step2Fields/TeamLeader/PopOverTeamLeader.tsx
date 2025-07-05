import React from "react";
import { User } from "../Step2Data";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { FaFlag, FaPlus, FaUser,  } from "react-icons/fa";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

interface UserProps {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

export default function PopOverTeamLeader({ users, setUsers }: UserProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"secondary"} className="text-sm">
          <FaPlus size={12} className="text-[10px] text-gray-600" />
          <span>Add Leader</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="poppins w-[330px]">
        <TeamsCommmandList users={users} setUsers={setUsers} />
      </PopoverContent>
    </Popover>
  );
}

function TeamsCommmandList({ users, setUsers }: UserProps) {
  return (
    <Command>
      <CommandInput placeholder="Search a member..." />
      <CommandList className="mt-2">
        <CommandEmpty>No result found.</CommandEmpty>
        {users.map((user, index) => (
          <CommandItem key={index}>
            <SingleUser user={user} setUsers={setUsers} />
          </CommandItem>
        ))}
      </CommandList>
    </Command>
  );
}

function SingleUser({
  user,
  setUsers,
}: {
  user: User;
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}) {

  function updateUserLeader() {
    // Update the state of users by mapping over the previous users array
    setUsers((prevState) => {
      return prevState.map((u) => {
        // Check if the current user's id matches the user.id (this condition is always true)
        if (u.id === user.id) {
          // Since the condition is always true, this will set the isLeader property of every user to true
          return { ...u, isLeader: true };
        }
        // This line is never reached because the condition above is always true
        return { ...u, isLeader: false };
      });
    });
  };

  return (
    <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-2 select-none relative   ">
          {/* User avatar/icon */}
          <span className="size-8 bg-primary/15 rounded-full flex items-center justify-center">
            <FaUser className="text-sm text-primary/45" />
          </span>
          {/* User details (name and role) */}
          <div className="flex flex-col items-start">
            {/* User's name */}
            <span className="text-[14px] font-medium">{user.name}</span>
            {/* User's role */}
            <span className="text-slate-500 text-[13px]">{user.role}</span>
          </div>
        </div>

        {/* if the user is not a leader, show to button to add a member as a leader, 
        show the leader icon */}
        <div>
          {!user.isLeader ? (
            <Button
              onClick={() => updateUserLeader()}
              variant={"outline"}
              className="text-gray-400"
            >
              <FaPlus />
            </Button>
          ) : (
            <Button variant={"ghost"} disabled={true} className="text-gray-400">
              <FaFlag className="text-slate-400" />
            </Button>
          )}
        </div>
      </div>
  )
};
