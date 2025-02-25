// import { inChargeService } from "@/services/InChargeService";
// import type { InChargeType } from "@/types";
// import { create } from "zustand";

// interface InChargeStore {
//   inCharge: string | null;
//   updateInCharge: (inChargeId: string) => Promise<void>;
//   removeInCharge: () => Promise<void>;
// }

// const useInChargeStore = create<InChargeStore>((set) => ({
//   inCharge: null,

//   updateInCharge: async (
//     id: string,
//     data: Partial<Omit<InChargeType, "id">>,
//   ) => {
//     await inChargeService.update(id, data);
//   },

//   removeInCharge: async (id: string) => {
//     await inChargeService.delete(id);
//   },
// }));

// export default useInChargeStore;
