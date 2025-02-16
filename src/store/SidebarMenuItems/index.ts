import {
  BriefcaseBusiness,
  Home,
  Package,
  Settings,
  Shield,
  Users,
} from "lucide-react";

export const menuItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/in-charge", icon: BriefcaseBusiness, label: "In charge" },
  { href: "#", icon: Shield, label: "Security" },
  { href: "/products", icon: Package, label: "Products" },
  { href: "#", icon: Users, label: "Users" },
  { href: "#", icon: Settings, label: "Settings" },
];
