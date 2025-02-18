import { institutionService } from "@/services/InstitutionService";
import type { InstitutionType } from "@/types";
import { useQuery } from "react-query";

const useInstitutions = () => {
  return useQuery<InstitutionType[]>("institutions", institutionService.getAll);
};

export { useInstitutions };
