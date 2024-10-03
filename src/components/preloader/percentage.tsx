"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Percentage = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    
      <motion.div
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-br from-teal-400 via-blue-500 to-purple-800">
          {progress}
        </span>
      </motion.div>
    </>
  );
};

export default Percentage;
