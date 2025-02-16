import api from "@/services/api";
import { InChargeType } from "@/types";

const ENDPOINT = "/responsibles/";

const inChargeService = {
  getAll: async (): Promise<InChargeType[]> => {
    try {
      const response = await api.get(ENDPOINT);
      console.log(response.data.results);
      return response.data.results;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.error || "Failed to fetch In charge",
      );
    }
  },

  getById: async (id: number): Promise<InChargeType> => {
    try {
      const response = await api.get(`${ENDPOINT}${id}/`);
      return response.data;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.error || "Failed to fetch in charge",
      );
    }
  },

  create: async (data: Omit<InChargeType, "id">): Promise<InChargeType> => {
    try {
      const response = await api.post(ENDPOINT, data);
      return response.data;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.error || "Failed to create in charge",
      );
    }
  },

  update: async (
    id: number,
    data: Partial<Omit<InChargeType, "id">>,
  ): Promise<InChargeType> => {
    try {
      const response = await api.put(`${ENDPOINT}${id}/`, data);
      return response.data;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.error || "Failed to update n charge",
      );
    }
  },

  delete: async (id: number): Promise<void> => {
    try {
      await api.delete(`${ENDPOINT}${id}/`);
    } catch (error: any) {
      throw new Error(
        error.response?.data?.error || "Failed to delete n charge",
      );
    }
  },
};

export { inChargeService };
