"use client";

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
  SelectItem,
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

import { CopyToClipboard } from "@/components/CopyToClipboard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useInCharges } from "@/services/InChargeService/useInCharge";
import type { InChargeType } from "@/types";
import {
  ChevronLeft,
  ChevronRight,
  EllipsisVertical,
  FilterIcon,
  ListFilter,
} from "lucide-react";

const TableHeaderItems = [
  "Name",
  "Email",
  "Contact",
  "Location",
  "Status",
  "Action",
];

export function InChargeTable() {
  const { data, error, isLoading } = useInCharges();

  if (isLoading)
    return <Skeleton className="h-[40rem] w-full rounded-[1.2rem]" />;
  if (error) return <div>Error:</div>;

  return (
    <div className="rounded-[1.2rem] bg-white p-[2.2rem]">
      <div className="flex justify-between border-b border-stroke/60 pb-[2rem]">
        <h2 className="text-[1.6rem] font-medium">In Charge</h2>
        <div className="flex h-[2.9rem] gap-[0.7rem]">
          <Input
            type="search"
            className="!text-[1.4rem]"
            placeholder="Search"
          />
          <Button
            variant="outline"
            className="rounded-[0.4rem] border-darkGray"
          >
            <FilterIcon className="h-[2rem] w-[2rem] text-darkGray" />
            <span>Filter</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger className="bo rounded-[0.3rem] border border-darkGray px-[2rem] text-[1.2rem] font-medium text-darkGray">
              Actions
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Remove</DropdownMenuItem>
              <DropdownMenuItem>Disable</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <section>
        <Table>
          <TableHeader>
            <TableRow className="h-[5.2rem] p-[1.7rem]">
              <TableHead className="w-[50px]">
                <Checkbox id="select-all" />
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
            {data?.map((person: InChargeType, index: number) => (
              <TableRow key={person.id} className="h-[4.8rem] border-b-0">
                <TableCell>
                  <Checkbox id={`select-${index}`} />
                </TableCell>
                <TableCell>{person.name}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-[0.5rem]">
                    <span>{person.email}</span>
                    <CopyToClipboard text={person.email} />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-[0.5rem]">
                    <span>{person?.contact?.first_number ?? "N/A"}</span>
                    {person?.contact?.first_number && (
                      <CopyToClipboard text={person.contact.first_number} />
                    )}
                  </div>
                </TableCell>
                <TableCell>{person.location}</TableCell>
                <TableCell>
                  <Badge
                    className="px-[1rem] py-[0.8rem]"
                    variant={person.status ? "default" : "destructive"}
                  >
                    {person.status ? "Active" : "Inactive"}
                  </Badge>
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
                            <SelectLabel>Items per page</SelectLabel>
                            <SelectItem value="10">10</SelectItem>
                            <SelectItem value="20">20</SelectItem>
                            <SelectItem value="50">50</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <p className="text-Gray">Items per page</p>
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
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <p className="text-[1.4rem] text-Gray">of 44 pages</p>
                    </div>
                    <div className="flex gap-[1rem] text-darkGray">
                      <ChevronLeft size={18} />
                      <ChevronRight size={18} />
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
