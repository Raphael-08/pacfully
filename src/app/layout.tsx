import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/layouts/site-footer";
import { SiteHeader } from "@/components/layouts/site-header";
import { siteConfig } from "@/config/site-config";
import { Provider } from "@/components/provider";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex min-h-screen flex-col scroll-smooth supports-[min-h-[100dvh]]:min-h-[100dvh] bg-background"
        )}
      >
        <Provider>
          <SiteHeader></SiteHeader>
          {children}
          <SiteFooter></SiteFooter>
        </Provider>
      </body>
    </html>
  );
}
