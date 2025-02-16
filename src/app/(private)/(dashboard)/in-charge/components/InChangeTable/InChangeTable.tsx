"use client";

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

import { DateFilterInput } from "@/components/DateFilterInput/DateFilterInput";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useInCharges } from "@/services/InChargeService/useInCharge";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  FilterIcon,
  ListFilter,
} from "lucide-react";

const TableHeaderItems = ["Name", "Email", "Contact", "Location", "Status"];

export function InChargeTable() {
  const { data, error, isLoading } = useInCharges();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data.</p>;

  return (
    <div className="rounded-[1.2rem] bg-white p-[2.2rem]">
      <div className="flex justify-between border-b border-stroke/60 pb-[2rem]">
        <h2 className="text-[1.6rem] font-medium">In Charge</h2>
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
                <SelectItem value="#">Edit</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
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
            {data?.map((person: any, index: number) => (
              <TableRow key={person.id} className="h-[4.8rem] border-b-0">
                <TableCell>
                  <Checkbox id={`select-${index}`} />
                </TableCell>
                <TableCell>{person.name}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-[0.5rem]">
                    <span>{person.email}</span>
                    <Copy
                      className="text-secundGray"
                      strokeWidth={2.3}
                      size={16}
                    />
                  </div>
                </TableCell>
                <TableCell>{person.contact ?? "N/A"}</TableCell>
                <TableCell>{person.location}</TableCell>
                <TableCell>
                  <Badge
                    className="px-[1rem] py-[0.8rem]"
                    variant={person.status ? "default" : "destructive"}
                  >
                    {person.status ? "Active" : "Inactive"}
                  </Badge>
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
