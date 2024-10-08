"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SimpleLoading from "@/components/Loader/loading-animation";
import { progressAnimation, slideUp } from "@/components/Loader/animations";

const Loader = ({ timeline }) => {
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const progressNumberRef = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    timeline && timeline.add(progressAnimation(progressRef, progressNumberRef));
  }, [timeline]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 5.5 },
    },
  };

  return (
    <>
      <motion.div
        variants={slideUp}
        initial="initial"
        exit="exit"
        className="fixed inset-0 w-full h-full z-10 pointer-events-none"
      >
        {dimension.width > 0 && (
          <svg className="absolute top-0 left-0 w-full h-[calc(100%+300px)]">
            <motion.path
              fill="white"
              variants={curve}
              initial="initial"
              exit="exit"
            />
          </svg>
        )}
      </motion.div>
      <motion.div
        variants={slideUp}
        initial="initial"
        exit="exit"
        className="fixed w-full h-full flex items-center justify-center bg-black z-10"
      >
        <div className="absolute bottom-0 left-0 w-full h-[5vh] z-20">
          <div
            ref={progressRef}
            className="h-full w-full bg-white transform scale-x-0 origin-left"
          ></div>
          <span
            ref={progressNumberRef}
            className="absolute left-[-4vw] top-1/2 transform -translate-y-1/2 z-30 text-black text-3xl whitespace-nowrap"
          >
            0
          </span>
        </div>
        <div
          ref={loaderRef}
          className="relative overflow-hidden flex flex-col items-center justify-center w-1/2 h-1/2 z-20"
        >
          <SimpleLoading />
        </div>
      </motion.div>
    </>
  );
};

export default Loader;
