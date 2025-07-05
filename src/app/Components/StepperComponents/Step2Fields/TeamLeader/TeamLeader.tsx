import React from "react";
import { User } from "../Step2Data";
import { FaUser } from "react-icons/fa";
import { Label } from "@/components/ui/label";
import PopOverTeamLeader from "./PopOverTeamLeader";

export default function TeamLeader({
  users,
  setUsers,
}: {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}) {
  const teamLeader = users.find((user) => user.isLeader);
  return (
    <section className="mt-[66px] w-1/2">
      <div className="flex flex-col gap-2">
        <Label htmlFor="teamLeader" className="text-gray-600">Team Leader</Label>
        <span className="text-[13px] text-gray-400">
          Please select a leader for the team.
        </span>
      </div>

      <div className="border p-4 flex justify-between items-center rounded-lg w-full mt-4">
        <div>
          {teamLeader ? (
            <SingleLeader user={teamLeader} />
          ) : (
            <span className="text-slate-500 text-sm">
              Please add a team leader to this project.
            </span>
          )}
        </div>

        <PopOverTeamLeader users={users} setUsers={setUsers} />
        
      </div>

    </section>
  );
}

function SingleLeader({user}:{user:User}) {
  return (
    <section className="p-2 border rounded-lg flex items-center pl-5 pr-10 gap-2 select-none relative">
          {/* User avatar/icon */}
          <span className="size-8 bg-primary/15 rounded-full flex items-center justify-center">
            <FaUser className="text-sm text-primary/40" />
          </span>
          {/* User details (name & role) */}
            <div className="flex flex-col">
              {/* User name */}
              <span className="text-[14px] font-medium">{user.name}</span>
              {/* User role */}
              <span className="text-[13px] text-gray-500">{user.role}</span>
            </div>
    
        </section>
  )
}
