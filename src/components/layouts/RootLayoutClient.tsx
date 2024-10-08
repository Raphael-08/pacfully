"use client";

import { cn } from "@/lib/utils";
import { SiteFooter } from "@/components/layouts/site-footer";
import { SiteHeader } from "@/components/layouts/site-header";
import { Provider } from "@/components/provider";
import Loader from "@/components/Loader";
import { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [timeline, setTimeline] = useState(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setLoaderFinished(true),
      });
      setTimeline(tl);
    });

    return () => context.revert();
  }, []);

  return (
    <html lang="en">
      <body
        className={cn(
          "flex min-h-screen flex-col scroll-smooth supports-[min-h-[100dvh]]:min-h-[100dvh] bg-background"
        )}
      >
        {!loaderFinished ? (
          <Loader timeline={timeline} />
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
