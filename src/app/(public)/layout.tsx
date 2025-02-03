import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Peppa Dashboard | Authentication",
  description: "This is a dashboard of peppa application.",
};

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>public</h1>
      <div>{children}</div>
    </div>
  );
}
