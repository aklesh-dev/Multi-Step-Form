import { Dispatch, SetStateAction } from "react";
import { User } from "../Step2Data";
import { Label } from "@/components/ui/label";
import { MdClose, MdError } from "react-icons/md";
import { FaFlag, FaUser } from "react-icons/fa";
import MemberDialog from "./MemberDialog";

export interface UsersProps {
  users: User[];
  setUsers: Dispatch<SetStateAction<User[]>>;
}

const TeamMembers = ({ users, setUsers }: UsersProps) => {
  return (
    <div className="mb-6 mt-16">
      {/* Label for the team members section */}
      <Label htmlFor="projectName" className="text-gray-600">
        Team members
      </Label>

      {/* Container for displaying the list of team members */}
      <div className="p-3 rounded-lg border flex flex-wrap gap-3">
        {/* If the all the isAdded properties are false then show the span tag below */}
        {users.every((user) => user.isAdded === false) === true && (
          <div className="flex justify-center items-center text-gray-600 h-8">
            <span className="text-sm italic">
              Please add a member to the project...
            </span>
          </div>
        )}

        {/* Map through the users array and render a single user component for each user */}
        {users
          .filter((user) => user.isAdded)
          .map((user, index) => (
            <SingleUser user={user} setUsers={setUsers} key={index} />
          ))}
      </div>
      {/* Member Dialog */}
      <div className="flex justify-between">
        {/* Error message section */}
        <div className="text-red-500 text-sm mt-2 flex items-center gap-2">
          <MdError />
          <span>Error</span>
        </div>
        <MemberDialog users={users} setUsers={setUsers} />
      </div>
      
    </div>
  );
};

// SingleUser function component
function SingleUser({user, setUsers}: {user: User, setUsers: Dispatch<SetStateAction<User[]>>}) {
  function addOrRemoveUser(userArg: User) {
    setUsers((prevUser) => prevUser.map((user) => {
      if(userArg.id === user.id) {
        return {...user, isAdded: !user.isAdded}
      }

      return user;
    }))
  }

  return <>
    <section className="p-2 border rounded-lg flex items-center pl-5 pr-10 gap-2 select-none relative">
      {/* User avatar/icon */}
      <span className="size-8 bg-primary/15 rounded-full flex items-center justify-center">
        <FaUser className="text-sm text-primary/40" />
      </span>
      {/* User details (name & role) */}
      <div className="flex items-start gap-3">
        <div className="flex flex-col">
          {/* User name */}
          <span className="text-[14px] font-medium">{user.name}</span>
          {/* User role */}
          <span className="text-[13px] text-gray-500">{user.role}</span>
        </div>
        {/* Shows flag icon if user is leader */}
        {user.isLeader && (<FaFlag className="text-sm text-red-500 mt-1" />)}
      </div>

      {/* Close icon */}
      <MdClose
      onClick={() => addOrRemoveUser(user)}
      className="absolute right-1 top-[6px] text-[18px] cursor-pointer text-slate-500"
      />
      
    </section>
  </>
  
};

export default TeamMembers;
