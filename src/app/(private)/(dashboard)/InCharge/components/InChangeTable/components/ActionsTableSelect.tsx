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
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
