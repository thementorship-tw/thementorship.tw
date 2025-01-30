import { MetadataRoute } from "next";
import { MENTORSHIP_WEBSITE_URL } from "@/constants/contact-info";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? MENTORSHIP_WEBSITE_URL;

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
