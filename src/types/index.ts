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
  avatar_url: string;
  name: string;
  email: string;
  about: string;
  subject: string;
  location: string;
  daily: string;
  education_level: string;
  tenant_id: string;
  status: boolean;
  contact: string;
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
