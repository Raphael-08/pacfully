import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/components/provider";
import { SiteHeader } from "@/components/layouts/site-header";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site-config";

export const metadata: Metadata = {
  title: "Pacfully",
  description:
    "Packaging & Printing Solutions That Elevate Your Brand",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    url: siteConfig.url,
    locale: "en_IN",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
