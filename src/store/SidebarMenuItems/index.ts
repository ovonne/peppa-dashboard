import {
  BriefcaseBusiness,
  GraduationCap,
  Home,
  LockKeyholeOpen,
  Package,
  School,
  Users,
} from "lucide-react";

export const menuItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/in-charge", icon: BriefcaseBusiness, label: "In charge" },
  { href: "/teachers", icon: GraduationCap, label: "Teacher" },
  { href: "/products", icon: Package, label: "Products" },
  { href: "/permissions", icon: LockKeyholeOpen, label: "Permissions" },
  { href: "/users", icon: Users, label: "Users" },
  { href: "/institutions", icon: School, label: "Institutions" },
];
