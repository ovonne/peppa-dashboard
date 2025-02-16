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
  status: string;
  contact: number;
};

export type CreateTeacherDTO = Omit<
  TeacherType,
  "id" | "avatar_url" | "about" | "tenant_id"
>;
