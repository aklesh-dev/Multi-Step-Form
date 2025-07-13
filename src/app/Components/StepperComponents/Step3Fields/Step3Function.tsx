import React, { Dispatch, SetStateAction } from 'react'
import { Task } from './taskData'
import { IoIosClose } from "react-icons/io";

export default function AddedTask({task, onDeleteTaskBtn}: {task:Task, onDeleteTaskBtn: (task: Task) => void}) {

  return (
    <section className="border rounded-md p-4 pr-8 relative">
      <div className="flex items-center gap-2">
        <div className="size-8 bg-primary/25 rounded-md text-primary/45 flex items-center justify-center">
          <task.icon className='text-sm' />
        </div>

        <div className="flex flex-col">
          <span className='font-medium text-sm'>{task.title}</span>
          <span className="text-[13px] text-gray-500">{task.priority}</span>
        </div>
      </div>

      <IoIosClose
        onClick={() => onDeleteTaskBtn(task)}
        className='absolute top-2 right-1 text-sm text-gray-500 cursor-pointer'
       />
    </section>
  )
};

export function handleDeleteClickedTask(
  taskProp: Task,
  allTasks: Task[],
  setAllTasks: Dispatch<SetStateAction<Task[]>>,
  rowSelection: Record<number, boolean>,
  setRowSelection: Dispatch<SetStateAction<Record<number, boolean>>>
) {
  // Update the isAdded property based on the id  property
  const updatedTasks = allTasks.map((task) => {
    if(task.id === taskProp.id) {
      return {...task, isAdded: false}
    }

    return task;
  });

  // Create a copy of the row Selection
  const updateRowSelecton = {...rowSelection};

  // extract the task index
  const taskIndex = allTasks.findIndex((task) => task.id === taskProp.id);

  // Update the all tasks state and the row selection state
  setAllTasks(updatedTasks);

  if(taskIndex !== -1) {
    // delete the index key from the updateRowSelection
    delete updateRowSelecton[taskIndex];
    // Set the update
    setRowSelection(updateRowSelecton)
  }
  
};
