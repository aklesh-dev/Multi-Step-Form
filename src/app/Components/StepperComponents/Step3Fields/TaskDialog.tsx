import React from 'react'
import { Task } from './taskData'
import { Table } from '@tanstack/react-table'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import TaskTable from './TaskTable';

const TEXTS = {
  TEXT_BUTTON: "Select Task",
  DIALOG_HEADER: "Manage Task",
  DIALOG_DESCRIPTION: "Create and manage task for your project. Select the task to add to your project"
};

export default function TaskDialog({table, onAddTask, openState}: {table:Table<Task>; onAddTask: () => void; openState: {isOpen: boolean; setIsOpen: (isOpen: boolean) => void};}) {


  return (
    <Dialog open={openState.isOpen} onOpenChange={openState.setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" className='text-sm mt-4'>
          <span>{TEXTS.TEXT_BUTTON}</span>
        </Button>
      </DialogTrigger>

      <DialogContent className='max-w-5xl'>
        <DialogHeader>
          <DialogTitle className='text-2xl'>{TEXTS.DIALOG_HEADER}</DialogTitle>
          <DialogDescription>{TEXTS.DIALOG_DESCRIPTION}</DialogDescription>
        </DialogHeader>
      </DialogContent>

      {/* Task Table */}
      <div>
        <TaskTable table={table} />
      </div>

      {/* dialog Footer */}
      <DialogFooter>
        <div className="flex items-center gap-6 mt-4 mb-3">
          <DialogClose asChild>
            <Button variant={"secondary"} type='button' className='h-10' >
              Close
            </Button>
          </DialogClose>

          <Button onClick={onAddTask} className='h-11'>
            Update Task(s)
          </Button>
          
        </div>
      </DialogFooter>
      
    </Dialog>
  )
}
