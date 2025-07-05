"use client";
import { useState } from "react";
import { usersArray } from "./Step2Fields/Step2Data";
import TeamMembers from "./Step2Fields/teamMembers/TeamMembers";
import TeamLeader from "./Step2Fields/TeamLeader/TeamLeader";

interface Step2Props {
  purpose: string;
  subtext: string;
}

const Step2 = ({purpose, subtext}: Step2Props) => {
  const [users, setUsers] = useState(usersArray);
  
  return (
    <div className='mt-10'>
      <h3 className="font-bold text-xl">{purpose}</h3>
      <p className="text-sm text-gray-500">{subtext}</p>
      <div className="mt-5 gap-8">
        <TeamMembers users={users} setUsers={setUsers} />
        <TeamLeader users={users} setUsers={setUsers} />
      </div>
    </div>
  )
}

export default Step2;