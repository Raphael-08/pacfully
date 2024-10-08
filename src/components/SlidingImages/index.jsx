import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import styles from "./style.module.scss";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import Image from "next/image";

const slider1 = [
  {
    color: "#e3e5e7",
    src: "brochure1.png",
  },
  {
    color: "#d6d7dc",
    src: "business1.png",
  },
  {
    color: "#e3e3e3",
    src: "business2.png",
  },
  {
    color: "#21242b",
    src: "flyer1.png",
  },
];

const slider2 = [
  {
    color: "#d4e3ec",
    src: "global1.png",
  },
  {
    color: "#e5e0e1",
    src: "packing1.png",
  },
  {
    color: "#d7d4cf",
    src: "packing2.png",
  },
  {
    color: "#e1dad6",
    src: "packing3.png",
  },
];

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={container} className={cn(styles.slidingImages, "h-screen")}>
      <div className="p-4">
        <AnimatedGradientText>
          <span className="inline animate-gradient text-4xl bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
            Our Works
          </span>
        </AnimatedGradientText>
      </div>
      <motion.div style={{ x: x1 }} className={styles.slider}>
        {slider1.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              <div className={styles.imageContainer}>
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/images/${project.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ x: x2 }} className={styles.slider}>
        {slider2.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              <div key={index} className={styles.imageContainer}>
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/images/${project.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </div>
  );
}
