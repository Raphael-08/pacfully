import "./globals.css";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site-config";
import RootLayoutClient from "@/components/layouts/RootLayoutClient";

export const metadata: Metadata = {
  title: "Pacfully",
  description: "Packaging & Printing Solutions That Elevate Your Brand",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <RootLayoutClient>{children}</RootLayoutClient>;
}
