import { MetadataRoute } from "next";
import { MENTORSHIP_WEBSITE_URL } from "@/constants/contact-info";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? MENTORSHIP_WEBSITE_URL;

  return [
    {
      url: `${baseUrl}/`,
    },
    {
      url: `${baseUrl}/faq`,
    },
    {
      url: `${baseUrl}/program-rules`,
    },
    {
      url: `${baseUrl}/about/overview`,
    },
    {
      url: `${baseUrl}/about/philosophy`,
    },
    {
      url: `${baseUrl}/about/team`,
    },
  ];
}
