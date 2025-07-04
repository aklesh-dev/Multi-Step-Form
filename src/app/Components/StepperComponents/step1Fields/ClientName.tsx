import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ClientName = () => {
  return (
    <div className='mt-[66px]'>
      <Label htmlFor="clientName" className="text-gray-600">Client Name (Optional)</Label>
      <Input 
        id="clientName"
        className="h-[52px] mt-[5px]"
        placeholder="Enter client name"
      />
    </div>
  )
}

export default ClientName;