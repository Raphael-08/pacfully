"use client";

import { useEffect, useRef } from "react";

const SvgPathScrollAnimation = () => {
  const pathRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const path = pathRef.current;
      const circle = circleRef.current;

      if (path && circle) {
        const pathLength = path.getTotalLength();
        const scrollPercentage =
          window.scrollY / (document.body.scrollHeight - window.innerHeight);
        const point = path.getPointAtLength(scrollPercentage * pathLength);

        circle.setAttribute("cx", point.x);
        circle.setAttribute("cy", point.y);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-64 w-64">
      <svg width="800" height="600" viewBox="0 0 800 600">
        <path
          ref={pathRef}
          id="myPath"
          fill="none"
          stroke="red"
          d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
        />
        <circle ref={circleRef} cx="10" cy="80" r="5" fill="blue" />
      </svg>
    </div>
  );
};

export default SvgPathScrollAnimation;
