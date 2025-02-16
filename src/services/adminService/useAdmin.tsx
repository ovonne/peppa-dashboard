import { adminService } from "@/services/adminService";
import { useQuery } from "react-query";

const useAdmin = () => {
  return useQuery("admin", adminService.getAdmin);
};

export { useAdmin };
