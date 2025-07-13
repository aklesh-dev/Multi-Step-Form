import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import React, { useState } from 'react'

export default function CostTrackingMethod() {
  const [selectedMethod, setSelectedMethod] = useState("fixed-budget");
  return (
    <div>
      <Label htmlFor='totalBudget' className='text-gray-600'>
        Cost Tracking Method
      </Label>

      <Select
      defaultValue='fixed-budget'
      value={selectedMethod}
      onValueChange={setSelectedMethod}
      >
        <SelectTrigger className='h-12 mt-2'>
          <SelectValue placeholder="Select a cost tracing method" />
        </SelectTrigger>

        <SelectContent className='poppins'>
          <SelectItem value='fixed-budget' className='h-11'>
            Fixed Budget
          </SelectItem>
          <SelectItem value='hourly-budget' className='h-11'>
            Hourly Billing
          </SelectItem>
        </SelectContent>
        
      </Select>
    </div>
  )
}
