import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function AppHeader() {
  return (
    <div>
      <div className="flex justify-between py-[17.5px] px-[21px]">
        <h1 className="text-[20px] font-medium">Control Panel</h1>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className="bg-highlighted/10 px-[1.2rem] py-[0.6rem] rounded-[0.8rem]">
              <div>
                <p className="font-semibold text-[1.4rem] text-highlighted">
                  Adams Angelo John
                </p>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
