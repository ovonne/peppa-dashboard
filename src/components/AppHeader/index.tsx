import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

import { Bell, ChevronDown, Home } from "lucide-react";
import { SidebarTrigger } from "../ui/sidebar";

export function AppHeader() {
  return (
    <div className="bg-white">
      <div className="flex justify-between py-[17.5px] px-[21px]">
        <div className="flex gap-[1rem]">
          <SidebarTrigger></SidebarTrigger>
          <h1 className="text-[20px] font-medium">Control Panel</h1>
        </div>

        <div className="flex gap-[1.4rem] items-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="bg-highlighted/10 px-[1.2rem] py-[0.6rem] rounded-[0.8rem]">
              <div className="flex items-center gap-[2rem]">
                <p className="font-semibold text-[1.4rem] text-highlighted">
                  Adams Angelo John
                </p>
                <div>
                  <ChevronDown
                    className="text-darkGray"
                    size={20}
                  ></ChevronDown>
                </div>
              </div>
            </DropdownMenuTrigger>
          </DropdownMenu>

          <div>
            <Bell className="text-highlighted" size={24}></Bell>
          </div>
          <div className="w-[4.4rem] h-[4.4rem]  bg-lightGray rounded-[1.2rem] overflow-hidden relative">
            <Image
              src={"https://github.com/Adao-Angelo.png"}
              alt={"User profile:" + "Adams Angelo"}
              fill
              className="object-cover rounded-[1.2rem]"
            ></Image>
          </div>
        </div>
      </div>
      <div className="border-lightGray flex  gap-[1rem] border-t py-[0.5rem] px-[4rem]">
        <Home size={18} className="text-highlighted"></Home>
        <p className="text-[1.2rem] text-midGray">Home</p>
      </div>
    </div>
  );
}
