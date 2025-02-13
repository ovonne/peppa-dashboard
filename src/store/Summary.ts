import { ClipboardList, FileText, Home, ShoppingCart } from "lucide-react";

export const summaryData = [
  {
    id: 1,
    title: "Total",
    icon: Home,
    items: [
      { title: "Sales", value: "KZ 0.00", percentage: 0.0 },
      { title: "Volume", value: "0" },
    ],
  },
  {
    id: 2,
    title: "School Supplies",
    icon: ShoppingCart,
    items: [
      { title: "Sales", value: "KZ 0.00", percentage: 0.0 },
      { title: "Volume", value: "0" },
    ],
  },
  {
    id: 3,
    title: "Exam Sheets",
    icon: FileText,
    items: [
      { title: "Sales", value: "KZ 0.00", percentage: 0.0 },
      { title: "Volume", value: "0" },
    ],
  },
  {
    id: 4,
    title: "Exam Booklets",
    icon: ClipboardList,
    items: [
      { title: "Sales", value: "KZ 0.00", percentage: 0.0 },
      { title: "Volume", value: "0" },
    ],
  },
];
