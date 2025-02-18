import api from "@/services/api";
import { CreateInstitutionDTO, InstitutionType } from "@/types";

const ENDPOINT = "/institutions/";

const institutionService = {
  getAll: async (): Promise<InstitutionType[]> => {
    try {
      const response = await api.get(ENDPOINT);
      return response.data.results;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.error || "Failed to fetch institutions",
      );
    }
  },

  getById: async (id: number): Promise<InstitutionType> => {
    try {
      const response = await api.get(`${ENDPOINT}${id}/`);
      return response.data;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.error || "Failed to fetch institution",
      );
    }
  },

  create: async (data: CreateInstitutionDTO): Promise<CreateInstitutionDTO> => {
    try {
      const response = await api.post(ENDPOINT, data);
      return response.data;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.error || "Failed to create institution",
      );
    }
  },

  update: async (
    id: number,
    data: Partial<Omit<InstitutionType, "id">>,
  ): Promise<InstitutionType> => {
    try {
      const response = await api.put(`${ENDPOINT}${id}/`, data);
      return response.data;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.error || "Failed to update institution",
      );
    }
  },

  updatePartial: async (
    id: string,
    data: Partial<Omit<InstitutionType, "id">>,
  ): Promise<InstitutionType> => {
    try {
      const response = await api.patch(`${ENDPOINT}${id}/`, data);
      return response.data;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.error || "Failed to partially update institution",
      );
    }
  },

  delete: async (id: string): Promise<void> => {
    try {
      await api.delete(`${ENDPOINT}${id}/`);
    } catch (error: any) {
      throw new Error(
        error.response?.data?.error || "Failed to delete institution",
      );
    }
  },
};

export { institutionService };
