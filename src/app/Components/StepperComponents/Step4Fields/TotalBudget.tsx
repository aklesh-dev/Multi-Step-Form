import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { FaDollarSign } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { NumericFormat } from "react-number-format";

export default function TotalBudget() {
  return (
    <section className="relative">
      <FaDollarSign className="absolute right-3 top-12 text-primary" />
      <Label htmlFor="totalBudget" className="text-gray-500">
        Total Budget
      </Label>
      <NumericFormat
        placeholder="Enter the budget of the project..."
        value={0}
        customInput={Input}
        thousandSeparator
        className="h-12 mt-12"
      />

      <div className="text-red-500 text-sm flex items-center gap-2 mt-2">
        <MdError />
        <span>Error</span>
      </div>
    </section>
  );
}
