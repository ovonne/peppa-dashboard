import api from "@/services/api";

const adminService = {
  getAdmin: async () => {
    try {
      const response = await api.get("/accounts/admin/", {});

      return response.data.results[0];
    } catch (error: any) {
      throw new Error(error?.response?.data?.error);
    }
  },
};

export { adminService };
