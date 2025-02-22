import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";

export default function AddUserModal() {
  return (
    <div>
      <Button className="flex rounded-[0.8rem]">
        <Plus className="!size-[1.5rem]"></Plus>
        <span>Add Users</span>
      </Button>
    </div>
  );
}
