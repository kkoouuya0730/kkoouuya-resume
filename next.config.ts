import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["avatars.githubusercontent.com"], // 外部ドメインを追加
  },
};

export default nextConfig;
