import type { Metadata } from "next";
import { METADATA } from "@/constants/metadata";

export const metadata: Metadata = {
  title: `首頁 - ${METADATA.projectName}`,
};

export default async function HomePage() {
  return (
    <div className="container py-[60px]">
      <h1 className="text-h2">Home Page</h1>
    </div>
  );
}
