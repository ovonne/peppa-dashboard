import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectFilterSummaryCard() {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-[100px] border-none bg-white shadow-none outline-none">
          <p className="text-[1.2rem] text-midGray">
            <SelectValue placeholder="This week" />
          </p>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Filter Date</SelectLabel>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="this-month">This month</SelectItem>
            <SelectItem value="this-year">This year</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
