import { Dispatch, SetStateAction } from "react";
import { User } from "../Step2Data";
import { FaFlag, FaUser, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import RolesDropDown from "./RolesDropDown";

const UserItem = ({
  user,
  setUsers,
}: {
  user: User;
  setUsers: Dispatch<SetStateAction<User[]>>;
}) => {
  // Function to update isAdded property
  function addOrRemove(userArg: User) {
    // Update the state of users by mapping over the previous users array
    setUsers((prevUsers) =>
        prevUsers.map((user) => {
            // Check if the current user's id matches the id of the userArg
            if (userArg.id === user.id) {
                // If they match, toggle the isAdded property and return the updated user object
                return { ...user, isAdded: !user.isAdded };
            }
            // If they don't match, return the user object as is
            return user;
        })
    );
  };


  return <div className="flex justify-between items-center w-full">
    {/* Avatar, name, and role */}
    <div className="flex items-center gap-6">
      {/* Avatar Icon */}
      <div className="size-8 rounded-full bg-primary/25 text-primary/35 flex justify-center items-center">
      <FaUser className="text-sm hover:text-white" />
      </div>

      {/* Name and Role */}
      <div className="flex flex-col">
        <span className="font-bold">
          {user.name}
        </span>
        <span className="text-gray-600">
          {user.role}
        </span>
      </div>

      {/* If user is a leader show the flag icon */}
      {user.isLeader && <FaFlag className="text-slate-400" /> }
    </div>

    {/* DropDown to show user role */}
    <div className="flex items-center gap-2">
      {/* Role Dropdown Component*/}
      <RolesDropDown user={user} />

      {/* Show Add/Remove Button based on isAdded property of user object */}
      <>
      {user.isAdded ? (
        <Button
        variant={"outline"}
        className="hover:bg-red-400"
        onClick={() => addOrRemove(user)}
        >
          <FaUserMinus/>
        </Button>
      ) : (
        <Button
        variant={"outline"}
        className="hover:bg-green-400"
        onClick={() => addOrRemove(user)}
        >
          <FaUserPlus/>
        </Button>
      )}
      </>
    </div>
    
  </div>;
};

export default UserItem;
