import "./globals.css";
import { EB_Garamond } from "next/font/google";
// import FloatingButtons from "@/components/common/Button/FloatingButtons";
import { draftMode } from "next/headers";
import { VisualEditing, toPlainText } from "next-sanity";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { MENTORSHIP_WEBSITE_URL } from "@/constants/contact-info";
import { METADATA } from "@/constants/metadata";
import { CSPostHogProvider } from "@/providers/CSPostHogProvider";

import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { settingsQuery } from "@/sanity/lib/queries";
import { handleError } from "@/sanity/lib/client-utils";

import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const { data: settings } = await sanityFetch({
    query: settingsQuery,
    stega: false,
  });

  const title = settings?.title ?? METADATA.projectName;
  const description = settings?.description
    ? toPlainText(settings.description)
    : METADATA.projectDescription;
  const metadataBase = new URL(
    process.env.NEXT_PUBLIC_BASE_URL ?? MENTORSHIP_WEBSITE_URL
  );

  return {
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: description,
    metadataBase,
    icons: {
      icon: [
        { url: "/favicon.ico", type: "image/x-icon" },
        { url: "/images/favicon.png", type: "image/png", sizes: "48x48" },
      ],
    },
  };
}

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
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <html
      lang="en"
      className={`font-sans ${ebGaramond.variable} bg-white text-black`}
    >
      <head>
        <link rel="preconnect" href="https://posthog.com" crossOrigin="" />
        <link
          rel="preconnect"
          href="https://us-assets.i.posthog.com"
          crossOrigin=""
        />
      </head>
      <body>
        <CSPostHogProvider>
          {isDraftMode && <VisualEditing />}
          <SanityLive onError={handleError} />

          <section className="min-h-screen pt-[80px] md:pt-[88px] lg:pt-[94px]">
            <Header />
            <main className="">{children}</main>
            {/* <div className="hidden lg:block">
              <FloatingButtons />
            </div> */}
            <Footer />
          </section>
        </CSPostHogProvider>
      </body>
    </html>
  );
}
