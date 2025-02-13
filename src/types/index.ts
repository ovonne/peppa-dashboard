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
