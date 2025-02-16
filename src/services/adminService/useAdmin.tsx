import { adminService } from "@/services/adminService";
import { AdminType } from "@/types";
import { useQuery } from "react-query";

const useAdmin = () => {
  return useQuery<AdminType>("admin", adminService.getAdmin);
};

export { useAdmin };
