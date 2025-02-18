import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "github.com",
      "https://peppa-backend-production.up.railway.app",
      "res.cloudinary.com",
    ],
  },
};

export default nextConfig;
