"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

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
import { EllipsisVertical, Search } from "lucide-react";

import { permissions } from "@/store/permission";
import { getInitials } from "@/utils/getInitials";
import { ChevronLeft, ChevronRight, ListFilter } from "lucide-react";
import AddUserModal from "./components/AddUserModal";

const TableHeaderItems = ["Name", "Permissions", "Access group", "Actions"];

export default function Permissions() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPermissions = permissions.filter((permission) =>
    permission.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="mt-[2rem] flex flex-col gap-[2.5rem] px-[2.5rem]">
      <div className="flex items-end justify-between">
        <h2 className="text-[1.6rem] font-medium">Permissions</h2>
        <AddUserModal></AddUserModal>
      </div>
      <div className="rounded-[1.2rem] bg-white px-[4rem] py-[3.2rem]">
        <h2 className="text-[1.6rem] font-medium">Duties</h2>
        <div className="my-[3.3rem] flex items-center justify-between">
          <div className="flex rounded-[1.2rem] bg-lightGray p-[1.3rem]">
            <Search className="text-Gray"></Search>
            <input
              className="w-[37rem] border-none bg-transparent px-[1rem] text-[1.4rem] shadow-none !outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name"
            />
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger className="rounded-[0.6rem] border border-darkGray px-[2rem] py-[1rem] text-[1.2rem] font-medium">
                Actions
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Change All</DropdownMenuItem>
                <DropdownMenuItem>Remove all</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div>
          <section>
            <Table>
              <TableHeader className="bg-lightGray">
                <TableRow className="h-[5.2rem] p-[1.7rem]">
                  <TableHead></TableHead>

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
                {filteredPermissions.map((permission, index) => (
                  <TableRow key={index} className="h-[4.8rem] border-b-0">
                    <TableCell>{}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-[2rem]">
                        <div className="flex h-[4.4rem] w-[4.4rem] items-center justify-center rounded-[1.2rem] bg-lightGray">
                          <p className="text-[1.6rem] font-medium text-highlighted">{`${getInitials(`${permission.name}`)}`}</p>
                        </div>
                        <p>{permission.name}</p>
                      </div>
                    </TableCell>
                    <TableCell className="">
                      <div className="flex items-center gap-[0.5rem]">
                        <span> {permission.permission}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-[0.5rem]">
                        <span> {permission.group}</span>
                      </div>
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
      </div>
      <div>{/* <InChargeTable></InChargeTable> */}</div>
    </div>
  );
}
