import { siteConfig } from "@/config/site-config";
import Balancer from "react-wrap-balancer";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-2xl flex-1 flex-col">

      <section className="flex flex-1 flex-col items-center justify-center gap-4">
        <h1
          className="animate-fade-up text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          style={{
            animationDelay: "0.25s",
            animationFillMode: "forwards",
          }}
        >
          <Balancer>
            <span className="text-muted-foreground">Pac</span> <span className="text-primary">fully</span>
          </Balancer>
        </h1>
        <div
          className="animate-fade-up text-center text-base text-muted-foreground sm:text-xl"
          style={{
            animationDelay: "0.35s",
            animationFillMode: "forwards",
          }}
        >
          <Balancer>{siteConfig.description}</Balancer>
        </div>
      </section>
    </main>
  );
}
