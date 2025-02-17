"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
import { Plus, Search } from "lucide-react";
import Link from "next/link";

import { inCharge } from "@/store/InCharge";
import { ChevronLeft, ChevronRight, Copy, ListFilter } from "lucide-react";

const TableHeaderItems = ["Name", "Permissions", "Access group", "Actions"];

export default function Permissions() {
  return (
    <div className="mt-[2rem] flex flex-col gap-[2.5rem] px-[2.5rem]">
      <div className="flex items-end justify-between">
        <h2 className="text-[1.6rem] font-medium">Permissions</h2>

        <Link href={"/products/add-product"}>
          <Button className="flex rounded-[0.8rem]">
            <Plus className="!size-[1.5rem]"></Plus>
            <span>Add Users</span>
          </Button>
        </Link>
      </div>
      <div className="rounded-[1.2rem] bg-white px-[4rem] py-[3.2rem]">
        <h2 className="text-[1.6rem] font-medium">Duties</h2>
        <div className="my-[3.3rem] flex items-center justify-between">
          <div className="flex rounded-[1.2rem] bg-lightGray p-[1.3rem]">
            <Search className="text-Gray"></Search>
            <input className="w-[37rem] border-none bg-transparent px-[1rem] text-[1.4rem] shadow-none !outline-none"></input>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger className="rounded-[0.8rem] border px-[2rem] py-[1rem]">
                Actions
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div>
          <section>
            <Table>
              <TableHeader className="bg-lightGray">
                <TableRow className="h-[5.2rem] p-[1.7rem]">
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
                {inCharge.map((person, index) => (
                  <TableRow key={index} className="h-[4.8rem] border-b-0">
                    <TableCell>{person.name}</TableCell>
                    <TableCell className="">
                      <div className="flex items-center gap-[0.5rem]">
                        <span> {person.email}</span>
                        <Copy
                          className="text-secundGray"
                          strokeWidth={2.3}
                          size={16}
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-[0.5rem]">
                        <span> {person.contact}</span>
                        <Copy
                          className="text-secundGray"
                          strokeWidth={2.3}
                          size={16}
                        />
                      </div>
                    </TableCell>
                    <TableCell>{person.associatedChildren}</TableCell>
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
