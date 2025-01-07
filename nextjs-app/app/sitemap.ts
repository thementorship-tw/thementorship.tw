import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ?? "https://thementorship.tw";

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
