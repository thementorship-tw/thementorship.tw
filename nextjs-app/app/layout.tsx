import "./globals.css";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { EB_Garamond } from "next/font/google";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { METADATA } from "@/constants/metadata";

export const metadata: Metadata = {
  title: {
    default: METADATA.projectName,
    template: `%s - ${METADATA.projectName}`,
  },
  description: METADATA.projectDescription,
};

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-eb-garamond",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`font-sans ${ebGaramond.variable} bg-white text-black`}
    >
      <body>
        <section className="min-h-screen pt-[80px] md:pt-[94px]">
          <Header />
          <main className="">{children}</main>
          <Footer />
        </section>
        <SpeedInsights />
      </body>
    </html>
  );
}
