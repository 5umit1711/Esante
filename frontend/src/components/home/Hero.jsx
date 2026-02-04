import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);

  // Track scroll progress relative to hero section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // IMAGE: zoom in → zoom out
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 0.9]);
  const imageOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  // TEXT: slide in → slide out
  const textLeftX = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textRightX = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // BUTTON
  const buttonY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const buttonOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[calc(100vh-120px)] w-full overflow-hidden"
    >
      {/* HERO IMAGE */}
      <motion.img
        src="/hero.png"
        alt="Migration support"
        style={{
          scale: imageScale,
          opacity: imageOpacity,
        }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white px-6 max-w-4xl">

          {/* TEXT LEFT */}
          <motion.h1
            style={{
              x: textLeftX,
              opacity: textOpacity,
            }}
            className="text-4xl md:text-6xl font-light leading-tight italic"
          >
            Migration simplified,
          </motion.h1>

          {/* TEXT RIGHT */}
          <motion.h1
            style={{
              x: textRightX,
              opacity: textOpacity,
            }}
            className="text-4xl md:text-6xl font-bold not-italic"
          >
            Dreams amplified.
          </motion.h1>

          {/* BUTTON */}
          <motion.div
            style={{
              y: buttonY,
              opacity: buttonOpacity,
            }}
            className="mt-10"
          >
            <button
              className="
                px-8 py-3
                border border-orange-500
                text-orange-500
                rounded-full
                transition-transform duration-200 ease-out
                hover:scale-105
                hover:bg-orange-500
                hover:text-white
              "
            >
              Book Free Call
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
