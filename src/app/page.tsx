"use client";

import { gsap } from "gsap";
import { Works } from "@/components/works";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import Landing from "@/components/Landing";
import Footer from "@/components/Footer";
import SlidingImages from "@/components/SlidingImages";

export default function Home() {
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [timeline, setTimeline] = useState(null);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      const context = gsap.context(() => {
        const tl = gsap.timeline({
          onComplete: () => {
            setLoaderFinished(true);
            window.scrollTo(0, 0);
            document.body.style.cursor = "default";
          },
        });
        setTimeline(tl);
      });

      return () => context.revert();
    })();
  }, []);
  return (
    <>
      <AnimatePresence mode="wait">
        {!loaderFinished && <Loader timeline={timeline} />}
      </AnimatePresence>
      <Landing />
      <SlidingImages />
      <Footer />
    </>
  );
}
