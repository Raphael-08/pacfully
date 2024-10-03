"use client";

import { cn } from "@/lib/utils";
import Preloader from "@/components/preloader/preloader";
import { SiteFooter } from "@/components/layouts/site-footer";
import { SiteHeader } from "@/components/layouts/site-header";
import { Provider } from "@/components/provider";
import { useState, useEffect } from "react";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5400);

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <html lang="en">
      <body
        className={cn(
          "flex min-h-screen flex-col scroll-smooth supports-[min-h-[100dvh]]:min-h-[100dvh] bg-background"
        )}
      >
        {isLoading ? (
          <Preloader />
        ) : (
          <Provider>
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </Provider>
        )}
      </body>
    </html>
  );
}
