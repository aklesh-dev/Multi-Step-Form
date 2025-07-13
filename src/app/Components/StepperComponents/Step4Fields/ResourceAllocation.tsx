import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import React, { useState } from 'react'
import { MdError } from 'react-icons/md';

export default function ResourceAllocation() {
  const [resourceAllocation, setResourceAllocation] = useState("");
  const maxLength = 135;

  return (
    <div className='mb-6 mt-7'>
      <Label htmlFor='resourceAllocation' className='text-gray-500'>
        Resource Allocation
      </Label>

      <Textarea 
      value={resourceAllocation}
      id='resourceAllocation'
      className='h-12 mt-2 resize-none'
      placeholder='Enter the resource allocation details'
      onChange={(e) =>setResourceAllocation(e.target.value)}
      maxLength={maxLength}
      />

      <div className="flex justify-between mt-1">
        <div className="text-red-500 text-sm flex items-center gap-2">
          <MdError />
          <span>Error</span>
        </div>
      </div>
    </div>
  )
}
