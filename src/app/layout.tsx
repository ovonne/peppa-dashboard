import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Peppa | Dashboard",
  description: "This is a dashboard of peppa application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
