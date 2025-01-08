import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ?? "https://thementorship.tw";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dev-only*"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
