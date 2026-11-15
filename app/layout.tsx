import type { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME} - Making Noize`, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  icons: { icon: "/images/logo.png" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    images: [{ url: "/images/home.jpg", width: 1410, height: 600 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${lato.variable} antialiased`}>
      <body>
        <SiteHeader />
        <main className="pt-(--header-height)">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
