"use client";
import "./globals.css";

import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="text-darkGray">
      <QueryClientProvider client={queryClient}>
        <body>
          <Toaster position="top-right" reverseOrder={false} />
          {children}
        </body>
      </QueryClientProvider>
    </html>
  );
}
