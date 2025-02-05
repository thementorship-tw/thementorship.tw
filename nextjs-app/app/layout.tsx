import "./globals.css";
import { EB_Garamond } from "next/font/google";
// import FloatingButtons from "@/components/common/Button/FloatingButtons";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { MENTORSHIP_WEBSITE_URL } from "@/constants/contact-info";
import { METADATA } from "@/constants/metadata";
import { CSPostHogProvider } from "@/providers/CSPostHogProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: METADATA.projectName,
    template: `%s｜${METADATA.projectName}`,
  },
  description: METADATA.projectDescription,
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL ?? MENTORSHIP_WEBSITE_URL
  ),
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/images/favicon.png", type: "image/png", sizes: "48x48" },
    ],
  },
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
        <CSPostHogProvider>
          <section className="min-h-screen pt-[80px] md:pt-[88px] lg:pt-[94px]">
            <Header />
            <main className="">{children}</main>
            {/* TODO: enable floating buttons when the registration is open */}
            {/* <FloatingButtons /> */}
            <Footer />
          </section>
        </CSPostHogProvider>
      </body>
    </html>
  );
}
