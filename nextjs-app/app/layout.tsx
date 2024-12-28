import "./globals.css";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { METADATA } from "@/constants/metadata";

export const metadata: Metadata = {
  title: {
    default: METADATA.projectName,
    template: `%s - ${METADATA.projectName}`,
  },
  description: METADATA.projectDescription,
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} bg-white text-black`}>
      <body>
        <section className="min-h-screen pt-24">
          <Header />
          <main className="">{children}</main>
          <Footer />
        </section>
        <SpeedInsights />
      </body>
    </html>
  );
}
