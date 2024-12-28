import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ?? "https://thementorship.tw";

  return [
    {
      url: `${baseUrl}/`,
    },
    {
      url: `${baseUrl}/introduction`,
    },
    {
      url: `${baseUrl}/team`,
    },
    {
      url: `${baseUrl}/core-values`,
    },
    {
      url: `${baseUrl}/faq`,
    },
  ];
}
