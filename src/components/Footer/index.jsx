import styles from "./style.module.scss";
import Image from "next/image";
import Rounded from "@/components/RoundedButton";
import { useRef } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import Magnetic from "@/components/Magnetic";
import { siteConfig } from "@/config/site-config";

export default function Footer() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  return (
    <motion.div style={{ y }} ref={container} className={styles.contact}>
      <div className={styles.body}>
        <div className={styles.title}>
          <span>
            <h2>Pa</h2>
            <Image src={"/logo.svg"} width={100} height={100} alt="PF"></Image>
            <h2>fully</h2>
          </span>
          <div className="ml-10 text-4xl">India&apos;s First Hybrid Cloud Printing Ecosystem</div>
          <motion.div style={{ x }} className={styles.buttonContainer}>
            <Rounded backgroundColor={"#334BD3"} className={styles.button}>
              <p>Get in touch</p>
            </Rounded>
          </motion.div>
          <motion.svg
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </div>
        <div className={styles.nav}>
          <Rounded>
            <p>info@example.com</p>
          </Rounded>
          <Rounded>
            <p>+91 123 456 7890</p>
          </Rounded>
        </div>
        <div className={styles.info}>
          <div>
            <Magnetic>
              <span>
                <p>© 2024 {siteConfig.name} Inc. All rights reserved.</p>
              </span>
            </Magnetic>

            <Magnetic>
              <span>
                <p>Terms of Service</p>
              </span>
            </Magnetic>
          </div>
          <div>
            <span>
              <h3>socials</h3>
              <Magnetic>
                <p>Instagram</p>
              </Magnetic>
            </span>
            <Magnetic>
              <p>Facebook</p>
            </Magnetic>
            <Magnetic>
              <p>Linkedin</p>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
