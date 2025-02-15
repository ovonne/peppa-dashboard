import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";

export function AddInChargeModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex gap-[1rem]">
          <Plus className="!size-[2rem]" />
          Add In Charge
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-[1.4rem] sm:max-w-[42.3rem]">
        <DialogHeader>
          <DialogTitle>
            <h1 className="text-[2rem] font-medium text-black">
              Add In Charge
            </h1>
          </DialogTitle>
        </DialogHeader>
        <p className="my-[2.8rem] text-[1.6rem] font-medium text-Gray">
          Details of the in Charge
        </p>
        <div className="flex flex-col gap-[2.4rem]">
          <Input
            className="rounded-[1.2rem] border-none bg-lightGray p-[1.6rem] text-[1.6rem] font-medium"
            placeholder="In charge name"
          ></Input>
          <Input
            className="rounded-[1.2rem] border-none bg-lightGray p-[1.6rem] text-[1.6rem] font-medium"
            placeholder="In charge email"
          ></Input>
          <div className="flex gap-[0.8rem]">
            <Select>
              <SelectTrigger className="w-[15rem] rounded-[1.2rem] border-none bg-lightGray font-medium">
                <SelectValue placeholder="Code" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Country Phone</SelectLabel>
                  <SelectItem value="+244">+244</SelectItem>
                  <SelectItem value="+434">+434</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Input
              className="rounded-[1.2rem] border-none bg-lightGray p-[1.6rem] text-[1.6rem] font-medium"
              placeholder="In charge phone"
            ></Input>
          </div>

          <div className="mb-[1rem]">
            <p className="text-[1.4rem] text-Gray">Add Associate Children</p>
          </div>

          {/* <div className="flex flex-col gap-[2.4rem]">
            <Input
              className="rounded-[1.2rem] border-none bg-lightGray p-[1.6rem] text-[1.6rem] font-medium"
              placeholder="Name"
            ></Input>
            <Input
              className="rounded-[1.2rem] border-none bg-lightGray p-[1.6rem] text-[1.6rem] font-medium"
              placeholder="Address"
            ></Input>
            <div className="flex gap-[0.8rem]">
              <Select>
                <SelectTrigger className="w-full rounded-[1.2rem] border-none bg-lightGray p-[1.6rem] font-medium">
                  <SelectValue placeholder="grade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Country Phone</SelectLabel>
                    <SelectItem value="+244">+244</SelectItem>
                    <SelectItem value="+434">+434</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full rounded-[1.2rem] border-none bg-lightGray font-medium">
                  <SelectValue placeholder="Class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Country Phone</SelectLabel>
                    <SelectItem value="+244">+244</SelectItem>
                    <SelectItem value="+434">+434</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div> */}

          <div className="flex justify-between">
            <p className="text-[1.6rem] font-medium text-Gray">1 Associate</p>
            <div>
              <div className="mb-[1rem]">
                <p className="text-[1.4rem] text-Gray">
                  Add Associate Children
                </p>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="mt-[4.4rem] flex h-[5rem]">
          <Button
            className="w-[100%] border-2 border-highlighted font-bold text-highlighted hover:bg-highlighted/5 hover:text-highlighted"
            type="button"
            variant={"outline"}
          >
            Cancel
          </Button>
          <Button className="w-[100%] font-bold" type="submit">
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
