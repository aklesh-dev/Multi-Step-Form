import { Label } from "@/components/ui/label";
import { useMemo, useState } from "react";
import { tasks } from "./Step3Fields/taskData";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { taskColumns } from "./Step3Fields/TaskColumns";
import AddedTask, { handleDeleteClickedTask } from "./Step3Fields/Step3Function";

interface step3Props {
  purpose: string;
  subtext: string;
}

const Step3 = ({ purpose, subtext }: step3Props) => {
  const [allTasks, setAllTasks] = useState(tasks);
  const [rowSelection, setRowSelection] = useState<Record<number, boolean>>({});
  const [isOpen, setIsOpen] = useState(false);

  // Memoize added tasks to avoid recalculating on every render
  const addedTasks = useMemo(
    () => allTasks.filter((task) => task.isAdded),
    [allTasks]
  );

  // Use TanStack Table's useReactTable hook
  const table = useReactTable({
    data: allTasks,
    columns: taskColumns,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
    },
  });

  console.log(rowSelection);

  // Convert rowSelection into an array of selected tasks
  const selectedTasks = Object.keys(rowSelection)
    .map(Number)
    .map((index) => allTasks[index])
    .filter(Boolean); // Filter out undefined values

  // Update isAdded based on rowSelection when user clicks "Add Tasks"
  function onclickedAddBtn() {
    setAllTasks((prevTask) => (
      prevTask.map((task) => ({
        ...task,
        isAdded: selectedTasks.some((selected) => selected.id === task.id),
      }))
    ));
    setIsOpen(false);
  }

  return (
    <div className="mt-10">
      <h3 className="font-bold text-xl">{purpose}</h3>
      <p className="text-sm text-gray-500">{subtext}</p>

      <div className="mt-20 mb-36">
        <div className="flex flex-col">
          <Label htmlFor="tasks" className="text-gray-600 text-[14px]">
            Tasks
          </Label>
          <span className="text-gray-600 text-[12px]">
            Choose the tasks to add in the project.
          </span>
        </div>

        <div className="flex flex-wrap p-3 rounded-lg border mt-7">
          {addedTasks.map((task) => (
            <AddedTask 
              key={task.id}
              task={task}
              onDeleteTaskBtn={() => 
                handleDeleteClickedTask(
                  task,
                  allTasks,
                  setAllTasks,
                  rowSelection,
                  setRowSelection,
                )
              }
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Step3;
