"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { CopyToClipboard } from "@/components/CopyToClipboard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { teacherService } from "@/services/TeacherService";
import { useTeachers } from "@/services/TeacherService/useTeacher";
import type { TeacherType } from "@/types";
import { EllipsisVertical, FilterIcon, ListFilter } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";

const TableHeaderItems = [
  "Name",
  "Email",
  "Subject",
  "Location",
  "Price/Hour",
  "Education Level",
  "Status",
  "Actions",
];

export function TeachersTable() {
  const { data, error, isLoading } = useTeachers();
  const queryClient = useQueryClient();
  const [isLoadingRemoveAction, setIsLoadingRemoveAction] = useState(false);

  const removeTeacher = async (id: string) => {
    try {
      setIsLoadingRemoveAction(true);
      await teacherService.delete(id);
      toast.success("Teacher removed successfully");
      queryClient.invalidateQueries("teachers");
    } catch (error: any) {
      toast.error(`${error.message}`);
    } finally {
      setIsLoadingRemoveAction(false);
    }
  };

  const changeTeacherState = async (id: string, data: { status: boolean }) => {
    try {
      await teacherService.updatePartial(id, data);

      toast.success("Teacher state updates successfully");
      queryClient.invalidateQueries("teachers");
    } catch (error: any) {
      toast.error(`${error.message}`);
    } finally {
    }
  };

  if (isLoading)
    return <Skeleton className="h-[40rem] w-full rounded-[1.2rem]" />;
  if (error) return <div>Error loading teachers.</div>;

  return (
    <div className="rounded-[1.2rem] bg-white p-[2.2rem]">
      <div className="flex justify-between border-b border-stroke/60 pb-[2rem]">
        <h2 className="text-[1.6rem] font-medium">Teachers</h2>
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
            {data?.map((teacher: TeacherType, index: number) => (
              <TableRow key={teacher.id} className="h-[4.8rem] border-b-0">
                <TableCell>
                  <Checkbox id={`select-${index}`} />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-[1rem]">
                    <div className="relative h-[3.9rem] w-[3.9rem] overflow-hidden rounded-[0.8rem] bg-lightGray">
                      <Image
                        src={teacher?.avatar_url || "/images/teacher.png"}
                        alt={"Image of: " + teacher.name}
                        fill
                        className="rounded-[1.2rem] object-cover"
                      />
                    </div>
                    {teacher.name}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-[0.5rem]">
                    <span>{teacher.email}</span>
                    <CopyToClipboard text={teacher.email} />
                  </div>
                </TableCell>
                <TableCell>{teacher.subject}</TableCell>
                <TableCell>{teacher.location}</TableCell>
                <TableCell>{teacher.daily}</TableCell>
                <TableCell>{teacher.education_level}</TableCell>
                <TableCell>
                  <Badge
                    className="px-[1rem] py-[0.8rem]"
                    variant={teacher.status ? "default" : "destructive"}
                  >
                    {teacher.status ? "Active" : "Inactive"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <EllipsisVertical size={20}></EllipsisVertical>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Select</DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() =>
                          changeTeacherState(teacher.id, {
                            status: !teacher.status,
                          })
                        }
                      >
                        change status
                      </DropdownMenuItem>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => removeTeacher(teacher.id)}
                        disabled={isLoadingRemoveAction}
                      >
                        {isLoadingRemoveAction ? "Removing..." : "Remove"}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </div>
  );
}
