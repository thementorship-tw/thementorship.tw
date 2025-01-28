import "./globals.css";
import { EB_Garamond } from "next/font/google";
import FloatingButtons from "@/components/common/Button/FloatingButtons";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { METADATA } from "@/constants/metadata";
import type { Metadata } from "next";

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
        <section className="min-h-screen pt-[80px] md:pt-[88px] lg:pt-[94px]">
          <Header />
          <main className="">{children}</main>
          <FloatingButtons />
          <Footer />
        </section>
      </body>
    </html>
  );
}
