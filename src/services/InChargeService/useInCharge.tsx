import { inChargeService } from "@/services/InChargeService";
import { InChargeType } from "@/types";
import { useQuery } from "react-query";

const useInCharges = () => {
  return useQuery<InChargeType[]>("inCharges", inChargeService.getAll);
};

export { useInCharges };
