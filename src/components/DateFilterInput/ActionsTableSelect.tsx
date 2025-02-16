import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ActionsTableSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] border-darkGray">
        <p className="text-[1.2rem]">
          <SelectValue placeholder="Actions" />
        </p>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Actions</SelectLabel>
          <SelectItem value="#">Remove</SelectItem>
          <SelectItem value="#">Add</SelectItem>
          <SelectItem value="#">Clear</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
