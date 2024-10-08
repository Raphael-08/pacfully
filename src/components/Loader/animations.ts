import { gsap } from "gsap";

export const slideUp = {
  initial: {
      top: 0
  },
  exit: {
      top: "-100vh",
      transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 5.5}
  }
}

export const progressAnimation = (progressRef, progressNumberRef) => {
  const tl = gsap.timeline();

  tl.to(progressRef.current, {
    scaleX: 1,
    duration: 5,
    ease: "power3.inOut",
  })
    .to(
      progressNumberRef.current,
      {
        x: "100vw",
        duration: 5,
        ease: "power3.inOut",
      },
      "<"
    )
    .to(
      progressNumberRef.current,
      {
        textContent: "100",
        ease: "power3.inOut",
        duration: 5,
        roundProps: "textContent",
      },
      "<"
    )
    .to(progressNumberRef.current, {
      y: 24,
      autoAlpha: 0,
    });

  return tl;
};
