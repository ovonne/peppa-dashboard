import { inChargeService } from "@/services/InChargeService";
import { InChargeType } from "@/types";
import { useQuery } from "react-query";

const useInCharges = () => {
  return useQuery<InChargeType[]>("inCharges", inChargeService.getAll);
};
const useInChargeDetails = (id: string) => {
  return useQuery<InChargeType>(["inCharge", id], () =>
    inChargeService.getById(id),
  );
};

export { useInChargeDetails, useInCharges };
