import api from "@/services/api";
import { CreateProductDTO, ProductType } from "@/types";

const ENDPOINT = "/products/";

const productService = {
  getAll: async (): Promise<ProductType[]> => {
    try {
      const response = await api.get(ENDPOINT);
      return response.data;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.error || "Failed to fetch products",
      );
    }
  },

  getById: async (id: number): Promise<ProductType> => {
    try {
      const response = await api.get(`${ENDPOINT}${id}/`);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.error || "Failed to fetch product");
    }
  },

  create: async (data: FormData): Promise<CreateProductDTO> => {
    try {
      const response = await api.post(ENDPOINT, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.error || "Failed to create product",
      );
    }
  },

  update: async (
    id: number,
    data: Partial<Omit<ProductType, "id">>,
  ): Promise<ProductType> => {
    try {
      const response = await api.put(`${ENDPOINT}${id}/`, data);
      return response.data;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.error || "Failed to update product",
      );
    }
  },

  updatePartial: async (
    id: string,
    data: Partial<Omit<ProductType, "id">>,
  ): Promise<ProductType> => {
    try {
      const response = await api.patch(`${ENDPOINT}${id}/`, data);
      return response.data;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.error || "Failed to partially update product",
      );
    }
  },

  delete: async (id: string): Promise<void> => {
    try {
      await api.delete(`${ENDPOINT}${id}/`);
    } catch (error: any) {
      throw new Error(
        error.response?.data?.error || "Failed to delete product",
      );
    }
  },
};

export { productService };
