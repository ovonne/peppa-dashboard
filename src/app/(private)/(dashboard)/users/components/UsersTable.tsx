"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { mockUsers } from "@/store/users";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  EllipsisVertical,
  FilterIcon,
  ListFilter,
} from "lucide-react";

import { DateFilterInput } from "@/components/DateFilterInput/DateFilterInput";
import { getInitials } from "@/utils/getInitials";

const TableHeaderItems = [
  "Name",
  "Email",
  "Telephone",
  "Associated Group",
  "Last access",
  "Status",
  "action",
];

export function UsersTable() {
  return (
    <div className="rounded-[1.2rem] bg-white p-[2.2rem]">
      <div className="flex justify-between border-b border-stroke/60 pb-[2rem]">
        <h2 className="text-[1.6rem] font-medium">Users</h2>
        <div className="flex h-[2.9rem] gap-[0.7rem]">
          <Input type="search" placeholder="Search" />
          <Button
            variant="outline"
            className="rounded-[0.4rem] border-darkGray"
          >
            <FilterIcon className="h-[2rem] w-[2rem] text-darkGray" />
            <span>Filter</span>
          </Button>
          <DateFilterInput />
        </div>
      </div>
      <section>
        <Table>
          <TableHeader>
            <TableRow className="h-[5.2rem] p-[1.7rem]">
              <TableHead className="w-[5rem]">
                <Checkbox id="terms" />
              </TableHead>
              {TableHeaderItems.map((header) => (
                <TableHead key={header}>
                  <div className="flex items-center gap-[0.8rem]">
                    <p className="text-[1.4rem] font-medium text-darkGray">
                      {header}
                    </p>
                    <ListFilter size={18} />
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockUsers?.map((user, index) => (
              <TableRow key={index} className="h-[4.8rem] border-b-0">
                <TableCell>
                  <Checkbox id={`select-${index}`} />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-[2rem]">
                    <div className="flex h-[4.4rem] w-[4.4rem] items-center justify-center rounded-[1.2rem] bg-lightGray">
                      <p className="text-[1.6rem] font-medium text-highlighted">{`${getInitials(`${user.name}`)}`}</p>
                    </div>
                    <p>{user.name}</p>
                  </div>
                </TableCell>
                <TableCell className="">
                  <div className="flex items-center gap-[0.5rem]">
                    <span> {user.email}</span>
                    <Copy
                      className="text-secundGray"
                      strokeWidth={2.3}
                      size={16}
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-[0.5rem]">
                    <span> {user.telephone}</span>
                    <Copy
                      className="text-secundGray"
                      strokeWidth={2.3}
                      size={16}
                    />
                  </div>
                </TableCell>
                <TableCell>{user.associated_group}</TableCell>
                <TableCell>{user.last_access}</TableCell>
                <TableCell>
                  {user.status == "Active" ? (
                    <Badge className="px-[1rem] py-[0.8rem]">
                      {user.status}
                    </Badge>
                  ) : (
                    <Badge
                      className="px-[1rem] py-[0.8rem]"
                      variant={"destructive"}
                    >
                      {user.status}
                    </Badge>
                  )}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="m-auto rounded-[0.3rem] text-left font-medium text-darkGray">
                      <EllipsisVertical size={20}></EllipsisVertical>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Remove</DropdownMenuItem>
                      <DropdownMenuItem>Disable</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={TableHeaderItems.length + 1}>
                <div className="flex justify-between">
                  <div className="flex items-center gap-[2rem]">
                    <div className="flex items-center gap-[1rem]">
                      <Select>
                        <SelectTrigger className="h-[3rem] w-[6rem] rounded-[1.2rem] bg-stroke/30 text-[1.2rem]">
                          <SelectValue placeholder="10" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Page</SelectLabel>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <p className="text-Gray">Items for page</p>
                    </div>
                    <p>10 - 1 of 200 items</p>
                  </div>
                  <div className="flex items-center gap-[2rem]">
                    <div className="flex items-center gap-[1rem]">
                      <Select>
                        <SelectTrigger className="h-[3rem] w-[6rem] rounded-[1.2rem] bg-stroke/30 text-[1.2rem]">
                          <SelectValue placeholder="1" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Page</SelectLabel>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <p className="text-[1.4rem] text-Gray">of 44 pages</p>
                    </div>
                    <div className="flex gap-[1rem] text-darkGray">
                      <ChevronLeft size={18}></ChevronLeft>
                      <ChevronRight size={18}></ChevronRight>
                    </div>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </section>
    </div>
  );
}
