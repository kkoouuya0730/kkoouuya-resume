import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["avatars.githubusercontent.com"], // 外部ドメインを追加
    unoptimized: true, // 最適化を無効 静的エクスポートと相入れない
  },
  output: "export",
};

export default nextConfig;
