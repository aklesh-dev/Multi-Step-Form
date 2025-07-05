import { Dispatch, SetStateAction } from "react";
import { User } from "../Step2Data";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import UserItem from "./UserItem";

const MemberDialog = ({users, setUsers}: {users: User[], setUsers: Dispatch<SetStateAction<User[]>>}) => {
  // State
  const alreadyAddedUsers = users.filter(user => user.isAdded === true)
  const notAddedUsers = users.filter(user => user.isAdded === false)
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"secondary"} className="text-sm mt-4">
          <FaPlus className="size-5 text-[10px] text-gray-600" />
          <span>Add member</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="poppins">
        <DialogHeader>
          <DialogTitle className="text-[22px]">Manage Team members</DialogTitle>
          <DialogDescription>
            Add new or remove existing team members to this project.
          </DialogDescription>
        </DialogHeader>

        {/* user list */}
        <div className="mt-4">
          <Command>
            <CommandInput placeholder="Search and add the team members"/>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandList className="mt-6">
              {/* Already added members */}
              {alreadyAddedUsers.length > 0 && (
                <CommandGroup heading="Already added members">
                  {alreadyAddedUsers.map((user, index) => (
                    <CommandItem key={index}>
                      <UserItem user={user} setUsers={setUsers} />
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}

              {/* Not added members */}
              {notAddedUsers.length > 0 && (
                <CommandGroup heading="Not added members">
                  {notAddedUsers.map((user, index) => (
                    <CommandItem key={index}>
                      <UserItem user={user} setUsers={setUsers} />
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
            </CommandList>
          </Command>
        </div>
        
      </DialogContent>
    </Dialog>
  )
}

export default MemberDialog;