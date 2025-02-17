"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getInitials } from "@/utils/getInitials";
import { LoaderCircle } from "lucide-react";

import { useAdmin } from "@/services/adminService/useAdmin";

import { Bell, ChevronDown, Home } from "lucide-react";
import { SidebarTrigger } from "../ui/sidebar";

export function AppHeader() {
  const { data, error, isLoading } = useAdmin();

  return (
    <div className="bg-white">
      <div className="flex justify-between px-[21px] py-[17.5px]">
        <div className="flex gap-[1rem]">
          <SidebarTrigger></SidebarTrigger>
          <h1 className="text-[20px] font-medium">Control Panel</h1>
        </div>

        <div className="flex items-center gap-[1.4rem]">
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-[0.8rem] bg-highlighted/10 px-[1.2rem] py-[0.6rem]">
              <div className="flex items-center gap-[2rem]">
                <p className="text-[1.4rem] font-semibold text-highlighted">
                  {isLoading ? (
                    <LoaderCircle
                      className="animate-spin text-highlighted"
                      size={16}
                    ></LoaderCircle>
                  ) : (
                    data?.name
                  )}
                </p>
                <div>
                  <ChevronDown
                    className="text-darkGray"
                    size={20}
                  ></ChevronDown>
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              <DropdownMenuLabel>Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div>
            <Bell className="text-highlighted" size={24}></Bell>
          </div>
          <div className="relative flex h-[4.4rem] w-[4.4rem] items-center justify-center overflow-hidden rounded-[1.2rem] bg-lightGray">
            {isLoading ? (
              <LoaderCircle
                className="animate-spin text-highlighted"
                size={18}
              ></LoaderCircle>
            ) : (
              <p className="text-[1.6rem] font-medium text-highlighted">{`${getInitials(`${data?.name}`)}`}</p>
            )}
          </div>
        </div>
      </div>
      <div className="flex gap-[1rem] border-t border-lightGray px-[4rem] py-[0.5rem]">
        <Home size={18} className="text-highlighted"></Home>
        <p className="text-[1.2rem] text-midGray">Home</p>
      </div>
    </div>
  );
}
