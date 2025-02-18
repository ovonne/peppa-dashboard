export type RouteType = {
  path: string;
  whenAuthenticated: "next" | "redirect";
};

export type RequestItemType = {
  image: string;
  name: string;
  price: string;
  date: string;
  status: string;
};

export type AdminType = {
  name: string;
  email: string;
  password: string;
};

export type InChargeType = {
  id?: number;
  name: string;
  email: string;
  location: string;
  status: string;
  contact: {
    first_number: string;
    second_number: string;
  };
  tenant_id: string;
};

export type TeacherType = {
  id: string;

  name: string;
  email: string;

  subject: string;
  location: string;
  daily: string;
  education_level: string;
  tenant_id: string;
  status: boolean;
  contact: string;
  about: string;
  avatar_url: string;
};

export type CreateTeacherDTO = Omit<
  TeacherType,
  "id" | "avatar_url" | "about" | "tenant_id"
>;

export type InstitutionType = {
  id: string;
  tenant_id: string;
  code: string;
  name: string;
  location: string;
  contact: number;
};

export type CreateInstitutionDTO = Omit<InstitutionType, "id" | "tenant_id">;

export interface ProductType {
  id: string;
  name: string;
  price: string;
  quantity: number;
  payment_reference: string;
  images: Record<string, any>;
  category: string;
  description: string;
  date_created: string;
}

export interface CreateProductDTO
  extends Omit<ProductType, "id" | "date_created"> {}
