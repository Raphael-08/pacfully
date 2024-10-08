import { siteConfig } from "@/config/site-config";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { slideUp } from "@/components/Landing/animations";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";

export default function Loading() {
  return (
    <motion.main
      variants={slideUp}
      initial="initial"
      animate="enter"
      className="grid items-center justify-items-center min-h-screen"
    >
      <section className="grid grid-cols-2 h-full w-full p-20">
        <div className="flex items-center justify-end p-10">
          <NeonGradientCard className="max-w-lg h-1/3 items-center justify-center text-center">
            <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br grid items-center from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              Animated Product
            </span>
          </NeonGradientCard>
        </div>
        <div className="flex flex-col items-start justify-center text-white p-10">
          <h1
            className="animate-fade-up text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            style={{
              animationDelay: "0.25s",
              animationFillMode: "forwards",
            }}
          >
            <Balancer>India&apos;s First</Balancer>
          </h1>
          <div
            className="animate-fade-up text-center text-base text-muted-foreground sm:text-2xl pl-56"
            style={{
              animationDelay: "0.35s",
              animationFillMode: "forwards",
            }}
          >
            <Balancer>Hybrid Cloud Printing Ecosystem</Balancer>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
