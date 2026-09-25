/* eslint-disable */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  env: {
    // Matches the behavior of `sanity dev` which sets styled-components to use the fastest way of inserting CSS rules in both dev and production. It's default behavior is to disable it in dev mode.
    SC_DISABLE_SPEEDY: "false",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  // 技能交換平台是另一個 Vercel 專案，透過 rewrite 掛在 /exchange 底下，
  // 網址列維持 www.thementorship.tw/exchange/...
  // 交換平台那邊設定了 basePath: "/exchange"，所以轉過去時路徑要保留 /exchange
  async rewrites() {
    return [
      {
        source: "/exchange",
        destination: "https://thementorship-exchange-app.vercel.app/exchange",
      },
      {
        source: "/exchange/:path*",
        destination:
          "https://thementorship-exchange-app.vercel.app/exchange/:path*",
      },
    ];
  },
};

export default nextConfig;
