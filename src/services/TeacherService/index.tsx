import api from "@/services/api";
import { CreateTeacherDTO, TeacherType } from "@/types";

const ENDPOINT = "/teachers/";

const teacherService = {
  getAll: async (): Promise<TeacherType[]> => {
    try {
      const response = await api.get(ENDPOINT);
      console.log(response.data);
      return response.data.results;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.error || "Failed to fetch teachers",
      );
    }
  },

  getById: async (id: number): Promise<TeacherType> => {
    try {
      const response = await api.get(`${ENDPOINT}${id}/`);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.error || "Failed to fetch teacher");
    }
  },

  create: async (data: CreateTeacherDTO): Promise<CreateTeacherDTO> => {
    try {
      const response = await api.post(ENDPOINT, data);
      return response.data;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.error || "Failed to create teacher",
      );
    }
  },

  update: async (
    id: number,
    data: Partial<Omit<TeacherType, "id">>,
  ): Promise<TeacherType> => {
    try {
      const response = await api.put(`${ENDPOINT}${id}/`, data);
      return response.data;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.error || "Failed to update teacher",
      );
    }
  },

  updatePartial: async (
    id: string,
    data: Partial<Omit<TeacherType, "id">>,
  ): Promise<TeacherType> => {
    try {
      const response = await api.patch(`${ENDPOINT}${id}/`, data);
      return response.data;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.error || "Failed to partially update teacher",
      );
    }
  },

  delete: async (id: string): Promise<void> => {
    try {
      await api.delete(`${ENDPOINT}${id}/`);
    } catch (error: any) {
      throw new Error(
        error.response?.data?.error || "Failed to delete teacher",
      );
    }
  },
};

export { teacherService };
